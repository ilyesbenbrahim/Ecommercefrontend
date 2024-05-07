import NavBar from "../../components/NavBar";
import Topbar from "../../components/topbare/Topbar";
import "./Product.css";
import imageproduct from "../../assets/imgnike.jpg";
import tttt from "../../assets/imgproduct.jpg";
import imageun from "../../assets/imageun.jpg";
import imagedeux from "../../assets/imdedeux.jpg";
import imagetatrios from "../../assets/imget.jpg";
import imagequatre from "../../assets/imgequatre.jpg";
import imagecinq from "../../assets/imagecinq.jpg";
import imagesix from "../../assets/imagesix.jpg";
import imagesept from "../../assets/imgesept.jpg";
import imagehuit from "../../assets/imgehuit.jpg";
// import axios from 'axios'

import { useEffect } from "react";
const Product = () => {
  useEffect(() => {}, []);
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
          <img className="grid-item" src={tttt} />
          <img className="grid-item" src={imageun} />
          <img className="grid-item" src={imagedeux} />
          <img className="grid-item" src={imagetatrios} />
          <img className="grid-item" src={imagequatre} />
          <img className="grid-item" src={imagecinq} />
          <img className="grid-item" src={imagesix} />
          <img className="grid-item" src={imagesept} />
          <img className="grid-item" src={imagehuit} />
        </div>
      </div>
    </>
  );
};

export default Product;
