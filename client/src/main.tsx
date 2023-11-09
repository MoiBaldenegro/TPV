import ReactDOM from 'react-dom/client';
import './fonts/fonts.css';
import './index.css';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './pages/landing/landing.tsx';
import {
  Caja,
  CreateAccount,
  Home,
  LoginPage,
  VentaTypes,
} from './components.tsx';
import NotFound from './pages/notFound/notFound.tsx';
import ProtectedRoute from './pages/protectedRoute/protectedRoute.tsx';
import Categorias from './components/main/catalogo/categorias/categorias.tsx';
import ProductosYPrecios from './components/main/catalogo/productosYPrecios/productosYPrecios.tsx';
import Complementos from './components/main/catalogo/complementos/complementos.tsx';
import Modificaciones from './components/main/catalogo/modificaciones/modificaciones.tsx';
import MenusYRecetas from './components/main/catalogo/menusYRecetas/menusYRecetas.tsx';
import Main from './components/main/main.tsx';
import Cuentas from './components/main/ventas/cuentas/cuentas.tsx';
import Notas from './components/main/ventas/notas/notas.tsx';
import Productos from './components/main/ventas/products/products.tsx';
import Pagos from './components/main/ventas/pagos/pagos.tsx';
import Descuentos from './components/main/ventas/descuentos/descuentos.tsx';
import Cancelaciones from './components/main/ventas/cancelaciones/cancelaciones.tsx';
import MotivosDeCancelacion from './components/main/ventas/motivosDeCancelaiones/motivosDeCancelaciones.tsx';
import SaveCategoriesModal from './components/main/catalogo/categorias/modals/confirms/saveCategories.tsx';
import Loader from './components/loaders/loader.tsx';
import TomateLoader from './components/loaders/tomateLoader/tomateLoader.tsx';
import ConfirmLoader from './components/loaders/confirmsLoader/confirmsLoader.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/auth/register',
    element: <CreateAccount />,
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        path: 'home',
        element: <Home />,
        children: [
          {
            path: 'catalogo',
            element: <Main />,
            children: [
              {
                path: 'categories',
                element: <Categorias />,
              },
              {
                path: 'products&prices',
                element: <ProductosYPrecios />,
              },
              {
                path: 'dishes',
                element: <Complementos />,
              },
              {
                path: 'modifications',
                element: <Modificaciones />,
              },
              {
                path: 'menus&recipes',
                element: <MenusYRecetas />,
              },
            ],
          },
          {
            path: 'ventas',
            element: <Main />,
            children: [
              {
                path: 'bills',
                element: <Cuentas />,
              },
              {
                path: 'notes',
                element: <Notas />,
              },
              {
                path: 'products',
                element: <Productos />,
              },
              {
                path: 'payments',
                element: <Pagos />,
              },
              {
                path: 'discounts',
                element: <Descuentos />,
              },
              {
                path: 'cancellations',
                element: <Cancelaciones />,
              },
              {
                path: 'cancellationsReasons',
                element: <MotivosDeCancelacion />,
              },
            ],
          },
          {
            path: 'sellTypes',
            element: <Main />,
            children: [
              {
                path: 'sellTypes',
                element: <VentaTypes />,
              },
            ],
          },
          {
            path: 'till',
            element: <Main />,
            children: [
              {
                path: 'till',
                element: <Caja />,
              },
            ],
          },
          {
            path: 'test',
            element: (
              <SaveCategoriesModal
                isOpen={'asdfas'}
                onClose={'asdaf'}
                children={'asedfaf'}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
