import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// Importando nossos componentes
import {Home} from './pages/Home';
import Layout from './components/template/Layout'; // O layout principal
import { PageDetalhamentoDoObjeto } from './pages/PageDetalhamentoDoObjeto';

// Criando o roteador
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // O elemento pai é o nosso Layout com o menu
    children: [ // Aqui definimos as rotas aninhadas (filhas)
      {
        index: true, // A rota padrão para /painel
        element: <Home />,
      },
      {
        path: '/detalhamentoDoObjeto', // o caminho é relativo a '/painel' -> /painel/perfil
        element: <PageDetalhamentoDoObjeto />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
