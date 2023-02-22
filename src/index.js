import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout'
import Login, {action as actionLogin} from './pages/Login'
import Index from './pages/Home'
import MostrarDatosDocente from './components/MostrarDatosDocente'
import NuevaActividadDevengamiento, {action as actionActividadDevengamiento} from './pages/NuevaActividadDevengamiento'
import MostrarActividades from "./components/MostrarActividades"
import ErrorPage from './components/ErrorPage'
const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
        action: actionLogin,
        errorElement: <ErrorPage/>
      },
    {
      path:"/index",
      element: <Index/>
    },
    {
      path: "/datosDocente",
      element : <MostrarDatosDocente/>,
      errorElement: <ErrorPage/>
    },
    {
      path: "/nuevaActividad",
      element : <NuevaActividadDevengamiento/>,
      action: actionActividadDevengamiento,
      errorElement: <ErrorPage/>

    },
    {
      path: "/MostrarActividades",
      element : <MostrarActividades/>
    }

          
    ]

  },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
