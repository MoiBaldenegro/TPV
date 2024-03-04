import styles from './perfiles.module.css';
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
import { getProfilesAction } from '../../../../redux/actions/usuarios/profilesActions/getProfiles';
import { CREATE_PROFILE } from '../../../configs/consts';
import { useModal } from '../../../../hooks/useModals';
import CreateProfile from './create/createProfile';

export default function Perfiles() {
  const dispatch = useDispatch();
  const { allProfiles } = useSelector((state) => state.profiles);
  const createProfile = useModal(CREATE_PROFILE);

  const toggleStatus = (id, body) => {
    dispatch(discontinueMenusAction(id, body));
  };

  useEffect(() => {
    dispatch(getProfilesAction());
  }, []);
  return (
    <div className={styles.container}>
      {createProfile.isOpen && createProfile.modalName === CREATE_PROFILE ? (
        <CreateProfile
          isOpen={createProfile.isOpen}
          onClose={createProfile.closeModal}
        >
          Crear perfil
        </CreateProfile>
      ) : null}
      <section className={styles.head}>
        <h2>Perfiles</h2>
        <div>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span onClick={createProfile.openModal}>Crear perfil</span>
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
              <th className={styles.tHeadDepartament}>Departamento</th>
              <th className={styles.tHeadCode}>Clave del perfil</th>
              <th className={styles.tHeadProfile}>Perfil</th>
              <th className={styles.tHeadCreatedAt}>Ultima Actualizacion</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allProfiles?.map((element) => (
              <tr
                key={element._id}
                className={
                  element.status === 'disabled'
                    ? styles.rowDisabled
                    : styles.release
                }
              >
                <td className={styles.tableRows}>{element.departament}</td>
                <td className={styles.tableRows}>{element.code}</td>
                <td className={styles.tableRows}>{element.profileName}</td>
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
