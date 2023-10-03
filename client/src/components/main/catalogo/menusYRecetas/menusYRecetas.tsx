import styles from "./menusYRecetas.module.css";


// icons
import exportIcon from "../../../../assets/public/exportIcon.svg"
import importIcon from "../../../../assets/public/importIcon.svg"
import createIcon from "../../../../assets/public/createIcon.svg"
import helpIcon from "../../../../assets/public/helpIcon.svg"
// import arrow from "../../../../assets/public/arrow.svg"
import filterIcon from "../../../../assets/public/filterIcon.svg"
import searchIcon from "../../../../assets/public/searchIcon.svg"




export default function MenusYRecetas (){
    const week = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"]
    return (
        <div className={styles.container} >
            <section className={styles.head}>
                <h2>Menus y recetas</h2>
                <div>
                    <button className={styles.btnHeadCreate}><img src={createIcon} alt="create-icon" /><span>Crear receta</span></button>
                </div>
            </section>
            <section className={styles.updateSection}>
                <div className={styles.leftSection}> 
                    <input type="text" placeholder="Nombre del producto" readOnly className={styles.productName} />
                    <input type="text" name="" id="" placeholder="Clave" readOnly className={styles.clave} />
                </div>
               
                <div className={styles.weekContainer}>
                    <span>Disponibilidad</span>
                    { week.map( day =>  <div className={styles.dayInput} >
                                            <input type="checkbox" className={styles.checkInput}/>
                                            <label htmlFor="">{day}</label> 
                                        </div>
                    )}
                   
                </div> 
            </section>
            <section className={styles.mainSection}>
                <div className={styles.mainHead}>
                    <div className={styles.mainHeadLeft} >
                        <span>Mostrar</span>
                        <select name="" id="" className={styles.showSelect}>
                            <option value="all">Todos</option>
                            <option value="option-one">Option 1</option>
                            <option value="optio-two">Option 2</option>
                        </select>
                        <span>Productos</span>
                    </div>
                    <div className={styles.searchContainer} >
                        <button className={styles.categoryButton}><img src={filterIcon} alt="categories-button" /><span>Categorias</span></button>
                        <button className={styles.sellTypeButton} ><img src={filterIcon} alt="sell-types" /><span>Tipo de venta</span></button>
                        <button className={styles.stateButton}><img src={filterIcon} alt="state" /><span>Estado</span></button>
                        <div className={styles.searchBarTable}>
                            <img src={searchIcon} alt="search-icon" className={styles.searchIcon}/>
                            <input type="text" className={styles.searchBarTableInput} placeholder="producto de ejemplo" />
                        </div>
                    </div> 
                </div>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead></thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div className={styles.tableFooter}>
                </div>
            </section>
        </div>
    )
}