import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';


import Inicio from './routes/inicio.tsx';
import Sobre_Nosotros from './routes/sobre_nosotros.tsx';
import Unete from './routes/unete.tsx';
import Noticias from './routes/noticias.tsx';
import Proyectos from './routes/proyectos.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <Inicio />,
  },

  
  {
    path: '/Proyectos',
    element: <Proyectos />,
  },

  {
    path: '/SobreNosotros',
    element: <Sobre_Nosotros />,
  },
  
  {
    path: '/Noticias',
    element: <Noticias />,
  },

  {
    path: '/Unete',
    element: <Unete />,
  },

])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)