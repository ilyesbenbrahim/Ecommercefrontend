import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Signine from "../src/Pages/signin/Signine.jsx"
import SignUpe from "../src/Pages/SignUp/SignUpe.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Pages/contact/Contact.jsx'
import Product from './Pages/product/Product.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/singin",
    element:<Signine></Signine>,
  },
  {
  path:"/signUp",
  element:<SignUpe></SignUpe>,
},
{
path:"/contact",
element:<Contact></Contact>
},
{
path:"/product",
element:<Product></Product>
}

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
