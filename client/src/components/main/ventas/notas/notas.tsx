import styles from './notas.module.css';
// Hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
//icons
import searchIcon from '../../../../assets/public/searchIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import { getNotesAction } from '../../../../redux/actions/ventas/notesActions/getNotes';

export default function Notas() {
  const dispatch = useDispatch();
  const { allNotes } = useSelector((state) => state.notes);

  useEffect(() => {
    dispatch(getNotesAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Notas</h2>
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
            <span>Notas</span>
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
                placeholder="Nota #Ejemplo-00"
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead></thead>
          <tbody></tbody>
        </table>

        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
