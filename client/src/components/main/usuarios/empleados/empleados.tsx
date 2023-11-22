import styles from './empleados.module.css';

// icons
import exportIcon from '../../../../assets/public/exportIcon.svg';
import importIcon from '../../../../assets/public/importIcon.svg';
import createIcon from '../../../../assets/public/createIcon.svg';
import filterIcon from '../../../../assets/public/filterIcon.svg';
import searchIcon from '../../../../assets/public/searchIcon.svg';
import update from '../../../../assets/public/updateIcon.svg';
import deleteIcon from '../../../../assets/public/deleteIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getModifiersAction } from '../../../../redux/actions/catalogo/modifiersActions/getModifiers';
import { deleteModifiersAction } from '../../../../redux/actions/catalogo/modifiersActions/deleteModifiers';
import DeletedModifierModal from '../../catalogo/modificaciones/modals/confirms/deleteModifier';
import { useModal } from '../../../../hooks/useModals';
import ButtonLoader from '../../../loaders/buttonLoader/buttonLoader';
import UploadFiles from '../../../forms/uploadFile/uploadFile';
import { createModifiers } from '../../../../redux/actions/catalogo/modifiersActions/createModifiers';

export default function Empleados() {
  // LocalState
  const [indexState, setIndexSate] = useState();
  const [refresh, setRefresh] = useState(false);
  // Modal props
  const deleteModifier = useModal('deleteModifier');

  // MODALS
  const uploadModifier = useModal('uploadModifier');
  const saveModifier = useModal('saveModifier');

  const dispatch = useDispatch();
  const { allModifiers, loading, error } = useSelector(
    (state) => state.modifiers,
  );

  useEffect(() => {
    dispatch(getModifiersAction());
  }, [refresh]);
  return (
    <div className={styles.container}>
      <section className={styles.head}>
        <h2>Empleados</h2>
        <div>
          <button className={styles.btnHeadCreate}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear empleado</span>
          </button>
          {uploadModifier.isOpen &&
          uploadModifier.modalName === 'uploadModifier' ? (
            <UploadFiles
              openModal={saveModifier.openModal}
              isOpen={uploadModifier.isOpen}
              onClose={uploadModifier.closeModal}
              actionType={createModifiers}
            >
              Cargar plantilla de modificadores
            </UploadFiles>
          ) : null}
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
            <span>Empleados</span>
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

        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tHeadCategoria}>Categoria</th>
              <th className={styles.tHeadModificador}>Modificador</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allModifiers?.map((element, index) => (
              <tr key={index}>
                <td className={styles.tableRows}>{element.category}</td>
                <td className={styles.tableRows}>{element.modifierName}</td>
                <td className={styles.buttonsContainer}>
                  {element.status === 'enabled' ? (
                    <>
                      <button className={styles.actionButtonsFirst}>
                        <img src={update} alt="update-icon" />
                      </button>
                      <button
                        className={styles.actionButtonsSecond}
                        onClick={() => {
                          setIndexSate(index);
                          dispatch(deleteModifiersAction(element._id));
                          deleteModifier.openModal();
                          setRefresh(!refresh);
                        }}
                      >
                        {loading && index === indexState ? (
                          <ButtonLoader />
                        ) : (
                          <img src={deleteIcon} alt="delete-icon" />
                        )}
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
                          setIndexSate(index);
                          dispatch(deleteModifiersAction(element._id));
                          deleteModifier.openModal();
                          setRefresh(!refresh);
                        }}
                      >
                        {loading === indexState ? (
                          <ButtonLoader />
                        ) : (
                          <img src={deleteIcon} alt="delete-icon" />
                        )}
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteModifier.isOpen &&
        deleteModifier.modalName === 'deleteModifier' &&
        !error ? null : (
          <DeletedModifierModal
            actionType={getModifiersAction}
            isOpen={deleteModifier.isOpen}
            onClose={deleteModifier.closeModal}
          >
            Modificador eliminado
          </DeletedModifierModal>
        )}

        <div className={styles.tableFooter}></div>
      </section>
    </div>
  );
}