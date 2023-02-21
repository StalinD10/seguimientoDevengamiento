import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/Layout'
import Login from './pages/Login'
import Index from './pages/Home'
import MostrarDatosDocente from './components/MostrarDatosDocente'
import NuevaActividadDevengamiento from './pages/NuevaActividadDevengamiento'
import MostrarActividades from "./components/MostrarActividades"

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
    {
      path:"/index",
      element: <Index/>
    },
    {
      path: "/datosDocente",
      element : <MostrarDatosDocente/>
    },
    {
      path: "/nuevaActividad",
      element : <NuevaActividadDevengamiento/>
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
