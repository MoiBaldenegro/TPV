import styles from './createModifier.module.css';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function CreateModifierModal({
  isOpen,
  onClose,
  children,
}: Props) {
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </section>
    </div>
  );
}
