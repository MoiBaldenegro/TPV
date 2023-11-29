import styles from './categorias.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoriesAction,
  searchCategoriesAction,
} from '../../../../redux/actions/catalogo/categoriesActions/getCategories';
import deleteIcon from '../../../../assets/categorias/bloquedIcon.svg';
import enabledIcon from '../../../../assets/categorias/enabledIcon.svg';
import update from '../../../../assets/categorias/updateIcon.svg';
import exportIcon from '../../../../assets/categorias/exportIcon.svg';
import importIcon from '../../../../assets/categorias/importIcon.svg';
import createIcon from '../../../../assets/categorias/createIcon.svg';
import searchIcon from '../../../../assets/categorias/searchIcon.svg';
import UploadFiles from './modals/uploadCategories/uploadCategories';
import downArrow from '../../../../assets/public/downArrow.svg';
import AuthDiscontinueModal from '../../../modals/authDiscontinue/authDiscontinue';
import { useEffect } from 'react';
import { useModal } from '../../../../hooks/useModals';
import CreateCategories from './forms/createCategories/createCategory.form';
import SaveCategoriesModal from './modals/confirms/saveCategories';
import { discontinueCategoriesAction } from '../../../../redux/actions/catalogo/categoriesActions/discontinueCategories';
import UpdateOneCategory from './forms/updateCategory/updateOneCategory';
import ConfirmChangesModal from '../../../modals/confimChanges/confirmChanges';
//hooks
import { useState } from 'react';
// Utils
import { toggleCategory } from './utils/categoryExpansion';

