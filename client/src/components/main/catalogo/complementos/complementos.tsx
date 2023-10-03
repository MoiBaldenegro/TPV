import styles from "./complementos.module.css"

// icons
import exportIcon from "../../../../assets/public/exportIcon.svg"
import importIcon from "../../../../assets/public/importIcon.svg"
import createIcon from "../../../../assets/public/createIcon.svg"
import helpIcon from "../../../../assets/public/helpIcon.svg"
// import arrow from "../../../../assets/public/arrow.svg"
import filterIcon from "../../../../assets/public/filterIcon.svg"
import searchIcon from "../../../../assets/public/searchIcon.svg"



export default function Complementos (){
    return (
        <div className={styles.container} >
            <section className={styles.head}>
                <h2>Complementos</h2>
                <div>
                    <button className={styles.btnHead}><img src={exportIcon} alt="export-icon" />Exportar complementos</button>
                    <button className={styles.btnHead}><img src={importIcon} alt="import-icon" />Importar complementos</button>
                    <button className={styles.btnHeadCreate}><img src={createIcon} alt="create-icon" /><span>Crear complemento</span></button>
                </div>
            </section>
            <section className={styles.updateSection}>
                <div className={styles.leftSection}>
                    <input type="text" placeholder="Nombre del complemento" readOnly className={styles.productName} />
                    <div className={styles.selectContainer}>
                        <input type="text" name="" id="" placeholder="Clave" readOnly className={styles.clave} />
                        <select name="" id="" placeholder="Tipo de venta" className={styles.ventaTypesSelect}>
                            <option  className={styles.ventaTypesSelectOption} value="">Comedor</option>
                            <option  className={styles.ventaTypesSelectOption} value="">Mostrador</option>
                            <option  className={styles.ventaTypesSelectOption} value="">Rappi</option>
                        </select>
                    </div> 
                </div> 
                <div className={styles.rightSection} >
                    <div className={styles.inRightSection}> 
                        <div className={styles.price}>
                            <span >Precio de venta</span>
                            <input type="text" placeholder="$0.00" readOnly className={styles.inputItem}/>
                        </div>
                    </div>
                    <div className={styles.inRightSection}>
                    <div className={styles.aumento}>
                        <span className={styles.subTittle}>importe aumento</span>
                        <div className={styles.btnContainerInput}>
                            <input type="text" placeholder="$0.00" className={styles.inputWithButton}/>
                            <button className={styles.buttonAument}><img src={createIcon} alt="" /></button>  
                        </div>
                    </div>
                    <div className={styles.porcentaje}>
                        <span>Porcentaje de aumento</span>
                        <div className={styles.btnContainerInput}>
                            <input type="text" placeholder="0%" className={styles.inputWithButton}/>
                            <button className={styles.buttonAument}><img src={createIcon} alt="" /></button>
                        </div> 
                    </div>
                </div>  
               
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
                        <span>Complementos</span>
                    </div>
                    <div className={styles.searchContainer} >
                        <button className={styles.categoryButton}><img src={filterIcon} alt="categories-button" /><span>Categorias</span></button>
                        <button className={styles.sellTypeButton} ><img src={filterIcon} alt="sell-types" /><span>Tipo de venta</span></button>
                        <button className={styles.stateButton}><img src={filterIcon} alt="state" /><span>Estado</span></button>
                        <div className={styles.searchBarTable}>
                            <img src={searchIcon} alt="search-icon" className={styles.searchIcon}/>
                            <input type="text" className={styles.searchBarTableInput} placeholder="Ejemplo de complemento" />
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