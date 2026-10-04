import type { PortfolioProject } from './firebase';

export interface FlowNode {
  id: string;
  label: string;
  parentId: string | null;
}

export interface ProjectFlow {
  layout: 'sequence' | 'tree';
  nodes: FlowNode[];
}

export const MAX_FLOW_NODES = 50;
type FlowSource = Pick<PortfolioProject, 'id' | 'architecture' | 'architectureLayout' | 'architectureParents'>;

export const validateProjectFlow = (flow: ProjectFlow): string => {
  if (flow.nodes.length > MAX_FLOW_NODES) return `처리 흐름은 ${MAX_FLOW_NODES}개까지 추가할 수 있습니다.`;
  if (flow.nodes.some(node => !node.label.trim())) return '처리 흐름의 항목 이름을 입력해 주세요.';
  const nodes = new Map(flow.nodes.map(node => [node.id, node]));
  if (nodes.size !== flow.nodes.length) return '처리 흐름에 중복된 항목 ID가 있습니다.';
  for (const node of flow.nodes) {
    const seen = new Set([node.id]);
    let parentId = node.parentId;
    while (parentId !== null) {
      if (seen.has(parentId)) return '상위 항목 관계가 순환하지 않도록 수정해 주세요.';
      const parent = nodes.get(parentId);
      if (!parent) return '존재하지 않는 상위 항목을 다시 선택해 주세요.';
      seen.add(parentId);
      parentId = parent.parentId;
    }
  }
  return '';
};

// Preserve the earlier local home-lab presentation until its first explicit save.
// Saved layout always takes precedence; other legacy projects remain sequential.
const legacyHomelabSteps = ['Proxmox Host', '개발·AI VM', '운영 VM',
  '서비스별 Docker Container', '서비스별 Network / DB / Volume'];

export const getProjectFlow = (project: FlowSource): ProjectFlow => {
  const steps = project.architecture || [];
  const nodes = steps.map((label, index) => ({ id: `step-${index}`, label, parentId: null as string | null }));
  const legacy = project.architectureLayout === undefined
    && project.id === 'gvxw5JAhaTm9skN4JsOu'
    && steps.length === legacyHomelabSteps.length
    && steps.every((label, index) => label === legacyHomelabSteps[index]);
  const parents = legacy ? [null, 0, 0, 2, 3] : project.architectureParents;
  const hasParents = Array.isArray(parents) && parents.length === nodes.length
    && parents.every(parent => parent === null || (Number.isInteger(parent) && parent >= 0 && parent < nodes.length));
  if (hasParents) nodes.forEach((node, index) => { node.parentId = parents[index] === null ? null : nodes[parents[index]!].id; });
  const flow: ProjectFlow = { layout: legacy || project.architectureLayout === 'tree' ? 'tree' : 'sequence', nodes };
  if (validateProjectFlow(flow) || (flow.layout === 'tree' && !hasParents)) {
    return { layout: 'sequence', nodes: nodes.map(node => ({ ...node, parentId: null })) };
  }
  return flow;
};

export const toProjectFlowFields = (flow: ProjectFlow) => ({
  architecture: flow.nodes.map(node => node.label.trim()),
  architectureLayout: flow.layout,
  architectureParents: flow.nodes.map(node => node.parentId === null ? null : flow.nodes.findIndex(parent => parent.id === node.parentId)),
});

export const canBeFlowParent = (nodes: FlowNode[], nodeId: string, candidateId: string): boolean => {
  let current: string | null = candidateId;
  const seen = new Set<string>();
  while (current !== null) {
    if (current === nodeId || seen.has(current)) return false;
    seen.add(current);
    current = nodes.find(node => node.id === current)?.parentId ?? null;
  }
  return true;
};

export const removeFlowNode = (nodes: FlowNode[], id: string): FlowNode[] => {
  const parentId = nodes.find(node => node.id === id)?.parentId ?? null;
  return nodes.filter(node => node.id !== id).map(node => node.parentId === id ? { ...node, parentId } : node);
};
