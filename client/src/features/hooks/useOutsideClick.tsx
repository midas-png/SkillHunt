/* eslint-disable no-unused-vars */
import { useEffect, RefObject } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLInputElement>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (e: { target: any }) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onOutsideClick && onOutsideClick();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [onOutsideClick]);
};
