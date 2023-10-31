import { useState } from 'react';

// EN este hook gestionamos los valores necesarios para manejar modales
export default function useModal(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  // Función para abrir el modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Devolver el estado del modal y las funciones de apertura y cierre
  return {
    isOpen,
    openModal,
    closeModal,
  };
};