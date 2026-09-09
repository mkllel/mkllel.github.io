import { useState } from 'react';
import projectThumbnails from '../data/projectThumbnails';

interface Props {
  src: string;
  alt: string;
  split: boolean;
}

export default function PortfolioThumbnail({ src, alt, split }: Props) {
  const [failedSource, setFailedSource] = useState<string | null>(null);
  const thumbnail = failedSource === src ? undefined : projectThumbnails[src];
  const sizes = split
    ? '(max-width: 650px) calc(50vw - 14px), (max-width: 720px) calc(25vw - 13px), (max-width: 1220px) calc(25vw - 16px), 289px'
    : '(max-width: 650px) calc(100vw - 28px), (max-width: 720px) calc(50vw - 26px), (max-width: 1220px) calc(50vw - 32px), 578px';

  return (
    <img
      src={thumbnail?.src || src}
      srcSet={thumbnail?.srcSet}
      sizes={thumbnail ? sizes : undefined}
      alt={alt}
      width={split ? 360 : 720}
      height="420"
      loading="lazy"
      decoding="async"
      onError={thumbnail ? () => setFailedSource(src) : undefined}
    />
  );
}
