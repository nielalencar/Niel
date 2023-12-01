import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Welcome } from './routes/Welcome.jsx'
import { Projects } from './routes/Projects.jsx'
import { Technologies } from './routes/Technologies.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />
      },
      {
        path: "/projetos",
        element: <Projects />
      },
      {
        path: "/tecnologias",
        element: <Technologies />
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
