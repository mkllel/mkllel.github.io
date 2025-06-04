import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { db, auth, isAdmin } from '../utils/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { BlogPost } from '../utils/firebase';
import { formatDateKorean } from '../utils/dateUtils';

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

  // 읽는 시간 계산 (대략적으로 200단어당 1분으로 가정)
  const calculateReadTime = (content: string): string => {
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);
    return `${readTime}분 읽기`;
  };

  // 마크다운 형식 텍스트를 HTML로 간단하게 변환
  const renderMarkdown = (markdown: string): string => {
    if (!markdown) return '';
    
    // <hr> 태그가 그대로 표시되는 문제 해결
    let processedMarkdown = markdown.replace(/<hr>/g, '---');
    
    // 기본적인 마크다운 포맷팅을 HTML로 변환
    let html = processedMarkdown
      // 이미지 마크다운 변환 (가장 먼저!)
      .replace(/!\[([^\]]*)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width:100%;margin:1rem 0;" />')
      // h3 처리
      .replace(/###\s+(.*?)$/gm, '<h3>$1</h3>')
      // h2 처리
      .replace(/##\s+(.*?)$/gm, '<h2>$1</h2>')
      // h1 처리
      .replace(/#\s+(.*?)$/gm, '<h1>$1</h1>')
      // 굵은 글씨
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // 기울임꼴
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // 코드 블록
      .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
      // 인라인 코드
      .replace(/`(.*?)`/g, '<code>$1</code>')
      // 링크
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
      // 순서 없는 목록
      .replace(/^\s*-\s+(.*?)$/gm, '<li>$1</li>')
      // 수평선
      .replace(/^---$/gm, '<hr/>')
      // 단락
      .replace(/\n\n/g, '</p><p>')
      // 줄바꿈
      .replace(/\n/g, '<br/>');
      
    return '<p>' + html + '</p>';
  };

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
            <div className="blog-details-meta">
              <span className="date-time">{formatDateKorean(post.createdAt)}</span>
              <span>{calculateReadTime(post.content)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-content">
        <div className="markdown-preview">
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />
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