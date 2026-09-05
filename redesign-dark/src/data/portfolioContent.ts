import type { PortfolioProject } from '../utils/firebase';

export const CHILDCARE_PROJECT_ID = 'vJUDdRO6unChbvQUqYho';

export interface PortfolioViewProject extends PortfolioProject {
  label: string;
  summary: string;
  role: string;
  outcome: string;
  visual: 'automation' | 'medical' | 'infrastructure' | 'web';
  priority: number;
}

export interface DisplayResourceLink {
  url: string;
  text: string;
}

const getResourceLinkText = (url: string, label?: string): string => {
  const resourceType = /\.pdf(?:$|[?#])/i.test(url)
    ? '프로젝트 PDF 보기'
    : '프로젝트 링크 보기';
  return label?.trim() ? `${label.trim()} ${resourceType}` : resourceType;
};

export const getProjectResourceLinks = (project: PortfolioProject): DisplayResourceLink[] => {
  const resources = [...(project.resourceLinks || []), ...(project.link ? [{ url: project.link }] : [])];
  const seen = new Set<string>();
  return resources.flatMap(resource => {
    const url = resource.url?.trim();
    if (!url || seen.has(url)) return [];
    seen.add(url);
    return [{ url, text: getResourceLinkText(url, resource.label) }];
  });
};

// Legacy cards without a saved summary get an excerpt, not a full Markdown parse.
const getSummaryExcerpt = (description: string): string => description
  .replace(/```[\s\S]*?```|~~~[\s\S]*?~~~/g, '')
  .replace(/^\s*#{1,6}\s+.*$/gm, '')
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  .replace(/<[^>]+>/g, '')
  .replace(/[*`~]/g, '')
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, 240);

const getProjectVisual = (project: PortfolioProject): PortfolioViewProject['visual'] => {
  const searchable = [project.title, project.category, ...project.technologies].filter(Boolean).join(' ').toLowerCase();
  if (/proxmox|devops|infra|인프라|docker compose/.test(searchable)) return 'infrastructure';
  if (/x-ray|의료|hka|model|모델|ai /.test(searchable)) return 'medical';
  if (/fastapi|selenium|automation|자동화|backend|백엔드/.test(searchable)) return 'automation';
  return 'web';
};

const getCreatedAtTime = (project: PortfolioProject): number => {
  const value = project.createdAt;
  if (value instanceof Date) return value.getTime();
  if (typeof value === 'number') return value;
  if (typeof value === 'string') return Date.parse(value) || 0;
  if (value && typeof value === 'object' && 'seconds' in value) return value.seconds * 1000;
  return 0;
};

export const toPortfolioViewProject = (project: PortfolioProject, priority = 100): PortfolioViewProject => ({
  ...project,
  label: project.category || '프로젝트',
  summary: project.summary?.trim() ?? getSummaryExcerpt(project.description),
  role: project.role?.trim() ?? '',
  outcome: project.outcome?.trim() ?? '',
  architecture: project.architecture?.filter(Boolean),
  visual: getProjectVisual(project),
  priority,
});

export const getCuratedProjects = (remoteProjects: PortfolioProject[]): PortfolioViewProject[] => [...remoteProjects]
  .filter(project => Boolean(project.id) && !project.isPrivate)
  .sort((a, b) => getCreatedAtTime(b) - getCreatedAtTime(a))
  .map((project, index) => toPortfolioViewProject(project, index + 1));

export const getFeaturedProjects = (remoteProjects: PortfolioProject[]): PortfolioViewProject[] =>
  getCuratedProjects(remoteProjects)
    .filter(project => project.featured)
    .sort((a, b) => {
      const aOrder = a.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder || a.priority - b.priority;
    })
    .slice(0, 3);

export const featuredProjects: PortfolioViewProject[] = [];
