import assert from 'node:assert/strict';
import test from 'node:test';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

function pageHarness(file, firestore, params = {}) {
  const states = [];
  let cursor = 0;
  let previousDeps;
  let pendingEffect;
  let cleanup;
  let writes = 0;
  let metadata;
  const Page = loadTypeScript(new URL(`../src/pages/${file}.tsx`, import.meta.url), {
    react: { ...React,
      useState(initial) {
        const index = cursor++;
        if (!(index in states)) states[index] = initial;
        return [states[index], value => {
          writes++;
          states[index] = typeof value === 'function' ? value(states[index]) : value;
        }];
      },
      useRef: () => ({ current: null }),
      useEffect(effect, deps) {
        if (!previousDeps || deps.some((value, index) => !Object.is(value, previousDeps[index]))) {
          previousDeps = deps;
          pendingEffect = effect;
        }
      },
    },
    'firebase/firestore': firestore,
    '../utils/firebase': {},
    '../hooks/usePageMetadata': { usePageMetadata(value) { metadata = value; } },
    '../hooks/useScrollReveal': { useScrollReveal: () => ({ current: null }) },
    'react-router-dom': {
      useParams: () => params,
      Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
    },
  }).default;
  const render = () => { cursor = 0; return Page(); };
  const flushEffect = () => {
    if (!pendingEffect) return;
    cleanup?.();
    cleanup = pendingEffect();
    pendingEffect = undefined;
  };
  function retry() {
    function find(node) {
      if (!React.isValidElement(node)) return;
      if (node.type === 'button' && React.Children.toArray(node.props.children)
        .some(child => typeof child === 'string' && child.includes('다시 시도'))) return node;
      return React.Children.toArray(node.props.children).map(find).find(Boolean);
    }
    const button = find(render());
    assert.ok(button, 'Retry button exists');
    button.props.onClick();
    render();
    flushEffect();
  }
  render();
  flushEffect();
  return {
    html: () => renderToStaticMarkup(render()), retry,
    navigate(id) { params.id = id; render(); flushEffect(); },
    unmount() { cleanup?.(); },
    get writes() { return writes; },
    get metadata() { return metadata; },
  };
}

const projectSnapshot = (id, extra = {}) => ({ id, exists: () => true,
  data: () => ({ title: `Project ${id}`, description: '## Details\nProject body',
    technologies: [], isPrivate: false, featured: true, createdAt: '2026-10-04', ...extra }) });

function homeHarness() {
  const subscriptions = [];
  const page = pageHarness('Home', { collection() {}, query() {}, where() {},
    onSnapshot(_, next, fail) {
      const subscription = { next, fail, closed: false };
      subscriptions.push(subscription);
      return () => { subscription.closed = true; };
    },
  });
  return { page, subscriptions };
}

function detailHarness(id = 'first') {
  const requests = [];
  const page = pageHarness('PortfolioDetail', {
    doc: (_db, _collection, id) => id,
    getDoc: id => new Promise((resolve, reject) => { requests.push({ id, resolve, reject }); }),
  }, { id });
  return { page, requests };
}

const settle = () => new Promise(resolve => setImmediate(resolve));

test('home distinguishes loading, failure and successful retry', t => {
  t.mock.method(console, 'error', () => {});
  const { page, subscriptions } = homeHarness();
  assert.match(page.html(), /주요 프로젝트를 불러오는 중/);
  assert.doesNotMatch(page.html(), /표시할 주요 프로젝트가 없습니다/);
  subscriptions[0].fail(new Error('unavailable'));
  assert.match(page.html(), /role="alert"/);
  assert.match(page.html(), /주요 프로젝트를 불러오지 못했습니다/);
  assert.doesNotMatch(page.html(), /불러오는 중|표시할 주요 프로젝트가 없습니다/);
  page.retry();
  assert.equal(subscriptions.length, 2);
  assert.equal(subscriptions[0].closed, true);
  assert.match(page.html(), /주요 프로젝트를 불러오는 중/);
  assert.doesNotMatch(page.html(), /role="alert"/);
  subscriptions[1].next({ docs: [projectSnapshot('recovered')] });
  assert.match(page.html(), /Project recovered/);
  assert.doesNotMatch(page.html(), /불러오는 중|role="alert"/);
  page.unmount();
});

