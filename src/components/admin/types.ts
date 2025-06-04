import { BlogPost, PortfolioProject } from '../../utils/firebase';

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
  setActiveTab: (tab: 'blog' | 'portfolio' | 'addBlog' | 'addPortfolio') => void;
  onSubmit: (post: BlogPost, imageFile?: File | null) => Promise<void>;
}

export interface PortfolioListProps extends AdminTabProps {
  portfolioProjects: PortfolioProject[];
  onEdit: (project: PortfolioProject) => void;
  onDelete: (projectId?: string) => void;
}

export interface PortfolioFormProps extends AdminTabProps {
  selectedProject: PortfolioProject | null;
  setActiveTab: (tab: 'blog' | 'portfolio' | 'addBlog' | 'addPortfolio') => void;
  onSubmit: (project: PortfolioProject, imageFile?: File | null) => Promise<void>;
} 