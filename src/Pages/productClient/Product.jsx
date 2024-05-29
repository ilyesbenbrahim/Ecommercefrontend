import NavBar from "../../components/NavBar";
import Topbar from "../../components/topbare/Topbar";
import Feature from "../../components/features/Feature";
import "./Product.css";
import imageproduct from "../../assets/imgnike.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from 'react-i18next';


const Product = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
    // console.log(products)
  }, []);

  const fetchProducts = () => {
    axios.get("https://ecommercebackend-service.onrender.com/api/products")
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
        <h1> {t('productClient:discoverCollection')} </h1>
        <p>{t('productClient:findQuality')}</p>

        <div className="grid-container-client">
          {products.map((product) => (
            <div key={product._id}>
              <a href={`/product/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  height={200}
                  width={200}
                />
              </a>
              <p>{product.title}</p>
              <p>{product.prixduproduit} : DA</p>
              <p>{t('productClient:quantityAvailable')} {product.quantitedisponible}</p>
            </div>
          ))}
        </div>
        <Feature></Feature>
      </div>
      
    </>
  );
};

export default Product;
