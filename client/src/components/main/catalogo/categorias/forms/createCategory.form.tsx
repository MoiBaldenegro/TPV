import style from './style.css?inline'

function CreateCategories({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default CreateCategories;