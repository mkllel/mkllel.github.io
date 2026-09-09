import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ProjectImage, { type OpenProjectImage } from './ProjectImage';

export default function ProjectMarkdown({ children, onImageOpen }: { children: string; onImageOpen?: OpenProjectImage }) {
  return (
    <div className="project-markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        img: ({ src, alt }) => <ProjectImage src={src} alt={alt || '프로젝트 설명 이미지'} loading="lazy" decoding="async" onOpen={src ? onImageOpen : undefined} />,
        a: ({ node, children, ...props }) => onImageOpen && node?.children.some(child => child.type === 'element' && child.tagName === 'img')
          ? <span>{children}</span>
          : <a {...props}>{children}</a>,
        table: ({ children }) => <div className="project-markdown__table" tabIndex={0} role="region" aria-label="프로젝트 표"><table>{children}</table></div>,
      }}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
