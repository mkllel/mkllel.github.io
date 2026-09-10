import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

const source = new URL('../src/components/StackTicker.tsx', import.meta.url);

test('ticker exposes one accessible stack list and hides the looping duplicate', () => {
  const { default: StackTicker } = loadTypeScript(source);
  const html = renderToStaticMarkup(createElement(StackTicker));
  assert.equal((html.match(/<ul /g) || []).length, 2);
  assert.equal((html.match(/<ul [^>]*aria-hidden="true"/g) || []).length, 1);
  const expectedStacks = ['Python', 'FastAPI', 'Selenium', 'SQLAlchemy', 'PostgreSQL',
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Docker', 'Linux', 'AWS', 'Proxmox', 'MCP', 'Git'];
  assert.equal((html.match(/<li>/g) || []).length, 32);
  for (const name of expectedStacks) {
    assert.equal((html.match(new RegExp(`<span>${name}</span>`, 'g')) || []).length, 2);
  }
  assert.doesNotMatch(html, /<button/);
});
