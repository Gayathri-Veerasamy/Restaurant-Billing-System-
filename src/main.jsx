import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Admin from '/src/components/Admin.jsx'
import User from '/src/components/User.jsx'
import Cart from '/src/components/Cart.jsx'
import Admin_to_show from '/src/components/Admin_to_show.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
    
      {
        path:"/Admin",
        element:<Admin/>
      },
      {
        path:"/Admin_to_show",
        element:<Admin_to_show/>
      },
      {
        path:"/User",
        element:<User/>
      },
      {
        path:"/Cart",
        element:<Cart/>
      }
    ]
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
