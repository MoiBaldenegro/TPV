import styles from './autorizaciones.module.css';

export default function Autorizaciones() {
  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>Autorizaciones</h1>
      <section className={styles.section}>
        <div className={styles.containerOne}></div>
        <div className={styles.sectionTwo}>
          <div className={styles.containerTwo}></div>
          <div className={styles.containerThree}></div>
        </div>
      </section>
    </div>
  );
}
