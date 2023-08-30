import React from 'react'
import ReactDOM from 'react-dom/client'
//BLOCO DE ROTAS
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import EditarProdutos from './routes/EditarProdutos.jsx';
import Erro404 from './routes/Erro404.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';

import './index.css'

//Criando o objeto de rotas
const router = createBrowserRouter([
  { path: '/', element: <App />,
      errorElement: <Erro404 />, 
      children: [
        { path: '/', element: <Home /> },
        { path: '/produtos', element: <Produtos /> },
        { path: '/editar/produtos/:id', element: <EditarProdutos /> },
      ]
  },
])

//BLOCO DE ROTAS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
