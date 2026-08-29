import React from 'react';
import { formatDateKorean } from '../../utils/dateUtils';
import { PortfolioListProps } from './types';

const PortfolioList: React.FC<PortfolioListProps> = ({
  portfolioProjects,
  onEdit,
  onDelete,
  isLoading
}) => {
  // URL에서 파일명 추출
  const extractFileName = (imageUrl: string): string => {
    try {
      // URL에서 경로 부분 추출
      const pathParts = new URL(imageUrl).pathname.split('/');
      // 마지막 부분이 파일명
      const fileName = pathParts[pathParts.length - 1];
      // 타임스탬프 제거 (타임스탬프_파일명.확장자 형식 가정)
      return fileName.substring(fileName.indexOf('_') + 1);
    } catch {
      return '파일명 추출 실패';
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">포트폴리오 프로젝트 목록</h2>

      {portfolioProjects.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">포트폴리오 프로젝트가 없습니다.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="min-w-0 border dark:border-gray-700 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              {project.imageUrl && (
                <div className="mb-3">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    파일명: {extractFileName(project.imageUrl)}
                  </p>
                </div>
              )}

              <h3 className="font-bold text-lg mb-1 truncate flex items-center">
                {project.title}
                {project.featured && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                    주요 프로젝트
                  </span>
                )}
                {project.isPrivate && (
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    비공개
                  </span>
                )}
              </h3>

              <div className="mb-2 flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                {project.description.length > 100
                  ? `${project.description.substring(0, 100)}...`
                  : project.description}
              </p>

              <div className="flex flex-wrap justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>작성일: {formatDateKorean(project.createdAt)}</span>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    프로젝트 링크
                  </a>
                )}
              </div>

              <div className="flex mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2 transition-colors"
                  onClick={() => onEdit(project)}
                  disabled={isLoading}
                >
                  수정
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
                  onClick={() => onDelete(project.id)}
                  disabled={isLoading}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioList;
