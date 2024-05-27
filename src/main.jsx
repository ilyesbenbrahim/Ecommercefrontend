import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signine from "../src/Pages/signin/Signine.jsx";
import SignUpe from "../src/Pages/SignUp/SignUpe.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Pages/contact/Contact.jsx";
import Product from "./Pages/product/Product.jsx";
import ProductClient from "./Pages/productClient/Product.jsx";
import Ajouterproduit from "./Pages/product/Ajouterproduit";
import ModifierUnProduit from "./Pages/product/ModifierProduit.jsx";
import ProductDetail from "./Pages/productClient/ProductDetail.jsx";
import Expedition from "./components/Details/Expedition.jsx";
import Methodesdepayement from "./components/Details/Methodesdepayement.jsx";
import Quisommesnous from "./components/Details/Quisommesnous.jsx";
import Tarifsdelivraison from "./components/Details/Tarifsdelivraison.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/singin",
    element: <Signine></Signine>,
  },
  {
    path: "/signUp",
    element: <SignUpe></SignUpe>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/product",
    element: <Product></Product>,
  },
  {
    path: "/productClient",
    element: <ProductClient></ProductClient>,
  },
  {
    path: "/ajouterproduit",
    element: <Ajouterproduit></Ajouterproduit>,
  },
  {
    path: "/modifierproduit/:id",
    element: <ModifierUnProduit></ModifierUnProduit>,
  },
  {
    path: "/product/:id",
    element: <ProductDetail></ProductDetail>,
  },
  {
    path: "/delivery",
    element: <Expedition></Expedition>,
  },
  {
    path: "/methodesdepayement",
    element: <Methodesdepayement></Methodesdepayement>,
  },
  {
    path: "/quisommesnous",
    element: <Quisommesnous></Quisommesnous>,
  },
  {
    path: "/Pricesdeliverytimes",
    element: <Tarifsdelivraison></Tarifsdelivraison>,
  },
  
  
 

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