test('home empty results are not errors and a later failure clears stale cards', t => {
  t.mock.method(console, 'error', () => {});
  const { page, subscriptions } = homeHarness();
  subscriptions[0].next({ docs: [] });
  assert.match(page.html(), /표시할 주요 프로젝트가 없습니다/);
  assert.doesNotMatch(page.html(), /role="alert"|다시 시도/);
  subscriptions[0].next({ docs: [projectSnapshot('visible'), projectSnapshot('private', { isPrivate: true })] });
  assert.match(page.html(), /Project visible/);
  assert.doesNotMatch(page.html(), /Project private/);
  subscriptions[0].fail(new Error('permission-denied'));
  assert.doesNotMatch(page.html(), /Project visible|표시할 주요 프로젝트가 없습니다/);
  assert.match(page.html(), /주요 프로젝트를 불러오지 못했습니다/);
  page.unmount();
});

test('home ignores retired subscriptions after retry or unmount', t => {
  t.mock.method(console, 'error', () => {});
  const { page, subscriptions } = homeHarness();
  subscriptions[0].fail(new Error('unavailable'));
  page.retry();
  const beforeStale = page.writes;
  subscriptions[0].next({ docs: [projectSnapshot('stale')] });
  subscriptions[0].fail(new Error('late error'));
  assert.equal(page.writes, beforeStale);
  page.unmount();
  const beforeUnmount = page.writes;
  subscriptions[1].next({ docs: [projectSnapshot('unmounted')] });
  subscriptions[1].fail(new Error('late error'));
  assert.equal(page.writes, beforeUnmount);
  assert.equal(subscriptions[1].closed, true);
});

test('detail failures stay retryable and recovery restores the article and metadata', async t => {
  t.mock.method(console, 'error', () => {});
  const { page, requests } = detailHarness();
  assert.match(page.html(), /프로젝트를 불러오는 중/);
  for (let attempt = 0; attempt < 2; attempt++) {
    requests[attempt].reject(Object.assign(new Error('offline'), { code: 'unavailable' }));
    await settle();
    const html = page.html();
    assert.match(html, /프로젝트를 불러오지 못했습니다/);
    assert.match(html, /role="alert"/);
    assert.doesNotMatch(html, /프로젝트를 찾을 수 없습니다/);
    assert.match(html, /href="\/portfolio"/);
    assert.equal(page.metadata.noIndex, true);
    page.retry();
    assert.match(page.html(), /프로젝트를 불러오는 중/);
    assert.doesNotMatch(page.html(), /role="alert"/);
  }
  assert.equal(requests.length, 3);
  requests[2].resolve(projectSnapshot('first'));
  await settle();
  assert.match(page.html(), /Project first/);
  assert.doesNotMatch(page.html(), /role="alert"|불러오는 중/);
  assert.equal(page.metadata.title, 'Project first');
  assert.equal(page.metadata.noIndex, false);
  page.unmount();
});

for (const result of ['missing', 'private', 'denied']) {
  test(`detail ${result} results do not expose content or show a network retry`, async t => {
    t.mock.method(console, 'error', () => {});
    const { page, requests } = detailHarness();
    if (result === 'denied') requests[0].reject({ code: 'permission-denied' });
    else requests[0].resolve(result === 'missing'
      ? { exists: () => false }
      : projectSnapshot('private', { isPrivate: true, title: 'Private content' }));
    await settle();
    assert.match(page.html(), /프로젝트를 찾을 수 없습니다/);
    assert.doesNotMatch(page.html(), /다시 시도|Private content|불러오지 못했습니다/);
    assert.equal(page.metadata.noIndex, true);
    page.unmount();
  });
}

for (const result of ['success', 'failure']) {
  test(`detail ignores stale ${result} while the next project is loading`, async () => {
    const { page, requests } = detailHarness();
    page.navigate('second');
    assert.deepEqual(requests.map(request => request.id), ['first', 'second']);
    const beforeStale = page.writes;
    if (result === 'success') requests[0].resolve(projectSnapshot('first'));
    else requests[0].reject(new Error('late error'));
    await settle();
    assert.equal(page.writes, beforeStale);
    assert.match(page.html(), /프로젝트를 불러오는 중/);
    requests[1].resolve(projectSnapshot('second'));
    await settle();
    assert.match(page.html(), /Project second/);
    assert.doesNotMatch(page.html(), /Project first|role="alert"/);
    page.unmount();
  });
}

