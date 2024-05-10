import NavBar from "../../components/NavBar";
import Topbar from "../../components/topbare/Topbar";
import "./Product.css";
import imageproduct from "../../assets/vetements-pour-enfants.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(products);

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
          {products.map((product) => (
            <div className="grid-item" key={product.id}>
              <img style={{ height: 450, width: 400 }} src={product.image} />
              <h1 style={{ fontSize: "20px" }}>{product.title}</h1>

              <p style={{ fontSize: "20px" }}> Price :{product.prixduproduit} DA</p>
              <p style={{ fontSize: "20px" }}>
                Available Quantity : {product.quantitedisponible}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
