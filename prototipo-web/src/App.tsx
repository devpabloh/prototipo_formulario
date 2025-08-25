import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// Importando componentes
import {Home} from './pages/Home';
import Layout from './components/template/Layout'; 
import { PageDetalhamentoDoObjeto } from './pages/PageDetalhamentoDoObjeto';
import { TermoDeReferencia } from './pages/TermoDeReferencia';
import { ItemsDois } from './pages/ItemsDois';
import { ItemsTres } from './pages/ItemsTres';
import { ItemsQuatro } from './pages/ItemsQuatro';
import { ItemsCinco } from './pages/ItemsCinco';
import { ItemsSeis } from './pages/ItemsSeis';
import { ItemsSete } from './pages/ItemsSete';
import { ItemsOito } from './pages/ItemsOito';
import { ItemsDez } from './pages/ItemsDez';
import { ItemUltimaSecaoTermoDeReferencia } from './pages/ItemUltimaSecaoTermoDeReferencia';

// Rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [ 
      {
        index: true, // A rota padrão para /painel
        element: <Home />,
      },
      {
        path: '/detalhamentoDoObjeto', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <PageDetalhamentoDoObjeto />,
      },
      {
        path: '/termoDeReferencia', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <TermoDeReferencia />,
      },
      {
        path: '/ItemsDois', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ItemsDois />,
      },
      {
        path: '/ItemsTres', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ItemsTres />,
      },
      {
        path: '/ItemsQuatro', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ItemsQuatro />,
      },
      {
        path: '/ItemsCinco', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ItemsCinco />,
      },
      {
        path: '/ItemsSeis', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <ItemsSeis />,
        },
        {
          path: '/ItemsSete', // o caminho é relativo a '/painel' -> /painel/perfil
          element: <ItemsSete />,
        },
        {
          path: '/ItemsOito', // o caminho é relativo a '/painel' -> /painel/perfil
          element: <ItemsOito />,
        },
        {
          path: '/ItemsDez', // o caminho é relativo a '/painel' -> /painel/perfil
          element: <ItemsDez />,
        },
        {
          path: '/ItemUltimaSecaoTermoDeReferencia', // o caminho é relativo a '/painel' -> /painel/perfil
          element: <ItemUltimaSecaoTermoDeReferencia />,
        },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
