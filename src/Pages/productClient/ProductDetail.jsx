import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ProductDetail = () => {
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [quantiteDisponible, setQuantiteDisponible] = useState(0);
    const [prixDuProduit, setPrixDuProduit] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(response => response.json())
            .then(data => {
                // Handle the fetched data here
                console.log(data);
                setTitle(data.title);
                setImage(data.image);
                setQuantiteDisponible(data.quantitedisponible);
                setPrixDuProduit(data.prixduproduit);
            })
            .catch(error => {
                // Handle any errors here
            });
    }, [id]);
    return (
        <div>
            <h2>{title}</h2>
            <img src={image}  alt="Product" />
            <p>Quantity Available: {quantiteDisponible}</p>
            <p>Price: ${prixDuProduit}</p>
        </div>
    );
};

export default ProductDetail;