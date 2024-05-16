import NavBar from "../../components/NavBar";
import Topbar from "../../components/topbare/Topbar";
import "./Product.css";
import imageproduct from "../../assets/imgnike.jpg";
// import tttt from "../../assets/imgproduct.jpg";
// import imageun from "../../assets/imageun.jpg";
// import imagedeux from "../../assets/imdedeux.jpg";
// import imagetatrios from "../../assets/imget.jpg";
// import imagequatre from "../../assets/imgequatre.jpg";
// import imagecinq from "../../assets/imagecinq.jpg";
// import imagesix from "../../assets/imagesix.jpg";
// import imagesept from "../../assets/imgesept.jpg";
// import imagehuit from "../../assets/imgehuit.jpg";
// import axios from 'axios'

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((res) => {
      setProducts(res.data);
    }).catch((err)=>console.log(err))
  }, []);
  console.log(products)
  return (
    <>
      <div>
        <Topbar></Topbar>
        <NavBar></NavBar>
        <img
          className="image-product"
          src={imageproduct}
          alt="Description of the logo"
        />
        <h1>display: grid</h1>
        <p>Use display: grid; to make a block-level grid container:</p>

        <div className="grid-container">
          {products.map((product)=>(
          <>
          <p>{product.title}</p>
          <p>{product.prixduproduit}</p>
          <p>{product.quantitedisponible}</p>
          <img
                src={product.image}
                height={200}
                width={200}
              />

          
          </>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Product;
