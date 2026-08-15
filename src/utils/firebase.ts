import { initializeApp } from 'firebase/app';
import {
  getAuth,
  User,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  setDoc,
  enableIndexedDbPersistence,
  type Timestamp
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject, type StorageReference } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

export type ContentDate = Timestamp | Date | string | number | { seconds: number };

// Define types for blog posts and portfolio projects
export interface BlogPost {
  id?: string;
  title: string;
  content: string;
  image?: string;
  category?: string;
  tags?: string[];
  createdAt: ContentDate;
  updatedAt?: ContentDate;
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
  createdAt: ContentDate;
  updatedAt?: ContentDate;
}

const firebaseProjectId = import.meta.env.VITE_FIREBASE_PROJECT_ID || "my-portfolio-2ea55";

// 환경 변수에서 Firebase 설정 불러오기 (Vite 방식, 실제값 그대로)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBD7_roMn5sLR-yyyDYQLjEUw5gCRQS9yc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || `${firebaseProjectId}.firebaseapp.com`,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://my-portfolio-2ea55-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: firebaseProjectId,
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

const uploadImageAndGetUrl = async (path: string, imageFile: File): Promise<{
  downloadURL: string;
  storageRef: StorageReference;
}> => {
  const storageRef = ref(storage, path);
  console.log('이미지 업로드 시작:', storageRef.fullPath, imageFile.name);
  const snapshot = await uploadBytes(storageRef, imageFile);
  console.log('이미지 업로드 성공:', snapshot.ref.fullPath);
  const downloadURL = await getDownloadURL(snapshot.ref);
  console.log('이미지 URL 획득:', downloadURL);

  return {
    downloadURL,
    storageRef: snapshot.ref,
  };
};

const cleanupUploadedImage = async (storageRef: StorageReference | null) => {
  if (!storageRef) {
    return;
  }

  try {
    await deleteObject(storageRef);
    console.log('업로드된 이미지 롤백 완료:', storageRef.fullPath);
  } catch (cleanupError) {
    console.error('업로드된 이미지 롤백 실패:', cleanupError);
  }
};

const removeUndefinedFields = <T extends object>(data: T): T => {
  return Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined)
  ) as T;
};

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
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const BOOTSTRAP_ADMIN_UID = 'KtZLKuzl56QzPLiFVRVfovWVapz2';

// Function to check if a user is an admin - 캐싱 추가
const adminCache = new Map<string, boolean>();

const ensureBootstrapAdminDocument = async (): Promise<void> => {
  const currentUser = auth.currentUser;

  if (!currentUser || currentUser.uid !== BOOTSTRAP_ADMIN_UID) {
    return;
  }

  try {
    const adminDocRef = doc(db, "admins", currentUser.uid);
    const adminDoc = await getDoc(adminDocRef);

    if (!adminDoc.exists()) {
      await setDoc(adminDocRef, {
        email: currentUser.email,
        role: 'admin',
        createdAt: new Date().toISOString(),
        photoURL: currentUser.photoURL || null,
        displayName: currentUser.displayName || null,
        special: true
      });
      console.log('부트스트랩 관리자 문서 생성 완료');
    }
  } catch (error) {
    console.error('부트스트랩 관리자 문서 확인/생성 오류:', error);
  }
};

const isAdmin = async (uid: string): Promise<boolean> => {
  console.log('isAdmin 함수 호출됨 - UID:', uid);
  
  if (uid === BOOTSTRAP_ADMIN_UID) {
    await ensureBootstrapAdminDocument();
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

// 구글 로그인 후 관리자 설정 함수
const setGoogleUserAsAdmin = async (user: User): Promise<boolean> => {
  if (!user || user.uid !== BOOTSTRAP_ADMIN_UID) return false;
  
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
  createdAt?: ContentDate;
  updatedAt?: ContentDate;
}, imageFile?: File) => {
  const docRef = doc(collection(db, "blogPosts"));
  let uploadedImageRef: StorageReference | null = null;

  try {
    const postId = docRef.id;
    let imageUrl = postData.image;

    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/blog/${postId}/${Date.now()}_${imageFile.name}`,
        imageFile
      );
      imageUrl = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    const data = {
      ...postData,
      ...(imageUrl ? { image: imageUrl } : {}),
      createdAt: postData.createdAt || serverTimestamp(),
      updatedAt: postData.updatedAt || serverTimestamp(),
      tags: postData.tags || []
    };

    await setDoc(docRef, removeUndefinedFields(data));
    return postId;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
    console.error("Error creating blog post:", error);
    throw error;
  }
};

// Function to update a blog post
const updateBlogPost = async (postId: string, data: Partial<BlogPost>, imageFile?: File) => {
  let uploadedImageRef: StorageReference | null = null;

  try {
    const updateFields = { ...data, updatedAt: serverTimestamp() };

    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/blog/${postId}/${Date.now()}_${imageFile.name}`,
        imageFile
      );
      updateFields.image = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    await updateDoc(doc(db, "blogPosts", postId), removeUndefinedFields(updateFields));
    return true;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
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
  createdAt?: ContentDate;
  updatedAt?: ContentDate;
}, imageFile?: File) => {
  const docRef = doc(collection(db, "portfolioProjects"));
  let uploadedImageRef: StorageReference | null = null;

  try {
    const projectId = docRef.id;
    let imageUrl = projectData.imageUrl || "";

    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/portfolio/${projectId}/${Date.now()}_${imageFile.name}`,
        imageFile
      );
      imageUrl = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    const data = {
      ...projectData,
      imageUrl,
      technologies: projectData.technologies || [],
      featured: projectData.featured || false,
      createdAt: projectData.createdAt || new Date().toISOString(),
      updatedAt: projectData.updatedAt || new Date().toISOString()
    };

    await setDoc(docRef, removeUndefinedFields(data));
    return projectId;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
    console.error("Error creating portfolio project:", error);
    throw error;
  }
};

// Function to update a portfolio project
const updatePortfolioProject = async (projectId: string, data: Partial<PortfolioProject>, imageFile?: File) => {
  let uploadedImageRef: StorageReference | null = null;

  try {
    const updateData = { ...data, updatedAt: new Date().toISOString() };

    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/portfolio/${projectId}/${Date.now()}_${imageFile.name}`,
        imageFile
      );
      updateData.imageUrl = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    await updateDoc(doc(db, "portfolioProjects", projectId), removeUndefinedFields(updateData));
    return true;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
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

const extractFileName = (imageUrl: string): string => {
  try {
    // URL에서 경로 부분 추출
    const pathParts = new URL(imageUrl).pathname.split('/');
    // 마지막 부분이 파일명
    const fileName = pathParts[pathParts.length - 1];
    // 타임스탬프 제거 (타임스탬프_파일명.확장자 형식 가정)
    return fileName.substring(fileName.indexOf('_') + 1);
  } catch {
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
