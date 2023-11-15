import styles from './cancelaciones.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// Actions
import { getCancellationsAction } from '../../../../redux/actions/ventas/cancellationsActions/getCancellations';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';

export default function Cancelaciones() {
  const dispatch = useDispatch();
  const { allCancellations } = useSelector((state) => state.cancellations);

  useEffect(() => {
    dispatch(getCancellationsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Cancelaciones</h2>
      </section>
      <section className={styles.mainSection}>
        <div className={styles.mainHead}>
          <div className={styles.mainHeadLeft}>
            <span>Mostrar</span>
            <select name="" id="" className={styles.showSelect}>
              <option value="all">Todos</option>
              <option value="option-one">Option 1</option>
              <option value="optio-two">Option 2</option>
            </select>
            <span>Cancelaciones</span>
          </div>
          <div className={styles.searchContainer}>
            <button className={styles.categoryButton}>
              <img src={filterIcon} alt="categories-button" />
              <span>Categorias</span>
            </button>
            <div className={styles.searchBarTable}>
              <img
                src={searchIcon}
                alt="search-icon"
                className={styles.searchIcon}
              />
              <input
                type="text"
                className={styles.searchBarTableInput}
                placeholder="Folio de cuenta cancelada"
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Cuenta</th>
              <th>Tipo de venta</th>
              <th>Monto cancelado</th>
              <th>Cancelada por</th>
              <th>Cancelada a</th>
              <th>Motivo de cancelacion</th>
              <th>Fecha de cancelacion</th>
            </tr>
          </thead>
          <tbody>
            {allCancellations?.map((element, index) => (
              <tr key={index}>
                <td>{element.checkCode}</td>
                <td>{element.sellType}</td>
                <td>{element.CancellationMount}</td>
                <td>{element.cancellationBy}</td>
                <td>{element.cancellationFor}</td>
                <td>{element.cancellationReason}</td>
                <td>{element.cancellationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
