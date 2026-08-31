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

const cleanupUploadedImage = async (storageRef: StorageReference | null) => {
  if (!storageRef) return;

  try {
    await deleteObject(storageRef);
  } catch (cleanupError) {
    console.error('업로드된 이미지 롤백 실패:', cleanupError);
  }
};

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
  category?: string;
  technologies?: string[];
  imageUrl?: string;
  link?: string;
  featured?: boolean;
  isPrivate?: boolean;
  createdAt?: ContentDate;
  updatedAt?: ContentDate;
}, imageFile?: File) => {
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
    const updateData: UpdateData<DocumentData> = {
      ...data,
      link: data.link?.trim() ? data.link : deleteField(),
      featuredOrder: data.featured === false ? deleteField() : data.featuredOrder,
      updatedAt: new Date().toISOString(),
    };

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
