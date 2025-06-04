import React from 'react';
import { PortfolioProject } from '../utils/firebase';

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
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
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {(() => {
            const noImageMarkdown = project.description.replace(/!\[[^\]]*\]\([^\)]*\)/g, '');
            return noImageMarkdown.length > 100 ? noImageMarkdown.substring(0, 100) + '...' : noImageMarkdown;
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