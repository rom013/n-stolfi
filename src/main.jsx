import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import History from './pages/History.jsx'
import About from './pages/About.jsx'
import Calculate from './pages/Calculate.jsx'
import './style/index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/history",
    element: <History/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/calculate",
    element: <Calculate/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
