import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlogPost } from '../../utils/firebase';
import AlertModal from '../../components/AlertModal';

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [createdPostId, setCreatedPostId] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!title || !content) {
      setError('제목과 내용은 필수입니다.');
      setLoading(false);
      return;
    }

    try {
      // 태그 문자열을 배열로 변환
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);

      // createBlogPost 함수 호출 및 반환된 ID 저장
      const postId = await createBlogPost({
        title,
        content,
        category,
        tags: tagsArray,
        createdAt: new Date(), // 명시적으로 현재 시간 전달
      });

      console.log('Blog post created with ID:', postId);
      
      // ID가 성공적으로 반환되면 상태 업데이트 및 모달 표시
      if (postId) {
        setCreatedPostId(postId);
        setShowSuccessModal(true);
        
        // 폼 초기화
        setTitle('');
        setContent('');
        setCategory('');
        setTags('');
      } else {
        setError('게시물 ID를 받지 못했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      console.error('블로그 포스트 추가 오류:', err);
      setError('블로그 포스트를 추가하는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSuccess = () => {
    if (createdPostId) {
      navigate(`/blog/${createdPostId}`);
    } else {
      navigate('/blog');
    }
  };

  // 성공 모달 닫기 함수
  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/blog');
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">블로그 글 작성</h1>
        
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          {error && (
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-6">
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}
          
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              제목 *
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="category" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              카테고리
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            >
              <option value="">카테고리 선택</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-6">
            <label htmlFor="content" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              내용 *
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              rows={10}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="tags" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              태그 (쉼표로 구분)
            </label>
            <input
              type="text"
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="예: 리액트, Firebase, 웹개발"
            />
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="px-6 py-2 mr-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {loading ? '저장 중...' : '저장하기'}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <AlertModal
        isOpen={showSuccessModal}
        title="게시물 등록 완료"
        message="블로그 게시물이 성공적으로 등록되었습니다. 등록된 게시물로 이동하시겠습니까?"
        onConfirm={handleConfirmSuccess}
        onCancel={handleCloseModal}
        showCancelButton={true}
      />
    </div>
  );
};

export default AddBlog; 