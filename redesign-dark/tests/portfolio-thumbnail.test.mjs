import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync, existsSync } from 'node:fs';
import sharp from 'sharp';
import { loadTypeScript } from './load-typescript.mjs';

const source = 'https://example.com/original.png';
const optimized = { src: '/small.webp', srcSet: '/small.webp 480w, /large.webp 960w' };

function harness() {
  let state = null;
  const Thumbnail = loadTypeScript(new URL('../src/components/PortfolioThumbnail.tsx', import.meta.url), {
    react: { useState: () => [state, value => { state = value; }] },
    '../data/projectThumbnails': { default: { [source]: optimized }, __esModule: true },
    'react/jsx-runtime': { jsx: (type, props) => ({ type, props }) },
  }).default;
  return (props = {}) => Thumbnail({ src: source, alt: 'Project', split: false, ...props }).props;
}

test('known image uses responsive variants and preserves lazy loading', () => {
  const render = harness();
  const image = render();
  assert.equal(image.src, optimized.src);
  assert.equal(image.srcSet, optimized.srcSet);
  assert.equal(image.loading, 'lazy');
  assert.equal(image.alt, 'Project');
  assert.match(image.sizes, /578px$/);
  assert.match(render({ split: true }).sizes, /289px$/);
});

test('unknown and failed thumbnails fall back to originals without retry loops', () => {
  const render = harness();
  const unknown = render({ src: 'https://example.com/new.png' });
  assert.equal(unknown.src, 'https://example.com/new.png');
  assert.equal(unknown.srcSet, undefined);
  assert.equal(unknown.onError, undefined);
  render().onError();
  const fallback = render();
  assert.equal(fallback.src, source);
  assert.equal(fallback.srcSet, undefined);
  assert.equal(fallback.onError, undefined);
});

test('generated manifest points to existing WebP files of the advertised width', async () => {
  const manifest = loadTypeScript(new URL('../src/data/projectThumbnails.ts', import.meta.url)).default;
  for (const value of Object.values(manifest)) {
    assert.ok(value.srcSet.startsWith(`${value.src} `));
    for (const candidate of value.srcSet.split(', ')) {
      const [path, descriptor] = candidate.split(' ');
      const file = new URL(`../public${path}`, import.meta.url);
      assert.ok(existsSync(file), path);
      const metadata = await sharp(readFileSync(file)).metadata();
      assert.equal(metadata.format, 'webp');
      assert.equal(metadata.width, Number.parseInt(descriptor));
      assert.ok(metadata.width <= 960);
    }
  }
});
