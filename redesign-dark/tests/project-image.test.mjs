import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

const src = 'https://example.com/original.png';
const metadata = { src: '/detail.webp', srcSet: '/small.webp 480w, /detail.webp 1600w', width: 3840, height: 2200 };
function harness() {
  let failed;
  const Component = loadTypeScript(new URL('../src/components/ProjectImage.tsx', import.meta.url), {
    react: { useState: () => [failed, value => { failed = value; }] },
    '../data/projectThumbnails': { projectDetailImages: { [src]: metadata } },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }) },
  }).default;
  return (props = {}) => Component({ src, alt: 'Image', ...props });
}

test('detail image loads optimized variants lazily but retains original viewer source and dimensions', () => {
  const render = harness();
  const result = render({ onOpen() {} });
  const image = result.props.children;
  assert.equal(result.type, 'button');
  assert.equal(image.props.src, '/detail.webp');
  assert.equal(image.props.loading, 'lazy');
  assert.equal(image.props['data-original-src'], src);
  assert.equal(image.props['data-original-width'], 3840);
  assert.equal(image.props.width, 3840);
  assert.equal(image.props.height, 2200);
});

test('failed detail variant falls back to the original only once', () => {
  const render = harness();
  render().props.onError();
  const image = render();
  assert.equal(image.props.src, src);
  assert.equal(image.props.srcSet, undefined);
  assert.equal(image.props.onError, undefined);
});

test('unknown images retain their URL, authored sizes and explicit loading priority', () => {
  const image = harness()({ src: '/new.png', width: 800, height: 600, loading: 'eager' });
  assert.equal(image.props.src, '/new.png');
  assert.equal(image.props.width, 800);
  assert.equal(image.props.height, 600);
  assert.equal(image.props.loading, 'eager');
});