test('detail ignores responses after unmount', async () => {
  const { page, requests } = detailHarness();
  page.unmount();
  const beforeUnmount = page.writes;
  requests[0].resolve(projectSnapshot('first'));
  await settle();
  assert.equal(page.writes, beforeUnmount);
});

test('detail clears previous content when there is no project ID', async () => {
  const { page, requests } = detailHarness();
  requests[0].resolve(projectSnapshot('first'));
  await settle();
  assert.match(page.html(), /Project first/);
  page.navigate(undefined);
  assert.equal(requests.length, 1);
  assert.match(page.html(), /프로젝트를 찾을 수 없습니다/);
  assert.doesNotMatch(page.html(), /Project first|다시 시도/);
  assert.equal(page.metadata.noIndex, true);
  page.unmount();
});

test('list errors show a retry action, not an image warning or an empty-results message', () => {
  const state = [];
  let cursor = 0;
  let previousVersion;
  let pendingEffect;
  let unsubscribe;
  let next;
  let fail;
  let subscriptions = 0;
  let cleanups = 0;
  const Page = loadTypeScript(new URL('../src/pages/Portfolio.tsx', import.meta.url), {
    react: { ...React, useMemo: fn => fn(),
      useState: initial => {
        const index = cursor++;
        if (!(index in state)) state[index] = initial;
        return [state[index], value => { state[index] = typeof value === 'function' ? value(state[index]) : value; }];
      },
      useEffect: (effect, deps) => {
        if (deps[0] !== previousVersion) { previousVersion = deps[0]; pendingEffect = effect; }
      },
    },
    'firebase/firestore': { collection() {}, query() {}, where() {},
      onSnapshot: (_, onNext, onError) => {
        next = onNext; fail = onError; subscriptions++;
        return () => { cleanups++; };
      },
    },
    '../utils/firebase': {},
    '../hooks/usePageMetadata': { usePageMetadata() {} },
    'react-router-dom': { Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children) },
  }).default;
  const render = () => { cursor = 0; return Page(); };
  const flushEffect = () => { unsubscribe?.(); unsubscribe = pendingEffect(); pendingEffect = undefined; };
  render(); flushEffect();
  const originalError = console.error;
  try { console.error = () => {}; fail(new Error('unavailable')); }
  finally { console.error = originalError; }
  const failedTree = render();
  const failedHtml = renderToStaticMarkup(failedTree);
  assert.ok(failedHtml.includes('프로젝트 목록을 불러오지 못했습니다'));
  assert.ok(failedHtml.includes('role="alert"'));
  assert.ok(!failedHtml.includes('조건에 맞는 프로젝트가 없습니다'));
  assert.ok(!failedHtml.includes('원격 이미지'));
  function findRetry(node) {
    if (!React.isValidElement(node)) return undefined;
    if (node.type === 'button' && React.Children.toArray(node.props.children).some(child => typeof child === 'string' && child.includes('다시 시도'))) return node;
    return React.Children.toArray(node.props.children).map(findRetry).find(Boolean);
  }
  findRetry(failedTree).props.onClick();
  render(); flushEffect();
  assert.equal(subscriptions, 2);
  assert.equal(cleanups, 1);
  assert.ok(renderToStaticMarkup(render()).includes('프로젝트를 불러오는 중'));
  next({ docs: [{ id: 'restored', data: () => ({ title: 'Recovered project', description: 'Body',
    technologies: [], isPrivate: false, createdAt: '2026-10-04' }) }] });
  const success = renderToStaticMarkup(render());
  assert.ok(success.includes('Recovered project'));
  assert.ok(!success.includes('role="alert"'));
  next({ docs: [] });
  assert.ok(renderToStaticMarkup(render()).includes('조건에 맞는 프로젝트가 없습니다'));
  unsubscribe();
});
