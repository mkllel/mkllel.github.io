import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import ProjectArticle from './components/ProjectArticle';
import PortfolioCard from './components/PortfolioCard';
import { getCuratedProjects } from './data/portfolioContent';
import { toPortfolioDetailProject } from './data/portfolioDetailContent';
import type { PortfolioProject } from './utils/firebase';

const SITE_URL = 'https://mkllel.github.io';

export function renderProjectPage(projects: PortfolioProject[], id?: string) {
  const source = id ? projects.find(project => project.id === id && project.isPrivate === false) : undefined;
  if (id && !source) throw new Error('Cannot render a missing or non-public project');
  const project = source ? toPortfolioDetailProject(source) : undefined;
  const path = id ? `/portfolio/${id}` : '/portfolio';
  const title = `${project?.title || '프로젝트'} | 이민규`;
  const description = (project?.summary || '업무 자동화, AI 서비스 백엔드, Docker 운영 환경을 문제·역할·설계·검증 순서로 정리한 이민규의 프로젝트입니다.')
    .replace(/\s+/g, ' ').trim();
  const canonical = `${SITE_URL}${path}/`;
  const image = `${SITE_URL}/picture/og-portfolio.jpg`;
  const metadata = renderToStaticMarkup(<>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="author" content="MinKyu Lee" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href={canonical} />
    <meta property="og:type" content={project ? 'article' : 'website'} />
    <meta property="og:url" content={canonical} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={`${title} 대표 이미지`} />
    <meta property="og:site_name" content="MinKyu Lee Portfolio" />
    <meta property="og:locale" content="ko_KR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={`${title} 대표 이미지`} />
  </>);
  const body = renderToStaticMarkup(
    <StaticRouter location={path}>
      <main id="main-content">
        {project ? <ProjectArticle project={project} /> : (
          <div className="page-shell">
            <header className="page-intro site-container">
              <p className="eyebrow">PROJECT CASE STUDIES</p>
              <h1>프로젝트</h1>
              <p>구현한 기능보다 문제, 제약, 담당 범위와 운영 관점의 해결 과정을 중심으로 정리했습니다.</p>
            </header>
            <section className="site-container project-grid" aria-label="프로젝트 목록">
              {getCuratedProjects(projects).map(item => <PortfolioCard key={item.id} project={item} />)}
            </section>
          </div>
        )}
      </main>
    </StaticRouter>,
  );
  return { path, metadata, body };
}
