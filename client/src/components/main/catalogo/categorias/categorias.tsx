import styles from "./categorias.module.css"
import categorias from "../../../../mocks/categorias.json"
// ICONS
import update from "../../../../assets/categorias/updateIcon.svg"
import deleteIcon from "../../../../assets/categorias/deleteIcon.svg"
import exportIcon from "../../../../assets/categorias/exportIcon.svg"
import importIcon from "../../../../assets/categorias/importIcon.svg"
import createIcon from "../../../../assets/categorias/createIcon.svg"


export default function Categorias (){
    return (
        <section className={styles.categorias}>
            <div className={styles.categoriasButtons}>
                    <h2>Categorias</h2>
                    <div className={styles.categoriesButtonsContainer}>
                        <button className={styles.exportCategories}><img src={exportIcon} alt="export-icon" /><span>Exportar categorias</span></button>
                        <button className={styles.importCategories}><img src={importIcon} alt="import-icon" /><span>Importar categorias</span></button>
                        <button className={styles.createCategories}><img src={createIcon} alt="create-icon" /><span>Crear categoria</span></button>
                    </div>
            </div>
            <div className={styles.searchBarContainer}>
                <input type="search" className={styles.searchBar} placeholder="Buscar categoria" />
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
                        {categorias.categorias?.map((categoria, index) => (
                        <tr key={index}>
                            <td className={styles.tableRows} >{categoria.clave}</td>
                            <td className={styles.tableRows}>{categoria.nombre}</td>
                            <td className={styles.tableRows}>{categoria.date}</td>
                            <td className={styles.buttonsContainer}>
                                <button className={styles.actionButtons}>
                                    <img src={update} alt="update-icon" />
                                </button>
                                <button className={styles.actionButtons}>
                                    <img src={deleteIcon} alt="delete-icon" />
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}