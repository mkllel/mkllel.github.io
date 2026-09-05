import React, { useState, useEffect } from 'react';
import { BlogFormProps } from './types';
import type { BlogPost } from '../../utils/firebase';
import { uploadBlogContentImages } from '../../utils/firebaseAdmin';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogForm: React.FC<BlogFormProps> = ({
  selectedBlogPost,
  setActiveTab,
  onSubmit,
  isLoading,
  setError
}) => {
  // 블로그 포스트 폼 상태
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [contentImages, setContentImages] = useState<File[]>([]);
  const [isUploadingContentImages, setIsUploadingContentImages] = useState(false);

  // 블로그 카테고리 목록
  const categories = [
    '개발',
    '프론트엔드',
    '백엔드',
    'DevOps',
    '알고리즘',
    '프로젝트',
    '일상',
    '기타'
  ];

  // 선택된 블로그 포스트가 변경되면 폼 업데이트
  useEffect(() => {
    if (selectedBlogPost) {
      setTitle(selectedBlogPost.title || '');
      setContent(selectedBlogPost.content || '');
      setCategory(selectedBlogPost.category || '');
      setTags(selectedBlogPost.tags?.join(', ') || '');
    } else {
      // 새 포스트 작성 시 초기화
      resetForm();
    }
  }, [selectedBlogPost]);

  // 폼 초기화
  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('');
    setTags('');
    setImageFile(null);
    setContentImages([]);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
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
      // postId는 수정 시에는 selectedBlogPost.id, 새 글 작성 시에는 임시 ID 사용
      let postId = selectedBlogPost?.id;
      if (!postId) {
        // 임시 ID 생성 (업로드 후 글 저장 시 실제 ID로 경로 이동 필요)
        postId = 'temp-' + Date.now();
      }
      const urls = await uploadBlogContentImages(contentImages, postId);
      let newContent = content;
      urls.forEach(url => {
        newContent += `\n\n![본문 이미지](${url})\n`;
      });
      setContent(newContent);
      setContentImages([]);
    } catch {
      setError('본문 이미지 업로드 중 오류가 발생했습니다.');
    } finally {
      setIsUploadingContentImages(false);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (!title || !content) {
        setError('제목과 내용은 필수 입력 항목입니다.');
        return;
      }

      // 태그 문자열을 배열로 변환
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);

      const postData: Partial<BlogPost> = {
        title,
        content,
        category,
        tags: tagsArray
      };

      if (selectedBlogPost?.id) {
        postData.id = selectedBlogPost.id;
      }

      await onSubmit(postData as BlogPost, imageFile);

      // 성공 시 목록으로 돌아가기
      setActiveTab('blog');
    } catch (err) {
      console.error('블로그 폼 제출 오류:', err);
      setError('블로그 포스트를 저장하는 중 오류가 발생했습니다.');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        {selectedBlogPost ? '블로그 포스트 수정' : '새 블로그 포스트 작성'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 제목 입력 */}
        <div>
          <label htmlFor="blogTitle" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            제목 *
          </label>
          <input
            id="blogTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="포스트 제목을 입력하세요"
            required
            aria-required="true"
          />
        </div>

        {/* 카테고리 선택 */}
        <div>
          <label htmlFor="blogCategory" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            카테고리
          </label>
          <select
            id="blogCategory"
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

        {/* 블로그 내용 */}
        <div>
          <label htmlFor="blogContent" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            블로그 내용 * (마크다운 지원)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <textarea
                id="blogContent"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white font-mono"
                placeholder="블로그 내용을 작성하세요. 마크다운 문법을 지원합니다.
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
            <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-gray-800">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">미리보기</h3>
              <div className="markdown-preview markdown-preview--admin overflow-auto max-h-[400px]">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            마크다운 문법을 사용하여 텍스트를 스타일링할 수 있습니다.
          </p>
        </div>

        {/* 본문 이미지 첨부 */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            본문 이미지 첨부 (여러 장 첨부 가능)
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
            {isUploadingContentImages ? '업로드 중...' : '본문 이미지 업로드 및 내용에 삽입'}
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">이미지는 업로드 후 본문에 마크다운으로 자동 삽입됩니다.</p>
        </div>

        {/* 태그 입력 */}
        <div>
          <label htmlFor="blogTags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            태그
          </label>
          <input
            id="blogTags"
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="쉼표로 구분된 태그 (예: 리액트, 자바스크립트, 웹개발)"
          />
        </div>

        {/* 이미지 업로드 */}
        <div>
          <label htmlFor="blogImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            포스트 이미지 (선택 사항)
          </label>
          <div className="flex flex-col space-y-4">
            <input
              id="blogImage"
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
                    src={URL.createObjectURL(imageFile)}
                    alt="새 포스트 이미지"
                    className="w-full max-h-60 object-contain rounded-md border border-gray-200 dark:border-gray-700"
                    onLoad={() => URL.revokeObjectURL(URL.createObjectURL(imageFile))}
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    파일명: {imageFile.name} ({(imageFile.size / 1024).toFixed(1)} KB)
                  </p>
                </div>
              ) : selectedBlogPost && selectedBlogPost.image ? (
                <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 bg-gray-50 dark:bg-gray-800">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">현재 이미지:</p>
                  <img
                    src={selectedBlogPost.image}
                    alt="현재 포스트 이미지"
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
              setActiveTab('blog');
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
            {isLoading ? '저장 중...' : (selectedBlogPost ? '업데이트' : '게시')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