export default function Categorias() {
  // Modales
  const createCategory = useModal('createCategory');
  const uploadCategories = useModal('uploadCategories');
  const saveCategories = useModal('saveCategories');
  const updateOneCategory = useModal('updateOneCategory');
  const AuthDiscontinue = useModal('AuthDiscontinue');
  const confirmChanges = useModal('confirmChanges');

  //////////////////////////////////////////////////////////////////////////////////////
  // States
  // Category expansion
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const [buttonParams, setButtonParams] = useState();
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.categories);

  const toggleStatus = () => {
    dispatch(
      discontinueCategoriesAction(
        buttonParams.id,
        buttonParams.body,
        buttonParams.path,
      ),
    );
  };

  function restoreStatus(id, body, path) {
    dispatch(discontinueCategoriesAction(id, body, path));
  }

  const handleChange = (event) => {
    event.preventDefault();
    const searchValue = event.target.value;
    if (searchValue.length < 1) {
      dispatch(getCategoriesAction());
    }
    dispatch(searchCategoriesAction(searchValue));
  };

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  return (
    <section className={styles.categorias}>
      <div className={styles.categoriasButtons}>
        <h2>Categorias</h2>
        <div className={styles.categoriesButtonsContainer}>
          <button
            className={styles.exportCategories}
            onClick={saveCategories.openModal}
          >
            <img src={exportIcon} alt="export-icon" />
            <span>Exportar categorias</span>
          </button>
          <button
            className={styles.importCategories}
            onClick={uploadCategories.openModal}
          >
            <img src={importIcon} alt="import-icon" />
            <span>Importar categorias</span>
          </button>
          {uploadCategories.isOpen &&
          uploadCategories.modalName === 'uploadCategories' ? (
            <UploadFiles
              openModal={saveCategories.openModal}
              isOpen={uploadCategories.isOpen}
              onClose={uploadCategories.closeModal}
            >
              Cargar archivo
            </UploadFiles>
          ) : null}
          <button
            className={styles.createCategories}
            onClick={createCategory.openModal}
          >
            <img src={createIcon} alt="create-icon" />
            <span>Crear categoria</span>
          </button>
          {createCategory.isOpen &&
          createCategory.modalName === 'createCategory' ? (
            <CreateCategories
              isOpen={createCategory.isOpen}
              onClose={createCategory.closeModal}
            >
              <strong>Crear categoria</strong>
            </CreateCategories>
          ) : null}
          {saveCategories.isOpen &&
          saveCategories.modalName === 'saveCategories' ? (
            <SaveCategoriesModal
              actionType={getCategoriesAction}
              isOpen={saveCategories.isOpen}
              onClose={saveCategories.closeModal}
            >
              Categorias guardadas
            </SaveCategoriesModal>
          ) : null}
          {updateOneCategory.isOpen &&
          updateOneCategory.modalName === 'updateOneCategory' ? (
            <UpdateOneCategory
              isOpen={updateOneCategory.isOpen}
              onClose={updateOneCategory.closeModal}
            >
              Editar Categoria
            </UpdateOneCategory>
          ) : null}
          {AuthDiscontinue.isOpen &&
          AuthDiscontinue.modalName === 'AuthDiscontinue' ? (
            <AuthDiscontinueModal
              handleStatus={toggleStatus}
              isOpen={AuthDiscontinue.isOpen}
              onClose={AuthDiscontinue.closeModal}
              openModal={confirmChanges.openModal}
            >
              Descontinuar categoria
            </AuthDiscontinueModal>
          ) : null}
        </div>
        {confirmChanges.isOpen &&
        confirmChanges.modalName === 'confirmChanges' ? (
          <ConfirmChangesModal
            isOpen={confirmChanges.isOpen}
            onClose={confirmChanges.closeModal}
            actionType={getCategoriesAction}
          >
            Cambios guardados
          </ConfirmChangesModal>
        ) : null}
      </div>
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
            placeholder="Buscar categoria"
            onChange={handleChange}
          />
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.tHeadClave}>Clave</th>
              <th className={styles.tHeadCategoria}>Categoría</th>
              <th className={styles.tHeadDate}>Última Actualización</th>
              <th className={styles.tHeadActions}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {allCategories?.map((categoria, index) => (
              <React.Fragment key={index}>
                <tr
                  className={
                    categoria.status === 'disabled'
                      ? styles.rowDisabled
                      : styles.release
                  }
                >
                  <td className={styles.tableRows}>{categoria.code}</td>
                  <td className={styles.tableRows}>
                    {categoria.categoryName}
                    {categoria.subCategories &&
                    categoria.subCategories.length > 0 ? (
                      <img
                        src={downArrow}
                        alt="down-arrow-icon"
                        className={styles.downArrow}
                        onClick={() =>
                          toggleCategory({
                            categoryId: categoria._id,
                            setExpandedCategories,
                          })
                        }
                      />
                    ) : null}
                  </td>
                  <td className={styles.tableRows}>{categoria.createdAt}</td>
                  <td className={styles.buttonsContainer}>
                    {categoria.status === 'enabled' ? (
                      <>
                        <button
                          className={styles.actionButtonsFirst}
                          onClick={() => updateOneCategory.openModal(categoria)}
                        >
                          <img src={update} alt="update-icon" />
                        </button>
                        <button
                          className={styles.actionButtonsSecond}
                          onClick={() => {
                            AuthDiscontinue.openModal();
                            setButtonParams({
                              id: categoria._id,
                              body: categoria.status,
                              path: 'categories',
                            });
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
                            restoreStatus(
                              categoria._id,
                              categoria.status,
                              'categories',
                            );
                          }}
                        >
                          <img src={enabledIcon} alt="enabled-icon" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
                {expandedCategories.includes(categoria._id) &&
                  categoria.subCategories && (
                    <>
                      {categoria.subCategories?.map((subCategory, subIndex) => (
                        <React.Fragment key={subIndex}>
                          <tr key={subIndex} className={styles.subCategoryRow}>
                            <td className={styles.tableRows}>
                              {subCategory.code}
                            </td>
                            <td className={styles.tableRowsNameOne}>
                              {subCategory.categoryName}
                              {subCategory.subCategories &&
                              subCategory.subCategories.length > 0 ? (
                                <img
                                  src={downArrow}
                                  alt="down-arrow-icon"
                                  className={styles.downArrow}
                                  onClick={() =>
                                    toggleCategory({
                                      categoryId: subCategory._id,
                                      setExpandedCategories,
                                    })
                                  }
                                />
                              ) : null}
                            </td>
                            <td className={styles.tableRows}>
                              {categoria.createdAt}
                            </td>
                            <td className={styles.buttonsContainer}>
                              {subCategory.status === 'enabled' ? (
                                <>
                                  <button
                                    className={styles.actionButtonsFirst}
                                    onClick={() =>
                                      updateOneCategory.openModal(subCategory)
                                    }
                                  >
                                    <img src={update} alt="update-icon" />
                                  </button>
                                  <button
                                    className={styles.actionButtonsSecond}
                                    onClick={() => {
                                      AuthDiscontinue.openModal();
                                      setButtonParams({
                                        id: subCategory._id,
                                        body: subCategory.status,
                                        path: 'subcategory-one',
                                      });
                                    }}
                                  >
                                    <img src={deleteIcon} alt="delete-icon" />
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    className={styles.actionButtonsFirstEnabled}
                                  >
                                    <img src={update} alt="update-icon" />
                                  </button>
                                  <button
                                    className={styles.actionButtonsSecond}
                                    onClick={() => {
                                      restoreStatus(
                                        subCategory._id,
                                        subCategory.status,
                                        'subcategory-one',
                                      );
                                    }}
                                  >
                                    <img src={enabledIcon} alt="enabled-icon" />
                                  </button>
                                </>
                              )}
                            </td>
                          </tr>
                          {expandedCategories.includes(subCategory._id) &&
                            subCategory.subCategories && (
                              <>
                                {subCategory.subCategories?.map(
                                  (subSubCategory, subSubIndex) => (
                                    <React.Fragment key={subSubIndex}>
                                      <tr className={styles.subCategoryRowTwo}>
                                        <td className={styles.tableRows}>
                                          {subSubCategory.code}
                                        </td>
                                        <td className={styles.tableRowsNameTwo}>
                                          {subSubCategory.categoryName}
                                          {subCategory.subCategories &&
                                          subCategory.subCategories.length >
                                            0 ? (
                                            <img
                                              src={downArrow}
                                              alt="down-arrow-icon"
                                              className={styles.downArrow}
                                              onClick={() =>
                                                toggleCategory({
                                                  categoryId:
                                                    subSubCategory._id,
                                                  setExpandedCategories,
                                                })
                                              }
                                            />
                                          ) : null}
                                        </td>
                                        <td className={styles.tableRows}>
                                          {categoria.createdAt}
                                        </td>
                                        <td className={styles.buttonsContainer}>
                                          {subSubCategory.status ===
                                          'enabled' ? (
                                            <>
                                              <button
                                                className={
                                                  styles.actionButtonsFirst
                                                }
                                                onClick={() =>
                                                  updateOneCategory.openModal(
                                                    subSubCategory,
                                                  )
                                                }
                                              >
                                                <img
                                                  src={update}
                                                  alt="update-icon"
                                                />
                                              </button>
                                              <button
                                                className={
                                                  styles.actionButtonsSecond
                                                }
                                                onClick={() => {
                                                  AuthDiscontinue.openModal();
                                                  setButtonParams({
                                                    id: subSubCategory._id,
                                                    body: subSubCategory.status,
                                                    path: 'subcategory-two',
                                                  });
                                                }}
                                              >
                                                <img
                                                  src={deleteIcon}
                                                  alt="delete-icon"
                                                />
                                              </button>
                                            </>
                                          ) : (
                                            <>
                                              <button
                                                className={
                                                  styles.actionButtonsFirstEnabled
                                                }
                                              >
                                                <img
                                                  src={update}
                                                  alt="update-icon"
                                                />
                                              </button>
                                              <button
                                                className={
                                                  styles.actionButtonsSecond
                                                }
                                                onClick={() => {
                                                  restoreStatus(
                                                    subSubCategory._id,
                                                    subSubCategory.status,
                                                    'subcategory-two',
                                                  );
                                                }}
                                              >
                                                <img
                                                  src={enabledIcon}
                                                  alt="enabled-icon"
                                                />
                                              </button>
                                            </>
                                          )}
                                        </td>
                                      </tr>
                                      {expandedCategories.includes(
                                        subSubCategory._id,
                                      ) &&
                                        subSubCategory.subCategories && (
                                          <>
                                            {subSubCategory.subCategories?.map(
                                              (
                                                subSubSubCategory,
                                                subSubSubIndex,
                                              ) => (
                                                <React.Fragment
                                                  key={subSubSubIndex}
                                                >
                                                  <tr
                                                    className={
                                                      styles.subCategoryRowThree
                                                    }
                                                  >
                                                    <td
                                                      className={
                                                        styles.tableRows
                                                      }
                                                    >
                                                      {subSubSubCategory.code}
                                                    </td>
                                                    <td
                                                      className={
                                                        styles.tableRowsNameThree
                                                      }
                                                    >
                                                      {
                                                        subSubSubCategory.categoryName
                                                      }
                                                      {subSubCategory.subCategories &&
                                                      subSubCategory
                                                        .subCategories.length >
                                                        0 ? (
                                                        <img
                                                          src={downArrow}
                                                          alt="down-arrow-icon"
                                                          className={
                                                            styles.downArrow
                                                          }
                                                          onClick={() =>
                                                            toggleCategory({
                                                              categoryId:
                                                                subSubSubCategory._id,
                                                              setExpandedCategories,
                                                            })
                                                          }
                                                        />
                                                      ) : null}
                                                    </td>
                                                    <td
                                                      className={
                                                        styles.tableRows
                                                      }
                                                    >
                                                      {categoria.createdAt}
                                                    </td>
                                                    <td
                                                      className={
                                                        styles.buttonsContainer
                                                      }
                                                    >
                                                      {subSubSubCategory.status ===
                                                      'enabled' ? (
                                                        <>
                                                          <button
                                                            className={
                                                              styles.actionButtonsFirst
                                                            }
                                                            onClick={() =>
                                                              updateOneCategory.openModal(
                                                                subSubSubCategory,
                                                              )
                                                            }
                                                          >
                                                            <img
                                                              src={update}
                                                              alt="update-icon"
                                                            />
                                                          </button>
                                                          <button
                                                            className={
                                                              styles.actionButtonsSecond
                                                            }
                                                            onClick={() => {
                                                              AuthDiscontinue.openModal();
                                                              setButtonParams({
                                                                id: subSubSubCategory._id,
                                                                body: subSubSubCategory.status,
                                                                path: 'subcategory-three',
                                                              });
                                                            }}
                                                          >
                                                            <img
                                                              src={deleteIcon}
                                                              alt="delete-icon"
                                                            />
                                                          </button>
                                                        </>
                                                      ) : (
                                                        <>
                                                          <button
                                                            className={
                                                              styles.actionButtonsFirstEnabled
                                                            }
                                                          >
                                                            <img
                                                              src={update}
                                                              alt="update-icon"
                                                            />
                                                          </button>
                                                          <button
                                                            className={
                                                              styles.actionButtonsSecond
                                                            }
                                                            onClick={() => {
                                                              restoreStatus(
                                                                subSubSubCategory._id,
                                                                subSubSubCategory.status,
                                                                'subcategory-three',
                                                              );
                                                            }}
                                                          >
                                                            <img
                                                              src={enabledIcon}
                                                              alt="enabled-icon"
                                                            />
                                                          </button>
                                                        </>
                                                      )}
                                                    </td>
                                                  </tr>
                                                  {expandedCategories.includes(
                                                    subSubSubCategory._id,
                                                  ) &&
                                                    subSubSubCategory.subCategories && (
                                                      <>
                                                        {subSubSubCategory.subCategories?.map(
                                                          (
                                                            subSubSubSubCategory,
                                                            subSubSubSubIndex,
                                                          ) => (
                                                            <tr
                                                              key={
                                                                subSubSubSubIndex
                                                              }
                                                              className={
                                                                styles.subCategoryRowFour
                                                              }
                                                            >
                                                              <td
                                                                className={
                                                                  styles.tableRows
                                                                }
                                                              >
                                                                {
                                                                  subSubSubSubCategory.code
                                                                }
                                                              </td>
                                                              <td
                                                                className={
                                                                  styles.tableRowsNameFour
                                                                }
                                                              >
                                                                {
                                                                  subSubSubSubCategory.categoryName
                                                                }
                                                              </td>
                                                              <td
                                                                className={
                                                                  styles.tableRows
                                                                }
                                                              >
                                                                {
                                                                  categoria.createdAt
                                                                }
                                                              </td>
                                                              <td
                                                                className={
                                                                  styles.buttonsContainer
                                                                }
                                                              >
                                                                {subSubSubSubCategory.status ===
                                                                'enabled' ? (
                                                                  <>
                                                                    <button
                                                                      className={
                                                                        styles.actionButtonsFirst
                                                                      }
                                                                      onClick={() =>
                                                                        updateOneCategory.openModal(
                                                                          subSubSubSubCategory,
                                                                        )
                                                                      }
                                                                    >
                                                                      <img
                                                                        src={
                                                                          update
                                                                        }
                                                                        alt="update-icon"
                                                                      />
                                                                    </button>
                                                                    <button
                                                                      className={
                                                                        styles.actionButtonsSecond
                                                                      }
                                                                      onClick={() => {
                                                                        AuthDiscontinue.openModal();
                                                                        setButtonParams(
                                                                          {
                                                                            id: subSubSubSubCategory._id,
                                                                            body: subSubSubSubCategory.status,
                                                                            path: 'subcategory-four',
                                                                          },
                                                                        );
                                                                      }}
                                                                    >
                                                                      <img
                                                                        src={
                                                                          deleteIcon
                                                                        }
                                                                        alt="delete-icon"
                                                                      />
                                                                    </button>
                                                                  </>
                                                                ) : (
                                                                  <>
                                                                    <button
                                                                      className={
                                                                        styles.actionButtonsFirstEnabled
                                                                      }
                                                                    >
                                                                      <img
                                                                        src={
                                                                          update
                                                                        }
                                                                        alt="update-icon"
                                                                      />
                                                                    </button>
                                                                    <button
                                                                      className={
                                                                        styles.actionButtonsSecond
                                                                      }
                                                                      onClick={() => {
                                                                        restoreStatus(
                                                                          subSubSubSubCategory._id,
                                                                          subSubSubSubCategory.status,
                                                                          'subcategory-four',
                                                                        );
                                                                      }}
                                                                    >
                                                                      <img
                                                                        src={
                                                                          enabledIcon
                                                                        }
                                                                        alt="enabled-icon"
                                                                      />
                                                                    </button>
                                                                  </>
                                                                )}
                                                              </td>
                                                            </tr>
                                                          ),
                                                        )}
                                                      </>
                                                    )}
                                                </React.Fragment>
                                              ),
                                            )}
                                          </>
                                        )}
                                    </React.Fragment>
                                  ),
                                )}
                              </>
                            )}
                        </React.Fragment>
                      ))}
                    </>
                  )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
