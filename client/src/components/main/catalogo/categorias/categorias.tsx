import styles from "./categorias.module.css"
// ICONS
import update from "../../../../assets/categorias/updateIcon.svg"
import deleteIcon from "../../../../assets/categorias/deleteIcon.svg"
import exportIcon from "../../../../assets/categorias/exportIcon.svg"
import importIcon from "../../../../assets/categorias/importIcon.svg"
import createIcon from "../../../../assets/categorias/createIcon.svg"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteCategorie, getCategories } from "../../../../redux/actions"


export default function Categorias (){

    // Cargamos la data de categorias al montar el componente
    const dispatch = useDispatch();
    const allCategories = useSelector(state => state.allCategories);
    
    const onDelete = (id: string) => {
        dispatch(deleteCategorie(id))
    }


    useEffect(()=>{
        dispatch(getCategories())
    }
    ,[])
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
                        {allCategories?.map((categoria, index) => (
                        <tr key={index}>
                            <td className={styles.tableRows} >{categoria.code}</td>
                            <td className={styles.tableRows}>{categoria.categoryName}</td>
                            <td className={styles.tableRows}>{categoria.createdAt}</td>
                            <td className={styles.buttonsContainer}>
                                <button className={styles.actionButtons}>
                                    <img src={update} alt="update-icon"/>
                                </button>
                                <button 
                                        className={styles.actionButtons}
                                        onClick={()=>{onDelete(categoria.id)}}>
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