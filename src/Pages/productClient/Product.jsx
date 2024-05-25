import NavBar from "../../components/NavBar";
import Topbar from "../../components/topbare/Topbar";
import "./Product.css";
import imageproduct from "../../assets/imgnike.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    // console.log(products)
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error('Error fetching products:', err));
  };

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
        <h1>Discover our clothing collection</h1>
        <p>Find Quality clothing for children, men and women. Our collection is suitable for all styles and occasions.</p>

        <div className="grid-container-client">
          {products.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.title}
                height={200}
                width={200}
              />
              <p>{product.title}</p>
              <p>{product.prixduproduit} : DA</p>
              <p>Quantity available : {product.quantitedisponible}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
