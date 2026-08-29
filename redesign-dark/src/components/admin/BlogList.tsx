import React from 'react';
import { formatDateKorean } from '../../utils/dateUtils';
import { BlogListProps } from './types';

const BlogList: React.FC<BlogListProps> = ({
  blogPosts,
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
      <h2 className="text-xl font-bold mb-4">블로그 포스트 목록</h2>

      {blogPosts.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">블로그 포스트가 없습니다.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border dark:border-gray-700 p-4 rounded-md shadow-sm hover:shadow-md transition-shadow"
            >
              {post.image && (
                <div className="mb-3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    파일명: {extractFileName(post.image)}
                  </p>
                </div>
              )}

              <h3 className="font-bold text-lg mb-1 truncate">{post.title}</h3>

              <div className="flex flex-wrap gap-1 mb-2">
                {post.tags && post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {post.category ?
                  <span className="font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded mr-2">
                    {post.category}
                  </span>
                : null}
                <span>작성일: {formatDateKorean(post.createdAt)}</span>
              </p>

              <div className="flex mt-2">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2 transition-colors"
                  onClick={() => onEdit(post)}
                  disabled={isLoading}
                >
                  수정
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
                  onClick={() => onDelete(post.id)}
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

export default BlogList;
