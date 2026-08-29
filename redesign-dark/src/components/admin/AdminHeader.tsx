import React from 'react';
import { Briefcase, FileText, ListOrdered, PenLine, Plus } from 'lucide-react';
import type { AdminTab } from './types';

interface AdminHeaderProps {
  activeTab: AdminTab;
  setActiveTab: (tab: AdminTab) => void;
  resetBlogForm: () => void;
  resetProjectForm: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  activeTab,
  setActiveTab,
  resetBlogForm,
  resetProjectForm
}) => {
  const tabs: Array<{
    id: AdminTab;
    label: string;
    icon: React.ComponentType<{ size?: number; 'aria-hidden'?: boolean }>;
    onSelect?: () => void;
  }> = [
    { id: 'portfolio', label: '포트폴리오 관리', icon: Briefcase },
    { id: 'blog', label: '블로그 관리', icon: FileText },
    { id: 'addPortfolio', label: '프로젝트 추가', icon: Plus, onSelect: resetProjectForm },
    { id: 'addBlog', label: '블로그 작성', icon: PenLine, onSelect: resetBlogForm },
    { id: 'featuredOrder', label: '주요 순서', icon: ListOrdered },
  ];

  return (
    <div className="admin-tabs" role="tablist" aria-label="관리자 메뉴">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            className={isActive ? 'admin-tab admin-tab--active' : 'admin-tab'}
            key={tab.id}
            onClick={() => {
              tab.onSelect?.();
              setActiveTab(tab.id);
            }}
            aria-selected={isActive}
            role="tab"
            type="button"
          >
            <Icon size={18} aria-hidden={true} />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AdminHeader;
