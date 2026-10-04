import type { CSSProperties } from 'react';
import ProjectMarkdown from './ProjectMarkdown';
import { getProjectFlow, type FlowNode } from '../utils/projectFlow';
import type { PortfolioProject } from '../utils/firebase';

interface ProjectSystemFlowProps {
  projectId?: string;
  steps: string[];
  layout?: PortfolioProject['architectureLayout'];
  parents?: PortfolioProject['architectureParents'];
  description?: string;
  contentClassName: string;
  onImageOpen?: (image: HTMLImageElement) => void;
}

const StructureItem = ({ node, nodes, depth = 0 }: { node: FlowNode; nodes: FlowNode[]; depth?: number }) => {
  const children = nodes.filter(child => child.parentId === node.id);
  const branching = children.length === 2 && depth === 0;
  return (
    <li className={branching ? 'architecture-tree__item--branching' : undefined}>
      <div className="architecture-tree__node"><strong>{node.label}</strong></div>
      {children.length > 0 && (
        <ul className={branching ? 'architecture-tree__branches' : children.length > 1 ? 'architecture-tree__stacked' : 'architecture-tree__children'} role="list">
          {children.map(child => <StructureItem node={child} nodes={nodes} depth={depth + 1} key={child.id} />)}
        </ul>
      )}
    </li>
  );
};

const ProjectSystemFlow = ({ projectId, steps, layout, parents, description, contentClassName, onImageOpen }: ProjectSystemFlowProps) => {
  const flow = getProjectFlow({ id: projectId, architecture: steps, architectureLayout: layout, architectureParents: parents });
  const roots = flow.nodes.filter(node => node.parentId === null);

  return (
    <section className="section section--paper">
      <div className={contentClassName}>
        <div className="section-heading section-heading--left section-heading--compact">
          <p className="eyebrow">SYSTEM FLOW</p>
          <h2>구조와 처리 흐름</h2>
        </div>
        {flow.layout === 'tree' ? (
          <ul className="architecture-tree" aria-label="시스템 구조" role="list">
            {roots.map(node => <StructureItem node={node} nodes={flow.nodes} key={node.id} />)}
          </ul>
        ) : (
          <ol className="architecture-flow" style={{ '--flow-columns': Math.min(steps.length, 6) } as CSSProperties}>
            {steps.map((step, index) => (
              <li key={`${step}-${index}`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        )}
        {description && (
          <div className="architecture-description">
            <ProjectMarkdown onImageOpen={onImageOpen}>{description}</ProjectMarkdown>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSystemFlow;
