import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Carga diferida de los componentes
import  Inicio  from './routes/inicio.tsx';

import Sobre_Nosotros  from './routes/sobre_nosotros.tsx';

import Unete  from './routes/unete.tsx';

import Noticias  from './routes/noticias.tsx';

import Proyectos  from './routes/proyectos.tsx';

import Error404 from './routes/404.tsx';

import Responsabilidades from './routes/responsabilidades.tsx';

// Configuración del router
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
    path: '/SobreNosotros/Roles-y-Responsabilidades',
    element: <Responsabilidades />,
  },

  {
    path: '/Noticias',
    element: <Noticias />,
  },
  {
    path: '/Unete',
    element: <Unete />,
  },

  {
    path: '/Unete',
    element: <Unete />,
  },

  {
    path: '*',
    element: <Error404 />,
  },
]);

// Componente de carga

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
);
