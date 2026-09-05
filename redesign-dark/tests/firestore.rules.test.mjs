import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { initializeApp, deleteApp } from 'firebase/app';
import { loadTypeScript } from './load-typescript.mjs';
import * as firestore from 'firebase/firestore';
import {
  collection, connectFirestoreEmulator, deleteDoc, deleteField, doc,
  getDoc, getDocs, getFirestore, query, serverTimestamp, setDoc,
  setLogLevel, terminate, updateDoc, where, writeBatch,
} from 'firebase/firestore';

// Require a loopback emulator and a demo project; never send test writes to production.
const projectId = 'demo-portfolio-rules';
const address = process.env.FIRESTORE_EMULATOR_HOST;
assert.match(address ?? '', /^(127\.0\.0\.1|localhost):\d+$/,
  'Run with Firebase emulators:exec and --project demo-portfolio-rules');
const [host, port] = address.split(':');
const clients = [];
const bootstrapUid = 'KtZLKuzl56QzPLiFVRVfovWVapz2';
setLogLevel('silent');

function client(name, uid, claims = {}) {
  const app = initializeApp({ projectId, apiKey: 'emulator-only' }, name);
  const db = getFirestore(app);
  connectFirestoreEmulator(db, host, Number(port), uid
    ? { mockUserToken: { sub: uid, ...claims } }
    : {});
  clients.push({ app, db });
  return db;
}

const admin = client('bootstrap', bootstrapUid);
const delegate = client('delegate', 'registered-admin');
const visitor = client('visitor');
const member = client('member', 'ordinary-user');
const claimOnly = client('claim-only', 'unregistered-admin', { admin: true });
const operations = loadTypeScript(new URL('../src/utils/firebaseAdmin.ts', import.meta.url), {
  './firebase': { app: clients[0].app, db: admin },
  'firebase/firestore': firestore,
  'firebase/storage': { getStorage: () => ({}) },
});
const project = (db, id) => doc(db, 'portfolioProjects', id);
const denied = (promise) => assert.rejects(promise, { code: 'permission-denied' });
const fields = {
  title: 'Test project', description: 'Test description',
  summary: 'Summary', role: 'Backend', outcome: 'Result',
  architecture: ['API', 'Database'], technologies: ['Python', 'Docker'],
  imageUrl: '', galleryImages: [{ url: 'https://example.com/image.png', alt: 'Test' }],
  resourceLinks: [{ url: 'https://example.com/project.pdf', label: 'PDF' }],
  githubUrl: '', liveUrl: '', link: '', category: 'Backend',
  featured: true, featuredOrder: 3, isPrivate: false,
  createdAt: '2026-09-05T00:00:00Z', updatedAt: '2026-09-05T00:00:00Z',
};

before(async () => {
  await setDoc(doc(admin, 'admins', 'registered-admin'), { role: 'admin' });
  await setDoc(project(admin, 'public'), fields);
  await setDoc(project(admin, 'private'), { ...fields, isPrivate: true });
  const { isPrivate: _visibility, ...legacy } = fields;
  await setDoc(project(admin, 'legacy'), legacy);
});

after(async () => {
  for (const { app, db } of clients) {
    await terminate(db);
    await deleteApp(app);
  }
});

test('public projects can be read and queried without login', async () => {
  assert.equal((await getDoc(project(visitor, 'public'))).data().title, fields.title);
  const result = await getDocs(query(collection(visitor, 'portfolioProjects'),
    where('isPrivate', '==', false)));
  assert.ok(result.docs.some((entry) => entry.id === 'public'));
  assert.ok(result.docs.every((entry) => entry.data().isPrivate === false));
});

test('private and legacy projects are denied to visitors and ordinary users', async () => {
  for (const db of [visitor, member, claimOnly]) {
    await denied(getDoc(project(db, 'private')));
    await denied(getDoc(project(db, 'legacy')));
    await denied(getDocs(collection(db, 'portfolioProjects')));
  }
});

test('bootstrap and registered admins can read private projects', async () => {
  for (const db of [admin, delegate]) {
    assert.equal((await getDoc(project(db, 'private'))).data().isPrivate, true);
    assert.ok((await getDocs(collection(db, 'portfolioProjects'))).size >= 3);
  }
});

test('current form fields support create, edit, privacy, order and deletion', async () => {
  for (const [index, db] of [admin, delegate].entries()) {
    const ref = project(db, `form-${index}`);
    await setDoc(ref, fields);
    await updateDoc(ref, { ...fields, id: ref.id, isPrivate: true });
    await denied(getDoc(project(visitor, ref.id)));
    await updateDoc(ref, { isPrivate: false });
    assert.equal((await getDoc(project(visitor, ref.id))).data().isPrivate, false);
    const batch = writeBatch(db);
    batch.update(ref, { featuredOrder: 1, updatedAt: '2026-09-05T01:00:00Z' });
    await batch.commit();
    assert.equal((await getDoc(ref)).data().featuredOrder, 1);
    await updateDoc(ref, { featured: false, featuredOrder: deleteField(), link: deleteField() });
    await deleteDoc(ref);
    assert.equal((await getDoc(ref)).exists(), false);
  }
});

