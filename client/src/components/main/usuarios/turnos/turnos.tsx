import styles from './turnos.module.css';
// Hook
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useModal } from '../../../../hooks/useModals';

// icons
import createIcon from '../../../../assets/public/createIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/bloquedIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import eyeIcon from '../../../../assets/public/openEye.svg';

// import arrow from "../../../../assets/public/arrow.svg"
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';
import { getMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/getMenu';
import { discontinueMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/discontinueMenus';

export default function Turnos() {
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
        <h2>Turnos</h2>
        <div>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear turno</span>
          </button>
        </div>
      </section>
      <section className={styles.mainSection}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadCategoria}>Turno</th>
              <th className={styles.tHeadClave}>Inicio de turno</th>
              <th className={styles.tHeadProducto}>Fin de turno</th>
              <th className={styles.tHeadPorcion}>Ultima actualizacion</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allMenus?.map((element) => (
              <tr key={element._id}>
                <td className={styles.tableRows}></td>
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
