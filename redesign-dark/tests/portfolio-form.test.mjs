import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
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
  for (const id of ['projectSummary', 'projectRole', 'projectOutcome', 'projectLink']) {
    change(id, 'Old value');
    change(id, '');
  }
  const flowEditor = () => form.find(node => node.type?.name === 'ProjectFlowEditor');
  flowEditor().props.onChange({layout: 'tree', nodes: [{id: 'root', label: 'Old flow', parentId: null}]});
  flowEditor().props.onChange({layout: 'sequence', nodes: []});
  form.find(node => node.type === 'button' && node.props.children === '+ 링크').props.onClick();
  form.find(node => node.props?.['aria-label'] === '자료 링크 1 URL').props.onChange({ target: { value: 'https://example.com/test.pdf' } });
  await form.find(node => node.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.equal(form.error, '');
  assert.equal(form.tab, 'portfolio');
  assert.equal(form.submitted.resourceLinks[0].url, 'https://example.com/test.pdf');
  assert.equal(Object.hasOwn(form.submitted.resourceLinks[0], 'label'), false);
  for (const key of ['summary', 'role', 'outcome', 'category', 'link']) assert.equal(form.submitted[key], '');
  assert.equal(form.submitted.architecture.length, 0);
  assert.equal(form.submitted.architectureLayout, 'sequence');
  assert.deepEqual(form.submitted.architectureParents, []);
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

test('home lab admin preview renders sibling VMs and submits the original flow unchanged', async () => {
  const { projects } = JSON.parse(readFileSync(new URL('../content/public-projects.json', import.meta.url), 'utf8'));
  const project = projects.find(project => project.id === 'gvxw5JAhaTm9skN4JsOu');
  const form = formHarness(project);
  const preview = form.find(node => node.type?.name === 'DetailPagePreview');
  const previewTree = preview.type(preview.props);
  const flow = previewTree.props.children[1].props.children.find(node => node?.type?.name === 'ProjectSystemFlow');
  assert.equal(flow.props.projectId, project.id);
  assert.deepEqual(flow.props.steps, project.architecture);
  const SystemFlow = loadTypeScript(new URL('../src/components/ProjectSystemFlow.tsx', import.meta.url)).default;
  assert.match(renderToStaticMarkup(createElement(SystemFlow, flow.props)), /class="architecture-tree"/);
  await form.find(node => node.type === 'form').props.onSubmit({ preventDefault() {} });
  assert.equal(form.error, '');
  assert.deepEqual(form.submitted.architecture, project.architecture);
  assert.equal(form.submitted.architectureLayout, 'tree');
  assert.deepEqual(form.submitted.architectureParents, [null, 0, 0, 2, 3]);
});

test('saved tree survives editing, preview and switching to an explicit sequence', async () => {
  const project = {id: 'new-tree', title: 'Tree', description: '## Body\nText', technologies: [],
    architecture: ['Host', 'Dev', 'Services'], architectureLayout: 'tree', architectureParents: [null, 0, 0]};
  const form = formHarness(project);
  const editor = () => form.find(node => node.type?.name === 'ProjectFlowEditor');
  assert.equal(editor().props.value.layout, 'tree');
  editor().props.onChange({...editor().props.value, nodes: editor().props.value.nodes.map(node => node.label === 'Dev' ? {...node, label: 'Development, AI'} : node)});
  const preview = form.find(node => node.type?.name === 'DetailPagePreview');
  assert.equal(preview.props.project.architectureLayout, 'tree');
  assert.deepEqual(preview.props.project.architectureParents, [null, 0, 0]);
  await form.find(node => node.type === 'form').props.onSubmit({preventDefault() {}});
  assert.deepEqual(form.submitted.architecture, ['Host', 'Development, AI', 'Services']);
  const reopened = formHarness({...project, ...form.submitted});
  const current = reopened.find(node => node.type?.name === 'ProjectFlowEditor');
  current.props.onChange({...current.props.value, layout: 'sequence'});
  await reopened.find(node => node.type === 'form').props.onSubmit({preventDefault() {}});
  assert.equal(reopened.submitted.architectureLayout, 'sequence');
  assert.deepEqual(reopened.submitted.architectureParents, [null, 0, 0]);
});

test('invalid flow blocks saving without discarding the form draft', async () => {
  const form = formHarness({id: 'draft', title: 'Draft', description: 'Body', technologies: []});
  const editor = () => form.find(node => node.type?.name === 'ProjectFlowEditor');
  editor().props.onChange({layout: 'tree', nodes: [{id: 'a', label: '', parentId: null}]});
  await form.find(node => node.type === 'form').props.onSubmit({preventDefault() {}});
  assert.match(form.error, /항목 이름/);
  assert.equal(form.submitted, undefined);
  assert.equal(editor().props.value.nodes.length, 1);
  editor().props.onChange({layout: 'tree', nodes: [{id: 'a', label: 'A', parentId: 'a'}]});
  await form.find(node => node.type === 'form').props.onSubmit({preventDefault() {}});
  assert.match(form.error, /순환/);
  assert.equal(form.submitted, undefined);
});
