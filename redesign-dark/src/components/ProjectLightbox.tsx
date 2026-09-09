import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import { ChevronLeft, ChevronRight, ImageOff, X, ZoomIn, ZoomOut } from 'lucide-react';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/counter.css';
import './ProjectLightbox.css';

export interface ProjectSlide {
  src: string;
  alt: string;
  description: string;
  width?: number;
  height?: number;
}

interface Props {
  slides: ProjectSlide[];
  index: number;
  open: boolean;
  onClose: () => void;
  onExited: () => void;
}

export default function ProjectLightbox({ slides, index, open, onClose, onExited }: Props) {
  return (
    <Lightbox
      className="project-lightbox"
      open={open}
      close={onClose}
      index={index}
      slides={slides}
      plugins={[Zoom, Captions, Counter]}
      controller={{ aria: true, closeOnBackdropClick: true }}
      carousel={{ finite: true, preload: 1 }}
      zoom={{ scrollToZoom: true, maxZoomPixelRatio: 2 }}
      captions={{ descriptionTextAlign: 'center', descriptionMaxLines: 3 }}
      labels={{
        Lightbox: '프로젝트 이미지 확대 보기',
        Close: '닫기', Next: '다음 이미지', Previous: '이전 이미지',
        'Zoom in': '확대', 'Zoom out': '축소',
        Slide: '이미지', Carousel: '이미지 목록', 'Photo gallery': '프로젝트 이미지',
        '{index} of {total}': '{total}개 중 {index}번째',
      }}
      render={{
        iconPrev: () => <ChevronLeft />,
        iconNext: () => <ChevronRight />,
        iconClose: () => <X />,
        iconZoomIn: () => <ZoomIn />,
        iconZoomOut: () => <ZoomOut />,
        iconError: () => <ImageOff role="img" aria-label="이미지를 불러오지 못했습니다." />,
      }}
      on={{ exited: onExited }}
    />
  );
}
