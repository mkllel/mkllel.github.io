import assert from 'node:assert/strict';
import test from 'node:test';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

const { toPortfolioDetailProject } = loadTypeScript(new URL('../src/data/portfolioDetailContent.ts', import.meta.url));

function renderDetail(fields) {
  const project = toPortfolioDetailProject({
    id: 'test', title: 'Project', description: '## Content\nBody',
    technologies: [], createdAt: '2026-09-10', ...fields,
  });
  const states = [project, false, '', null];
  let cursor = 0;
  const Detail = loadTypeScript(new URL('../src/pages/PortfolioDetail.tsx', import.meta.url), {
    react: { ...React, useEffect() {}, useRef: () => ({ current: null }),
      useState: initial => [cursor < states.length ? states[cursor++] : initial, () => {}] },
    'react-router-dom': {
      useParams: () => ({ id: 'test' }),
      Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    },
    'firebase/firestore': {},
    '../utils/firebase': {},
    '../hooks/usePageMetadata': { usePageMetadata() {} },
  }).default;
  return renderToStaticMarkup(React.createElement(Detail));
}

test('detail places a plain-text caption after the cover and preserves enlargement', () => {
  const html = renderDetail({ imageUrl: '/cover.png', imageCaption: '  AI-generated <image>\nIllustration only.  ' });
  assert.match(html, /<figcaption>AI-generated &lt;image&gt;\nIllustration only\.<\/figcaption>/);
  assert.ok(html.indexOf('src="/cover.png"') < html.indexOf('<figcaption>'));
  assert.ok(html.includes('aria-haspopup="dialog"'));
});

for (const imageCaption of [undefined, '', '   ']) {
  test(`legacy or blank caption keeps the image without an empty caption: ${JSON.stringify(imageCaption)}`, () => {
    const html = renderDetail({ imageUrl: '/cover.png', imageCaption });
    assert.ok(html.includes('src="/cover.png"'));
    assert.ok(!html.includes('<figcaption>'));
  });
}

test('a caption alone does not create an empty cover', () => {
  const html = renderDetail({ imageCaption: 'Caption without image' });
  assert.ok(!html.includes('case-cover-section'));
  assert.ok(!html.includes('Caption without image'));
});
