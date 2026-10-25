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
  // 최상위에 해당하는 같은 깊이의 제목만 섹션으로 나눠 하위 제목과 코드 블록 안의 #을 보존한다.
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

  // 화면에서 번호를 붙이므로 1부터 연속된 작성 번호만 표시용 제목에서 제거한다.
  // 날짜/버전 번호, 하위 제목과 저장된 Markdown 원문은 변경하지 않는다.
  const numberedTitles = sections.map(section => /^(\d{1,2})\s*[.)·]\s+(.+)$/.exec(section.title));
  if (sections.length > 1 && numberedTitles.every((match, index) => match && Number(match[1]) === index + 1)) {
    sections.forEach((section, index) => { section.title = numberedTitles[index]![2]; });
  }

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
