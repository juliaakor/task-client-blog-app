'use client';

import { useTranslations } from 'next-intl';

import { useModal } from '@/hooks/useModal';
import { Button } from '@/lib/components/Button';
import { Logo } from '@components/common/Logo';
import { Navbar } from '@components/common/Navbar';
import { Modal } from '@components/Modal';

export const Header = () => {
  const t = useTranslations('common');

  const { closeModal, isModalOpen, openModal } = useModal();

  return (
    <header className="flex justify-between items-center pl-14 pr-8 py-3 bg-dark-blue">
      <Logo />
      <div className="flex items-center gap-8">
        <Navbar />
        <div className="w-56">
          <Button
            styleType="white"
            label={t.raw('buttons').videoButtonTitle}
            name="Company Video"
            onClick={openModal}
          />
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <iframe
            className="px-5 py-3 w-[60vw] h-[60vh]"
            title="Company Video"
            src="https://www.youtube.com/embed/zRp4NS_eeGc?autoplay=1"
            allow="autoplay"
          />
        </Modal>
      </div>
    </header>
  );
};
