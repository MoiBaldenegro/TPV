import styles from './motivosDeCancelaciones.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// Actions
import { getCancellationReasonsAction } from '../../../../redux/actions/ventas/cancellationReasons/getCancellationReasons';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';

export default function MotivosDeCancelacion() {
  const dispatch = useDispatch();
  const { allCancellationResons } = useSelector(
    (state) => state.cancellationReasons,
  );

  useEffect(() => {
    dispatch(getCancellationReasonsAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>
          {' '}
          <main>Motivos de cancelación</main>
        </h2>
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
            <span>Motivos de cancelación</span>
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
                placeholder="Folio de cuenta"
              />
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead></thead>
            <tbody></tbody>
          </table>
        </div>
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
