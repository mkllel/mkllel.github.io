import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db, auth, isAdmin } from '../utils/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { BlogPost } from '../utils/firebase';
import { formatDateKorean } from '../utils/dateUtils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogDetailParams {
  id: string;
  [key: string]: string;
}

const BlogDetail = () => {
  const { id } = useParams<BlogDetailParams>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAdminUser, setIsAdminUser] = useState(false);
  const [relatedProject, setRelatedProject] = useState<{id: string, title: string} | null>(null);

  useEffect(() => {
    // 관리자 권한 확인
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const adminStatus = await isAdmin(user.uid);
        setIsAdminUser(adminStatus);
      }
    });

    // 블로그 포스트 가져오기
    const fetchBlogPost = async () => {
      if (!id) {
        setError('게시물 ID가 없습니다');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'blogPosts', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const postData = { id: docSnap.id, ...docSnap.data() } as BlogPost;
          setPost(postData);
          
          // 관련 프로젝트 가져오기 (여기서는 간단히 첫 번째 프로젝트를 관련 프로젝트로 설정)
          try {
            const projectsRef = collection(db, 'portfolioProjects');
            const projectsSnap = await getDocs(projectsRef);
            
            if (!projectsSnap.empty) {
              const firstProject = projectsSnap.docs[0];
              setRelatedProject({
                id: firstProject.id,
                title: firstProject.data().title
              });
            }
          } catch (projectError) {
            console.error('관련 프로젝트 가져오기 오류:', projectError);
          }
        } else {
          setError('게시물을 찾을 수 없습니다');
        }
      } catch (err) {
        console.error('블로그 포스트 가져오기 오류:', err);
        setError('게시물을 불러오는 중 오류가 발생했습니다');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
    return () => unsubscribe();
  }, [id, navigate]);

  // 관리자 페이지로 이동 - 편집 기능
  const handleEdit = () => {
    navigate(`/admin`);
  };

  // 관리자 페이지로 이동 - 삭제 기능
  const handleDelete = () => {
    if (window.confirm('정말로 이 게시물을 삭제하시겠습니까?')) {
      navigate(`/admin`);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-4 mt-10">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>{error}</p>
        </div>
        <button 
          onClick={() => navigate('/blog')}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          블로그로 돌아가기
        </button>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-4 mt-10">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p>게시물을 찾을 수 없습니다.</p>
        </div>
        <button 
          onClick={() => navigate('/blog')}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          블로그로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="blog-details">
      <div className="blog-details-header">
        {/* {isAdminUser && (
          <div className="admin-controls">
            <button className="edit-button" onClick={handleEdit}>수정</button>
            <button className="delete-button" onClick={handleDelete}>삭제</button>
          </div>
        )} */}
        <div className="blog-details-cover-container">
          <div className="blog-details-cover-overlay"></div>
          {post.image ? (
            <img 
              src={post.image} 
              alt={post.title} 
              className="blog-details-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
          )}
          <div className="blog-details-title-container">
            <h1>{post.title}</h1>
            <div className="mt-2 text-sm text-gray-500">
              {formatDateKorean(post.createdAt)}
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-content">
        <div className="markdown-preview">
          <div className="mt-8">
            <div className="prose prose-lg prose-indigo max-w-none text-black">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      {relatedProject && (
        <div className="blog-details-related-project">
          <h3>Related Project</h3>
          <div 
            className="related-project-link" 
            style={{ cursor: 'pointer', color: '#000000' }}
            onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
          >
            <span className="text-black dark:text-black">{relatedProject.title}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail; 