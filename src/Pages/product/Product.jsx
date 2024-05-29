import NavBar from "../../components/NavBar";
import Topbar from "../../components/topbare/Topbar";
import "./Product.css";
import imageproduct from "../../assets/imgnike.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, [products]);

  const fetchProducts = () => {
    axios
      .get("https://ecommercebackend-service.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  };

  const deleteProduct = (id) => {
    axios
      .delete(
        `https://ecommercebackend-service.onrender.com/api/products/${id}`
      )
      .then(() => {
        alert("Product deleted successfully");
        // Refresh the product list by filtering out the deleted product
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
        alert("Failed to delete product");
      });
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
        <p>
          Find Quality clothing for children, men and women. Our collection is
          suitable for all styles and occasions.
        </p>

        <div className="grid-container">
          {products.map((product) => (
            <>
              <p>{product.title}</p>
              <p>{product.prixduproduit}</p>
              <p>{product.quantitedisponible}</p>
              <img src={product.image} height={200} width={200} />
              <button onClick={() => deleteProduct(product._id)}>delete</button>

              <Link to={`/modifierproduit/${product._id}`}>
                <button>modifier</button>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
