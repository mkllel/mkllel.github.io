import assert from 'node:assert/strict';
import test from 'node:test';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

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
