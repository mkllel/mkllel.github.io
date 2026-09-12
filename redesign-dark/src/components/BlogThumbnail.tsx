import { useState } from 'react';
import { ImageOff } from 'lucide-react';

const BlogThumbnail = ({ src, title }: { src?: string; title: string }) => {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (!src?.trim() || failedSrc === src) {
    return (
      <div className="blog-list-item__image blog-list-item__image--empty" role="img" aria-label={`${title} 이미지 없음`}>
        <ImageOff size={36} strokeWidth={1.5} aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="blog-list-item__image">
      <img src={src} alt="" width="420" height="240" loading="lazy" decoding="async" onError={() => setFailedSrc(src)} />
    </div>
  );
};

export default BlogThumbnail;
