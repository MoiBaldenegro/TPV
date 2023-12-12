import styles from './empleados.module.css';
// Hook
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// icons
import createIcon from '../../../../assets/public/createIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/bloquedIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import searchIcon from '../../../../assets/categorias/searchIcon.svg';
// Actions
import { discontinueMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/discontinueMenus';
import { getEmployeesAction } from '../../../../redux/actions/usuarios/employeesActions/getEmployees';

export default function Empleados() {
  const dispatch = useDispatch();
  const { allEmployees } = useSelector((state) => state.employees);

  const toggleStatus = (id, body) => {
    dispatch(discontinueMenusAction(id, body));
  };

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, []);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Perfiles</h2>
        <div>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear perfil</span>
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
              <th className={styles.tHeadCategoria}>Código</th>
              <th className={styles.tHeadClave}>Nombre completo</th>
              <th className={styles.tHeadClave}>Estatus</th>
              <th className={styles.tHeadClave}>Perfil</th>
              <th className={styles.tHeadProducto}>Turno</th>
              <th className={styles.tHeadProducto}>Última actualización</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees?.map((element) => (
              <tr key={element._id}>
                <td className={styles.tableRows}>{element.code}</td>
                <td className={styles.tableRows}>{element.employeeName}</td>
                <td className={styles.tableRows}>{element.status}</td>
                <td className={styles.tableRows}>{element.profile}</td>
                <td className={styles.tableRows}>{element.shift}</td>
                <td className={styles.tableRows}>{element.createdAt}</td>
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
