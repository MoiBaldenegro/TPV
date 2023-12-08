import styles from './ventaTypes.module.css';

export default function VentaTypes() {
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Tipos de venta</h2>
      </section>
      <section className={styles.mainSection}>
        <table className={styles.table}>
          <thead>
            <th>Clave</th>
            <th>Tipo de venta</th>
            <th>Última actualización</th>
            <th>Acciones</th>
          </thead>
          <tbody>
            <tr>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
              <td>asd</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
