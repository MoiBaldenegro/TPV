import styles from "./categorias.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, searchCategories } from "../../../../redux/actions";
import deleteIcon from "../../../../assets/categorias/bloquedIcon.svg";
import enabledIcon from "../../../../assets/categorias/enabledIcon.svg";
import update from "../../../../assets/categorias/updateIcon.svg";
import exportIcon from "../../../../assets/categorias/exportIcon.svg";
import importIcon from "../../../../assets/categorias/importIcon.svg";
import createIcon from "../../../../assets/categorias/createIcon.svg";

export default function Categorias() {
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.allCategories);

  const handleChange = (event) => {
    event.preventDefault();
    const searchValue = event.target.value
    if(searchValue.length > 2){
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
          <button className={styles.exportCategories}>
            <img src={exportIcon} alt="export-icon" />
            <span>Exportar categorias</span>
          </button>
          <button className={styles.importCategories}>
            <img src={importIcon} alt="import-icon" />
            <span>Importar categorias</span>
          </button>
          <button className={styles.createCategories}>
            <img src={createIcon} alt="create-icon" />
            <span>Crear categoria</span>
          </button>
        </div>
      </div>
      <div className={styles.searchBarContainer}>
        <input
          type="search"
          className={styles.searchBar}
          placeholder="Buscar categoria"
          onChange={handleChange}
        />
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
