import styles from "./createCategories.modules.css"

function CreateCategories({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default CreateCategories;