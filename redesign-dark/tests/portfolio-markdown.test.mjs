import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

const { toPortfolioDetailProject } = loadTypeScript(new URL('../src/data/portfolioDetailContent.ts', import.meta.url));
const { toPortfolioViewProject, getFeaturedProjects } = loadTypeScript(new URL('../src/data/portfolioContent.ts', import.meta.url));
const Markdown = loadTypeScript(new URL('../src/components/ProjectMarkdown.tsx', import.meta.url)).default;
const view = (description) => toPortfolioDetailProject({
  id: 'test', title: 'Project', description, technologies: [], createdAt: '2026-09-05',
});
const html = (markdown) => renderToStaticMarkup(createElement(Markdown, null, markdown));

test('paragraphs, lists, links and images retain their authored order', () => {
  const doc = view('## Steps\nFirst **paragraph**\n\n- first item\n\nSecond paragraph\n\n![Example](/picture/myProfile_New.png)\n\n- second item\n\n[Docs](https://example.com)');
  const result = html(doc.caseStudy[0].markdown);
  const fragments = ['First <strong>paragraph</strong>', 'first item', 'Second paragraph', '<img ', 'second item', '<a href="https://example.com">Docs</a>'];
  let previous = -1;
  for (const fragment of fragments) {
    const index = result.indexOf(fragment);
    assert.ok(index > previous, fragment);
    previous = index;
  }
});

test('code blocks preserve line breaks, indentation, underscores and heading-like content', () => {
  const code = 'Host\n  VM_1\n  VM_2\n## Not a section\n- not a list';
  const doc = view('## Structure\n```text\n' + code + '\n```');
  assert.equal(doc.caseStudy.length, 1);
  assert.ok(html(doc.caseStudy[0].markdown).includes(code));
});

test('numbered lists, nesting, tasks, quotes and tables render semantically', () => {
  const doc = view('## Details\n3. third\n   - nested\n4. fourth\n\n- [x] done\n\n> quoted\n\n| A | B |\n| --- | --- |\n| one | two |');
  const result = html(doc.caseStudy[0].markdown);
  for (const fragment of ['<ol start="3">', '<ul>', 'nested', 'type="checkbox"', '<blockquote>', '<table>', '<th>A</th>']) {
    assert.ok(result.includes(fragment), fragment);
  }
});

test('peer headings become numbered sections while nested headings stay in place', () => {
  const doc = view('# Project\nIntro\n\n## First\nBody\n\n### Nested\nMore\n\n## Second\nEnd');
  assert.deepEqual(Array.from(doc.caseStudy, section => section.title), ['First', 'Second']);
  assert.ok(html(doc.caseStudy[0].markdown).includes('<h3>Nested</h3>'));
  assert.equal(doc.introMarkdown, 'Intro');
});

test('introductory lists and unheaded documents do not lose or duplicate content', () => {
  const doc = view('# Project\n- intro item\n\n## Details\nBody');
  assert.ok(html(doc.introMarkdown).includes('<li>intro item</li>'));
  const plain = view('First\n\n- item\n\nLast');
  assert.equal(plain.caseStudy.length, 1);
  assert.equal(plain.introMarkdown, '');
  assert.ok(html(plain.caseStudy[0].markdown).includes('<li>item</li>'));
});

test('reference links and images resolve across section boundaries', () => {
  const doc = view('## One\n[Docs][ref]\n\n## Two\n![Image][pic]\n\n[ref]: https://example.com/docs\n[pic]: /image.png');
  assert.ok(html(doc.caseStudy[0].markdown).includes('href="https://example.com/docs"'));
  assert.ok(html(doc.caseStudy[1].markdown).includes('src="/image.png"'));
});

test('unsafe links and raw HTML cannot become executable content', () => {
  const doc = view('## Security\n[Bad](javascript:alert)\n\n<script>alert(1)</script>');
  const result = html(doc.caseStudy[0].markdown);
  assert.ok(!result.includes('href="javascript:'));
  assert.ok(!result.includes('<script>'));
});

test('summary extraction retains meaningful underscores and code names', () => {
  const doc = view('## Details\nUse `restart_policy` and **VM_1**.');
  assert.ok(doc.summary.includes('restart_policy'));
  assert.ok(doc.summary.includes('VM_1'));
});

test('explicitly cleared fields stay blank in both cards and detail views', () => {
  const project = { title: 'Project', description: '## 담당\nOld role\n\n## 결과\nOld outcome',
    summary: '', role: '', outcome: '', architecture: [], technologies: [], createdAt: '2026-09-05' };
  for (const convert of [toPortfolioViewProject, toPortfolioDetailProject]) {
    const result = convert(project);
    assert.equal(result.summary, '');
    assert.equal(result.role, '');
    assert.equal(result.outcome, '');
    assert.equal(result.architecture.length, 0);
  }
});

test('lightweight cards retain saved metadata, featured order and privacy', () => {
  const make = (id, order, isPrivate = false) => ({ id, title: id, description: 'Body',
    summary: 'Saved summary', role: 'Saved role', technologies: [], createdAt: '2026-09-05',
    featured: true, featuredOrder: order, isPrivate });
  const cards = getFeaturedProjects([make('third', 3), make('hidden', 0, true), make('first', 1), make('second', 2), make('fourth', 4)]);
  assert.deepEqual(Array.from(cards, x => x.id), ['first', 'second', 'third']);
  assert.equal(cards[0].summary, 'Saved summary');
  assert.equal(cards[0].role, 'Saved role');
  assert.equal(Object.hasOwn(cards[0], 'caseStudy'), false);
});
