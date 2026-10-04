import assert from 'node:assert/strict';
import test from 'node:test';
import { Children, isValidElement, createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { loadTypeScript } from './load-typescript.mjs';

const { getProjectFlow, toProjectFlowFields, validateProjectFlow, canBeFlowParent, removeFlowNode } = loadTypeScript(new URL('../src/utils/projectFlow.ts', import.meta.url));
const Editor = loadTypeScript(new URL('../src/components/admin/ProjectFlowEditor.tsx', import.meta.url)).default;
const SystemFlow = loadTypeScript(new URL('../src/components/ProjectSystemFlow.tsx', import.meta.url)).default;
const { renderProjectPage } = loadTypeScript(new URL('../src/projectPages.tsx', import.meta.url));
const source = {architecture: ['Host', 'Development', 'Operations', 'Container'], architectureLayout: 'tree', architectureParents: [null, 0, 0, 2]};

test('stored layout and parent references survive round trip and renamed labels', () => {
  const flow = getProjectFlow(source);
  assert.equal(flow.layout, 'tree');
  assert.equal(validateProjectFlow(flow), '');
  assert.deepEqual(toProjectFlowFields(flow), source);
  flow.nodes[0].label = 'New, host';
  const reopened = getProjectFlow(toProjectFlowFields(flow));
  assert.equal(reopened.nodes[2].parentId, reopened.nodes[0].id);
  assert.equal(reopened.nodes[0].label, 'New, host');
});

test('legacy projects stay sequential and explicit sequence overrides home lab fallback', () => {
  assert.equal(getProjectFlow({architecture: ['A', 'B']}).layout, 'sequence');
  const homelab = {id: 'gvxw5JAhaTm9skN4JsOu', architecture: ['Proxmox Host', '개발·AI VM', '운영 VM', '서비스별 Docker Container', '서비스별 Network / DB / Volume']};
  assert.equal(getProjectFlow(homelab).layout, 'tree');
  assert.equal(getProjectFlow({...homelab, architectureLayout: 'sequence'}).layout, 'sequence');
});

test('cycles, dangling parents and malformed saved indices safely fall back to sequence', () => {
  for (const architectureParents of [[1, 0, 0, 2], [0, 0, 0, 2], [null, 99, 0, 2], [null, -1, 0, 2], [null, 0.5, 0, 2], [null, '0', 0, 2], [null]]) {
    const flow = getProjectFlow({...source, architectureParents});
    assert.equal(flow.layout, 'sequence');
    assert.ok(flow.nodes.every(node => node.parentId === null));
  }
  assert.equal(getProjectFlow({...source, architectureParents: undefined}).layout, 'sequence');
});

test('removing parents promotes their children and reordering preserves identity', () => {
  const flow = getProjectFlow(source);
  assert.equal(canBeFlowParent(flow.nodes, 'step-0', 'step-3'), false);
  assert.equal(canBeFlowParent(flow.nodes, 'step-2', 'step-2'), false);
  assert.equal(canBeFlowParent(flow.nodes, 'step-2', 'step-1'), true);
  const removed = {...flow, nodes: removeFlowNode(flow.nodes, 'step-2')};
  assert.deepEqual(toProjectFlowFields(removed).architectureParents, [null, 0, 0]);
  const reordered = {...flow, nodes: [flow.nodes[3], flow.nodes[0], flow.nodes[2], flow.nodes[1]]};
  assert.deepEqual(toProjectFlowFields(reordered).architectureParents, [2, null, 1, 1]);
  assert.equal(validateProjectFlow(reordered), '');
  assert.ok(removeFlowNode(flow.nodes, 'step-0').filter(node => ['step-1', 'step-2'].includes(node.id)).every(node => node.parentId === null));
});

test('editor handlers support adding, modes, parents, renaming, moving and deleting', () => {
  let value = {layout: 'sequence', nodes: []};
  const render = () => Editor({value, onChange: next => {value = next;}});
  function find(predicate) {
    function visit(node) {
      if (!isValidElement(node)) return;
      if (predicate(node)) return node;
      return Children.toArray(node.props.children).map(visit).find(Boolean);
    }
    const node = visit(render());
    assert.ok(node);
    return node;
  }
  const input = name => find(node => node.props['aria-label'] === name);
  for (let i = 1; i <= 3; i++) {
    find(node => node.type === 'button' && node.props.className?.includes('__add')).props.onClick();
    input(`처리 흐름 ${i} 이름`).props.onChange({target: {value: `Node ${i}`}});
  }
  find(node => node.type === 'input' && node.props.value === 'tree').props.onChange();
  input('처리 흐름 2 상위 항목').props.onChange({target: {value: value.nodes[0].id}});
  input('처리 흐름 3 상위 항목').props.onChange({target: {value: value.nodes[1].id}});
  const rootOptions = Children.toArray(input('처리 흐름 1 상위 항목').props.children).flat();
  assert.equal(rootOptions.length, 1);
  input('처리 흐름 3 위로 이동').props.onClick();
  assert.deepEqual(toProjectFlowFields(value).architectureParents, [null, 2, 0]);
  input('처리 흐름 3 삭제').props.onClick();
  assert.deepEqual(toProjectFlowFields(value).architectureParents, [null, 0]);
  find(node => node.type === 'input' && node.props.value === 'sequence').props.onChange();
  find(node => node.type === 'input' && node.props.value === 'tree').props.onChange();
  assert.deepEqual(toProjectFlowFields(value).architectureParents, [null, 0]);
});

test('generic trees support multiple roots and branches in live and static article rendering', () => {
  const fields = {architecture: ['Root', 'A', 'B', 'C', 'Separate'], architectureLayout: 'tree', architectureParents: [null, 0, 0, 0, null]};
  const html = renderToStaticMarkup(createElement(SystemFlow, {steps: fields.architecture, layout: fields.architectureLayout, parents: fields.architectureParents, contentClassName: 'site-container'}));
  assert.match(html, /architecture-tree__stacked/);
  assert.equal((html.match(/class="architecture-tree__node"/g) || []).length, 5);
  const project = {id: 'any-new-project', title: 'Generic tree', description: '## Body\nContent', technologies: [], isPrivate: false, ...fields};
  const result = renderProjectPage([project], project.id);
  assert.match(result.body, /class="architecture-tree"/);
  assert.doesNotMatch(result.body, /<ol class="architecture-flow"/);
});
