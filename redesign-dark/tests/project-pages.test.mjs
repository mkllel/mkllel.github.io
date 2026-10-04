import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { decodePublicProjects, renderSitemap, validatePublicProjects } from '../scripts/public-projects.mjs';
import { loadTypeScript } from './load-typescript.mjs';

const { renderProjectPage } = loadTypeScript(new URL('../src/projectPages.tsx', import.meta.url));
const project = { id: 'public-id', title: 'Public <project> & Test', isPrivate: false,
  description: '## 1. Problem\nA **real** problem.\n\n## 2. Result\nVerified result.',
  summary: 'Subtitle\n\nSummary paragraph.', role: 'Developer', outcome: 'Result',
  technologies: ['Python', 'FastAPI'], createdAt: '2026-10-04',
  resourceLinks: [{ url: 'https://example.com/project.pdf' }],
};

test('static pages contain escaped per-project metadata and shared visible content without JavaScript', () => {
  const result = renderProjectPage([project], project.id);
  assert.equal(result.path, '/portfolio/public-id');
  assert.match(result.metadata, /Public &lt;project&gt; &amp; Test/);
  assert.match(result.metadata, /rel="canonical" href="https:\/\/mkllel.github.io\/portfolio\/public-id\/"/);
  assert.match(result.metadata, /name="robots" content="index, follow"/);
  assert.ok(!result.metadata.includes('noindex'));
  assert.match(result.body, /<h2>Problem<\/h2>/);
  assert.ok(result.body.includes('A <strong>real</strong> problem.'));
  assert.ok(result.body.includes('Subtitle\n\nSummary paragraph.'));
  assert.ok(result.body.includes('Python · FastAPI'));
  assert.ok(result.body.includes('프로젝트 PDF 보기'));
});

test('list links and sitemap share exactly the current public project IDs', () => {
  const projects = [project, { ...project, id: 'new-id', title: 'Newest' }];
  const list = renderProjectPage(projects);
  const sitemap = renderSitemap(projects);
  for (const item of projects) {
    assert.ok(list.body.includes(`href="/portfolio/${item.id}"`));
    assert.ok(sitemap.includes(`/portfolio/${item.id}/</loc>`));
  }
  assert.equal((sitemap.match(/<url>/g) || []).length, 4);
  assert.ok(!sitemap.includes('/admin'));
  assert.ok(!sitemap.includes('/blog'));
  assert.equal((renderSitemap([]).match(/<url>/g) || []).length, 2);
});

test('private projects, duplicate IDs and unsafe output paths fail closed', () => {
  for (const projects of [[{ ...project, isPrivate: true }], [{ ...project, isPrivate: undefined }],
    [{ ...project, id: '../escape' }], [project, project]]) {
    assert.throws(() => validatePublicProjects(projects));
  }
  assert.throws(() => renderProjectPage([{ ...project, isPrivate: true }], project.id));
  assert.throws(() => renderProjectPage([project], 'missing'));
});

test('public snapshot decoder preserves paragraphs and drops unrelated fields', () => {
  const rows = [{ document: { name: 'projects/test/documents/portfolioProjects/public-id', fields: {
    title: { stringValue: 'Title' }, description: { stringValue: 'Body\n\nMore' },
    technologies: { arrayValue: { values: [{ stringValue: 'Python' }] } },
    isPrivate: { booleanValue: false }, createdAt: { timestampValue: '2026-10-04T00:00:00Z' },
    adminNotes: { stringValue: 'not for static HTML' },
  } } }];
  const [decoded] = decodePublicProjects(rows);
  assert.equal(decoded.description, 'Body\n\nMore');
  assert.equal(decoded.createdAt, '2026-10-04T00:00:00Z');
  assert.ok(!Object.hasOwn(decoded, 'adminNotes'));
  assert.throws(() => decodePublicProjects({ error: 'failure' }));
  assert.throws(() => decodePublicProjects([{ error: 'failure' }]));
});

test('summary paragraphs are preserved on both cards and detail/preview pages', () => {
  const css = readFileSync(new URL('../src/App.css', import.meta.url), 'utf8');
  for (const selector of ['.project-card__body > p', '.case-hero__summary']) {
    const block = css.slice(css.indexOf(`${selector} {`)).split('}')[0];
    assert.ok(block.includes('white-space: pre-line;'));
  }
});
