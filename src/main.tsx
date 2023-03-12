import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NavError from './Components/Nav/ErrorPage/NavError';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Projects />,
    errorElement: <NavError />
  },
  {
    path: '/About',
    element: <About />,
  },
  {
    path: '/Contact',
    element: <Contact />,
  },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
