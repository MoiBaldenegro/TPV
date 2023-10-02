import { useState } from "react"
import { useDispatch } from "react-redux"

import dashboard from "../../assets/dashboard/dashboard.svg"
import arrow from "../../assets/dashboard/arrow.svg"
import catalogo from "../../assets/dashboard/catalogo.svg"
import ventas from "../../assets/dashboard/ventas.svg"
import ventasType from "../../assets/dashboard/ventaType.svg"
import promociones from "../../assets/dashboard/promociones.svg"
import caja from "../../assets/dashboard/caja.svg"
import reservaciones from "../../assets/dashboard/reservaciones.svg"
import tableros from "../../assets/dashboard/tableros.svg"
import usuarios from "../../assets/dashboard/usuarios.svg"
import mesas from "../../assets/dashboard/mesas.svg"
import reportes from "../../assets/dashboard/reportes.svg"
import divider from "../../assets/dashboard/divider.svg"
import config from "../../assets/dashboard/config.svg"
import ayuda from "../../assets/dashboard/ayuda.svg"
import line from "../../assets/dashboard/line.png"
import redLine from "../../assets/dashboard/redLine.png"

import styles from "../aside/aside.module.css"
import styling from "../main/main.module.css"
// Actions
import { toggleMainRender, toggleMainItemRender } from "../../redux/actions"



export default function Aside (){

    const dispatch = useDispatch();
    const [ main, setMain ] = useState("");
    const [ active, setActive ] = useState(true)
    const [ indexing, setIndexing] = useState(undefined);
    const [ redLinePosition, setRedLinePosition] = useState(5);

    const handleBoard = (value:any, activeValue:any, indexValue:any, positionLine:any, deployItemValue: string ) => {
        setMain(value)
        setActive(activeValue)
        setIndexing(indexValue)
        setRedLinePosition(positionLine)
        dispatch(toggleMainRender(value))
        dispatch(toggleMainItemRender(deployItemValue))
    }; 

    const modeOne = styles.containerWith
    const modeTwo = styles.container
    const classNameSelected = styles.selectedItem
    const classNameSelectedAlter = styles.selectedItemAlter
    // const redLineClassName = style.redLineCategorias


    return (
        <aside className={styles.aside}>
            <div className={styles.sectionOne}>
                <div className={indexing === 0 ? modeTwo : classNameSelectedAlter} onClick={() => handleBoard("dashboard", false, 0)}>
                    <img src={dashboard} className={styles.icon} alt="dashboard-icon" />
                    <span>Dashboard</span>
                </div>
                <div className={indexing === 1 ? modeOne : classNameSelected}  onClick={() => handleBoard("catalogo", !active, 1)}>
                    <div className={styles.iconContainer}>
                        <img src={catalogo}  className={styles.icon} alt="catalogo-icon" />
                        <span>Catálogo</span>
                    </div>
                    <img src={arrow}  className={styles.arrowIcon} alt="icon" />
                </div>
                {
                    main === "catalogo" && active === true ? 
                    <div className={styles.itemsDeployContainer}>
                         <div className={styles.linesContainer}>
                            <img src={line}  className={styles.line} alt="line" />
                            <img src={redLine} className={styles.redLine}
                            style={
                                redLinePosition === 1
                                ? { marginTop: '5px' }
                                : redLinePosition === 2
                                ? { marginTop: '55px' }
                                : redLinePosition === 3
                                ? { marginTop: '105px' }
                                : redLinePosition === 4
                                ? { marginTop: '160px' }
                                : redLinePosition === 5
                                ? { marginTop: '210px' }
                                : null   
                            }
                            alt="red-line"
                            />
                        </div>
                        <div className={styling.deployContainer}>
                            <span className={styling.deployItem} onClick={() => handleBoard("catalogo", true, 1, 1, "categorias")} > Categorías </span>
                            <span className={styling.deployItem}  onClick={() => handleBoard("catalogo", true, 1, 2, "productosYPrecios")}> Productos y precios </span>
                            <span className={styling.deployItem}  onClick={() => handleBoard("catalogo", true, 1, 3, "complementos")}> Complementos </span>
                            <span className={styling.deployItem}  onClick={() => handleBoard("catalogo", true, 1, 4, "modificaciones")}> Modificaciones </span>
                            <span className={styling.deployItem}  onClick={() => handleBoard("catalogo", true, 1, 5, "menusYRecetas")}> Menús y recetas </span>
                        </div> 

                    </div>: null
                   
                } 
                <div className={indexing === 2 ? modeOne : classNameSelected} onClick={() => handleBoard("ventas", false, 2)}>
                    <div className={styles.iconContainer}>
                        <img src={ventas} className={styles.icon} alt="ventas-icon" />
                        <span>Ventas</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 3 ? modeTwo : classNameSelectedAlter} onClick={() => handleBoard("ventaTypes", false, 3)}>
                    <img src={ventasType} className={styles.icon} alt="tipos-de-venta" />
                    <span>Tipos de venta</span>
                </div>
                <div className={indexing === 4 ? modeOne : classNameSelected} onClick={() => handleBoard("promociones", false, 4)}>
                    <div className={styles.iconContainer}>
                        <img src={promociones} className={styles.icon} alt="promociones" />
                        <span>Descuentos</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 5 ? modeOne : classNameSelected} onClick={() => handleBoard("caja", false, 5)}>
                    <div className={styles.iconContainer} >
                        <img src={caja} className={styles.icon} alt="caja" />
                        <span>Caja</span>
                    </div>
                    <img src={arrow}  className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 6 ? modeTwo : classNameSelectedAlter} onClick={() => handleBoard("reservaciones", false, 6)}>
                    <img src={reservaciones} className={styles.icon} alt="reservaciones" />
                    <span>Reservaciones</span>
                </div>
                <div className={indexing === 7 ? modeOne : classNameSelected} onClick={() => handleBoard("tableros", false, 7)}>
                    <div className={styles.iconContainer}  >
                        <img src={tableros} className={styles.icon} alt="tableros" />
                        <span>Tableros</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 8 ? modeOne : classNameSelected} onClick={() => handleBoard("usuarios", false, 8)}>
                    <div className={styles.iconContainer} >
                        <img src={usuarios} className={styles.icon} alt="usuarios" />
                        <span>Usuarios</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 9 ? modeOne : classNameSelected} onClick={() => handleBoard("mesas", false, 9)}>
                    <div className={styles.iconContainer} >
                        <img src={mesas} className={styles.icon} alt="mesas" />
                        <span  >Mesas</span>
                    </div>
                    <img src={arrow} className={styles.arrowIcon} alt="icon" />
                </div>
                <div className={indexing === 10 ? modeTwo : classNameSelectedAlter}  onClick={() => handleBoard("reportes", false, 10)}>
                    <img src={reportes} className={styles.icon} alt="reportes" />
                    <span>Reportes</span>
                </div>
            </div>
            <img src={divider} className={styles.iconDivider} alt="icon" />
            <div className={styles.sectionTwo}>
                <div className={styles.iconConfig}>
                    <img src={config} className={styles.icon} alt="configuraciones" />
                    <span>Configuracion</span>
                </div>
                <div className={styles.iconAyuda}>
                    <img src={ayuda} alt="ayuda" />
                    <span>Ayuda</span>
                </div>
            </div>
        </aside>
    )
}