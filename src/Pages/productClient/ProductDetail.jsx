import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      <h2>{title}</h2>
      <img src={image} alt="Product" />
      <p>Quantity Available: {quantiteDisponible}</p>
      <p>Price: ${prixDuProduit}</p>
      <p>Description: {description}</p>
      <p>Number of Products Sold: {nbrProductSelled}</p>
    </div>
  );
};

export default ProductDetail;
