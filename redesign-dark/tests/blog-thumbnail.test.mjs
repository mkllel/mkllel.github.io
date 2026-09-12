import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

const source = new URL('../src/components/BlogThumbnail.tsx', import.meta.url);

test('missing blog images preserve a thumbnail with an image-off icon', () => {
  const { default: BlogThumbnail } = loadTypeScript(source);
  for (const src of [undefined, '', '   ']) {
    const html = renderToStaticMarkup(createElement(BlogThumbnail, { src, title: 'Test' }));
    assert.match(html, /blog-list-item__image--empty/);
    assert.match(html, /lucide-image-off/);
    assert.match(html, /aria-label="Test 이미지 없음"/);
    assert.doesNotMatch(html, /<img /);
  }
});

test('existing blog images retain lazy loading and stable dimensions', () => {
  const { default: BlogThumbnail } = loadTypeScript(source);
  const html = renderToStaticMarkup(createElement(BlogThumbnail, { src: '/test.png', title: 'Test' }));
  assert.match(html, /src="\/test.png"/);
  assert.match(html, /loading="lazy"/);
  assert.match(html, /width="420" height="240"/);
  assert.doesNotMatch(html, /blog-list-item__image--empty/);
});
