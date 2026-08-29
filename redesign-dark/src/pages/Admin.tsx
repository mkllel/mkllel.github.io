import { useState } from 'react';
import AdminHeader from '../components/admin/AdminHeader';
import AdminMessages from '../components/admin/AdminMessages';
import BlogList from '../components/admin/BlogList';
import BlogForm from '../components/admin/BlogForm';
import PortfolioList from '../components/admin/PortfolioList';
import PortfolioForm from '../components/admin/PortfolioForm';
import FeaturedProjectOrder from '../components/admin/FeaturedProjectOrder';
import type { AdminTab } from '../components/admin/types';
import useAdminAuth from '../components/admin/hooks/useAdminAuth';
import useAdminData from '../components/admin/hooks/useAdminData';
import { BlogPost, PortfolioProject } from '../utils/firebase';
import LoadingSpinner from '../components/LoadingSpinner';

const Admin = () => {
  // 활성 탭 상태 관리 (블로그 또는 포트폴리오)
  const [activeTab, setActiveTab] = useState<AdminTab>('portfolio');

  // 선택된 포스트/프로젝트 상태
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // 훅을 사용하여 관리자 인증 및 데이터 관리
  const { isAdminUser, isAuthLoading, authError } = useAdminAuth();
  const {
    blogPosts,
    portfolioProjects,
    isLoading,
    error,
    setError,
    successMessage,
    setSuccessMessage,
    handleCreateBlogPost,
    handleUpdateBlogPost,
    handleDeleteBlogPost,
    handleCreateProject,
    handleUpdateProject,
    handleDeleteProject,
    handleSaveFeaturedOrder
  } = useAdminData();

  // 블로그 포스트 편집 핸들러
  const handleEditBlogPost = (post: BlogPost) => {
    setSelectedBlogPost(post);
    setActiveTab('addBlog');
  };

  // 프로젝트 편집 핸들러
  const handleEditProject = (project: PortfolioProject) => {
    setSelectedProject(project);
    setActiveTab('addPortfolio');
  };

  // 블로그 폼 초기화
  const resetBlogForm = () => {
    setSelectedBlogPost(null);
  };

  // 프로젝트 폼 초기화
  const resetProjectForm = () => {
    setSelectedProject(null);
  };

  // 블로그 포스트 제출 핸들러
  const handleBlogPostSubmit = async (post: BlogPost, imageFile?: File | null) => {
    if (selectedBlogPost && selectedBlogPost.id) {
      const updatedPost = { ...post, id: selectedBlogPost.id };
      await handleUpdateBlogPost(updatedPost, imageFile);
    } else {
      await handleCreateBlogPost(post, imageFile);
    }
    resetBlogForm();
  };

  // 포트폴리오 프로젝트 제출 핸들러
  const handleProjectSubmit = async (project: PortfolioProject, imageFile?: File | null) => {
    if (selectedProject && selectedProject.id) {
      const updatedProject = { ...project, id: selectedProject.id };
      await handleUpdateProject(updatedProject, imageFile);
    } else {
      await handleCreateProject(project, imageFile);
    }
    resetProjectForm();
  };

  // 로딩 중이거나 관리자가 아닌 경우에 대한 처리
  if (isAuthLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
        <p className="ml-2">관리자 권한 확인 중...</p>
      </div>
    );
  }

  if (!isAdminUser) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p className="font-bold">접근 권한 없음</p>
          <p>죄송합니다. 이 페이지에 접근할 권한이 없습니다.</p>
          <p>관리자만 접근할 수 있는 페이지입니다.</p>
          {authError && <p className="mt-2">{authError}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">관리자 대시보드</h1>

      {/* 에러 및 성공 메시지 표시 */}
      <AdminMessages
        error={error || authError}
        successMessage={successMessage}
        setError={setError}
        setSuccessMessage={setSuccessMessage}
      />

      {/* 탭 메뉴 */}
      <AdminHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        resetBlogForm={resetBlogForm}
        resetProjectForm={resetProjectForm}
      />

      {/* 블로그 포스트 목록 */}
      {activeTab === 'blog' && (
        <BlogList
          blogPosts={blogPosts}
          onEdit={handleEditBlogPost}
          onDelete={handleDeleteBlogPost}
          isLoading={isLoading}
          error={error}
          setError={setError}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {/* 포트폴리오 프로젝트 목록 */}
      {activeTab === 'portfolio' && (
        <PortfolioList
          portfolioProjects={portfolioProjects}
          onEdit={handleEditProject}
          onDelete={handleDeleteProject}
          isLoading={isLoading}
          error={error}
          setError={setError}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {/* 블로그 포스트 작성/수정 폼 */}
      {activeTab === 'addBlog' && (
        <BlogForm
          selectedBlogPost={selectedBlogPost}
          setActiveTab={setActiveTab}
          onSubmit={handleBlogPostSubmit}
          isLoading={isLoading}
          error={error}
          setError={setError}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {/* 포트폴리오 프로젝트 추가/수정 폼 */}
      {activeTab === 'addPortfolio' && (
        <PortfolioForm
          selectedProject={selectedProject}
          setActiveTab={setActiveTab}
          onSubmit={handleProjectSubmit}
          isLoading={isLoading}
          error={error}
          setError={setError}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}

      {activeTab === 'featuredOrder' && (
        <FeaturedProjectOrder
          portfolioProjects={portfolioProjects}
          isLoading={isLoading}
          onSave={handleSaveFeaturedOrder}
        />
      )}
    </div>
  );
};

export default Admin;
