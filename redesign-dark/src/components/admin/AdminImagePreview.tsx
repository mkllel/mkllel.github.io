import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface AdminImagePreviewProps {
  src?: string;
  alt: string;
}

const extractFileName = (imageUrl: string): string => {
  try {
    const pathParts = new URL(imageUrl).pathname.split('/');
    const fileName = pathParts[pathParts.length - 1];
    return fileName.substring(fileName.indexOf('_') + 1);
  } catch {
    return '파일명 추출 실패';
  }
};

const AdminImagePreview = ({ src, alt }: AdminImagePreviewProps) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className="admin-list-image-placeholder mb-3"
        role="img"
        aria-label={`${alt} 이미지 없음`}
      >
        <ImageOff size={32} strokeWidth={1.5} aria-hidden={true} />
      </div>
    );
  }

  return (
    <div className="mb-3">
      <img
        src={src}
        alt={alt}
        className="w-full h-40 object-cover rounded-md"
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
        파일명: {extractFileName(src)}
      </p>
    </div>
  );
};

export default AdminImagePreview;
