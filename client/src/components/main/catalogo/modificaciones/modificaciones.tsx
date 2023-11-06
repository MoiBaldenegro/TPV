import styles from './modificaciones.module.css';

// icons
import exportIcon from '../../../../assets/public/exportIcon.svg';
import importIcon from '../../../../assets/public/importIcon.svg';
import createIcon from '../../../../assets/public/createIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getModifiers } from '../../../../redux/reducer/catalogo/modifiersReducer/modifiersCases';

export default function Modificaciones() {
  const dispatch = useDispatch();
  const { allModifiers } = useSelector((state) => state.modifiers);

  useEffect(() => {
    dispatch(getModifiers());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Modificadores</h2>
        <div>
          <button className={styles.btnHead}>
            <img src={exportIcon} alt="export-icon" />
            Exportar modificadores
          </button>
          <button className={styles.btnHead}>
            <img src={importIcon} alt="import-icon" />
            Importar modificadores
          </button>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear modificador</span>
          </button>
        </div>
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
            <span>Modificadores</span>
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
                placeholder="Ejemplo de modificador"
              />
            </div>
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Modificador</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {allModifiers?.map((element, index) => (
                <tr key={index}>
                  <td>{element.category}</td>
                  <td>{element.modifierName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
