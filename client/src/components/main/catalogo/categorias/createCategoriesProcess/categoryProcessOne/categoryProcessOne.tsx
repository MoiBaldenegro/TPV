import styles from './categoryProcess.module.css';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function categoryProcessOne({
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
