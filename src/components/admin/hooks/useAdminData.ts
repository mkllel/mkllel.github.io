import { useState, useEffect, useCallback } from 'react';
import {
  getFirestore,
  collection,
  onSnapshot,
  getDocs,
  Unsubscribe
} from 'firebase/firestore';
import {
  BlogPost,
  PortfolioProject,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  createPortfolioProject,
  updatePortfolioProject,
  deletePortfolioProject
} from '../../../utils/firebase';

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
}

const useAdminData = (): UseAdminDataResult => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<PortfolioProject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Firestore에서 데이터 가져오기
  useEffect(() => {
    console.log('Firestore 데이터 가져오기 시작...');
    setIsLoading(true);
    
    let blogUnsubscribe: Unsubscribe | null = null;
    let portfolioUnsubscribe: Unsubscribe | null = null;
    
    try {
      const db = getFirestore();
      
      // 블로그 포스트 가져오기
      const fetchBlogPosts = async () => {
        try {
          const blogQuery = collection(db, 'blogPosts');
          const blogSnapshot = await getDocs(blogQuery);
          const blogData = blogSnapshot.docs.map(doc => ({ 
            id: doc.id, 
            ...doc.data() 
          } as BlogPost));
          
          console.log(`블로그 포스트 ${blogData.length}개 로드됨`);
          setBlogPosts(blogData);
          
          // 실시간 업데이트 설정
          blogUnsubscribe = onSnapshot(collection(db, 'blogPosts'), (snapshot) => {
            const updatedBlogData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
            console.log(`블로그 포스트 업데이트됨: ${updatedBlogData.length}개`);
            setBlogPosts(updatedBlogData);
          }, (err) => {
            console.error('블로그 포스트 구독 오류:', err);
            setError('블로그 데이터 구독 중 오류가 발생했습니다.');
          });
          
        } catch (err) {
          console.error('블로그 포스트 가져오기 오류:', err);
          setError('블로그 데이터를 가져오는 중 오류가 발생했습니다.');
        }
      };
      
      // 포트폴리오 프로젝트 가져오기
      const fetchPortfolioProjects = async () => {
        try {
          const portfolioQuery = collection(db, 'portfolioProjects');
          const portfolioSnapshot = await getDocs(portfolioQuery);
          const portfolioData = portfolioSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          } as PortfolioProject));
          
          console.log(`포트폴리오 프로젝트 ${portfolioData.length}개 로드됨`);
          setPortfolioProjects(portfolioData);
          
          // 실시간 업데이트 설정
          portfolioUnsubscribe = onSnapshot(collection(db, 'portfolioProjects'), (snapshot) => {
            const updatedPortfolioData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PortfolioProject));
            console.log(`포트폴리오 프로젝트 업데이트됨: ${updatedPortfolioData.length}개`);
            setPortfolioProjects(updatedPortfolioData);
          }, (err) => {
            console.error('포트폴리오 프로젝트 구독 오류:', err);
            setError('포트폴리오 데이터 구독 중 오류가 발생했습니다.');
          });
          
        } catch (err) {
          console.error('포트폴리오 프로젝트 가져오기 오류:', err);
          setError('포트폴리오 데이터를 가져오는 중 오류가 발생했습니다.');
        }
      };
      
      // 데이터 가져오기 및 구독 시작
      fetchBlogPosts();
      fetchPortfolioProjects();
      
      // 완료 후 로딩 상태 업데이트
      setIsLoading(false);
      
    } catch (err) {
      console.error('데이터 가져오기 오류:', err);
      setError('데이터를 불러오는 중 오류가 발생했습니다.');
      setIsLoading(false);
    }
    
    // 컴포넌트 언마운트 시 구독 해제
    return () => {
      if (blogUnsubscribe) blogUnsubscribe();
      if (portfolioUnsubscribe) portfolioUnsubscribe();
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
    handleDeleteProject
  };
};

export default useAdminData; 