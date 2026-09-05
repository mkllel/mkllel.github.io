import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import {
  getProjectResourceLinks,
  toPortfolioViewProject,
  type PortfolioViewProject,
} from '../data/portfolioContent';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { db, type PortfolioProject } from '../utils/firebase';
import ProjectMarkdown from '../components/ProjectMarkdown';

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<PortfolioViewProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  usePageMetadata({
    title: project?.title ?? '프로젝트 상세',
    description: project?.summary ?? '이민규의 프로젝트 사례 연구입니다.',
    path: `/portfolio/${id ?? ''}`,
    type: 'article',
  });

  useEffect(() => {
    setError('');

    if (!id) {
      setError('프로젝트를 찾을 수 없습니다.');
      setLoading(false);
      return;
    }

    setProject(null);
    setLoading(true);

    const fetchProject = async () => {
      try {
        const snapshot = await getDoc(doc(db, 'portfolioProjects', id));
        if (snapshot.exists()) {
          const remote = { id: snapshot.id, ...snapshot.data() } as PortfolioProject;
          if (remote.isPrivate) {
            setProject(null);
            setError('프로젝트를 찾을 수 없습니다.');
          } else {
            setProject(toPortfolioViewProject(remote));
          }
        } else {
          setProject(null);
          setError('프로젝트를 찾을 수 없습니다.');
        }
      } catch (fetchError) {
        console.error('프로젝트 상세 조회 오류:', fetchError);
        setProject(null);
        setError('프로젝트를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    void fetchProject();
  }, [id]);

  if (loading) return <div className="status-message status-message--page"><span className="loading-dot" />프로젝트를 불러오는 중입니다.</div>;

  if (error || !project) {
    return (
      <div className="empty-state site-container">
        <h1>프로젝트를 찾을 수 없습니다.</h1>
        <Link className="button button--primary" to="/portfolio">프로젝트 목록으로</Link>
      </div>
    );
  }

  const resourceLinks = getProjectResourceLinks(project);
  const galleryImages = (project.galleryImages || []).filter((image) => image.url.trim());

  return (
    <article className="case-study page-shell">
      <header className="case-hero">
        <div className="site-container case-hero__grid">
          <div>
            <Link className="back-link" to="/portfolio">← 프로젝트 목록</Link>
            <p className="eyebrow">{project.label}</p>
            <h1>{project.title}</h1>
            <p className="case-hero__summary">{project.summary}</p>
            {resourceLinks.length > 0 && (
              <div className="button-row">
                {resourceLinks.map((resource) => (
                  <a className="button button--primary" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>
                    {resource.text} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
          <dl className="case-facts">
            {project.role && <div><dt>담당</dt><dd>{project.role}</dd></div>}
            {project.technologies.length > 0 && <div><dt>기술</dt><dd>{project.technologies.join(' · ')}</dd></div>}
            {project.outcome && <div><dt>결과</dt><dd>{project.outcome}</dd></div>}
          </dl>
        </div>
      </header>

      {galleryImages.length > 0 && (
        <section className="case-gallery-section" aria-label="프로젝트 구축 화면">
          <div className="case-gallery site-container">
            {galleryImages.map((image) => (
              <figure key={image.url}>
                <img src={image.url} alt={image.alt || `${project.title} 구축 화면`} decoding="async" />
                {image.alt && <figcaption>{image.alt}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.imageUrl && (
        <section className="case-cover-section" aria-label="프로젝트 대표 이미지">
          <figure className="case-cover site-container">
            <img src={project.imageUrl} alt={`${project.title} 대표 이미지`} decoding="async" />
          </figure>
        </section>
      )}

      {project.introMarkdown && (
        <section className="case-content-media section--white">
          <div className="site-container case-sections">
            <ProjectMarkdown>{project.introMarkdown}</ProjectMarkdown>
          </div>
        </section>
      )}

      {project.architecture && (
        <section className="section section--paper">
          <div className="site-container">
            <div className="section-heading section-heading--left section-heading--compact">
              <p className="eyebrow">SYSTEM FLOW</p>
              <h2>구조와 처리 흐름</h2>
            </div>
            <ol className="architecture-flow">
              {project.architecture.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section section--white">
        <div className="site-container case-sections">
          {project.caseStudy.map((section, index) => (
            <section className="case-section" key={`${section.title}-${index}`}>
              <span className="case-section__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                <ProjectMarkdown>{section.markdown}</ProjectMarkdown>
              </div>
            </section>
          ))}
        </div>
      </section>

      <footer className="case-footer site-container">
        <p>다른 경험도 문제와 담당 범위를 기준으로 정리했습니다.</p>
        <Link className="button button--primary" to="/portfolio">전체 프로젝트 보기</Link>
      </footer>
    </article>
  );
};

export default PortfolioDetail;
