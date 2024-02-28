import styles from './empleados.module.css';
// Hook
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

// icons
import createIcon from '../../../../assets/public/createIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/bloquedIcon.svg';
import enabledIcon from '../../../../assets/public/enabledIcon.svg';
import searchIcon from '../../../../assets/categorias/searchIcon.svg';
// Actions
import { discontinueMenusAction } from '../../../../redux/actions/catalogo/menusYRecipes/discontinueMenus';
import { getEmployeesAction } from '../../../../redux/actions/usuarios/employeesActions/getEmployees';
import { useModal } from '../../../../hooks/useModals';
import Register from './regiter/register';

export default function Empleados() {
  const [employee, setEmployee] = useState({});
  const register = useModal('register');
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
      {register.isOpen && register.modalName === 'register' ? (
        <Register
          setEmployee={setEmployee}
          onClose={register.closeModal}
          isOpen={register.isOpen}
        >
          Registrar
        </Register>
      ) : null}
      <section className={styles.head}>
        <h2>Empleados</h2>
        <div>
          <button
            className={styles.btnHeadCreate}
            onClick={() => {
              register.openModal();
            }}
          >
            <img src={createIcon} alt="create-icon" />
            <span>Registro</span>
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
              <th className={styles.tHeadCode}>Código</th>
              <th className={styles.tHeadName}>Nombre completo</th>
              <th className={styles.tHeadStatus}>Estatus</th>
              <th className={styles.tHeadProfile}>Perfil</th>
              <th className={styles.tHeadShift}>Turno</th>
              <th className={styles.tHeadCreatedAt}>Última actualización</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees?.map((element) => (
              <tr
                key={element._id}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
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
