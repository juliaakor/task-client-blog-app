import { useRef, useEffect } from 'react';

import { OutsideClickProviderProps } from './types';

export const OutsideClickProvider = ({ children, className, onOutsideClick }: OutsideClickProviderProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick]);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};
