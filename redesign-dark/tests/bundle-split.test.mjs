import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'vite';

test('app shell, Home and Portfolio static imports exclude the Markdown parser and renderer', async () => {
  const result = await build({ logLevel: 'silent', build: { write: false } });
  const chunks = result.output.filter(item => item.type === 'chunk');
  const byName = new Map(chunks.map(chunk => [chunk.fileName, chunk]));
  function dependencies(chunk, seen = new Set()) {
    if (seen.has(chunk)) return seen;
    seen.add(chunk);
    for (const name of chunk.imports) {
      if (byName.has(name)) dependencies(byName.get(name), seen);
    }
    return seen;
  }
  const markdownModule = /portfolioDetailContent\.ts|ProjectMarkdown\.tsx|node_modules\/(?:unified|remark-parse|remark-gfm|react-markdown|micromark)\//;
  for (const page of ['index.html', 'src/pages/Home.tsx', 'src/pages/Portfolio.tsx']) {
    const entry = chunks.find(chunk => chunk.facadeModuleId?.endsWith(`/${page}`));
    assert.ok(entry, `${page} entry exists`);
    const modules = [...dependencies(entry)].flatMap(chunk => Object.keys(chunk.modules));
    assert.deepEqual(modules.filter(id => markdownModule.test(id)), [], `${page} must stay lightweight`);
  }
  for (const page of ['PortfolioDetail', 'AdminRoute']) {
    const entry = chunks.find(chunk => chunk.facadeModuleId?.endsWith(`/pages/${page}.tsx`));
    assert.ok(entry);
    const modules = [...dependencies(entry)].flatMap(chunk => Object.keys(chunk.modules));
    assert.ok(modules.some(id => id.endsWith('/data/portfolioDetailContent.ts')));
  }
});
