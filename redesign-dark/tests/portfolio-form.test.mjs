import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

function formHarness() {
  const states = [];
  let cursor = 0;
  let submitted;
  let tab;
  let error = '';
  const node = (type, props) => ({ type, props });
  const Form = loadTypeScript(new URL('../src/components/admin/PortfolioForm.tsx', import.meta.url), {
    react: {
      useState(initial) {
        const index = cursor++;
        if (!(index in states)) states[index] = initial;
        return [states[index], value => { states[index] = typeof value === 'function' ? value(states[index]) : value; }];
      },
      useEffect() {},
      useMemo: fn => fn(),
    },
    'react/jsx-runtime': { jsx: node, jsxs: node },
    '../../utils/firebaseAdmin': { uploadBlogContentImages() { throw new Error('Unexpected upload'); } },
  }).default;
  function find(predicate) {
    cursor = 0;
    const tree = Form({ selectedProject: null, isLoading: false,
      onSubmit: async value => { submitted = value; }, setActiveTab: value => { tab = value; },
      setError: value => { error = value; } });
    function visit(value) {
      if (!value || typeof value !== 'object') return;
      if (Array.isArray(value)) return value.map(visit).find(Boolean);
      if (predicate(value)) return value;
      return visit(value.props?.children);
    }
    const result = visit(tree);
    assert.ok(result, 'Expected form element');
    return result;
  }
  return { find, get submitted() { return submitted; }, get tab() { return tab; }, get error() { return error; } };
}

test('actual form submits unnamed links without undefined and preserves explicit clearing', async () => {
  const form = formHarness();
  const change = (id, value) => form.find(node => node.props?.id === id).props.onChange({ target: { value } });
  change('projectTitle', 'Test title');
  change('projectDescription', '## Content\nBody');
  for (const id of ['projectSummary', 'projectRole', 'projectOutcome', 'projectArchitecture', 'projectLink']) {
    change(id, 'Old value');
    change(id, '');
  }
  form.find(node => node.type === 'button' && node.props.children === '+ 링크').props.onClick();
  form.find(node => node.props?.['aria-label'] === '자료 링크 1 URL').props.onChange({ target: { value: 'https://example.com/test.pdf' } });
  await form.find(node => node.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.equal(form.error, '');
  assert.equal(form.tab, 'portfolio');
  assert.equal(form.submitted.resourceLinks[0].url, 'https://example.com/test.pdf');
  assert.equal(Object.hasOwn(form.submitted.resourceLinks[0], 'label'), false);
  for (const key of ['summary', 'role', 'outcome', 'category', 'link']) assert.equal(form.submitted[key], '');
  assert.equal(form.submitted.architecture.length, 0);
});
