import { writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/generate-brand-assets.mjs <source.png>');

const publicDirectory = new URL('../public/', import.meta.url);
const logo = await sharp(source).trim({ threshold: 10 }).resize({ width: 256, withoutEnlargement: true }).png().toBuffer();
await writeFile(new URL('picture/header-logo.png', publicDirectory), logo);

const embeddedImage = `data:image/png;base64,${logo.toString('base64')}`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><style>image{filter:brightness(0)}</style><rect width="128" height="128" rx="30" fill="#ffffff"/><image x="20" y="20" width="88" height="88" href="${embeddedImage}"/></svg>\n`;
for (const theme of ['light', 'dark']) {
  await writeFile(new URL(`favicon-${theme}.svg`, publicDirectory), svg);
}

// PNG-backed ICO entries provide a fallback for browsers without SVG favicons.
const sizes = [16, 32, 48];
const images = [];
for (const size of sizes) {
  images.push(await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer());
}
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index];
  header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(new URL('icon.ico', publicDirectory), Buffer.concat([header, ...images]));
console.log(`Generated header logo (${logo.length} bytes), themed favicons and ICO fallback.`);
