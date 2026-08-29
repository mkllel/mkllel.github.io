import { Link } from 'react-router-dom';
import { ImageOff } from 'lucide-react';
import type { PortfolioViewProject } from '../data/portfolioContent';

const PortfolioCard = ({ project }: { project: PortfolioViewProject }) => (
  <Link className="project-card" to={`/portfolio/${project.id}`}>
    <ProjectVisual project={project} />
    <div className="project-card__body">
      <div className="project-card__meta">
        <span>{project.label}</span>
        {project.featured && <strong>대표</strong>}
      </div>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      {project.role && (
        <div className="project-card__role">
          <span>내 역할</span>
          <p>{project.role}</p>
        </div>
      )}
      <ul className="tag-list" aria-label="사용 기술">
        {project.technologies.slice(0, 5).map((tech) => <li key={tech}>{tech}</li>)}
      </ul>
      <span className="text-link">사례 자세히 보기 <span aria-hidden="true">→</span></span>
    </div>
  </Link>
);

const ProjectVisual = ({ project }: { project: PortfolioViewProject }) => {
  const visualImages = [
    ...(project.galleryImages || []).map((image) => ({ url: image.url, alt: image.alt })),
    ...(project.imageUrl ? [{ url: project.imageUrl, alt: `${project.title} 대표 이미지` }] : []),
  ].filter((image, index, images) => Boolean(image.url) && images.findIndex((candidate) => candidate.url === image.url) === index);

  if (visualImages.length > 0) {
    const isSplit = visualImages.length > 1;
    return (
      <div className={`project-card__visual project-card__visual--image${isSplit ? ' project-card__visual--split' : ''}`}>
        {visualImages.slice(0, 2).map((image) => (
          <img
            key={image.url}
            src={image.url}
            alt={image.alt || `${project.title} 구축 화면`}
            width={isSplit ? 360 : 720}
            height="420"
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="project-card__visual project-card__visual--empty" role="img" aria-label={`${project.title} 이미지 없음`}>
      <ImageOff className="project-card__empty-icon" size={36} strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
};

export default PortfolioCard;
