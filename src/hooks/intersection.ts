import { useEffect, RefObject } from 'react';

export function useIntersection(ref: RefObject<HTMLDivElement>, handle: () => void) {
  useEffect(() => {
    const targetElement = ref.current;

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handle();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => observer.disconnect();
  }, []);
}
