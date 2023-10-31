import { useState } from 'react';

// En este hook gestionamos los valores necesarios para manejar modales
export const useModal = () => {
  const [openModalId, setOpenModalId] = useState(null);

  // Función para abrir un modal específico por su ID
  const openModal = (modalId) => {
    setOpenModalId(modalId);
  };

  // Función para cerrar el modal actual
  const closeModal = () => {
    setOpenModalId(null);
  };

  // Devolver el estado del modal actual y las funciones de apertura y cierre
  return {
    isOpen: openModalId !== null,
    openModal,
    closeModal,
  };
};
