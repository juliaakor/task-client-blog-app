import { useEffect } from 'react';

import { OutsideClickProvider } from '@components/OutsideClickProvider';
import { PortalProvider } from '@components/PortalProvider';

import { ModalProps } from './types';

export const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  useEffect(() => {
    const body = document.body.style;
    body.overflow = isOpen ? 'hidden' : 'auto';

    return () => {
      body.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <PortalProvider>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <OutsideClickProvider onOutsideClick={onClose}>
          <div className="relative w-fit max-h-[90vh] min-h-[10vh] overflow-y-auto bg-modal p-6 rounded-lg shadow-lg">
            <button className="absolute top-4 right-4 text-2xl" type="button" onClick={onClose}>
              ×
            </button>
            {children}
          </div>
        </OutsideClickProvider>
      </div>
    </PortalProvider>
  );
};
