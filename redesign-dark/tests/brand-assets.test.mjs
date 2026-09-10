import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import sharp from 'sharp';

const publicDirectory = new URL('../public/', import.meta.url);
const logo = readFileSync(new URL('picture/header-logo.png', publicDirectory));

test('header asset is a compact, transparent landscape logo', async () => {
  const metadata = await sharp(logo).metadata();
  assert.equal(metadata.width, 256);
  assert.ok(metadata.width > metadata.height);
  assert.equal(metadata.hasAlpha, true);
  assert.ok(logo.length < 50000);
});

for (const theme of ['light', 'dark']) {
  test(`${theme} favicon embeds the same logo with the correct color filter`, () => {
    const svg = readFileSync(new URL(`favicon-${theme}.svg`, publicDirectory), 'utf8');
    assert.ok(svg.includes(logo.toString('base64')));
    assert.ok(svg.includes('filter:brightness(0)}'));
    assert.ok(!svg.includes('href="http'));
    assert.ok(svg.includes('x="20" y="20" width="88" height="88"'));
    assert.ok(svg.includes('<rect width="128" height="128" rx="30" fill="#ffffff"/>'));
  });
}

test('ICO fallback contains valid 16, 32 and 48 pixel images', async () => {
  const ico = readFileSync(new URL('icon.ico', publicDirectory));
  assert.equal(ico.readUInt16LE(2), 1);
  assert.equal(ico.readUInt16LE(4), 3);
  for (const [index, size] of [16, 32, 48].entries()) {
    const entry = 6 + index * 16;
    const length = ico.readUInt32LE(entry + 8);
    const offset = ico.readUInt32LE(entry + 12);
    const metadata = await sharp(ico.subarray(offset, offset + length)).metadata();
    assert.equal(metadata.width, size);
    assert.equal(metadata.height, size);
    assert.equal(metadata.hasAlpha, true);
    const pixels = await sharp(ico.subarray(offset, offset + length)).ensureAlpha().raw().toBuffer();
    assert.equal(pixels[3], 0, 'Top-left padding must be transparent');
    assert.equal(pixels[pixels.length - 1], 0, 'Bottom-right padding must be transparent');
    const backgroundPixel = (size + Math.floor(size / 2)) * 4;
    assert.deepEqual([...pixels.subarray(backgroundPixel, backgroundPixel + 4)], [255, 255, 255, 255]);
  }
});

for (const stored of [null, 'light', 'dark']) {
  test(`initial favicon matches saved theme ${stored}`, () => {
    const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
    const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
    const root = { dataset: {}, style: {}, classList: { toggle() {} } };
    let favicon;
    vm.runInNewContext(script, {
      document: { documentElement: root, getElementById: () => ({ setAttribute: (_name, value) => { favicon = value; } }) },
      localStorage: { getItem: key => key === 'portfolio-theme' ? stored : null },
    });
    const theme = stored === 'light' ? 'light' : 'dark';
    assert.equal(root.dataset.theme, theme);
    assert.equal(favicon, `/favicon-${theme}.svg`);
  });
}
