import { useState, useEffect, useCallback } from 'react';
import {
  getFirestore,
  collection,
  onSnapshot
} from 'firebase/firestore';
import {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  createPortfolioProject,
  updatePortfolioProject,
  saveFeaturedProjectOrder,
  deletePortfolioProject
} from '../../../utils/firebaseAdmin';
import type { BlogPost, PortfolioProject } from '../../../utils/firebase';

interface UseAdminDataResult {
  blogPosts: BlogPost[];
  portfolioProjects: PortfolioProject[];
  isLoading: boolean;
  error: string;
  setError: (error: string) => void;
  successMessage: string;
  setSuccessMessage: (message: string) => void;

  // 블로그 포스트 CRUD 함수
  handleCreateBlogPost: (post: BlogPost, imageFile?: File | null) => Promise<void>;
  handleUpdateBlogPost: (post: BlogPost, imageFile?: File | null) => Promise<void>;
  handleDeleteBlogPost: (postId?: string) => Promise<void>;

  // 포트폴리오 프로젝트 CRUD 함수
  handleCreateProject: (project: PortfolioProject, imageFile?: File | null) => Promise<void>;
  handleUpdateProject: (project: PortfolioProject, imageFile?: File | null) => Promise<void>;
  handleDeleteProject: (projectId?: string) => Promise<void>;
  handleSaveFeaturedOrder: (projectIds: string[]) => Promise<void>;
}

const useAdminData = (): UseAdminDataResult => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // 최초 데이터와 이후 변경 사항을 같은 구독으로 처리합니다.
  useEffect(() => {
    setIsLoading(true);
    setError('');

    const db = getFirestore();
    let isActive = true;
    let isBlogReady = false;
    let isPortfolioReady = false;

    const finishInitialLoad = () => {
      if (isActive && isBlogReady && isPortfolioReady) {
        setIsLoading(false);
      }
    };

    const blogUnsubscribe = onSnapshot(
      collection(db, 'blogPosts'),
      (snapshot) => {
        if (!isActive) return;
        setBlogPosts(snapshot.docs.map(item => ({
          id: item.id,
          ...item.data(),
        } as BlogPost)));
        isBlogReady = true;
        finishInitialLoad();
      },
      (subscriptionError) => {
        if (!isActive) return;
        console.error('블로그 포스트 구독 오류:', subscriptionError);
        setError('블로그 데이터를 불러오는 중 오류가 발생했습니다.');
        isBlogReady = true;
        finishInitialLoad();
      },
    );

    const portfolioUnsubscribe = onSnapshot(
      collection(db, 'portfolioProjects'),
      (snapshot) => {
        if (!isActive) return;
        setPortfolioProjects(snapshot.docs.map(item => ({
          id: item.id,
          ...item.data(),
        } as PortfolioProject)));
        isPortfolioReady = true;
        finishInitialLoad();
      },
      (subscriptionError) => {
        if (!isActive) return;
        console.error('포트폴리오 프로젝트 구독 오류:', subscriptionError);
        setError('포트폴리오 데이터를 불러오는 중 오류가 발생했습니다.');
        isPortfolioReady = true;
        finishInitialLoad();
      },
    );

    return () => {
      isActive = false;
      blogUnsubscribe();
      portfolioUnsubscribe();
    };
  }, []);

  // 블로그 포스트 생성
  const handleCreateBlogPost = useCallback(async (post: BlogPost, imageFile?: File | null) => {
    setIsLoading(true);
    setError('');

    try {
      await createBlogPost(post, imageFile || undefined);
      setSuccessMessage('블로그 포스트가 성공적으로 작성되었습니다.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('블로그 포스트 생성 오류:', err);
      setError('블로그 포스트를 저장하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 블로그 포스트 업데이트
  const handleUpdateBlogPost = useCallback(async (post: BlogPost, imageFile?: File | null) => {
    if (!post.id) {
      setError('업데이트할 블로그 포스트 ID가 없습니다.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await updateBlogPost(post.id, post, imageFile || undefined);
      setSuccessMessage('블로그 포스트가 성공적으로 업데이트되었습니다.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('블로그 포스트 업데이트 오류:', err);
      setError('블로그 포스트를 업데이트하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 블로그 포스트 삭제
  const handleDeleteBlogPost = useCallback(async (postId?: string) => {
    if (!postId) {
      setError('삭제할 블로그 포스트 ID가 없습니다.');
      return;
    }

    if (!window.confirm('정말로 이 블로그 포스트를 삭제하시겠습니까?')) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await deleteBlogPost(postId);
      setSuccessMessage('블로그 포스트가 성공적으로 삭제되었습니다.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('블로그 포스트 삭제 오류:', err);
      setError('블로그 포스트를 삭제하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 포트폴리오 프로젝트 생성
  const handleCreateProject = useCallback(async (project: PortfolioProject, imageFile?: File | null) => {
    setIsLoading(true);
    setError('');

    try {
      await createPortfolioProject(project, imageFile || undefined);
      setSuccessMessage('포트폴리오 프로젝트가 성공적으로 추가되었습니다.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('포트폴리오 프로젝트 생성 오류:', err);
      setError('포트폴리오 프로젝트를 저장하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 포트폴리오 프로젝트 업데이트
  const handleUpdateProject = useCallback(async (project: PortfolioProject, imageFile?: File | null) => {
    if (!project.id) {
      setError('업데이트할 프로젝트 ID가 없습니다.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await updatePortfolioProject(project.id, project, imageFile || undefined);
      setSuccessMessage('포트폴리오 프로젝트가 성공적으로 업데이트되었습니다.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('포트폴리오 프로젝트 업데이트 오류:', err);
      setError('포트폴리오 프로젝트를 업데이트하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 포트폴리오 프로젝트 삭제
  const handleDeleteProject = useCallback(async (projectId?: string) => {
    if (!projectId) {
      setError('삭제할 프로젝트 ID가 없습니다.');
      return;
    }

    if (!window.confirm('정말로 이 포트폴리오 프로젝트를 삭제하시겠습니까?')) {
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await deletePortfolioProject(projectId);
      setSuccessMessage('포트폴리오 프로젝트가 성공적으로 삭제되었습니다.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('포트폴리오 프로젝트 삭제 오류:', err);
      setError('프로젝트를 삭제하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSaveFeaturedOrder = useCallback(async (projectIds: string[]) => {
    setIsLoading(true);
    setError('');

    try {
      await saveFeaturedProjectOrder(projectIds);
      setSuccessMessage('주요 프로젝트 순서가 저장되었습니다.');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('주요 프로젝트 순서 저장 오류:', err);
      setError('주요 프로젝트 순서를 저장하는 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    blogPosts,
    portfolioProjects,
    isLoading,
    error,
    setError,
    successMessage,
    setSuccessMessage,
    handleCreateBlogPost,
    handleUpdateBlogPost,
    handleDeleteBlogPost,
    handleCreateProject,
    handleUpdateProject,
    handleDeleteProject,
    handleSaveFeaturedOrder
  };
};

export default useAdminData;
