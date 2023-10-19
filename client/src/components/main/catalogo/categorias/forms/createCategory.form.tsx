import styles from "./createCategories.module.css"

function CreateCategories({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h1> Se renderizo! dentro del modal</h1>
        {children}
      </div>
    </div>
  );
}

export default CreateCategories;