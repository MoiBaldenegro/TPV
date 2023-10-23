import ReactDOM from 'react-dom/client'
import "./fonts/fonts.css"
import './index.css'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing/landing.tsx'
import { CreateAccount, Home, LoginPage, Ventas } from './components.tsx'
import NotFound from './pages/notFound/notFound.tsx'
import ProtectedRoute from './pages/protectedRoute/protectedRoute.tsx'
import Categorias from './components/main/catalogo/categorias/categorias.tsx'
import ProductosYPrecios from './components/main/catalogo/productosYPrecios/productosYPrecios.tsx'
import Complementos from './components/main/catalogo/complementos/complementos.tsx'
import Modificaciones from './components/main/catalogo/modificaciones/modificaciones.tsx'
import MenusYRecetas from './components/main/catalogo/menusYRecetas/menusYRecetas.tsx'
import Main from './components/main/main.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/auth/register",
    element: <CreateAccount/>
  },
  {
    path: "/",
    element: <ProtectedRoute/>,
    children: [
      {
        path: "home",
        element: <Home/>,
        children: [
          {
            path: "catalogo",
            element: <Main />,
            children: [
              {
                path: "categories",
                element: <Categorias/>
              },
              {
                path: "products&prices",
                element: <ProductosYPrecios/>
              },
              {
                path: "dishes",
                element: <Complementos/>
              },
              {
                path: "modifications",
                element: <Modificaciones/>
              },
              {
                path: "menus&recipes",
                element: <MenusYRecetas/>
              },
            ]
          },
          {
            path: "ventas",
            element: <Main/>,
            children: [{
              path: "bills",
              element: <Ventas/>
            }
              
            ]

          }

        ]
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  },
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
)
