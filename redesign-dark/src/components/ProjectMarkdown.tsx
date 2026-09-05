import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ProjectMarkdown({ children }: { children: string }) {
  return (
    <div className="project-markdown">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
        img: ({ src, alt }) => <img src={src} alt={alt || '프로젝트 설명 이미지'} loading="lazy" decoding="async" />,
        table: ({ children }) => <div className="project-markdown__table" tabIndex={0} role="region" aria-label="프로젝트 표"><table>{children}</table></div>,
      }}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
