import { useState } from 'react';

export const useModal = (isOpen: boolean = false) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return { closeModal, isModalOpen, openModal };
};
