import React, { useEffect } from 'react';

interface AdminMessagesProps {
  error: string;
  successMessage: string;
  setError: (error: string) => void;
  setSuccessMessage: (message: string) => void;
  autoCloseDelay?: number; // ms 단위
}

const AdminMessages: React.FC<AdminMessagesProps> = ({
  error,
  successMessage,
  setError,
  setSuccessMessage,
  autoCloseDelay = 3000 // 기본값 3초
}) => {
  // 자동으로 성공 메시지 제거
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, autoCloseDelay);
      
      return () => clearTimeout(timer);
    }
  }, [successMessage, setSuccessMessage, autoCloseDelay]);

  return (
    <>
      {error && (
        <div 
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 relative" 
          role="alert"
          aria-live="assertive"
        >
          <button 
            className="absolute top-1 right-1 text-red-700 hover:text-red-900"
            onClick={() => setError('')}
            aria-label="닫기"
          >
            ×
          </button>
          <p>{error}</p>
        </div>
      )}
      
      {successMessage && (
        <div 
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 relative"
          role="status"
          aria-live="polite"
        >
          <button 
            className="absolute top-1 right-1 text-green-700 hover:text-green-900"
            onClick={() => setSuccessMessage('')}
            aria-label="닫기"
          >
            ×
          </button>
          <p>{successMessage}</p>
        </div>
      )}
    </>
  );
};

export default AdminMessages; 