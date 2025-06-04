import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  DocumentData,
  Timestamp,
  setDoc,
  enableIndexedDbPersistence,
  writeBatch
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Define types for blog posts and portfolio projects
export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  image?: string;
  category?: string;
  tags?: string[];
  createdAt: any; // Timestamp | Date | string
  updatedAt?: any; // Timestamp | Date | string
}

export interface PortfolioProject {
  id?: string;
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  link?: string;
  category?: string;
  featured?: boolean;
  createdAt: any; // Timestamp | Date | string
  updatedAt?: any; // Timestamp | Date | string
}

// 환경 변수에서 Firebase 설정 불러오기 (Vite 방식, 실제값 그대로)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBD7_roMn5sLR-yyyDYQLjEUw5gCRQS9yc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "my-portfolio-2ea55.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://my-portfolio-2ea55-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "my-portfolio-2ea55",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "my-portfolio-2ea55.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "292379709314",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:292379709314:web:1b9e8dd734233c4251899b",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-BJ42JE7LGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
try {
  analytics = getAnalytics(app);
} catch (error) {
  console.warn('Analytics initialization error:', error);
  analytics = null;
}
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// 인증 상태 유지 설정 - 로컬 스토리지에 인증 정보 저장
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Auth persistence set to LOCAL');
  })
  .catch((error) => {
    console.error('Error setting auth persistence:', error);
  });

// 오프라인 데이터 지원 활성화 - 에러 처리 개선
try {
  enableIndexedDbPersistence(db)
    .then(() => {
      console.log('Firestore persistence enabled');
    })
    .catch((error) => {
      if (error.code === 'failed-precondition') {
        // 다중 탭 열린 경우 등
        console.warn('Firestore persistence could not be enabled: Multiple tabs open');
      } else if (error.code === 'unimplemented') {
        // 브라우저 미지원
        console.warn('Firestore persistence not supported by this browser');
      } else {
        console.error('Error enabling Firestore persistence:', error);
      }
    });
} catch (error) {
  console.warn('Failed to initialize Firestore persistence:', error);
}

// 환경 변수에서 관리자 정보 불러오기
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
const ADMIN_UID = import.meta.env.VITE_ADMIN_UID;
const SPECIAL_ADMIN_EMAIL = import.meta.env.VITE_SPECIAL_ADMIN_EMAIL;
const SPECIAL_ADMIN_UID = import.meta.env.VITE_SPECIAL_ADMIN_UID;
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

// Function to check if a user is an admin - 캐싱 추가
const adminCache = new Map<string, boolean>();

