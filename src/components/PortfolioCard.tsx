import React from 'react';
import { PortfolioProject } from '../utils/firebase';

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  // 마크다운 문법을 제거하는 함수
  const stripMarkdown = (text: string) => {
    if (!text) return '';
    return text
      .replace(/!\[.*?\]\(.*?\)/g, '') // 이미지 제거
      .replace(/\[([^\]]*)\]\(.*?\)/g, '$1') // 링크에서 텍스트만 추출
      .replace(/#{1,6}\s+/g, '') // 제목 마크다운 제거
      .replace(/\*\*(.*?)\*\*/g, '$1') // 볼드체 제거
      .replace(/\*(.*?)\*/g, '$1') // 이탤릭체 제거
      .replace(/~~(.*?)~~/g, '$1') // 취소선 제거
      .replace(/`{3}[\s\S]*?`{3}/g, '') // 코드 블록 제거
      .replace(/`(.*?)`/g, '$1') // 인라인 코드 제거
      .replace(/^\s*[-*+]\s+/gm, '') // 목록 기호 제거
      .replace(/^\s*\d+\.\s+/gm, '') // 번호 목록 제거
      .replace(/\n{2,}/g, '\n') // 여러 줄바꿈을 하나로 통합
      .replace(/<[^>]*>/g, '') // HTML 태그 제거
      .trim();
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {project.imageUrl && (
        <div className="relative overflow-hidden h-48">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.featured && (
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3 py-1 text-sm font-semibold">
              Featured
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {stripMarkdown(project.title)}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {(() => {
            const cleanContent = stripMarkdown(project.description);
            return cleanContent.length > 100 ? cleanContent.substring(0, 100) + '...' : cleanContent;
          })()}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        {project.technologies && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <span 
                key={index} 
                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioCard; 