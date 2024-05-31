import "./ProductDetail.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../../components/topbare/Topbar";
import NavBar from "../../components/NavBar";
import Feature from "../../components/features/Feature";
const ProductDetail = () => {
  const { id } = useParams();
  const [description, setDescription] = useState("");
  const [nbrProductSelled, setNbrProductSelled] = useState(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [quantiteDisponible, setQuantiteDisponible] = useState(0);
  const [prixDuProduit, setPrixDuProduit] = useState(0);
  useEffect(() => {
    fetch(`https://ecommercebackend-service.onrender.com/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setNbrProductSelled(data.nbrProductSelled);
        setImage(data.image);
        setQuantiteDisponible(data.quantitedisponible);
        setPrixDuProduit(data.prixduproduit);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
  <>
   <Topbar></Topbar>
        <NavBar></NavBar>

    <div className="product-detail-container">
      
      <img src={image} alt="Product" className="product-image" />
    <div className="product-detail-for">
      <h2>{title}</h2>
      <p className="product-quantity">
      <p className="product-description">Description: {description}</p>

        Quantity Available: {quantiteDisponible}
      </p>
      <p className="product-price">Price: ${prixDuProduit}</p>
      <p className="product-sold">
        Number of Products Sold: {nbrProductSelled}
      </p>
      </div>

    </div>
    <Feature></Feature>

    </>
  );
};

export default ProductDetail;
