import React, { useEffect, useMemo, useState } from 'react';
import { PortfolioFormProps } from './types';
import type { PortfolioGalleryImage, PortfolioProject, PortfolioResourceLink } from '../../utils/firebase';
import { uploadBlogContentImages } from '../../utils/firebaseAdmin';
import { getProjectResourceLinks, toPortfolioViewProject, type PortfolioViewProject } from '../../data/portfolioContent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ProjectMarkdown from '../ProjectMarkdown';

const DetailPagePreview = ({ project }: { project: PortfolioViewProject }) => {
  const resourceLinks = getProjectResourceLinks(project);
  const galleryImages = (project.galleryImages || []).filter((image) => image.url.trim());

  return (
    <section className="admin-detail-preview" aria-labelledby="detail-preview-heading">
    <div className="admin-detail-preview__toolbar">
      <h3 id="detail-preview-heading">상세 페이지 미리보기</h3>
      <span>실시간</span>
    </div>
    <article className="case-study">
      <header className="case-hero">
        <div className="case-hero__grid admin-detail-preview__inner">
          <div>
            <span className="back-link">← 프로젝트 목록</span>
            <p className="eyebrow">{project.label}</p>
            <h1>{project.title}</h1>
            <p className="case-hero__summary">{project.summary}</p>
            {resourceLinks.length > 0 && (
              <div className="button-row">
                {resourceLinks.map((resource) => (
                  <a className="button button--primary" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>
                    {resource.text} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
          <dl className="case-facts">
            {project.role && <div><dt>담당</dt><dd>{project.role}</dd></div>}
            {project.technologies.length > 0 && <div><dt>기술</dt><dd>{project.technologies.join(' · ')}</dd></div>}
            {project.outcome && <div><dt>결과</dt><dd>{project.outcome}</dd></div>}
          </dl>
        </div>
      </header>

      {galleryImages.length > 0 && (
        <section className="case-gallery-section" aria-label="프로젝트 구축 화면">
          <div className="case-gallery admin-detail-preview__inner">
            {galleryImages.map((image) => (
              <figure key={image.url}>
                <img src={image.url} alt={image.alt || `${project.title} 구축 화면`} />
                {image.alt && <figcaption>{image.alt}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.imageUrl && (
        <section className="case-cover-section" aria-label="프로젝트 대표 이미지">
          <figure className="case-cover admin-detail-preview__inner">
            <img src={project.imageUrl} alt={`${project.title} 대표 이미지`} />
          </figure>
        </section>
      )}

      {project.introMarkdown && (
        <section className="case-content-media section--white">
          <div className="admin-detail-preview__inner case-sections">
            <ProjectMarkdown>{project.introMarkdown}</ProjectMarkdown>
          </div>
        </section>
      )}

      {project.architecture && project.architecture.length > 0 && (
        <section className="section section--paper">
          <div className="admin-detail-preview__inner">
            <div className="section-heading section-heading--left section-heading--compact">
              <p className="eyebrow">SYSTEM FLOW</p>
              <h2>구조와 처리 흐름</h2>
            </div>
            <ol className="architecture-flow">
              {project.architecture.map((step, index) => (
                <li key={`${step}-${index}`}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section section--white">
        <div className="admin-detail-preview__inner case-sections">
          {project.caseStudy.map((section, index) => (
            <section className="case-section" key={`${section.title}-${index}`}>
              <span className="case-section__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                <ProjectMarkdown>{section.markdown}</ProjectMarkdown>
              </div>
            </section>
          ))}
        </div>
      </section>
    </article>
    </section>
  );
};

const PortfolioForm: React.FC<PortfolioFormProps> = ({
  selectedProject,
  setActiveTab,
  onSubmit,
  isLoading,
  setError
}) => {
  // 포트폴리오 프로젝트 폼 상태
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [summary, setSummary] = useState('');
  const [role, setRole] = useState('');
  const [outcome, setOutcome] = useState('');
  const [architecture, setArchitecture] = useState('');
  const [link, setLink] = useState('');
  const [resourceLinks, setResourceLinks] = useState<PortfolioResourceLink[]>([]);
  const [galleryImages, setGalleryImages] = useState<PortfolioGalleryImage[]>([]);
  const [technologies, setTechnologies] = useState('');
  const [category, setCategory] = useState('');
  const [featured, setFeatured] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isMarkdownPreviewOpen, setIsMarkdownPreviewOpen] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [contentImages, setContentImages] = useState<File[]>([]);
  const [isUploadingContentImages, setIsUploadingContentImages] = useState(false);

  const imagePreviewUrl = useMemo(
    () => imageFile ? URL.createObjectURL(imageFile) : selectedProject?.imageUrl,
    [imageFile, selectedProject?.imageUrl],
  );

  useEffect(() => () => {
    if (imageFile && imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
  }, [imageFile, imagePreviewUrl]);

  const detailPreviewProject = useMemo(() => {
    const technologyList = technologies.split(',').map(tech => tech.trim()).filter(Boolean);
    const architectureSteps = architecture.split(',').map(step => step.trim()).filter(Boolean);

    return toPortfolioViewProject({
      id: selectedProject?.id || 'detail-preview',
      title: title.trim() || '프로젝트 제목',
      description: description.trim() || '## 상세 내용\n\n프로젝트 설명을 입력하면 이곳에 표시됩니다.',
      summary: summary.trim() || undefined,
      role: role.trim() || undefined,
      outcome: outcome.trim() || undefined,
      architecture: architectureSteps.length > 0 ? architectureSteps : undefined,
      imageUrl: imagePreviewUrl,
      link: link.trim() || undefined,
      resourceLinks,
      galleryImages,
      technologies: technologyList,
      category: category || undefined,
      featured,
      isPrivate,
      createdAt: selectedProject?.createdAt || new Date(),
    });
  }, [architecture, category, description, featured, galleryImages, imagePreviewUrl, isPrivate, link, outcome, resourceLinks, role, selectedProject, summary, technologies, title]);

  // 프로젝트 카테고리 목록
  const categories = [
    'B2B SaaS · 업무 자동화 · 백엔드',
    '백엔드 · AI 서비스 연동 · 인프라',
    '백엔드 · 인프라',
    '인프라 · Linux · 서비스 운영',
    '인프라 · 운영',
    '웹 개발 · CMS',
    '웹 개발',
    '모바일 앱',
    '데스크톱 앱',
    '프론트엔드',
    '백엔드',
    'DevOps',
    '오픈소스',
    '기타'
  ];

  // 선택된 프로젝트가 변경되면 폼 업데이트
  useEffect(() => {
    if (selectedProject) {
      setTitle(selectedProject.title || '');
      setDescription(selectedProject.description || '');
      setSummary(selectedProject.summary || '');
      setRole(selectedProject.role || '');
      setOutcome(selectedProject.outcome || '');
      setArchitecture(selectedProject.architecture?.join(', ') || '');
      setLink(selectedProject.link || '');
      setResourceLinks(selectedProject.resourceLinks || []);
      setGalleryImages(selectedProject.galleryImages || []);
      setTechnologies(selectedProject.technologies?.join(', ') || '');
      setCategory(selectedProject.category || '');
      setFeatured(selectedProject.featured || false);
      setIsPrivate(selectedProject.isPrivate || false);
    } else {
      // 새 프로젝트 생성 시 초기화
      resetForm();
    }
  }, [selectedProject]);

  // 폼 초기화
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSummary('');
    setRole('');
    setOutcome('');
    setArchitecture('');
    setLink('');
    setResourceLinks([]);
    setGalleryImages([]);
    setTechnologies('');
    setCategory('');
    setFeatured(false);
    setIsPrivate(false);
    setImageFile(null);
    setContentImages([]);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  // URL 유효성 검사
  const isValidUrl = (url: string): boolean => {
    if (!url || url.trim() === '') return true; // 비어있으면 유효함 (필수 아님)

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleContentImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    setContentImages(prev => [...prev, ...files]);
  };

  const handleRemoveContentImage = (idx: number) => {
    setContentImages(prev => prev.filter((_, i) => i !== idx));
  };

  const handleUploadContentImages = async () => {
    if (contentImages.length === 0) return;
    setIsUploadingContentImages(true);
    setError('');
    try {
      // projectId는 수정 시에는 selectedProject.id, 새 프로젝트 작성 시에는 임시 ID 사용
      let projectId = selectedProject?.id;
      if (!projectId) {
        projectId = 'temp-' + Date.now();
      }
      const urls = await uploadBlogContentImages(contentImages, projectId);
      let newDescription = description;
      urls.forEach(url => {
        newDescription += `\n\n![포트폴리오 이미지](${url})\n`;
      });
      setDescription(newDescription);
      setContentImages([]);
    } catch {
      setError('설명 이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      setIsUploadingContentImages(false);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (!title || !description) {
        setError('제목과 설명은 필수 입력 항목입니다.');
        return;
      }

      if (link && !isValidUrl(link)) {
        setError('유효한 URL을 입력해주세요.');
        return;
      }

      const normalizedResourceLinks = resourceLinks
        .filter(resource => resource.url.trim())
        .map(resource => ({ url: resource.url.trim(), label: resource.label?.trim() || undefined }));
      const normalizedGalleryImages = galleryImages
        .filter(image => image.url.trim())
        .map(image => ({ url: image.url.trim(), alt: image.alt.trim() }));

      if (normalizedResourceLinks.some(resource => !isValidUrl(resource.url))) {
        setError('유효한 프로젝트 자료 링크를 입력해주세요.');
        return;
      }

      if (normalizedGalleryImages.some(image => !isValidUrl(image.url))) {
        setError('유효한 갤러리 이미지 URL을 입력해주세요.');
        return;
      }

      // 기술 스택 문자열을 배열로 변환
      const techArray = technologies.split(',').map(tech => tech.trim()).filter(tech => tech);
      const architectureSteps = architecture.split(',').map(step => step.trim()).filter(Boolean);

      const projectData: Partial<PortfolioProject> = {
        title,
        description,
        summary: summary || undefined,
        role: role || undefined,
        outcome: outcome || undefined,
        architecture: architectureSteps.length > 0 ? architectureSteps : undefined,
        link: link || undefined,
        resourceLinks: normalizedResourceLinks,
        galleryImages: normalizedGalleryImages,
        technologies: techArray,
        category: category || undefined,
        featured,
        isPrivate
      };

      if (selectedProject?.id) {
        projectData.id = selectedProject.id;
      }

      await onSubmit(projectData as PortfolioProject, imageFile);

      // 성공 시 목록으로 돌아가기
      setActiveTab('portfolio');
    } catch (err) {
      console.error('포트폴리오 폼 제출 오류:', err);
      setError('프로젝트를 저장하는 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {selectedProject ? '포트폴리오 프로젝트 수정' : '새 포트폴리오 프로젝트 추가'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 제목 입력 */}
        <div>
          <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            프로젝트 제목 *
          </label>
          <input
            id="projectTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="프로젝트 제목을 입력하세요"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="projectSummary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            프로젝트 요약
          </label>
          <textarea
            id="projectSummary"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="프로젝트 카드와 상세 화면 상단에 표시할 핵심 요약"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="projectRole" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              담당 범위
            </label>
            <textarea
              id="projectRole"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="직접 담당한 설계와 구현 범위"
            />
          </div>
          <div>
            <label htmlFor="projectOutcome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              결과
            </label>
            <textarea
              id="projectOutcome"
              value={outcome}
              onChange={(e) => setOutcome(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              placeholder="구현 결과와 운영 관점의 변화"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectArchitecture" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            처리 흐름
          </label>
          <input
            id="projectArchitecture"
            type="text"
            value={architecture}
            onChange={(e) => setArchitecture(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="쉼표로 구분 (예: 사용자 요청, API 검증, 작업 실행, 결과 저장)"
          />
        </div>

        {/* 프로젝트 설명 */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-1">
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              프로젝트 설명 * (마크다운 지원)
            </label>
            <button
              type="button"
              onClick={() => setIsMarkdownPreviewOpen(open => !open)}
              aria-expanded={isMarkdownPreviewOpen}
              aria-controls="markdownPreview"
              className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {isMarkdownPreviewOpen ? '미리보기 닫기' : '미리보기 열기'}
            </button>
          </div>
          <div className={`grid grid-cols-1 ${isMarkdownPreviewOpen ? 'md:grid-cols-2' : ''} gap-4`}>
            <div>
              <textarea
                id="projectDescription"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={12}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white font-mono"
                placeholder="프로젝트에 대한 설명을 작성하세요. 마크다운 문법을 지원합니다.
예시:
# 큰 제목
## 중간 제목
### 작은 제목

**볼드체**, *이탤릭체*, ~~취소선~~

- 목록 항목 1
- 목록 항목 2

1. 번호 목록 1
2. 번호 목록 2

[링크](URL)
![이미지 설명](이미지 URL)

\`\`\`javascript
// 코드 블록
const hello = 'world';
return hello;
\`\`\`"
                required
                aria-required="true"
              />
            </div>
            {isMarkdownPreviewOpen && (
              <div id="markdownPreview" className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-800">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">미리보기</h3>
                <div className="markdown-preview markdown-preview--admin overflow-auto max-h-[400px]">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {description}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            마크다운 제목과 목록은 공개 상세 페이지의 번호 섹션과 항목으로 표시됩니다.
          </p>
          <DetailPagePreview project={detailPreviewProject} />
        </div>

        {/* 설명 이미지 첨부 */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            설명 이미지 첨부 (여러 장 첨부 가능)
          </label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleContentImagesChange}
            disabled={isUploadingContentImages}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
          />
          {contentImages.length > 0 && (
            <ul className="mt-2 space-y-1">
              {contentImages.map((file, idx) => (
                <li key={idx} className="flex items-center justify-between text-xs text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
                  <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                  <button type="button" onClick={() => handleRemoveContentImage(idx)} className="ml-2 text-red-500 hover:underline">삭제</button>
                </li>
              ))}
            </ul>
          )}
          <button
            type="button"
            onClick={handleUploadContentImages}
            disabled={contentImages.length === 0 || isUploadingContentImages}
            className="mt-2 px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {isUploadingContentImages ? '업로드 중...' : '설명 이미지 업로드 및 내용에 삽입'}
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">이미지는 업로드 후 설명에 마크다운으로 자동 삽입됩니다.</p>
        </div>

        {/* 카테고리 선택 */}
        <div>
          <label htmlFor="projectCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            카테고리
          </label>
          <select
            id="projectCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
          >
            <option value="">카테고리 선택 (선택사항)</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* 링크 입력 */}
        <div>
          <label htmlFor="projectLink" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            프로젝트 링크
          </label>
          <input
            id="projectLink"
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="프로젝트 URL (선택사항)"
          />
        </div>

        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">추가 프로젝트 자료 링크</span>
            <button
              type="button"
              onClick={() => setResourceLinks(prev => [...prev, { label: '', url: '' }])}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded"
            >
              + 링크
            </button>
          </div>
          <div className="space-y-3">
            {resourceLinks.map((resource, index) => (
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-2" key={`resource-${index}`}>
                <input
                  type="text"
                  value={resource.label || ''}
                  onChange={(event) => setResourceLinks(prev => prev.map((item, itemIndex) => itemIndex === index ? { ...item, label: event.target.value } : item))}
                  aria-label={`자료 링크 ${index + 1} 이름`}
                  placeholder="프로젝트 이름"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="url"
                  value={resource.url}
                  onChange={(event) => setResourceLinks(prev => prev.map((item, itemIndex) => itemIndex === index ? { ...item, url: event.target.value } : item))}
                  aria-label={`자료 링크 ${index + 1} URL`}
                  placeholder="https://..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setResourceLinks(prev => prev.filter((_, itemIndex) => itemIndex !== index))}
                  className="px-3 py-2 text-sm text-red-600 dark:text-red-300"
                  aria-label={`자료 링크 ${index + 1} 삭제`}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">프로젝트 갤러리 이미지</span>
            <button
              type="button"
              onClick={() => setGalleryImages(prev => [...prev, { alt: '', url: '' }])}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded"
            >
              + 이미지
            </button>
          </div>
          <div className="space-y-3">
            {galleryImages.map((image, index) => (
              <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-2" key={`gallery-${index}`}>
                <input
                  type="text"
                  value={image.alt}
                  onChange={(event) => setGalleryImages(prev => prev.map((item, itemIndex) => itemIndex === index ? { ...item, alt: event.target.value } : item))}
                  aria-label={`갤러리 이미지 ${index + 1} 설명`}
                  placeholder="이미지 설명"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="url"
                  value={image.url}
                  onChange={(event) => setGalleryImages(prev => prev.map((item, itemIndex) => itemIndex === index ? { ...item, url: event.target.value } : item))}
                  aria-label={`갤러리 이미지 ${index + 1} URL`}
                  placeholder="https://..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setGalleryImages(prev => prev.filter((_, itemIndex) => itemIndex !== index))}
                  className="px-3 py-2 text-sm text-red-600 dark:text-red-300"
                  aria-label={`갤러리 이미지 ${index + 1} 삭제`}
                >
                  삭제
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 기술 스택 입력 */}
        <div>
          <label htmlFor="projectTechnologies" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            사용 기술
          </label>
          <input
            id="projectTechnologies"
            type="text"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="쉼표로 구분된 기술 스택 (예: React, TypeScript, Firebase)"
          />
        </div>

        {/* 주요 프로젝트 체크박스 */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center">
            <input
              id="projectFeatured"
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="projectFeatured" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              주요 프로젝트로 표시
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="projectPrivate"
              type="checkbox"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="projectPrivate" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
              비공개
            </label>
          </div>
        </div>

        {/* 이미지 업로드 */}
        <div>
          <label htmlFor="projectImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            프로젝트 이미지
          </label>
          <div className="flex flex-col space-y-4">
            <input
              id="projectImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            />

            {/* 이미지 미리보기 영역 */}
            <div className="mt-2">
              {imageFile ? (
                <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">새 이미지 미리보기:</p>
                  <img
                    src={imagePreviewUrl}
                    alt="새 프로젝트 이미지"
                    className="w-full max-h-60 object-contain rounded-md border border-gray-200 dark:border-gray-700"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    파일명: {imageFile.name} ({(imageFile.size / 1024).toFixed(1)} KB)
                  </p>
                </div>
              ) : selectedProject && selectedProject.imageUrl ? (
                <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">현재 이미지:</p>
                  <img
                    src={selectedProject.imageUrl}
                    alt="현재 프로젝트 이미지"
                    className="w-full max-h-60 object-contain rounded-md border border-gray-200 dark:border-gray-700"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    새 이미지를 업로드하지 않으면 현재 이미지가 유지됩니다.
                  </p>
                </div>
              ) : (
                <div className="border border-dashed border-gray-300 dark:border-gray-600 rounded-md p-4 bg-gray-50 dark:bg-gray-800 flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    이미지가 없습니다. 위에서 이미지를 선택해주세요.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={() => {
              resetForm();
              setActiveTab('portfolio');
            }}
            className="px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500 rounded-md"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={`px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-md ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? '저장 중...' : (selectedProject ? '업데이트' : '추가')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PortfolioForm;
