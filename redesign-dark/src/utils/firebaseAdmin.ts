import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
  type DocumentData,
  type UpdateData,
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  type StorageReference,
} from 'firebase/storage';
import {
  app,
  db,
  type BlogPost,
  type ContentDate,
  type PortfolioProject,
} from './firebase';
import { normalizeResourceLinks } from './portfolioFields';

const storage = getStorage(app);

const uploadImageAndGetUrl = async (path: string, imageFile: File): Promise<{
  downloadURL: string;
  storageRef: StorageReference;
}> => {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, imageFile);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return { downloadURL, storageRef };
};

// Storage 업로드와 Firestore 저장은 한 트랜잭션이 아니다. 실패 시 참조를 확보한 새 파일만 삭제를 시도한다.
// 삭제 자체도 실패할 수 있으며, 기존 대표 이미지나 별도로 첨부한 본문 이미지는 여기서 지우지 않는다.
const cleanupUploadedImage = async (storageRef: StorageReference | null) => {
  if (!storageRef) return;

  try {
    await deleteObject(storageRef);
  } catch (cleanupError) {
    console.error('업로드된 이미지 롤백 실패:', cleanupError);
  }
};

// Firestore가 거부하는 최상위 undefined만 제외한다. 빈 문자열/빈 배열은 필드를 비우려는 값일 수 있어 유지한다.
const removeUndefinedFields = <T extends object>(data: T): T => Object.fromEntries(
  Object.entries(data).filter(([, value]) => value !== undefined),
) as T;

const createBlogPost = async (postData: {
  title: string;
  content: string;
  category?: string;
  tags?: string[];
  image?: string;
  createdAt?: ContentDate;
  updatedAt?: ContentDate;
}, imageFile?: File) => {
  const docRef = doc(collection(db, 'blogPosts'));
  let uploadedImageRef: StorageReference | null = null;

  try {
    const postId = docRef.id;
    let imageUrl = postData.image;

    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/blog/${postId}/${Date.now()}_${imageFile.name}`,
        imageFile,
      );
      imageUrl = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    await setDoc(docRef, removeUndefinedFields({
      ...postData,
      ...(imageUrl ? { image: imageUrl } : {}),
      createdAt: postData.createdAt || serverTimestamp(),
      updatedAt: postData.updatedAt || serverTimestamp(),
      tags: postData.tags || [],
    }));
    return postId;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
    console.error('Error creating blog post:', error);
    throw error;
  }
};

const updateBlogPost = async (postId: string, data: Partial<BlogPost>, imageFile?: File) => {
  let uploadedImageRef: StorageReference | null = null;

  try {
    const updateFields = { ...data, updatedAt: serverTimestamp() };

    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/blog/${postId}/${Date.now()}_${imageFile.name}`,
        imageFile,
      );
      updateFields.image = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    await updateDoc(doc(db, 'blogPosts', postId), removeUndefinedFields(updateFields));
    return true;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
    console.error('Error updating blog post:', error);
    throw error;
  }
};

