import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

const SystemFlow = loadTypeScript(new URL('../src/components/ProjectSystemFlow.tsx', import.meta.url)).default;
const { toPortfolioDetailProject } = loadTypeScript(new URL('../src/data/portfolioDetailContent.ts', import.meta.url));

for (const contentClassName of ['site-container', 'admin-detail-preview__inner']) {
  test(`${contentClassName}: explanation follows all six steps within SYSTEM FLOW`, () => {
    const explanation = 'The API handles **requests** and returns results.';
    const project = toPortfolioDetailProject({
      title: 'Project', description: `${explanation}\n\n## Problem\nBody`,
      architecture: ['Request', 'Create task', 'Authenticate', 'Update state', 'Store', 'Download'],
      technologies: [], createdAt: '2026-09-10',
    });
    const html = renderToStaticMarkup(createElement(SystemFlow, {
      steps: project.architecture, description: project.introMarkdown, contentClassName,
    }));
    assert.equal((html.match(/<li>/g) || []).length, 6);
    assert.ok(html.includes('--flow-columns:6'));
    assert.equal((html.match(/class="architecture-description"/g) || []).length, 1);
    assert.ok(html.indexOf('SYSTEM FLOW') < html.indexOf('<ol'));
    assert.ok(html.indexOf('</ol>') < html.indexOf('The API handles'));
    assert.ok(html.indexOf('The API handles') < html.indexOf('</section>'));
    assert.ok(html.includes('<strong>requests</strong>'));
    assert.equal(project.caseStudy[0].title, 'Problem');
    assert.equal(project.caseStudy[0].markdown, 'Body');
  });
}

test('a flow without explanatory text has no empty description container', () => {
  const html = renderToStaticMarkup(createElement(SystemFlow, {
    steps: ['First', 'Second'], contentClassName: 'site-container',
  }));
  assert.ok(!html.includes('architecture-description'));
});

test('flow explanation keeps image enlargement support', () => {
  const html = renderToStaticMarkup(createElement(SystemFlow, {
    steps: ['First'], description: '![Diagram](/diagram.png)',
    contentClassName: 'site-container', onImageOpen: () => {},
  }));
  assert.ok(html.includes('data-project-image'));
  assert.ok(html.includes('aria-haspopup="dialog"'));
});
