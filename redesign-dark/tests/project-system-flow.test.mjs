import assert from 'node:assert/strict';
import test from 'node:test';
import { Children, createElement, isValidElement } from 'react';
import { readFileSync } from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

const SystemFlow = loadTypeScript(new URL('../src/components/ProjectSystemFlow.tsx', import.meta.url)).default;
const { toPortfolioDetailProject } = loadTypeScript(new URL('../src/data/portfolioDetailContent.ts', import.meta.url));
const { renderProjectPage } = loadTypeScript(new URL('../src/projectPages.tsx', import.meta.url));
const { projects } = JSON.parse(readFileSync(new URL('../content/public-projects.json', import.meta.url), 'utf8'));
const homelab = projects.find(project => project.id === 'gvxw5JAhaTm9skN4JsOu');

function findElement(node, predicate) {
  if (!isValidElement(node)) return;
  if (predicate(node)) return node;
  return Children.toArray(node.props.children).map(child => findElement(child, predicate)).find(Boolean);
}

function listStructure(list) {
  return Children.toArray(list.props.children).map(element => {
    const item = typeof element.type === 'function' ? element.type(element.props) : element;
    const children = Children.toArray(item.props.children);
    const label = children.find(child => child.type === 'div').props.children.props.children;
    const nested = children.find(child => child.type === 'ul');
    return { label, ...(nested ? { children: listStructure(nested) } : {}) };
  });
}

for (const contentClassName of ['site-container', 'admin-detail-preview__inner']) {
  test(`${contentClassName}: home lab VMs are siblings and only operations contains services`, () => {
    const steps = [...homelab.architecture];
    const props = {projectId: homelab.id, steps, contentClassName, description: 'Flow explanation'};
    const rendered = SystemFlow(props);
    const tree = findElement(rendered, node => node.props.className === 'architecture-tree');
    assert.ok(tree);
    assert.deepEqual(listStructure(tree), [{label: steps[0], children: [
      {label: steps[1]},
      {label: steps[2], children: [{label: steps[3], children: [{label: steps[4]}]}]},
    ]}]);
    const html = renderToStaticMarkup(rendered);
    assert.doesNotMatch(html, /<ol|class="architecture-flow"|<span>0[1-5]<\/span>/);
    assert.ok(html.lastIndexOf('</ul>') < html.indexOf('Flow explanation'));
    assert.deepEqual(steps, homelab.architecture);
  });
}

test('non-home-lab projects and edited structures keep all authored steps in the normal flow', () => {
  for (const props of [
    { projectId: 'another-project', steps: homelab.architecture },
    { steps: homelab.architecture },
    { projectId: homelab.id, steps: ['First', 'Second'] },
    { projectId: homelab.id, steps: [...homelab.architecture, 'New service'] },
    { projectId: homelab.id, steps: [homelab.architecture[0], homelab.architecture[2], homelab.architecture[1], ...homelab.architecture.slice(3)] },
  ]) {
    const html = renderToStaticMarkup(createElement(SystemFlow, {...props, contentClassName: 'site-container'}));
    assert.match(html, /<ol class="architecture-flow"/);
    assert.doesNotMatch(html, /architecture-tree/);
    assert.equal((html.match(/<li>/g) || []).length, props.steps.length);
    for (const step of props.steps) assert.ok(html.includes(step));
  }
});

test('static home lab detail uses the same hierarchy without changing the saved project', () => {
  const original = JSON.stringify(homelab);
  const html = renderProjectPage(projects, homelab.id).body;
  assert.match(html, /class="architecture-tree"/);
  assert.doesNotMatch(html, /<ol class="architecture-flow"/);
  assert.equal(JSON.stringify(homelab), original);
  const childcare = projects.find(project => project.id === 'vJUDdRO6unChbvQUqYho');
  const childcareHtml = renderProjectPage(projects, childcare.id).body;
  assert.match(childcareHtml, /<ol class="architecture-flow"/);
  assert.doesNotMatch(childcareHtml, /architecture-tree/);
});

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
