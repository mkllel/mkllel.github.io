import type { PortfolioProject } from '../utils/firebase';

export const CHILDCARE_PROJECT_ID = 'vJUDdRO6unChbvQUqYho';

export interface CaseStudyImage {
  src: string;
  alt: string;
}

export interface CaseStudySection {
  title: string;
  description: string;
  items?: string[];
  images?: CaseStudyImage[];
}

export interface PortfolioViewProject extends PortfolioProject {
  label: string;
  summary: string;
  role: string;
  outcome: string;
  caseStudy: CaseStudySection[];
  introImages?: CaseStudyImage[];
  architecture?: string[];
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
  const resources = [
    ...(project.resourceLinks || []),
    ...(project.link ? [{ url: project.link }] : []),
  ];
  const seen = new Set<string>();

  return resources.flatMap((resource) => {
    const url = resource.url?.trim();
    if (!url || seen.has(url)) return [];
    seen.add(url);
    return [{ url, text: getResourceLinkText(url, resource.label) }];
  });
};

const cleanMarkdownText = (value: string): string => value
  .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  .replace(/[*_`~]/g, '')
  .replace(/<[^>]+>/g, '')
  .replace(/\s+/g, ' ')
  .trim();

const extractMarkdownImages = (value: string, projectTitle: string): CaseStudyImage[] => {
  const images: CaseStudyImage[] = [];
  const imagePattern = /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)(?:\s+["'][^"']*["'])?\)/g;

  for (const match of value.matchAll(imagePattern)) {
    images.push({
      src: match[2],
      alt: cleanMarkdownText(match[1]) || `${projectTitle} 설명 이미지`,
    });
  }

  return images;
};

const parseCaseStudy = (description: string, projectTitle: string): {
  intro: string;
  introImages: CaseStudyImage[];
  sections: CaseStudySection[];
} => {
  const sections: CaseStudySection[] = [];
  const introParts: string[] = [];
  const introImages: CaseStudyImage[] = [];
  let currentTitle = '';
  let body: string[] = [];
  let items: string[] = [];
  let images: CaseStudyImage[] = [];

  const flushSection = () => {
    const sectionDescription = cleanMarkdownText(body.join(' '));
    const cleanedItems = items.map(cleanMarkdownText).filter(Boolean);
    const normalizedHeading = cleanMarkdownText(currentTitle);
    const normalizedProjectTitle = cleanMarkdownText(projectTitle);
    const isDocumentTitle = sections.length === 0
      && normalizedHeading
      && (normalizedHeading === normalizedProjectTitle
        || normalizedHeading.includes(normalizedProjectTitle)
        || normalizedProjectTitle.includes(normalizedHeading));

    if (!normalizedHeading || isDocumentTitle) {
      if (sectionDescription) introParts.push(sectionDescription);
      introImages.push(...images);
    } else if (sectionDescription || cleanedItems.length > 0 || images.length > 0) {
      sections.push({
        title: normalizedHeading,
        description: sectionDescription,
        ...(cleanedItems.length > 0 ? { items: cleanedItems } : {}),
        ...(images.length > 0 ? { images } : {}),
      });
    }

    body = [];
    items = [];
    images = [];
  };

  description.split(/\r?\n/).forEach((line) => {
    const heading = line.match(/^\s*#{1,4}\s+(.+?)\s*$/);
    if (heading) {
      flushSection();
      currentTitle = heading[1];
      return;
    }

    const listItem = line.match(/^\s*(?:[-*+]|\d+\.)\s+(.+?)\s*$/);
    if (listItem) {
      items.push(listItem[1]);
      return;
    }

    const lineImages = extractMarkdownImages(line, projectTitle);
    if (lineImages.length > 0) {
      images.push(...lineImages);
    }

    const textWithoutImages = line.replace(/!\[[^\]]*\]\([^)]*\)/g, '').trim();
    if (textWithoutImages && !/^\s*---+\s*$/.test(textWithoutImages)) body.push(textWithoutImages);
  });
  flushSection();

  if (sections.length === 0) {
    const plainDescription = cleanMarkdownText(description);
    if (plainDescription) sections.push({ title: '상세 내용', description: plainDescription });
  }

  return { intro: introParts.join(' '), introImages, sections };
};

const findSectionText = (sections: CaseStudySection[], keywords: string[]): string | undefined =>
  sections.find((section) => keywords.some((keyword) => section.title.includes(keyword)))?.description;

const getProjectVisual = (project: PortfolioProject): PortfolioViewProject['visual'] => {
  const searchable = [project.title, project.category, project.description, ...project.technologies]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

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

export const toPortfolioViewProject = (
  project: PortfolioProject,
  priority = 100,
): PortfolioViewProject => {
  const parsed = parseCaseStudy(project.description, project.title);

  return {
    ...project,
    label: project.category || '프로젝트',
    summary: project.summary?.trim()
      || parsed.intro
      || parsed.sections[0]?.description
      || cleanMarkdownText(project.description),
    role: project.role?.trim()
      || findSectionText(parsed.sections, ['내 역할', '담당'])
      || '',
    outcome: project.outcome?.trim()
      || findSectionText(parsed.sections, ['검증과 결과', '구현 결과', '결과'])
      || '',
    caseStudy: parsed.sections,
    introImages: parsed.introImages,
    architecture: project.architecture?.filter(Boolean),
    visual: getProjectVisual(project),
    priority,
  };
};

export const getCuratedProjects = (remoteProjects: PortfolioProject[]): PortfolioViewProject[] => {
  return [...remoteProjects]
    .filter((project) => Boolean(project.id) && !project.isPrivate)
    .sort((a, b) => getCreatedAtTime(b) - getCreatedAtTime(a))
    .map((project, index) => toPortfolioViewProject(project, index + 1));
};

export const getFeaturedProjects = (remoteProjects: PortfolioProject[]): PortfolioViewProject[] =>
  getCuratedProjects(remoteProjects)
    .filter((project) => project.featured)
    .sort((a, b) => {
      const aOrder = a.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      const bOrder = b.featuredOrder ?? Number.MAX_SAFE_INTEGER;
      return aOrder - bOrder || a.priority - b.priority;
    })
    .slice(0, 3);

export const featuredProjects: PortfolioViewProject[] = [];
