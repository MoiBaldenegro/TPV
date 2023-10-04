import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/home/home'
import LoginPage from "./pages/loginPage/loginPage"
import CreateAccount from "./pages/createAccount/createAccount"
import Config from "./components/main/configuracion/configuracion"
import ProductosYPrecios from "./components/main/catalogo/productosYPrecios/productosYPrecios"
import Categorias from "./components/main/catalogo/categorias/categorias"
import Complementos from "./components/main/catalogo/complementos/complementos"
import Modificaciones from "./components/main/catalogo/modificaciones/modificaciones"
import MenusYRecetas from "./components/main/catalogo/menusYRecetas/menusYRecetas"
import Dashboard from "./components/main/dashboard/dashboard"
import Ventas from "./components/main/ventas/ventas"
import VentaTypes from "./components/main/ventaTypes/ventaTypes"
import Promociones from "./components/main/promociones/promociones"
import Caja from "./components/main/caja/caja"
import Reservaciones from "./components/main/reservaciones/reservaciones"
import Tableros from "./components/main/tableros/tableros"
import Usuarios from "./components/main/usuarios/usuarios"
import Mesas from "./components/main/mesas/mesas"
import Reportes from "./components/main/reportes/reportes"
import Ayuda from "./components/main/ayuda/ayuda"

function App() {

  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}>
            <Route path="config" element={<Config/>} />
            <Route path="products&prices" element={<ProductosYPrecios/>}/>
              // Esta ruta se cambiara a catalogo y se anidaran las demas dentro
            <Route path="categories" element={<Categorias/>}/>
            <Route path="dishes" element={<Complementos/>}/>
            <Route path="modifications" element={<Modificaciones/>}/>
            <Route path="menus&recipes" element={<MenusYRecetas/>}/>
              // demas rutas del aside aca se anidaran 
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="sales" element={<Ventas/>}/>
            <Route path="salesTypes" element={<VentaTypes/>}/>
            <Route path="discounts" element={<Promociones/>}/>
            <Route path="till" element={<Caja/>}/>
            <Route path="reservations" element={<Reservaciones/>}/>
            <Route path="panels" element={<Tableros/>}/>
            <Route path="users" element={<Usuarios/>}/>
            <Route path="tables" element={<Mesas/>}/>
            <Route path="reports" element={<Reportes/>}/>
            <Route path="help" element={<Ayuda/>}/>
          </Route>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/create/account" element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
