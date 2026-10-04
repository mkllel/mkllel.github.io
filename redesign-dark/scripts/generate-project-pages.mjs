import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join } from 'node:path';
import { build } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { renderSitemap, validatePublicProjects } from './public-projects.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const { projects } = JSON.parse(await readFile(new URL('../content/public-projects.json', import.meta.url), 'utf8'));
validatePublicProjects(projects);
const dist = new URL('../dist/', import.meta.url);
const template = await readFile(new URL('index.html', dist), 'utf8');
const start = '<!-- page-metadata:start -->';
const end = '<!-- page-metadata:end -->';
if (!template.includes(start) || !template.includes(end) || !template.includes('<div id="root"></div>')) {
  throw new Error('Built HTML template is missing project page slots');
}
// Build a temporary Node renderer; it opens no server and is never published.
const temporary = await mkdtemp(join(root, 'node_modules/.project-pages-'));
try {
  await build({
    root, configFile: false, plugins: [react()], logLevel: 'warn',
    ssr: {
      noExternal: true,
      external: ['react', 'react/jsx-runtime', 'react/jsx-dev-runtime', 'react-dom', 'react-dom/server'],
    },
    build: {
      ssr: join(root, 'src/projectPages.tsx'), outDir: temporary, copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: 'renderer.mjs', inlineDynamicImports: true } },
    },
  });
  const { renderProjectPage } = await import(pathToFileURL(join(temporary, 'renderer.mjs')).href);
  const pages = [renderProjectPage(projects), ...projects.map(project => renderProjectPage(projects, project.id))];
  // This directory is exclusively generated, so deleted/private projects disappear on the next build.
  await rm(new URL('portfolio/', dist), { recursive: true, force: true });
  for (const page of pages) {
    const html = (template.slice(0, template.indexOf(start)) + page.metadata
      + template.slice(template.indexOf(end) + end.length))
      .replace('<div id="root"></div>', () => `<div id="root">${page.body}</div>`);
    const directory = new URL(`${page.path.slice(1)}/`, dist);
    await mkdir(directory, { recursive: true });
    await writeFile(new URL('index.html', directory), html);
  }
  await writeFile(new URL('sitemap.xml', dist), renderSitemap(projects));
  console.log(`Generated ${pages.length} static project pages with metadata, content and sitemap.`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
