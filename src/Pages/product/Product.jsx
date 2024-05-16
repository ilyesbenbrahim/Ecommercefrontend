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
    console.log(products)
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.error('Error fetching products:', err));
  };

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        alert('Product deleted successfully');
        // Refresh the product list by filtering out the deleted product
        setProducts(products.filter(product => product._id !== id));
      })
      .catch(err => {
        console.error('Error deleting product:', err);
        alert('Failed to delete product');
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
        <button onClick={()=>deleteProduct(product._id)}>delete</button>

        
        </>
        ))}
        
      </div>
    </div>
  </>
  );
};

export default Product;
