export const SITE_URL = 'https://mkllel.github.io';

export function validatePublicProjects(projects) {
  if (!Array.isArray(projects)) throw new Error('Expected a public project array');
  const seen = new Set();
  for (const project of projects) {
    if (!project || project.isPrivate !== false || !/^[A-Za-z0-9_-]+$/.test(project.id || '')
      || seen.has(project.id) || typeof project.title !== 'string' || !project.title.trim()
      || typeof project.description !== 'string' || !Array.isArray(project.technologies)
      || project.technologies.some(value => typeof value !== 'string')) {
      throw new Error('Invalid, duplicate or non-public project in the build snapshot');
    }
    seen.add(project.id);
  }
  return projects;
}

export function renderSitemap(projects) {
  validatePublicProjects(projects);
  const paths = ['/', '/portfolio/', ...projects.map(project => `/portfolio/${project.id}/`)];
  return '<?xml version="1.0" encoding="UTF-8"?>\n'
    + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + paths.map(path => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')
    + '\n</urlset>\n';
}

export function decodeFirestoreValue(value) {
  if ('stringValue' in value) return value.stringValue;
  if ('booleanValue' in value) return value.booleanValue;
  if ('integerValue' in value) return Number(value.integerValue);
  if ('doubleValue' in value) return value.doubleValue;
  if ('timestampValue' in value) return value.timestampValue;
  if ('nullValue' in value) return null;
  if ('arrayValue' in value) return (value.arrayValue.values || []).map(decodeFirestoreValue);
  if ('mapValue' in value) return Object.fromEntries(Object.entries(value.mapValue.fields || {})
    .map(([key, entry]) => [key, decodeFirestoreValue(entry)]));
  throw new Error('Unsupported public project field');
}

export function decodePublicProjects(rows) {
  if (!Array.isArray(rows) || rows.some(row => row.error)) throw new Error('Invalid Firestore response');
  const allowed = ['title', 'description', 'summary', 'role', 'outcome', 'architecture', 'imageUrl',
    'imageCaption', 'galleryImages', 'resourceLinks', 'technologies', 'link', 'category',
    'featured', 'featuredOrder', 'isPrivate', 'createdAt', 'updatedAt'];
  const projects = rows.filter(row => row.document).map(({ document }) => ({
    id: document.name.split('/').at(-1),
    ...Object.fromEntries(allowed.filter(key => document.fields[key] !== undefined)
      .map(key => [key, decodeFirestoreValue(document.fields[key])])),
  }));
  return validatePublicProjects(projects).sort((a, b) => a.id.localeCompare(b.id));
}
