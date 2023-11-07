import styles from './menusYRecetas.module.css';
// Hook
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// icons
import exportIcon from '../../../../assets/public/exportIcon.svg';
import importIcon from '../../../../assets/public/importIcon.svg';
import createIcon from '../../../../assets/public/createIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/deleteIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import eyeIcon from '../../../../assets/public/openEye.svg';

import helpIcon from '../../../../assets/public/helpIcon.svg';
// import arrow from "../../../../assets/public/arrow.svg"
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';
import { getMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/getMenu';

export default function MenusYRecetas() {
  const dispatch = useDispatch();
  const { allMenus } = useSelector((state) => state.menus);

  const week = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  useEffect(() => {
    dispatch(getMenusAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Menus y recetas</h2>
        <div>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear receta</span>
          </button>
        </div>
      </section>
      <section className={styles.updateSection}>
        <div className={styles.leftSection}>
          <input
            type="text"
            placeholder="Nombre del producto"
            readOnly
            className={styles.productName}
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Clave"
            readOnly
            className={styles.clave}
          />
        </div>

        <div className={styles.weekContainer}>
          <span>Disponibilidad</span>
          {week.map((day) => (
            <div className={styles.dayInput}>
              <input type="checkbox" className={styles.checkInput} />
              <label htmlFor="">{day}</label>
            </div>
          ))}
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
            <span>Productos</span>
          </div>
          <div className={styles.searchContainer}>
            <button className={styles.categoryButton}>
              <img src={filterIcon} alt="categories-button" />
              <span>Categorias</span>
            </button>
            <button className={styles.sellTypeButton}>
              <img src={filterIcon} alt="sell-types" />
              <span>Tipo de venta</span>
            </button>
            <button className={styles.stateButton}>
              <img src={filterIcon} alt="state" />
              <span>Estado</span>
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
                placeholder="producto de ejemplo"
              />
            </div>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadCategoria}>Categoria</th>
              <th className={styles.tHeadClave}>Clave</th>
              <th className={styles.tHeadProducto}>Producto</th>
              <th className={styles.tHeadPorcion}>Porcion</th>
              <th className={styles.tHeadPrice}>Costo</th>
              <th className={styles.tHeadSuggestedPrice}>Precio sugerido</th>
              <th className={styles.tHeadUtility}>Utilidad</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allMenus?.map((element, index) => (
              <tr key={index}>
                <td className={styles.tableRows}>{element.category}</td>
                <td className={styles.tableRows}>{element.code}</td>
                <td className={styles.tableRows}>{element.productName}</td>
                <td className={styles.tableRows}>{element.serving}</td>
                <td className={styles.tableRows}>{element.unit}</td>
                <td className={styles.tableRows}>{element.priceNotIVA}</td>
                <td className={styles.tableRows}>{element.recommendedPrice}</td>
                <td className={styles.buttonsContainer}>
                  <button className={styles.actionButtonsFirstDetails}>
                    <img src={eyeIcon} alt="open-eye-icon" />
                  </button>
                  {element.status === 'enabled' ? (
                    <>
                      <button className={styles.actionButtonsFirst}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          onDelete(categoria._id);
                        }}
                      >
                        <img src={deleteIcon} alt="delete-icon" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className={styles.actionButtonsFirstEnabled}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          onDelete(categoria._id);
                        }}
                      >
                        <img src={enabledIcon} alt="enabled-icon" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}
