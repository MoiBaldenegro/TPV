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
        path: "/home",
        element: <Home/>
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
