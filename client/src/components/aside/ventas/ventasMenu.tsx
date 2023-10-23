import LinesVentasModule from "./lines";
import styles from "./ventasMenu.module.css";
// dependencies
import { NavLink } from "react-router-dom";

interface Props {
    main: string
}

export default function VentasMenu ({main}: Props){
    const deployItemClass = ({ isActive }: any) => ( isActive ? styles.isActiveDeploy : styles.notActiveDeploy);

    return (
        <div className={ main === "ventas" ? styles.itemsDeployContainer : styles.hidden}>
            <LinesVentasModule/>
            <div className={styles.containerDeployItemsClass}>
                <NavLink to="ventas/bills" className={deployItemClass} onClick={() => handleBoard( "ventas", true,  1  )} >Cuentas</NavLink>
                <NavLink to="ventas/notes" className={deployItemClass} onClick={() => handleBoard("ventas", true,  2, )}>Notas</NavLink>
                <NavLink to="ventas/products" className={deployItemClass} onClick={() => handleBoard("ventas", true,  3, )}>Productos</NavLink>
                <NavLink to="ventas/payments" className={deployItemClass} onClick={() => handleBoard("ventas", true,  4, )}>Pagos</NavLink>
                <NavLink to="ventas/discounts" className={deployItemClass}  onClick={() => handleBoard("ventas", true, 5)}>Descuentos</NavLink>
                <NavLink to="ventas/cancellations" className={deployItemClass}  onClick={() => handleBoard("ventas", true, 6)}>Cancelaciones</NavLink>
                <NavLink to="ventas/cancellationsReasons" className={deployItemClass}  onClick={() => handleBoard("ventas", true, 7)}>Motivos de cancelación</NavLink>
             </div> 
        </div>
    )
}
