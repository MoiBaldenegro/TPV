import styles from "./productosYPrecios.module.css"

// icons
import exportIcon from "../../../../assets/public/exportIcon.svg"
import importIcon from "../../../../assets/public/importIcon.svg"
import createIcon from "../../../../assets/public/createIcon.svg"
import helpIcon from "../../../../assets/public/helpIcon.svg"
import arrow from "../../../../assets/public/arrow.svg"
import filterIcon from "../../../../assets/public/filterIcon.svg"
import searchIcon from "../../../../assets/public/searchIcon.svg"



export default function ProductosYPrecios(){
    return (
        <div className={styles.container} >
            <section className={styles.head}>
                <h2>Productos y precios</h2>
                <div>
                    <button className={styles.btnHead}><img src={exportIcon} alt="export-icon" />Exportar productos</button>
                    <button className={styles.btnHead}><img src={importIcon} alt="import-icon" />Importar productos</button>
                    <button className={styles.btnHeadCreate}><img src={createIcon} alt="create-icon" /><span>Crear producto</span></button>
                </div>
            </section>
            <section className={styles.updateSection}>
                <div className={styles.leftSection}>
                    <input type="text" placeholder="Nombre del producto" readOnly className={styles.productName} />
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
                        <div className={styles.impuesto}>
                            <span className={styles.subTittle}>Costo sin impuesto</span>
                            <img src={helpIcon} alt="help-icon" className={styles.iconItem} />
                            <input type="text" value={"$0.00"} readOnly className={styles.inputItem} />
                         </div>
                        <div className={styles.aumento} >
                            <span className={styles.subTittle}>importe aumento</span>
                            <div className={styles.btnContainerInput}>
                                <input type="text" placeholder="$0.00" className={styles.inputWithButton}/>
                                <button className={styles.buttonAument}><img src={createIcon} alt="" /></button>  
                            </div>
                        </div>
                        <div className={styles.margen} >
                            <span className={styles.subTittle}>Margen de utilidad</span>
                            <input type="text" placeholder="$0.00" className={styles.inputItem}/>
                        </div>
                    </div>
                <div>
                </div>
                <div className={styles.inRightSection}>
                            <div>
                                <span className={styles.subTittle}>Precio de venta</span>
                                <input type="text" placeholder="$0.00" readOnly className={styles.inputItem}/>
                            </div>
                            <div className={styles.porcentaje}>
                                <span>Porcentaje de aumento</span>
                                <div className={styles.btnContainerInput}>
                                    <input type="text" placeholder="0%" className={styles.inputWithButton}/>
                                    <button className={styles.buttonAument}><img src={createIcon} alt="" /></button>
                                </div>
                            </div>
                            <div>
                                <span>Utilidad</span>
                                <input type="text" placeholder="Precio de venta" readOnly className={styles.inputItem}/>
                            </div>
                        </div>
                    </div>

                   
                    
            </section>
            <section className={styles.mainSection}>
                <div className={styles.mainHead}>
                    <div className={styles.mainHeadLeft} >
                        <span>Mostrar</span>
                        <select name="" id="">
                            <option value="all">Todos</option>
                            <option value="option-one">Option 1</option>
                            <option value="optio-two">Option 2</option>
                        </select>
                        <span>Productos</span>
                    </div>
                    <div className={styles.searchContainer} >
                        <button><img src={filterIcon} alt="categories-button" /><span>Categorias</span></button>
                        <button><img src={filterIcon} alt="sell-types" /><span>Tipo de venta</span></button>
                        <button><img src={filterIcon} alt="state" /><span>Estado</span></button>
                        <div>
                            <img src={searchIcon} alt="search-icon" />
                            <input type="text" />
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