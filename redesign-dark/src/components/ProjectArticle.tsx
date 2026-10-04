import type { Ref } from 'react';
import { Link } from 'react-router-dom';
import { getProjectResourceLinks } from '../data/portfolioContent';
import type { PortfolioDetailProject } from '../data/portfolioDetailContent';
import ProjectMarkdown from './ProjectMarkdown';
import ProjectImage, { type OpenProjectImage } from './ProjectImage';
import ProjectSystemFlow from './ProjectSystemFlow';

interface Props {
  project: PortfolioDetailProject;
  articleRef?: Ref<HTMLElement>;
  onImageOpen?: OpenProjectImage;
}

// Shared by the interactive detail page and the build-time HTML renderer.
export default function ProjectArticle({ project, articleRef, onImageOpen }: Props) {
  const resourceLinks = getProjectResourceLinks(project);
  const galleryImages = (project.galleryImages || []).filter(image => image.url.trim());

  return (
    <article className="case-study page-shell" ref={articleRef}>
      <header className="case-hero">
        <div className="site-container case-hero__grid">
          <div>
            <Link className="back-link" to="/portfolio">← 프로젝트 목록</Link>
            <p className="eyebrow">{project.label}</p>
            <h1>{project.title}</h1>
            <p className="case-hero__summary">{project.summary}</p>
            {resourceLinks.length > 0 && (
              <div className="button-row">
                {resourceLinks.map(resource => (
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
            {galleryImages.map(image => (
              <figure key={image.url}>
                <ProjectImage src={image.url} alt={image.alt || `${project.title} 구축 화면`} sizes="(max-width: 720px) calc(100vw - 28px), (max-width: 1220px) calc(50vw - 28px), 582px" decoding="async" onOpen={onImageOpen} />
                {image.alt && <figcaption>{image.alt}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.imageUrl && (
        <section className="case-cover-section" aria-label="프로젝트 대표 이미지">
          <figure className="case-cover site-container">
            <ProjectImage src={project.imageUrl} alt={`${project.title} 대표 이미지`} decoding="async" onOpen={onImageOpen} />
            {project.imageCaption?.trim() && <figcaption>{project.imageCaption.trim()}</figcaption>}
          </figure>
        </section>
      )}

      {!project.architecture?.length && project.introMarkdown && (
        <section className="case-content-media section--white">
          <div className="site-container case-sections">
            <ProjectMarkdown onImageOpen={onImageOpen}>{project.introMarkdown}</ProjectMarkdown>
          </div>
        </section>
      )}

      {!!project.architecture?.length && (
        <ProjectSystemFlow steps={project.architecture} description={project.introMarkdown} contentClassName="site-container" onImageOpen={onImageOpen} />
      )}

      <section className="section section--white">
        <div className="site-container case-sections">
          {project.caseStudy.map((section, index) => (
            <section className="case-section" key={`${section.title}-${index}`}>
              <span className="case-section__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                <ProjectMarkdown onImageOpen={onImageOpen}>{section.markdown}</ProjectMarkdown>
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
}
