import styles from './reportes.module.css';
import { reports } from './constants';

export default function Reportes() {
  return (
    <section className={styles.container}>
      <h2>Reportes</h2>
      <div>
        {reports.map((element, index) => (
          <div className={styles.reportItem}>
            <div>
              <img src={element.icon} alt="icon-element" />
            </div>
            <h3>{element.tittle}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
