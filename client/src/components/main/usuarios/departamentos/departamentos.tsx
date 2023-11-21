import styles from './departamentos.module.css';
// Hook
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useModal } from '../../../../hooks/useModals';

// icons
import createIcon from '../../../../assets/public/createIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/bloquedIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import searchIcon from '../../../../assets/categorias/searchIcon.svg';
// Actions
import { getMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/getMenu';
import { discontinueMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/discontinueMenus';

export default function Departamentos() {
  const dispatch = useDispatch();
  const { allMenus } = useSelector((state) => state.menus);
  // MODALS
  const uploadMenus = useModal('uploadMenus');
  const saveMenus = useModal('saveMenus');

  const toggleStatus = (id, body) => {
    dispatch(discontinueMenusAction(id, body));
  };

  const week = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  useEffect(() => {
    dispatch(getMenusAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Departamentos</h2>
        <div>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear departamento</span>
          </button>
        </div>
      </section>
      <section className={styles.mainSection}>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchInputContainer}>
            <img
              src={searchIcon}
              alt="search-icon"
              className={styles.searchIcon}
            />
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Buscar de"
            />
          </div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadCategoria}>Clave</th>
              <th className={styles.tHeadClave}>Departamento</th>
              <th className={styles.tHeadProducto}>Ultima Actualizacion</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allMenus?.map((element) => (
              <tr key={element._id}>
                <td className={styles.tableRows}></td>
                <td className={styles.tableRows}></td>
                <td className={styles.tableRows}></td>
                <td className={styles.buttonsContainer}>
                  {element.status === 'enabled' ? (
                    <>
                      <button className={styles.actionButtonsFirst}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          toggleStatus(element._id, element.status);
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
                          toggleStatus(element._id, element.status);
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
