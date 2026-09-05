import type { PortfolioProject } from '../utils/firebase';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { toString } from 'mdast-util-to-string';
import type { Root, RootContent } from 'mdast';

export const CHILDCARE_PROJECT_ID = 'vJUDdRO6unChbvQUqYho';

export interface CaseStudySection {
  title: string;
  description: string;
  markdown: string;
}

export interface PortfolioViewProject extends PortfolioProject {
  label: string;
  summary: string;
  role: string;
  outcome: string;
  caseStudy: CaseStudySection[];
  introMarkdown: string;
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

const markdownParser = unified().use(remarkParse).use(remarkGfm);
const plainText = (nodes: RootContent[]): string =>
  nodes.map(node => toString(node)).join(' ').replace(/\s+/g, ' ').trim();
const cleanMarkdownText = (value: string): string =>
  plainText((markdownParser.parse(value) as Root).children);

const parseCaseStudy = (description: string, projectTitle: string): {
  intro: string;
  introMarkdown: string;
  sections: CaseStudySection[];
} => {
  const sections: CaseStudySection[] = [];
  const tree = markdownParser.parse(description) as Root;
  const slice = (node: RootContent) => description.slice(node.position!.start.offset, node.position!.end.offset);
  const isDefinition = (node: RootContent) => node.type === 'definition' || node.type === 'footnoteDefinition';
  const definitions = tree.children.filter(isDefinition).map(slice).join('\n\n');
  const content = tree.children.filter(node => !isDefinition(node));
  const first = content[0];
  if (first?.type === 'heading' && toString(first).trim() === cleanMarkdownText(projectTitle)) {
    content.shift();
  }
  // Split only at peer headings; nested headings and fenced code remain intact.
  const sectionDepth = Math.min(...content.filter(node => node.type === 'heading').map(node => node.depth));
  const markdown = (nodes: RootContent[]) => [nodes.map(slice).join('\n\n'), definitions].filter(Boolean).join('\n\n');
  let intro: RootContent[] = [];
  let currentTitle = '';
  let body: RootContent[] = [];

  const flushSection = () => {
    if (!currentTitle) {
      intro = body;
    } else {
      sections.push({
        title: currentTitle,
        description: plainText(body),
        markdown: markdown(body),
      });
    }

    body = [];
  };

  content.forEach((node) => {
    if (node.type === 'heading' && node.depth === sectionDepth) {
      flushSection();
      currentTitle = toString(node);
      return;
    }
    body.push(node);
  });
  flushSection();

  if (sections.length === 0 && intro.length > 0) {
    sections.push({ title: '상세 내용', description: plainText(intro), markdown: markdown(intro) });
    return { intro: plainText(intro), introMarkdown: '', sections };
  }

  return { intro: plainText(intro), introMarkdown: intro.length ? markdown(intro) : '', sections };
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
    introMarkdown: parsed.introMarkdown,
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
