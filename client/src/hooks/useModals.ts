import { useState } from 'react';

// Modificamos el hook para recibir un nombre o identificador
export const useModal = (modalName: string) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log(modalName)
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    modalName,
  };
};
