import assert from 'node:assert/strict';
import test from 'node:test';
import { loadTypeScript } from './load-typescript.mjs';

function formHarness(selectedProject = null) {
  const states = [];
  let cursor = 0;
  let submitted;
  let submittedImage;
  let tab;
  let error = '';
  let initialized = false;
  const effects = [];
  const node = (type, props) => ({ type, props });
  const Form = loadTypeScript(new URL('../src/components/admin/PortfolioForm.tsx', import.meta.url), {
    react: {
      useState(initial) {
        const index = cursor++;
        if (!(index in states)) states[index] = initial;
        return [states[index], value => { states[index] = typeof value === 'function' ? value(states[index]) : value; }];
      },
      useEffect(effect) { if (!initialized) effects.push(effect); },
      useMemo: fn => fn(),
    },
    'react/jsx-runtime': { jsx: node, jsxs: node },
    '../../utils/firebaseAdmin': { uploadBlogContentImages() { throw new Error('Unexpected upload'); } },
  }).default;
  function find(predicate) {
    cursor = 0;
    const tree = Form({ selectedProject, isLoading: false,
      onSubmit: async (value, image) => { submitted = value; submittedImage = image; }, setActiveTab: value => { tab = value; },
      setError: value => { error = value; } });
    if (!initialized) {
      initialized = true;
      effects.forEach(effect => effect());
      return find(predicate);
    }
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
  return { find, get submitted() { return submitted; }, get submittedImage() { return submittedImage; }, get tab() { return tab; }, get error() { return error; } };
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

for (const caption of ['', '   ', '  AI-generated illustration.  ']) {
  test(`image upload does not require a caption: ${JSON.stringify(caption)}`, async () => {
    const form = formHarness();
    const change = (id, value) => form.find(node => node.props?.id === id).props.onChange({ target: { value } });
    change('projectTitle', 'Project');
    change('projectDescription', '## Content\nBody');
    change('projectImageCaption', caption);
    assert.ok(!form.find(node => node.props?.id === 'projectImageCaption').props.required);
    const file = new File(['image'], 'cover.png', { type: 'image/png' });
    form.find(node => node.props?.id === 'projectImage').props.onChange({ target: { files: [file] } });
    const preview = form.find(node => node.type?.name === 'DetailPagePreview');
    assert.equal(preview.props.project.imageCaption, caption.trim());
    assert.match(preview.props.project.imageUrl, /^blob:/);
    await form.find(node => node.type === 'form').props.onSubmit({ preventDefault() {} });
    assert.equal(form.error, '');
    assert.equal(form.submitted.imageCaption, caption.trim());
    assert.equal(form.submittedImage, file);
    URL.revokeObjectURL(preview.props.project.imageUrl);
  });
}

test('editing loads and clears a caption without uploading a replacement image', async () => {
  const form = formHarness({ id: 'existing', title: 'Project', description: 'Body',
    technologies: [], imageUrl: 'https://example.com/cover.png', imageCaption: 'Old caption' });
  const input = form.find(node => node.props?.id === 'projectImageCaption');
  assert.equal(input.props.value, 'Old caption');
  input.props.onChange({ target: { value: '' } });
  const preview = form.find(node => node.type?.name === 'DetailPagePreview');
  assert.equal(preview.props.project.imageUrl, 'https://example.com/cover.png');
  assert.equal(preview.props.project.imageCaption, '');
  await form.find(node => node.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.equal(form.error, '');
  assert.equal(form.submitted.imageCaption, '');
  assert.equal(form.submittedImage, null);
  assert.equal(Object.hasOwn(form.submitted, 'imageUrl'), false);
});
