import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { RefreshCw } from 'lucide-react';
import { toPortfolioDetailProject, type PortfolioDetailProject } from '../data/portfolioDetailContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { db, type PortfolioProject } from '../utils/firebase';
import ProjectArticle from '../components/ProjectArticle';
import type { ProjectSlide } from '../components/ProjectLightbox';

const ProjectLightbox = lazy(() => import('../components/ProjectLightbox'));

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<PortfolioDetailProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<'not-found' | 'load-failed' | null>(null);
  const [requestVersion, setRequestVersion] = useState(0);
  const articleRef = useRef<HTMLElement>(null);
  const [viewer, setViewer] = useState<{ slides: ProjectSlide[]; index: number; open: boolean } | null>(null);

  const openImage = (clicked: HTMLImageElement) => {
    const images = Array.from(articleRef.current?.querySelectorAll<HTMLImageElement>('img[data-project-image]') || []);
    const slides = images.map(image => ({
      src: image.dataset.originalSrc || image.currentSrc || image.src,
      alt: image.alt,
      description: image.alt,
      width: Number(image.dataset.originalWidth) || undefined,
      height: Number(image.dataset.originalHeight) || undefined,
    }));
    const index = images.indexOf(clicked);
    if (index >= 0) setViewer({ slides, index, open: true });
  };

  usePageMetadata({
    title: project?.title ?? '프로젝트 상세',
    description: project?.summary ?? '이민규의 프로젝트 사례 연구입니다.',
    path: `/portfolio/${id ?? ''}`,
    type: 'article',
    noIndex: !loading && !project,
  });

  useEffect(() => {
    let active = true;
    setError(null);
    setViewer(null);
    setProject(null);
    setLoading(true);

    if (!id) {
      setError('not-found');
      setLoading(false);
      return;
    }

    const fetchProject = async () => {
      try {
        const snapshot = await getDoc(doc(db, 'portfolioProjects', id));
        if (!active) return;
        if (snapshot.exists()) {
          const remote = { id: snapshot.id, ...snapshot.data() } as PortfolioProject;
          if (remote.isPrivate) {
            setProject(null);
            setError('not-found');
          } else {
            setProject(toPortfolioDetailProject(remote));
          }
        } else {
          setProject(null);
          setError('not-found');
        }
      } catch (fetchError) {
        if (!active) return;
        console.error('프로젝트 상세 조회 오류:', fetchError);
        setProject(null);
        const isDenied = typeof fetchError === 'object' && fetchError !== null
          && 'code' in fetchError && fetchError.code === 'permission-denied';
        setError(isDenied ? 'not-found' : 'load-failed');
      } finally {
        if (active) setLoading(false);
      }
    };

    void fetchProject();
    return () => { active = false; };
  }, [id, requestVersion]);

  if (loading) return <div className="status-message status-message--page" role="status"><span className="loading-dot" />프로젝트를 불러오는 중입니다.</div>;

  if (error || !project) {
    return (
      <div className="empty-state site-container">
        {error === 'load-failed' ? (
          <>
            <div role="alert">
              <h1>프로젝트를 불러오지 못했습니다.</h1>
              <p>연결 상태를 확인한 뒤 다시 시도해 주세요.</p>
            </div>
            <div className="button-row">
              <button className="button button--primary button--retry" onClick={() => setRequestVersion(value => value + 1)}>
                <RefreshCw size={16} aria-hidden="true" /> 다시 시도
              </button>
              <Link className="button button--secondary-on-dark" to="/portfolio">프로젝트 목록으로</Link>
            </div>
          </>
        ) : (
          <>
            <h1>프로젝트를 찾을 수 없습니다.</h1>
            <Link className="button button--primary" to="/portfolio">프로젝트 목록으로</Link>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <ProjectArticle project={project} articleRef={articleRef} onImageOpen={openImage} />
      {viewer && (
        <Suspense fallback={<span role="status" className="sr-only">이미지 확대 보기를 불러오는 중</span>}>
          <ProjectLightbox
            {...viewer}
            onClose={() => setViewer(current => current ? { ...current, open: false } : null)}
            onExited={() => setViewer(null)}
          />
        </Suspense>
      )}
    </>
  );
};

export default PortfolioDetail;
