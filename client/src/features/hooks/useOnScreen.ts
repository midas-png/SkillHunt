import { useState, useLayoutEffect, MutableRefObject } from 'react';

export const useOnScreen = (
  ref: MutableRefObject<HTMLElement>,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};
