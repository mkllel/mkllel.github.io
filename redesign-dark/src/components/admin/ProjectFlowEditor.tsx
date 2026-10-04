import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { canBeFlowParent, MAX_FLOW_NODES, removeFlowNode, type ProjectFlow } from '../../utils/projectFlow';

interface Props {
  value: ProjectFlow;
  onChange: (flow: ProjectFlow) => void;
}

export default function ProjectFlowEditor({ value, onChange }: Props) {
  const updateNode = (id: string, fields: Partial<ProjectFlow['nodes'][number]>) =>
    onChange({ ...value, nodes: value.nodes.map(node => node.id === id ? { ...node, ...fields } : node) });
  const move = (index: number, offset: number) => {
    const nodes = [...value.nodes];
    [nodes[index], nodes[index + offset]] = [nodes[index + offset], nodes[index]];
    onChange({ ...value, nodes });
  };
  const add = () => {
    let index = 0;
    while (value.nodes.some(node => node.id === `step-${index}`)) index++;
    onChange({ ...value, nodes: [...value.nodes, { id: `step-${index}`, label: '', parentId: null }] });
  };

  return (
    <fieldset className="project-flow-editor">
      <legend>처리 흐름</legend>
      <div className="project-flow-editor__modes" role="radiogroup" aria-label="처리 흐름 표시 방식">
        {(['sequence', 'tree'] as const).map(layout => (
          <label key={layout}>
            <input type="radio" name="architectureLayout" value={layout} checked={value.layout === layout}
              onChange={() => onChange({ ...value, layout })} />
            <span>{layout === 'sequence' ? '순차형' : '트리형'}</span>
          </label>
        ))}
      </div>
      <ol className="project-flow-editor__list">
        {value.nodes.map((node, index) => (
          <li className={`project-flow-editor__row${value.layout === 'tree' ? ' project-flow-editor__row--tree' : ''}`} key={node.id}>
            <span className="project-flow-editor__index">{String(index + 1).padStart(2, '0')}</span>
            <input aria-label={`처리 흐름 ${index + 1} 이름`} placeholder="항목 이름" value={node.label}
              onChange={event => updateNode(node.id, { label: event.target.value })} />
            {value.layout === 'tree' && (
              <select title="상위 항목" aria-label={`처리 흐름 ${index + 1} 상위 항목`} value={node.parentId ?? ''}
                onChange={event => updateNode(node.id, { parentId: event.target.value || null })}>
                <option value="">최상위</option>
                {value.nodes.filter(candidate => canBeFlowParent(value.nodes, node.id, candidate.id)).map(candidate => (
                  <option key={candidate.id} value={candidate.id}>{candidate.label.trim() || '이름 없는 항목'}</option>
                ))}
              </select>
            )}
            <div className="project-flow-editor__actions">
              <button type="button" title="위로 이동" aria-label={`처리 흐름 ${index + 1} 위로 이동`} disabled={index === 0} onClick={() => move(index, -1)}><ArrowUp size={16} /></button>
              <button type="button" title="아래로 이동" aria-label={`처리 흐름 ${index + 1} 아래로 이동`} disabled={index === value.nodes.length - 1} onClick={() => move(index, 1)}><ArrowDown size={16} /></button>
              <button type="button" title="삭제 (하위 항목은 한 단계 위로 이동)" aria-label={`처리 흐름 ${index + 1} 삭제`}
                onClick={() => onChange({ ...value, nodes: removeFlowNode(value.nodes, node.id) })}><Trash2 size={16} /></button>
            </div>
          </li>
        ))}
      </ol>
      <button type="button" className="button button--secondary-on-dark project-flow-editor__add"
        disabled={value.nodes.length >= MAX_FLOW_NODES} onClick={add}><Plus size={16} aria-hidden="true" />항목 추가</button>
    </fieldset>
  );
}
