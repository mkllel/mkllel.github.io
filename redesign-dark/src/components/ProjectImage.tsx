import { useState, type ImgHTMLAttributes } from 'react';
import { projectDetailImages } from '../data/projectThumbnails';

export type OpenProjectImage = (image: HTMLImageElement) => void;

type Props = ImgHTMLAttributes<HTMLImageElement> & { onOpen?: OpenProjectImage };

export default function ProjectImage({ onOpen, alt, src, loading = 'lazy', ...props }: Props) {
  const [failedSource, setFailedSource] = useState<string | undefined>();
  const optimized = src && src !== failedSource ? projectDetailImages[src] : undefined;
  const image = (
    <img
      {...props}
      src={optimized?.src || src}
      srcSet={optimized?.srcSet || props.srcSet}
      sizes={optimized ? props.sizes || '(max-width: 720px) calc(100vw - 28px), (max-width: 1220px) calc(100vw - 40px), 1180px' : props.sizes}
      width={props.width || optimized?.width}
      height={props.height || optimized?.height}
      loading={loading}
      alt={alt}
      data-project-image={onOpen ? true : undefined}
      data-original-src={src}
      data-original-width={optimized?.width}
      data-original-height={optimized?.height}
      onError={optimized ? () => setFailedSource(src) : props.onError}
    />
  );
  if (!onOpen) return image;

  return (
    <button
      type="button"
      className="project-image-trigger"
      aria-label={`${alt || '프로젝트 이미지'} 확대 보기`}
      aria-haspopup="dialog"
      title="이미지 확대 보기"
      onClick={(event) => {
        const image = event.currentTarget.querySelector('img');
        if (image) {
          event.currentTarget.focus({ preventScroll: true });
          onOpen(image);
        }
      }}
    >
      {image}
    </button>
  );
}
