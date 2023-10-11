import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./fonts/fonts.css"
import './index.css'
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/landing/landing.tsx'
import { CreateAccount, Home, LoginPage } from './components.tsx'
import NotFound from './pages/notFound/notFound.tsx'
import ProtectedRoute from './pages/protectedRoute/protectedRoute.tsx'
import Categorias from './components/main/catalogo/categorias/categorias.tsx'
import ProductosYPrecios from './components/main/catalogo/productosYPrecios/productosYPrecios.tsx'
import Complementos from './components/main/catalogo/complementos/complementos.tsx'
import Modificaciones from './components/main/catalogo/modificaciones/modificaciones.tsx'
import MenusYRecetas from './components/main/catalogo/menusYRecetas/menusYRecetas.tsx'
import Loader from './components/loaders/loader.tsx'

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
            path: "catalogo/categories",
            element: <Categorias/>
          },
          {
            path: "catalogo/products&prices",
            element: <ProductosYPrecios/>
          },
          {
            path: "catalogo/products&prices",
            element: <ProductosYPrecios/>
          },
          {
            path: "catalogo/dishes",
            element: <Complementos/>
          },
          {
            path: "catalogo/modifications",
            element: <Modificaciones/>
          },
          {
            path: "catalogo/menus&recipes",
            element: <MenusYRecetas/>
          },
        ]

      }
    ]
  },
  {
    path: "*",
    element: <Loader/>
  },

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    
)
