import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db, auth, isAdmin } from '../utils/firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { PortfolioProject } from '../utils/firebase';
import { formatDateKorean } from '../utils/dateUtils';
import LoadingSpinner from '../components/LoadingSpinner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PortfolioDetailParams {
  id: string;
  [key: string]: string;
}

const PortfolioDetail = () => {
  const { id } = useParams<PortfolioDetailParams>();
  const navigate = useNavigate();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    // 관리자 권한 확인
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const adminStatus = await isAdmin(user.uid);
        setIsAdminUser(adminStatus);
      }
    });

    // 포트폴리오 프로젝트 가져오기
    const fetchProject = async () => {
      if (!id) {
        setError('프로젝트 ID가 없습니다');
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'portfolioProjects', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const projectData = { id: docSnap.id, ...docSnap.data() } as PortfolioProject;
          setProject(projectData);
        } else {
          setError('프로젝트를 찾을 수 없습니다');
        }
      } catch (err) {
        console.error('포트폴리오 프로젝트 가져오기 오류:', err);
        setError('프로젝트를 불러오는 중 오류가 발생했습니다');
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
    return () => unsubscribe();
  }, [id, navigate]);

  // 관리자 페이지로 이동 - 편집 기능
  const handleEdit = () => {
    navigate(`/admin`);
  };

  // 관리자 페이지로 이동 - 삭제 기능
  const handleDelete = () => {
    if (window.confirm('정말로 이 프로젝트를 삭제하시겠습니까?')) {
      navigate(`/admin`);
    }
  };

  // 마크다운 형식 텍스트를 HTML로 간단하게 변환
  const renderMarkdown = (markdown: string): string => {
    if (!markdown) return '';
    let processedMarkdown = markdown.replace(/<hr>/g, '---');
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
          onClick={() => navigate('/portfolio')}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          포트폴리오로 돌아가기
        </button>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto p-4 mt-10">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
          <p>프로젝트를 찾을 수 없습니다.</p>
        </div>
        <button 
          onClick={() => navigate('/portfolio')}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          포트폴리오로 돌아가기
        </button>
      </div>
    );
  }

  return (
    <div className="portfolio-details mx-auto my-8">
      <div className="portfolio-details-header">
        {/* {isAdminUser && (
          <div className="admin-controls">
            <button className="edit-button" onClick={handleEdit}>수정</button>
            <button className="delete-button" onClick={handleDelete}>삭제</button>
          </div>
        )} */}
        <div className="portfolio-details-cover-container">
          <div className="portfolio-details-cover-overlay"></div>
          {project.imageUrl && (
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="portfolio-details-cover"
            />
          )}
          <div className="portfolio-details-title-container">
            <h1>{project.title}</h1>
            <div className="portfolio-details-meta">
              {/* <span className="date-time">{formatDateKorean(project.createdAt)}</span> */}
              <span className="portfolio-category">{project.category || '일반'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-details-content">
        <div className="portfolio-description">
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-gray-800">프로젝트 설명</h2>
            <div className="prose prose-indigo max-w-none text-black">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {project.description}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        
        {project.technologies && project.technologies.length > 0 && (
          <div className="portfolio-technologies">
            <h3>사용 기술</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        )}
        
        {project.link && (
          <div className="portfolio-links">
            <h3>프로젝트 링크</h3>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <span>프로젝트 보기</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 2.5H17.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.33334 11.6667L17.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetail; 