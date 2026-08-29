import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortfolioProject } from '../../utils/firebase';
import AlertModal from '../../components/AlertModal';

const AddPortfolio = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!title || !description || !image) {
      setError('제목, 설명, 이미지는 필수입니다.');
      setLoading(false);
      return;
    }

    try {
      // 기술 스택 문자열을 배열로 변환
      const techArray = technologies.split(',').map(tech => tech.trim()).filter(tech => tech);

      // 프로젝트 생성 및 ID 저장
      const projectId = await createPortfolioProject({
        title,
        description,
        link: link || undefined,
        technologies: techArray,
        createdAt: new Date(), // 명시적으로 현재 시간 전달
      }, image);

      // ID가 성공적으로 반환되면 상태 업데이트 및 모달 표시
      if (projectId) {
        setShowSuccessModal(true);

        // 폼 초기화
        setTitle('');
        setDescription('');
        setLink('');
        setTechnologies('');
        setImage(null);
      } else {
        setError('프로젝트 ID를 받지 못했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      console.error('포트폴리오 프로젝트 추가 오류:', err);
      setError('포트폴리오 프로젝트를 추가하는 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmSuccess = () => {
    navigate('/portfolio');
  };

  // 성공 모달 닫기 함수
  const handleCloseModal = () => {
    setShowSuccessModal(false);
    navigate('/admin');
  };

  return (
    <div className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">포트폴리오 프로젝트 추가</h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          {error && (
            <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-6">
              <p className="text-red-700 dark:text-red-300">{error}</p>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              프로젝트 제목 *
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
            <label htmlFor="description" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              프로젝트 설명 *
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="link" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              프로젝트 링크
            </label>
            <input
              type="url"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="technologies" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              사용 기술 (쉼표로 구분)
            </label>
            <input
              type="text"
              id="technologies"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="예: React, TypeScript, Firebase"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              프로젝트 이미지 *
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
            {image && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  선택된 파일: {image.name}
                </p>
              </div>
            )}
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
        title="프로젝트 등록 완료"
        message="포트폴리오 프로젝트가 성공적으로 등록되었습니다. 포트폴리오 페이지로 이동하시겠습니까?"
        onConfirm={handleConfirmSuccess}
        onCancel={handleCloseModal}
        showCancelButton={true}
      />
    </div>
  );
};

export default AddPortfolio;
