import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/components/admin/hooks/useAdminData.ts', import.meta.url), 'utf8');
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
});

// Isolate action logic from React rendering, subscriptions and all Firebase I/O.
function createHarness(api) {
  const states = [];
  const exports = {};
  const timers = [];
  vm.runInNewContext(outputText, {
    exports,
    require(name) {
      if (name === 'react') return {
        useState(initial) {
          const index = states.push(initial) - 1;
          return [initial, (value) => { states[index] = value; }];
        },
        useCallback: (callback) => callback,
        useEffect() {},
      };
      if (name === 'firebase/firestore') return {};
      if (name === '../../../utils/firebaseAdmin') return api;
      throw new Error(`Unexpected dependency: ${name}`);
    },
    console: { error() {} },
    setTimeout: (callback) => timers.push(callback),
  });
  return {
    actions: exports.default(),
    get loading() { return states[2]; },
    get error() { return states[3]; },
    get success() { return states[4]; },
    timers,
  };
}

const cases = [
  ['handleCreateBlogPost', 'createBlogPost', false],
  ['handleUpdateBlogPost', 'updateBlogPost', true],
  ['handleCreateProject', 'createPortfolioProject', false],
  ['handleUpdateProject', 'updatePortfolioProject', true],
];

for (const [handler, operation, editing] of cases) {
  test(`${handler}: failed saves reject, finish loading, and allow retry`, async () => {
    const failure = new Error('permission-denied');
    let rejectSave;
    let shouldFail = true;
    const calls = [];
    const harness = createHarness({
      [operation]: (...args) => {
        calls.push(args);
        return shouldFail
          ? new Promise((_, reject) => { rejectSave = reject; })
          : Promise.resolve();
      },
    });
    const draft = { title: 'Unsaved title', content: 'Blog body', description: 'Project body',
      ...(editing ? { id: 'existing-document' } : {}) };
    const original = structuredClone(draft);
    const image = { name: 'selected-image.png' };
    harness.actions.setSuccessMessage('Previous success');
    const pending = harness.actions[handler](draft, image);
    assert.equal(harness.loading, true);
    assert.equal(harness.success, '');
    const rejection = assert.rejects(pending, (error) => error === failure);
    rejectSave(failure);
    await rejection;
    assert.equal(harness.loading, false);
    assert.ok(harness.error);
    assert.equal(harness.success, '');
    assert.equal(harness.timers.length, 0);
    assert.deepEqual(draft, original);

    shouldFail = false;
    await harness.actions[handler](draft, image);
    assert.equal(harness.loading, false);
    assert.equal(harness.error, '');
    assert.ok(harness.success);
    assert.equal(harness.timers.length, 1);
    for (const args of calls) {
      assert.equal(args[editing ? 1 : 0], draft);
      assert.equal(args[editing ? 2 : 1], image);
      if (editing) assert.equal(args[0], draft.id);
    }
  });
}

for (const handler of ['handleUpdateBlogPost', 'handleUpdateProject']) {
  test(`${handler}: missing document ID rejects instead of reporting success`, async () => {
    const harness = createHarness({});
    harness.actions.setSuccessMessage('Previous success');
    await assert.rejects(harness.actions[handler]({ title: 'Draft' }), /ID/);
    assert.equal(harness.loading, false);
    assert.ok(harness.error);
    assert.equal(harness.success, '');
  });
}
