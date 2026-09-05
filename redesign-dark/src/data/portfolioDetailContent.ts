import type { PortfolioProject } from '../utils/firebase';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { toString } from 'mdast-util-to-string';
import type { Root, RootContent } from 'mdast';
import { toPortfolioViewProject, type PortfolioViewProject } from './portfolioContent';

export interface CaseStudySection {
  title: string;
  description: string;
  markdown: string;
}

export interface PortfolioDetailProject extends PortfolioViewProject {
  caseStudy: CaseStudySection[];
  introMarkdown: string;
}

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

export const toPortfolioDetailProject = (
  project: PortfolioProject,
  priority = 100,
): PortfolioDetailProject => {
  const parsed = parseCaseStudy(project.description, project.title);

  return {
    ...toPortfolioViewProject(project, priority),
    summary: project.summary?.trim()
      ?? (parsed.intro
      || parsed.sections[0]?.description
      || cleanMarkdownText(project.description)),
    role: project.role?.trim()
      ?? findSectionText(parsed.sections, ['내 역할', '담당'])
      ?? '',
    outcome: project.outcome?.trim()
      ?? findSectionText(parsed.sections, ['검증과 결과', '구현 결과', '결과'])
      ?? '',
    caseStudy: parsed.sections,
    introMarkdown: parsed.introMarkdown,
  };
};
