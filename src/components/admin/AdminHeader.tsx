import React from 'react';

interface AdminHeaderProps {
  activeTab: 'blog' | 'portfolio' | 'addBlog' | 'addPortfolio';
  setActiveTab: (tab: 'blog' | 'portfolio' | 'addBlog' | 'addPortfolio') => void;
  resetBlogForm: () => void;
  resetProjectForm: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ 
  activeTab, 
  setActiveTab, 
  resetBlogForm, 
  resetProjectForm 
}) => {
  return (
    <div className="flex flex-wrap mb-6 border-b border-gray-200 dark:border-gray-700">
      <button
        className={`mr-2 inline-block p-4 rounded-t-lg ${activeTab === 'blog' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'hover:text-indigo-500 hover:border-gray-300 dark:hover:text-indigo-300'}`}
        onClick={() => setActiveTab('blog')}
        aria-selected={activeTab === 'blog'}
        role="tab"
      >
        📝 블로그 포스트 관리
      </button>
      <button
        className={`mr-2 inline-block p-4 rounded-t-lg ${activeTab === 'portfolio' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'hover:text-indigo-500 hover:border-gray-300 dark:hover:text-indigo-300'}`}
        onClick={() => setActiveTab('portfolio')}
        aria-selected={activeTab === 'portfolio'}
        role="tab"
      >
        💼 포트폴리오 프로젝트 관리
      </button>
      <button
        className={`mr-2 inline-block p-4 rounded-t-lg ${activeTab === 'addBlog' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'hover:text-indigo-500 hover:border-gray-300 dark:hover:text-indigo-300'}`}
        onClick={() => {
          resetBlogForm();
          setActiveTab('addBlog');
        }}
        aria-selected={activeTab === 'addBlog'}
        role="tab"
      >
        ✏️ 블로그 포스트 작성
      </button>
      <button
        className={`inline-block p-4 rounded-t-lg ${activeTab === 'addPortfolio' ? 'border-b-2 border-indigo-500 text-indigo-600 dark:text-indigo-400' : 'hover:text-indigo-500 hover:border-gray-300 dark:hover:text-indigo-300'}`}
        onClick={() => {
          resetProjectForm();
          setActiveTab('addPortfolio');
        }}
        aria-selected={activeTab === 'addPortfolio'}
        role="tab"
      >
        ➕ 포트폴리오 프로젝트 추가
      </button>
    </div>
  );
};

export default AdminHeader; 