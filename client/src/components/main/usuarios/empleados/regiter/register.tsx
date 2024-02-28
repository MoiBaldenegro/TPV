import styles from './register.module.css';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  setEmployee: (arg: any) => void;
}
export default function Register({
  isOpen,
  onClose,
  children,
  setEmployee,
}: Props) {
  return (
    <main className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.head}>{children}</div>
        <div className={styles.process}>
          <div className={styles.barOne}> </div>
          <div className={styles.One}>
            <span>1</span>
          </div>
          <div className={styles.Two}>
            <span>2</span>
          </div>
          <div className={styles.Three}>
            <span>3</span>
          </div>
        </div>
        <div className={styles.dataUser}>
          <div></div>
        </div>
        <div className={styles.dataJob}>
          <div></div>
        </div>
        <footer>
          <button>Siguiente</button>
        </footer>
      </section>
    </main>
  );
}
