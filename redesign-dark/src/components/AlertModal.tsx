import React, { useEffect } from 'react';

interface AlertModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  showCancelButton?: boolean;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  showCancelButton = false
}) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        if (onCancel) {
          onCancel();
        } else {
          onConfirm();
        }
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onConfirm, onCancel]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {message}
          </p>
          <div className="flex justify-end space-x-2">
            {showCancelButton && onCancel && (
              <button
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                취소
              </button>
            )}
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;