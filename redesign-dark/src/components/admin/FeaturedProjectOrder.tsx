import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, Save } from 'lucide-react';
import type { PortfolioProject } from '../../utils/firebase';

interface FeaturedProjectOrderProps {
  portfolioProjects: PortfolioProject[];
  isLoading: boolean;
  onSave: (projectIds: string[]) => Promise<void>;
}

const getCreatedAtTime = (project: PortfolioProject): number => {
  const value = project.createdAt;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return Date.parse(value) || 0;
  if (value && typeof value === 'object' && 'seconds' in value) return value.seconds * 1000;
  return 0;
};

const FeaturedProjectOrder = ({ portfolioProjects, isLoading, onSave }: FeaturedProjectOrderProps) => {
  const featuredProjects = useMemo(() => portfolioProjects
    .filter((project): project is PortfolioProject & { id: string } => Boolean(project.id) && project.featured === true && !project.isPrivate)
    .sort((a, b) => {
      const aOrder = a.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder || getCreatedAtTime(b) - getCreatedAtTime(a);
    }), [portfolioProjects]);
  const [orderedIds, setOrderedIds] = useState<string[]>([]);

  useEffect(() => {
    setOrderedIds(featuredProjects.map((project) => project.id));
  }, [featuredProjects]);

  const projectsById = useMemo(
    () => new Map(featuredProjects.map((project) => [project.id, project])),
    [featuredProjects],
  );

  const moveProject = (index: number, direction: -1 | 1) => {
    setOrderedIds((current) => {
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= current.length) return current;
      const next = [...current];
      [next[index], next[targetIndex]] = [next[targetIndex], next[index]];
      return next;
    });
  };

  return (
    <section className="featured-order-admin" aria-labelledby="featured-order-heading">
      <div className="featured-order-admin__header">
        <h2 id="featured-order-heading">주요 프로젝트 순서</h2>
        <button
          className="button button--primary featured-order-admin__save"
          type="button"
          onClick={() => void onSave(orderedIds)}
          disabled={isLoading || orderedIds.length === 0}
        >
          <Save size={17} aria-hidden="true" />
          순서 저장
        </button>
      </div>

      {orderedIds.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">공개된 주요 프로젝트가 없습니다.</p>
      ) : (
        <ol className="featured-order-list">
          {orderedIds.map((projectId, index) => {
            const project = projectsById.get(projectId);
            if (!project) return null;

            return (
              <li
                className={index === 2 && orderedIds.length > 3 ? 'featured-order-list__main-boundary' : undefined}
                key={projectId}
              >
                <span className="featured-order-list__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="featured-order-list__content">
                  <strong>{project.title}</strong>
                  <span>{project.category || '프로젝트'}</span>
                </div>
                <div className="featured-order-list__actions">
                  <button
                    type="button"
                    onClick={() => moveProject(index, -1)}
                    disabled={index === 0 || isLoading}
                    aria-label={`${project.title} 위로 이동`}
                    title="위로 이동"
                  >
                    <ArrowUp size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveProject(index, 1)}
                    disabled={index === orderedIds.length - 1 || isLoading}
                    aria-label={`${project.title} 아래로 이동`}
                    title="아래로 이동"
                  >
                    <ArrowDown size={18} aria-hidden="true" />
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
};

export default FeaturedProjectOrder;
