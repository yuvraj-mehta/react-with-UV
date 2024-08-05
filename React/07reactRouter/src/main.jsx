import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import { About } from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import { Route } from 'react-router-dom';
import { User } from './Components/User/User.jsx'
import { Github, GithubInfoLoader } from './Components/Github/Github.jsx'




const router = createBrowserRouter([
  {
    Path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
