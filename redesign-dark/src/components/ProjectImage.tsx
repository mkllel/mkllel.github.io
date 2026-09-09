import type { ImgHTMLAttributes } from 'react';

export type OpenProjectImage = (image: HTMLImageElement) => void;

type Props = ImgHTMLAttributes<HTMLImageElement> & { onOpen?: OpenProjectImage };

export default function ProjectImage({ onOpen, alt, ...props }: Props) {
  if (!onOpen) return <img {...props} alt={alt} />;

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
      <img {...props} alt={alt} data-project-image />
    </button>
  );
}
