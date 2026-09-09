import type { CSSProperties } from 'react';
import ProjectMarkdown from './ProjectMarkdown';

interface ProjectSystemFlowProps {
  steps: string[];
  description?: string;
  contentClassName: string;
  onImageOpen?: (image: HTMLImageElement) => void;
}

const ProjectSystemFlow = ({ steps, description, contentClassName, onImageOpen }: ProjectSystemFlowProps) => (
  <section className="section section--paper">
    <div className={contentClassName}>
      <div className="section-heading section-heading--left section-heading--compact">
        <p className="eyebrow">SYSTEM FLOW</p>
        <h2>구조와 처리 흐름</h2>
      </div>
      <ol className="architecture-flow" style={{ '--flow-columns': Math.min(steps.length, 6) } as CSSProperties}>
        {steps.map((step, index) => (
          <li key={`${step}-${index}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{step}</strong>
          </li>
        ))}
      </ol>
      {description && (
        <div className="architecture-description">
          <ProjectMarkdown onImageOpen={onImageOpen}>{description}</ProjectMarkdown>
        </div>
      )}
    </div>
  </section>
);

export default ProjectSystemFlow;
