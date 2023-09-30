import { useSelector } from "react-redux";


import Dashboard from "./dashboard/dashboard";
import style from "./main.module.css"
import Ventas from "./ventas/ventas";
import VentaTypes from "./ventaTypes/ventaTypes";
import Promociones from "./promociones/promociones";
import Caja from "./caja/caja";
import Reservaciones from "./reservaciones/reservaciones";
import Tableros from "./tableros/tableros";
import Mesas from "./mesas/mesas";
import Usuarios from "./usuarios/usuarios";
import Reportes from "./reportes/reportes";
import ProductosYPrecios from "./catalogo/productosYPrecios/productosYPrecios";
import Complementos from "./catalogo/complementos/complementos";
import Modificaciones from "./catalogo/modificaciones/modificaciones";
import MenusYRecetas from "./catalogo/menusYRecetas/menusYRecetas";
import Categorias from "./catalogo/categorias/categorias";


export default function Main () {

    const mainRender:string = useSelector(state => state.mainRender);
    const deployItemRender:string = useSelector(state => state.deployItemRender)

    return(
        <section className={style.container}>
            <div>
                { mainRender === "dashboard" && <Dashboard/>}
                { mainRender === "catalogo" && deployItemRender === "categorias" && <Categorias/>}
                { mainRender === "catalogo" && deployItemRender === "productosYPrecios" && <ProductosYPrecios/>}
                { mainRender === "catalogo" && deployItemRender === "complementos" && <Complementos/>}
                { mainRender === "catalogo" && deployItemRender === "modificaciones" && <Modificaciones/>}
                { mainRender === "catalogo" && deployItemRender === "menusYRecetas" && <MenusYRecetas/>}
                { mainRender === "ventas" && <Ventas/> }
                { mainRender === "ventaTypes" && <VentaTypes/> }
                { mainRender === "promociones" && <Promociones/> }
                { mainRender === "caja" && <Caja/> }
                { mainRender === "reservaciones" && <Reservaciones/> }
                { mainRender === "tableros" && <Tableros/> }
                { mainRender === "usuarios" && <Usuarios/> }
                { mainRender === "mesas" && <Mesas/> }
                { mainRender === "reportes" && <Reportes/> }
            </div> 
        </section>
    )
}