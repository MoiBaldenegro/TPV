import styles from './updateOneCategory.module.css';
// Icons
import saveIcon from '../../../../../../assets/public/disquetIcon.svg';
import crossIcon from '../../../../../../assets/public/crossIcon.svg';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function UpdateOneCategory({
  isOpen,
  onClose,
  children,
}: Props) {
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <img
            className={styles.closeButton}
            src={crossIcon}
            alt="cross-icon"
          />
        </button>
        <h2 className={styles.tittle}>{children}</h2>
        <div className={styles.contentContainer}>
          <div className={styles.inputContainer}>
            <input
              readOnly
              type="text"
              value="Alimentos"
              className={styles.input}
            />
          </div>
          <button className={styles.saveButton}>
            <img src={saveIcon} alt="save-icon" />
            Guardar
          </button>
        </div>
      </section>
    </div>
  );
}
