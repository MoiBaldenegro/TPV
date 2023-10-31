import { useState } from 'react';

// EN este hook gestionamos los valores necesarios para manejar modales
export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

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