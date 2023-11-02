import styles from "./categorias.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories,searchCategories } from "../../../../redux/actions/catalogo/categoriesActions";
import deleteIcon from "../../../../assets/categorias/bloquedIcon.svg";
import enabledIcon from "../../../../assets/categorias/enabledIcon.svg";
import update from "../../../../assets/categorias/updateIcon.svg";
import exportIcon from "../../../../assets/categorias/exportIcon.svg";
import importIcon from "../../../../assets/categorias/importIcon.svg";
import createIcon from "../../../../assets/categorias/createIcon.svg";
import searchIcon from "../../../../assets/categorias/searchIcon.svg";
import UploadFiles from "./modals/uploadCategories/uploadCategories";
import { useEffect } from "react";
import { useModal } from "../../../../hooks/useModals";
import CreateCategories from "./forms/createCategory.form";
import SaveCategoriesModal from "./modals/confirms/saveCategories";



export default function Categorias() {

  const createCategory = useModal("createCategory");
  const uploadCategories = useModal("uploadCategories");
  const saveCategories = useModal("saveCategories")
  
  ////////////////////////////////////////////////////////////////////////////////////// 
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state) => state.categories);

  const handleChange = (event) => {
    event.preventDefault();
    const searchValue = event.target.value
    if(searchValue.length < 1){
      dispatch(getCategories());
    }
    dispatch(searchCategories(searchValue))
  }

  const onDelete = (id: string) => {
    dispatch(deleteCategorie(id));
  }; 

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <section className={styles.categorias}>
      <div className={styles.categoriasButtons}>
        <h2>Categorias</h2>
        <div className={styles.categoriesButtonsContainer}>
          <button className={styles.exportCategories} onClick={saveCategories.openModal}>
            <img src={exportIcon} alt="export-icon" />
            <span>Exportar categorias</span>
          </button>
          <button className={styles.importCategories} onClick={uploadCategories.openModal}>
            <img src={importIcon} alt="import-icon" />
            <span>Importar categorias</span>
          </button>
          { uploadCategories.isOpen && uploadCategories.modalName === "uploadCategories" ? <UploadFiles openModal={saveCategories.openModal} isOpen={uploadCategories.isOpen} onClose={uploadCategories.closeModal} > 
          </UploadFiles> :  null }
          <button className={styles.createCategories} onClick={createCategory.openModal}>
            <img src={createIcon} alt="create-icon"/>
            <span>Crear categoria</span>
          </button>
          { createCategory.isOpen && createCategory.modalName === "createCategory" ? <CreateCategories isOpen={createCategory.isOpen} onClose={createCategory.closeModal}>
             <h3>Creaer categoria</h3>
              </CreateCategories> : null }
          { saveCategories.isOpen && saveCategories.modalName === "saveCategories" ? <SaveCategoriesModal isOpen={saveCategories.isOpen} onClose={saveCategories.closeModal}> 
          </SaveCategoriesModal> : null}
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <div className={styles.searchInputContainer}>
          <img src={searchIcon} alt="search-icon" className={styles.searchIcon} />
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
              <tr key={index}>
                <td className={styles.tableRows}>{categoria.code}</td>
                <td className={styles.tableRows}>{categoria.categoryName}</td>
                <td className={styles.tableRows}>{categoria.createdAt}</td>
                <td className={styles.buttonsContainer}>
                  {categoria.status === "enabled" ? (
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
      </div>
    </section>
  );
}


