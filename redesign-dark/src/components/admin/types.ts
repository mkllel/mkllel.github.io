import type { BlogPost, PortfolioProject } from '../../utils/firebase';

export type AdminTab = 'blog' | 'portfolio' | 'addBlog' | 'addPortfolio' | 'featuredOrder' | 'siteTheme';

export interface AdminTabProps {
  isLoading: boolean;
  error: string;
  setError: (error: string) => void;
  successMessage: string;
  setSuccessMessage: (message: string) => void;
}

export interface BlogListProps extends AdminTabProps {
  blogPosts: BlogPost[];
  onEdit: (post: BlogPost) => void;
  onDelete: (postId?: string) => void;
}

export interface BlogFormProps extends AdminTabProps {
  selectedBlogPost: BlogPost | null;
  setActiveTab: (tab: AdminTab) => void;
  onSubmit: (post: BlogPost, imageFile?: File | null) => Promise<void>;
}

export interface PortfolioListProps extends AdminTabProps {
  portfolioProjects: PortfolioProject[];
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId?: string) => void;
}

export interface PortfolioFormProps extends AdminTabProps {
  selectedProject: PortfolioProject | null;
  setActiveTab: (tab: AdminTab) => void;
  onSubmit: (project: PortfolioProject, imageFile?: File | null) => Promise<void>;
}