const isAdmin = async (uid: string): Promise<boolean> => {
  console.log('isAdmin 함수 호출됨 - UID:', uid);
  
  // 환경 변수 기반 특별 관리자 체크
  if (uid === SPECIAL_ADMIN_UID) {
    console.log('특별 관리자 UID 감지됨. 관리자 권한 부여.');
    
    // 관리자 문서가 없으면 자동으로 생성
    try {
      const adminDocRef = doc(db, "admins", uid);
      const adminDoc = await getDoc(adminDocRef);
      
      if (!adminDoc.exists()) {
        console.log('특별 관리자 문서가 없음, 자동 생성 중...');
        await setDoc(adminDocRef, {
          email: SPECIAL_ADMIN_EMAIL,
          role: 'admin',
          createdAt: new Date().toISOString(),
          special: true // 특별 관리자 표시
        });
        console.log('특별 관리자 문서 생성 완료');
      }
    } catch (error) {
      console.error('특별 관리자 문서 확인/생성 오류:', error);
    }
    
    adminCache.set(uid, true);
    return true;
  }
  
  // 캐시된 결과가 있으면 반환
  if (adminCache.has(uid)) {
    const cachedResult = adminCache.get(uid) || false;
    console.log('관리자 캐시 결과:', cachedResult);
    return cachedResult;
  }
  
  try {
    console.log(`Firestore에서 관리자 문서 확인 - admins/${uid}`);
    const adminDoc = await getDoc(doc(db, "admins", uid));
    const result = adminDoc.exists();
    
    console.log('관리자 문서 존재 여부:', result);
    if (result) {
      console.log('관리자 문서 데이터:', adminDoc.data());
    }
    
    // 결과를 캐시에 저장
    adminCache.set(uid, result);
    
    return result;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};

// Function to set up admin user
const setupAdminUser = async () => {
  try {
    // Check if admin document already exists
    const adminDoc = await getDoc(doc(db, "admins", ADMIN_UID));
    
    if (!adminDoc.exists()) {
      // Create admin user if not exists
      await setDoc(doc(db, "admins", ADMIN_UID), {
        email: ADMIN_EMAIL,
        role: "admin",
        createdAt: new Date().toISOString()
      });
      
      console.log("Admin user created successfully");
    }
  } catch (error) {
    console.error("Error setting up admin user:", error);
  }
};

// 구글 로그인 후 관리자 설정 함수
const setGoogleUserAsAdmin = async (user: User): Promise<boolean> => {
  if (!user) return false;
  
  try {
    // admins 컬렉션에 해당 사용자의 UID로 문서 생성
    await setDoc(doc(db, "admins", user.uid), {
      email: user.email,
      role: "admin",
      createdAt: new Date().toISOString(),
      photoURL: user.photoURL || null,
      displayName: user.displayName || null
    });
    
    // 캐시 업데이트
    adminCache.set(user.uid, true);
    
    console.log("Google user set as admin successfully");
    return true;
  } catch (error) {
    console.error("Error setting Google user as admin:", error);
    return false;
  }
};

// Function to create a blog post
const createBlogPost = async (postData: {
  title: string;
  content: string;
  category?: string;
  tags?: string[];
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
}, imageFile?: File) => {
  try {
    // Firestore 트랜잭션 성능 최적화
    const batch = writeBatch(db);
    
    // 새 문서 참조 생성
    const docRef = doc(collection(db, "blogPosts"));
    const postId = docRef.id;
    
    // 기본 데이터 준비 (이미지 URL은 나중에 업데이트)
    const data = {
      ...postData,
      createdAt: postData.createdAt || serverTimestamp(),
      updatedAt: postData.updatedAt || serverTimestamp(),
      tags: postData.tags || []
    };
    
    // 배치에 추가
    batch.set(docRef, data);
    
    // 배치 실행 - 단일 요청으로 처리
    await batch.commit();
    
    // 이미지가 있으면 Storage에 업로드 후 URL 업데이트
    if (imageFile) {
      console.log('이미지 업로드 시작:', postId, imageFile.name);
      // 새 규칙에 맞는 경로 사용: images/blog/{postId}/{filename}
      const storageRef = ref(storage, `images/blog/${postId}/${Date.now()}_${imageFile.name}`);
      console.log('스토리지 경로:', storageRef.fullPath);
      
      uploadBytes(storageRef, imageFile)
        .then(snapshot => {
          console.log('이미지 업로드 성공:', snapshot.ref.fullPath);
          return getDownloadURL(snapshot.ref);
        })
        .then(downloadURL => {
          console.log('이미지 URL 획득:', downloadURL);
          // 이미지 URL 획득 후 문서 업데이트
          updateDoc(doc(db, "blogPosts", postId), {
            image: downloadURL,
          }).then(() => {
            console.log('Firestore 문서 이미지 URL 업데이트 성공');
          }).catch(error => {
            console.error("Error updating image URL:", error);
          });
        })
        .catch(error => {
          console.error("Image upload error:", error);
        });
    }
    
    return postId;
  } catch (error) {
    console.error("Error creating blog post:", error);
    throw error;
  }
};

// Function to update a blog post
const updateBlogPost = async (postId: string, data: any, imageFile?: File) => {
  try {
    // 필수 필드만 업데이트하기 위한 데이터 정리
    const updateFields = { ...data, updatedAt: serverTimestamp() };
    
    // 직접 업데이트 대신 멀티 업데이트를 위한 배치 사용
    const batch = writeBatch(db);
    const postRef = doc(db, "blogPosts", postId);
    
    batch.update(postRef, updateFields);
    await batch.commit();
    
    // 이미지 파일이 있으면 업로드 및 URL 업데이트
    if (imageFile) {
      console.log('이미지 업로드 시작:', postId, imageFile.name);
      // 새 규칙에 맞는 경로 사용: images/blog/{postId}/{filename}
      const storageRef = ref(storage, `images/blog/${postId}/${Date.now()}_${imageFile.name}`);
      console.log('스토리지 경로:', storageRef.fullPath);
      
      uploadBytes(storageRef, imageFile)
        .then(snapshot => {
          console.log('이미지 업로드 성공:', snapshot.ref.fullPath);
          return getDownloadURL(snapshot.ref);
        })
        .then(downloadURL => {
          console.log('이미지 URL 획득:', downloadURL);
          // 이미지 URL 획득 후 문서 업데이트
          updateDoc(doc(db, "blogPosts", postId), {
            image: downloadURL,
          }).then(() => {
            console.log('Firestore 문서 이미지 URL 업데이트 성공');
          }).catch(error => {
            console.error("Error updating image URL:", error);
          });
        })
        .catch(error => {
          console.error("Image upload error:", error);
        });
    }
    
    return true;
  } catch (error) {
    console.error("Error updating blog post:", error);
    throw error;
  }
};

// Function to delete a blog post
const deleteBlogPost = async (postId: string) => {
  try {
    await deleteDoc(doc(db, "blogPosts", postId));
    return true;
  } catch (error) {
    console.error("Error deleting blog post:", error);
    throw error;
  }
};

// Function to create a portfolio project
const createPortfolioProject = async (projectData: {
  title: string;
  description: string;
  category?: string;
  technologies?: string[];
  imageUrl?: string;
  link?: string;
  featured?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}, imageFile?: File) => {
  try {
    let imageUrl = projectData.imageUrl || "";
    
    // 이미지 없이 먼저 데이터 저장 (병렬 처리를 위해)
    const data = {
      ...projectData,
      imageUrl,
      technologies: projectData.technologies || [],
      featured: projectData.featured || false,
      createdAt: projectData.createdAt || new Date().toISOString(),
      updatedAt: projectData.updatedAt || new Date().toISOString()
    };
    
    // 1. 먼저 프로젝트 생성 - 이미지는 나중에 업데이트
    const docRef = await addDoc(collection(db, "portfolioProjects"), data);
    const projectId = docRef.id;
    
    // 2. 이미지가 있는 경우 병렬로 업로드 후 URL 업데이트
    if (imageFile) {
      // 이미지 크기 최적화 (File → Blob 변환하여 압축)
      const optimizedImagePromise = new Promise<string>((resolve, reject) => {
        try {
          console.log('포트폴리오 이미지 업로드 시작:', projectId, imageFile.name);
          // 새 규칙에 맞는 경로 사용: images/portfolio/{projectId}/{filename}
          const storageRef = ref(storage, `images/portfolio/${projectId}/${Date.now()}_${imageFile.name}`);
          console.log('포트폴리오 스토리지 경로:', storageRef.fullPath);
          // 이미지 업로드
          uploadBytes(storageRef, imageFile)
            .then(snapshot => {
              console.log('포트폴리오 이미지 업로드 성공:', snapshot.ref.fullPath);
              return getDownloadURL(snapshot.ref);
            })
            .then(downloadURL => {
              console.log('포트폴리오 이미지 URL 획득:', downloadURL);
              // 이미지 URL 획득 후 프로젝트 업데이트
              updateDoc(doc(db, "portfolioProjects", projectId), {
                imageUrl: downloadURL,
              }).then(() => {
                console.log('포트폴리오 문서 이미지 URL 업데이트 성공');
              }).catch(error => {
                console.error("포트폴리오 이미지 URL 업데이트 오류:", error);
              });
              resolve(downloadURL);
            })
            .catch(error => {
              console.error("포트폴리오 이미지 업로드 오류:", error);
              reject(error);
            });
        } catch (error) {
          reject(error);
        }
      });
      
      // 비동기로 처리하고 프로젝트 ID 즉시 반환
      optimizedImagePromise.catch(error => 
        console.error("Error in background image processing:", error)
      );
    }
    
    return projectId;
  } catch (error) {
    console.error("Error creating portfolio project:", error);
    throw error;
  }
};

// Function to update a portfolio project
const updatePortfolioProject = async (projectId: string, data: any, imageFile?: File) => {
  try {
    const updateData = { ...data, updatedAt: new Date().toISOString() };
    
    // 1. 먼저 데이터 업데이트
    const projectRef = doc(db, "portfolioProjects", projectId);
    await updateDoc(projectRef, updateData);
    
    // 2. 이미지가 있으면 병렬로 처리
    if (imageFile) {
      console.log('포트폴리오 업데이트 - 이미지 업로드 시작:', projectId, imageFile.name);
      // 백그라운드에서 이미지 업로드 및 URL 업데이트
      // 새 규칙에 맞는 경로 사용: images/portfolio/{projectId}/{filename}
      const storageRef = ref(storage, `images/portfolio/${projectId}/${Date.now()}_${imageFile.name}`);
      console.log('포트폴리오 업데이트 - 스토리지 경로:', storageRef.fullPath);
      uploadBytes(storageRef, imageFile)
        .then(snapshot => {
          console.log('포트폴리오 업데이트 - 이미지 업로드 성공:', snapshot.ref.fullPath);
          return getDownloadURL(snapshot.ref);
        })
        .then(downloadURL => {
          console.log('포트폴리오 업데이트 - 이미지 URL 획득:', downloadURL);
          // 이미지 URL 획득 후 프로젝트 업데이트
          updateDoc(doc(db, "portfolioProjects", projectId), {
            imageUrl: downloadURL,
          }).then(() => {
            console.log('포트폴리오 업데이트 - 문서 이미지 URL 업데이트 성공');
          }).catch(error => {
            console.error("포트폴리오 업데이트 - 이미지 URL 업데이트 오류:", error);
          });
        })
        .catch(error => {
          console.error("포트폴리오 업데이트 - 이미지 업로드 오류:", error);
        });
    }
    
    return true;
  } catch (error) {
    console.error("Error updating portfolio project:", error);
    throw error;
  }
};

// Function to delete a portfolio project
const deletePortfolioProject = async (projectId: string) => {
  try {
    await deleteDoc(doc(db, "portfolioProjects", projectId));
    return true;
  } catch (error) {
    console.error("Error deleting portfolio project:", error);
    throw error;
  }
};

// 앱 시작 시 특별 관리자 계정 설정 확인
const checkAndSetupSpecialAdmin = async () => {
  try {
    console.log('특별 관리자 계정 설정 확인 중...');
    const specialAdminId = 'KtZLKuzl56QzPLiFVRVfovWVapz2';
    const adminDocRef = doc(db, "admins", specialAdminId);
    const adminDoc = await getDoc(adminDocRef);
    
    if (!adminDoc.exists()) {
      console.log('특별 관리자 문서가 없음, 생성 중...');
      await setDoc(adminDocRef, {
        email: 'vavfapi032@gmail.com',
        role: 'admin',
        createdAt: new Date().toISOString(),
        special: true // 특별 관리자 표시
      });
      console.log('특별 관리자 문서 생성 완료');
      return true;
    } else {
      console.log('특별 관리자 문서가 이미 존재함', adminDoc.data());
      return true;
    }
  } catch (error) {
    console.error('특별 관리자 계정 설정 오류:', error);
    return false;
  }
};

// 앱 시작 시 호출
checkAndSetupSpecialAdmin().then(result => {
  console.log('특별 관리자 계정 설정 결과:', result);
});

// Initialize admin user and specific admin user
console.log("Firebase 앱 초기화 완료. 관리자 사용자 설정 중...");
setupAdminUser();

const extractFileName = (imageUrl: string): string => {
  try {
    // URL에서 경로 부분 추출
    const pathParts = new URL(imageUrl).pathname.split('/');
    // 마지막 부분이 파일명
    const fileName = pathParts[pathParts.length - 1];
    // 타임스탬프 제거 (타임스탬프_파일명.확장자 형식 가정)
    return fileName.substring(fileName.indexOf('_') + 1);
  } catch (error) {
    return '파일명 추출 실패';
  }
};

// 여러 장의 블로그 본문 이미지를 업로드하고 URL 배열을 반환
export const uploadBlogContentImages = async (files: File[], postId: string): Promise<string[]> => {
  const urls: string[] = [];
  for (const file of files) {
    const storageRef = ref(storage, `images/blog/${postId}/content_${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    urls.push(url);
  }
  return urls;
};

export { 
  app, 
  auth, 
  db, 
  storage,
  analytics,
  isAdmin, 
  ADMIN_EMAIL, 
  ADMIN_PASSWORD,
  setGoogleUserAsAdmin,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  createPortfolioProject,
  updatePortfolioProject,
  deletePortfolioProject,
  extractFileName
}; 