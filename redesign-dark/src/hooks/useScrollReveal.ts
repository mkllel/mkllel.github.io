import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Keep content already on screen visible, including restored scroll positions.
    if (motion.matches || element.getBoundingClientRect().top < window.innerHeight) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) reveal();
    }, { rootMargin: '0px 0px -24px 0px', threshold: 0 });

    const reveal = () => {
      element.removeAttribute('data-reveal-pending');
      observer.disconnect();
    };
    const handleMotionChange = () => {
      if (motion.matches) reveal();
    };

    observer.observe(element);
    element.setAttribute('data-reveal-pending', '');
    element.addEventListener('focusin', reveal);
    motion.addEventListener('change', handleMotionChange);

    return () => {
      reveal();
      element.removeEventListener('focusin', reveal);
      motion.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return ref;
}
