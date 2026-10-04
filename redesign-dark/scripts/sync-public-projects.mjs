import { mkdir, rename, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';
import { decodePublicProjects, renderSitemap } from './public-projects.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env };
const projectId = env.VITE_FIREBASE_PROJECT_ID || 'my-portfolio-2ea55';
// Anonymous, read-only query: private projects and blog posts are never exported.
const response = await fetch(
  `https://firestore.googleapis.com/v1/projects/${encodeURIComponent(projectId)}/databases/(default)/documents:runQuery`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ structuredQuery: {
      from: [{ collectionId: 'portfolioProjects' }],
      where: { fieldFilter: { field: { fieldPath: 'isPrivate' }, op: 'EQUAL', value: { booleanValue: false } } },
    } }),
    signal: AbortSignal.timeout(30_000),
  },
);
if (!response.ok) throw new Error(`Public project sync failed: HTTP ${response.status}`);
const projects = decodePublicProjects(await response.json());
const directory = new URL('../content/', import.meta.url);
await mkdir(directory, { recursive: true });
const temporary = new URL('public-projects.json.tmp', directory);
await writeFile(temporary, JSON.stringify({ fetchedAt: new Date().toISOString(), projects }, null, 2) + '\n');
await rename(temporary, new URL('public-projects.json', directory));
await writeFile(new URL('../public/sitemap.xml', import.meta.url), renderSitemap(projects));
console.log(`Saved ${projects.length} public projects and refreshed the sitemap. No Firebase writes.`);
