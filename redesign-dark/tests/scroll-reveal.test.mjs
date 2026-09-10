import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

function setup(t, { reduced = false, supported = true, top = 1200 } = {}) {
  const attributes = new Map();
  const listeners = new Map();
  const motionListeners = new Map();
  const element = {
    getBoundingClientRect: () => ({ top }),
    setAttribute: (key, value) => attributes.set(key, value),
    removeAttribute: (key) => attributes.delete(key),
    addEventListener: (key, value) => listeners.set(key, value),
    removeEventListener: (key) => listeners.delete(key),
  };
  const motion = {
    matches: reduced,
    addEventListener: (key, value) => motionListeners.set(key, value),
    removeEventListener: (key) => motionListeners.delete(key),
  };
  let callback;
  let disconnected = false;
  class Observer {
    constructor(fn, options) {
      callback = fn;
      assert.equal(options.threshold, 0);
    }
    observe(target) { assert.equal(target, element); }
    disconnect() { disconnected = true; }
  }
  const previousWindow = globalThis.window;
  const previousObserver = globalThis.IntersectionObserver;
  globalThis.window = { innerHeight: 900, matchMedia: () => motion,
    ...(supported ? { IntersectionObserver: Observer } : {}) };
  globalThis.IntersectionObserver = Observer;
  t.after(() => {
    if (previousWindow === undefined) delete globalThis.window;
    else globalThis.window = previousWindow;
    if (previousObserver === undefined) delete globalThis.IntersectionObserver;
    else globalThis.IntersectionObserver = previousObserver;
  });
  let effect;
  const { useScrollReveal } = loadTypeScript(new URL('../src/hooks/useScrollReveal.ts', import.meta.url), {
    react: { useRef: () => ({ current: element }), useEffect: (fn) => { effect = fn; } },
  });
  useScrollReveal();
  const cleanup = effect();
  return { attributes, listeners, motion, motionListeners, cleanup,
    get disconnected() { return disconnected; },
    enter: (isIntersecting) => callback([{ isIntersecting }]),
  };
}

test('offscreen sections reveal once on entry, then stop observing', (t) => {
  const state = setup(t);
  assert.equal(state.attributes.has('data-reveal-pending'), true);
  state.enter(false);
  assert.equal(state.attributes.has('data-reveal-pending'), true);
  state.enter(true);
  assert.equal(state.attributes.size, 0);
  assert.equal(state.disconnected, true);
  state.enter(false);
  assert.equal(state.attributes.size, 0);
  state.cleanup();
});

for (const [name, options] of [
  ['reduced motion', { reduced: true }],
  ['unsupported observer', { supported: false }],
  ['content already visible', { top: 400 }],
]) {
  test(`${name} leaves content visible immediately`, (t) => {
    const state = setup(t, options);
    assert.equal(state.attributes.size, 0);
    assert.equal(state.listeners.size, 0);
  });
}

test('keyboard focus reveals content immediately', (t) => {
  const state = setup(t);
  state.listeners.get('focusin')();
  assert.equal(state.attributes.size, 0);
  assert.equal(state.disconnected, true);
  state.cleanup();
});

test('enabling reduced motion reveals content and cleanup removes listeners', (t) => {
  const state = setup(t);
  state.motion.matches = true;
  state.motionListeners.get('change')();
  assert.equal(state.attributes.size, 0);
  assert.equal(state.disconnected, true);
  state.cleanup();
  assert.equal(state.listeners.size, 0);
  assert.equal(state.motionListeners.size, 0);
});

test('cleanup clears pending state for StrictMode remounts', (t) => {
  const state = setup(t);
  state.cleanup();
  assert.equal(state.attributes.size, 0);
  assert.equal(state.disconnected, true);
});