test('non-admin users cannot create, modify, publish or delete projects', async () => {
  for (const db of [visitor, member, claimOnly]) {
    await denied(setDoc(project(db, 'forbidden'), fields));
    await denied(updateDoc(project(db, 'public'), { title: 'Changed' }));
    await denied(updateDoc(project(db, 'private'), { isPrivate: false }));
    await denied(deleteDoc(project(db, 'public')));
  }
});

test('only bootstrap admin can grant or revoke administrator access', async () => {
  for (const db of [visitor, member, delegate, claimOnly]) {
    await denied(setDoc(doc(db, 'admins', 'ordinary-user'), { role: 'admin' }));
    await denied(deleteDoc(doc(db, 'admins', 'registered-admin')));
  }
  await setDoc(doc(admin, 'admins', 'temporary-admin'), { role: 'admin' });
  await deleteDoc(doc(admin, 'admins', 'temporary-admin'));
});

test('blog reads, queries and writes are admin-only', async () => {
  const data = { title: 'Blog', content: 'Body', image: '', category: '',
    tags: [], createdAt: serverTimestamp(), updatedAt: serverTimestamp() };
  const ref = doc(admin, 'blogPosts', 'test-blog');
  await setDoc(ref, data);
  await updateDoc(ref, { id: ref.id, content: 'Updated', updatedAt: serverTimestamp() });
  for (const db of [admin, delegate]) {
    assert.equal((await getDoc(doc(db, 'blogPosts', ref.id))).data().content, 'Updated');
    assert.ok((await getDocs(collection(db, 'blogPosts'))).size > 0);
  }
  for (const db of [visitor, member, claimOnly]) {
    await denied(getDoc(doc(db, 'blogPosts', ref.id)));
    await denied(getDocs(collection(db, 'blogPosts')));
    await denied(setDoc(doc(db, 'blogPosts', 'forbidden'), data));
    await denied(updateDoc(doc(db, 'blogPosts', ref.id), { content: 'Changed' }));
    await denied(deleteDoc(doc(db, 'blogPosts', ref.id)));
  }
  await deleteDoc(ref);
});

test('real project persistence supports unnamed links, cleared fields and partial updates', async () => {
  const id = await operations.createPortfolioProject({ ...fields,
    link: 'https://example.com/original',
    resourceLinks: [{ url: ' https://example.com/file.pdf ', label: undefined }],
  });
  const ref = project(admin, id);
  assert.deepEqual((await getDoc(ref)).data().resourceLinks, [{ url: 'https://example.com/file.pdf' }]);

  await operations.updatePortfolioProject(id, { title: 'Partial update' });
  let stored = (await getDoc(ref)).data();
  assert.equal(stored.link, 'https://example.com/original');
  assert.equal(stored.summary, fields.summary);
  assert.equal(stored.featuredOrder, fields.featuredOrder);

  await operations.updatePortfolioProject(id, { summary: '', role: '', outcome: '',
    category: '', architecture: [], galleryImages: [], link: '',
    resourceLinks: [{ url: 'https://example.com/next', label: '   ' }],
  });
  stored = (await getDoc(ref)).data();
  for (const key of ['summary', 'role', 'outcome', 'category']) assert.equal(stored[key], '');
  assert.deepEqual(stored.architecture, []);
  assert.deepEqual(stored.galleryImages, []);
  assert.deepEqual(stored.resourceLinks, [{ url: 'https://example.com/next' }]);
  assert.equal(Object.hasOwn(stored, 'link'), false);
  assert.equal(stored.featuredOrder, fields.featuredOrder);
  await operations.deletePortfolioProject(id);
});

test('real blog persistence clears an existing category', async () => {
  const id = await operations.createBlogPost({ title: 'Test', content: 'Body', category: 'Old category' });
  await operations.updateBlogPost(id, { category: '' });
  assert.equal((await getDoc(doc(admin, 'blogPosts', id))).data().category, '');
  await operations.deleteBlogPost(id);
});

test('theme selection allows only the three supported accents and admin writes', async () => {
  const ref = doc(admin, 'siteSettings', 'theme');
  for (const accent of ['green', 'blue', 'purple']) {
    await setDoc(ref, { accent });
    assert.equal((await getDoc(doc(visitor, 'siteSettings', 'theme'))).data().accent, accent);
  }
  await denied(setDoc(ref, { accent: 'red' }));
  await denied(setDoc(ref, { accent: 'green', extra: true }));
  await denied(deleteDoc(ref));
  for (const db of [visitor, member]) {
    await denied(setDoc(doc(db, 'siteSettings', 'theme'), { accent: 'blue' }));
  }
  await denied(setDoc(doc(admin, 'siteSettings', 'other'), { accent: 'green' }));
});

test('unmatched collections deny access even to admin clients', async () => {
  for (const db of [admin, visitor]) {
    await denied(getDoc(doc(db, 'unknown', 'test')));
    await denied(setDoc(doc(db, 'unknown', 'test'), { value: 1 }));
  }
});