const deleteBlogPost = async (postId: string) => {
  try {
    await deleteDoc(doc(db, 'blogPosts', postId));
    return true;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
};

const createPortfolioProject = async (projectData: {
  title: string;
  description: string;
  summary?: string;
  role?: string;
  outcome?: string;
  architecture?: string[];
  architectureLayout?: PortfolioProject['architectureLayout'];
  architectureParents?: PortfolioProject['architectureParents'];
  resourceLinks?: PortfolioProject['resourceLinks'];
  galleryImages?: PortfolioProject['galleryImages'];
  category?: string;
  technologies?: string[];
  imageUrl?: string;
  imageCaption?: string;
  link?: string;
  featured?: boolean;
  isPrivate?: boolean;
  createdAt?: ContentDate;
  updatedAt?: ContentDate;
}, imageFile?: File) => {
  // 저장 전에 문서 ID를 확보해 대표 이미지 경로와 문서에 같은 ID를 사용한다. 이 시점에는 아직 문서를 쓰지 않는다.
  const docRef = doc(collection(db, 'portfolioProjects'));
  let uploadedImageRef: StorageReference | null = null;

  try {
    const projectId = docRef.id;
    let imageUrl = projectData.imageUrl || '';

    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/portfolio/${projectId}/${Date.now()}_${imageFile.name}`,
        imageFile,
      );
      imageUrl = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    await setDoc(docRef, removeUndefinedFields({
      ...projectData,
      ...(projectData.resourceLinks !== undefined
        ? { resourceLinks: normalizeResourceLinks(projectData.resourceLinks) } : {}),
      imageUrl,
      technologies: projectData.technologies || [],
      featured: projectData.featured || false,
      isPrivate: projectData.isPrivate || false,
      createdAt: projectData.createdAt || new Date().toISOString(),
      updatedAt: projectData.updatedAt || new Date().toISOString(),
    }));
    return projectId;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
    console.error('Error creating portfolio project:', error);
    throw error;
  }
};

const updatePortfolioProject = async (
  projectId: string,
  data: Partial<PortfolioProject>,
  imageFile?: File,
) => {
  let uploadedImageRef: StorageReference | null = null;

  try {
    // undefined는 기존 값 유지, deleteField()는 실제 필드 삭제다. 링크 비우기와 주요 프로젝트 해제를 구분해 반영한다.
    const updateData: UpdateData<DocumentData> = {
      ...data,
      ...(data.resourceLinks !== undefined
        ? { resourceLinks: normalizeResourceLinks(data.resourceLinks) } : {}),
      ...(data.link !== undefined
        ? { link: data.link.trim() ? data.link : deleteField() } : {}),
      featuredOrder: data.featured === false ? deleteField() : data.featuredOrder,
      updatedAt: new Date().toISOString(),
    };

    // 관리자 폼은 imageUrl을 직접 보내지 않으므로 새 파일이 없는 수정에서는 기존 대표 이미지 URL을 유지한다.
    if (imageFile) {
      const uploadedImage = await uploadImageAndGetUrl(
        `images/portfolio/${projectId}/${Date.now()}_${imageFile.name}`,
        imageFile,
      );
      updateData.imageUrl = uploadedImage.downloadURL;
      uploadedImageRef = uploadedImage.storageRef;
    }

    await updateDoc(doc(db, 'portfolioProjects', projectId), removeUndefinedFields(updateData));
    return true;
  } catch (error) {
    await cleanupUploadedImage(uploadedImageRef);
    console.error('Error updating portfolio project:', error);
    throw error;
  }
};

const saveFeaturedProjectOrder = async (projectIds: string[]) => {
  // 여러 문서의 순위가 일부만 저장되지 않도록 하나의 Firestore 배치로 반영한다.
  const batch = writeBatch(db);
  const updatedAt = new Date().toISOString();

  projectIds.forEach((projectId, index) => {
    batch.update(doc(db, 'portfolioProjects', projectId), {
      featuredOrder: index + 1,
      updatedAt,
    });
  });

  await batch.commit();
};

const deletePortfolioProject = async (projectId: string) => {
  try {
    // 문서 삭제만 수행한다. 연결된 Storage 파일이나 이미 배포된 정적 HTML까지 삭제하는 동작은 아니다.
    await deleteDoc(doc(db, 'portfolioProjects', projectId));
    return true;
  } catch (error) {
    console.error('Error deleting portfolio project:', error);
    throw error;
  }
};

const extractFileName = (imageUrl: string): string => {
  try {
    const pathParts = new URL(imageUrl).pathname.split('/');
    const fileName = pathParts[pathParts.length - 1];
    return fileName.substring(fileName.indexOf('_') + 1);
  } catch {
    return '파일명 추출 실패';
  }
};

const uploadBlogContentImages = async (files: File[], postId: string): Promise<string[]> => {
  const urls: string[] = [];

  for (const file of files) {
    const storageRef = ref(storage, `images/blog/${postId}/content_${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    urls.push(await getDownloadURL(storageRef));
  }

  return urls;
};

export {
  createBlogPost,
  createPortfolioProject,
  deleteBlogPost,
  deletePortfolioProject,
  extractFileName,
  saveFeaturedProjectOrder,
  storage,
  updateBlogPost,
  updatePortfolioProject,
  uploadBlogContentImages,
};
