import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import test from 'node:test';
import ts from 'typescript';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const require = createRequire(import.meta.url);
function loadSource(path) {
  const source = readFileSync(new URL(path, import.meta.url), 'utf8');
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022,
      jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  });
  const exports = {};
  vm.runInNewContext(outputText, { exports, require });
  return exports;
}
const { toPortfolioViewProject } = loadSource('../src/data/portfolioContent.ts');
const Markdown = loadSource('../src/components/ProjectMarkdown.tsx').default;
const view = (description) => toPortfolioViewProject({
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
