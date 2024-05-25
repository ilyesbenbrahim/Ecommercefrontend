

import './Ajouterproduit.css';
import { useState } from 'react';
import axios from 'axios';

const AjouterUnProduit = () => {
  const [title, setTitle] = useState('');
  const [prixduproduit, setPrixDuProduit] = useState('');
  const [quantitedisponible, setQuantiteDisponible] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [nbrProductSelled, setNbrProductSelled] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert('Please upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      // Step 1: Upload the image
      const uploadResponse = await axios.post('http://localhost:5000/api/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log("uploadResponse")
      console.log(uploadResponse)
      // Step 2: Create a new product with the image URL
      const newProduct = {
        title,
        prixduproduit,
        quantitedisponible,
        image: uploadResponse.data.url,
        description,
        nbrProductSelled
      };

      await axios.post('http://localhost:5000/api/products', newProduct);
      alert('Product added successfully!');
      
      // Clear the form (optional)
      setTitle('');
      setPrixDuProduit('');
      setQuantiteDisponible('');
      setImage(null);

    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="container">
      <h1>Ajouter un produit</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Titre du produit :</label><br />
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />
        
        <label htmlFor="prixduproduit">Prix du produit :</label><br />
        <input type="number" id="prixduproduit" name="prixduproduit" min="0" step="0.01" value={prixduproduit} onChange={(e) => setPrixDuProduit(e.target.value)} required /><br /><br />
        
        <label htmlFor="quantitedisponible">Quantité disponible :</label><br />
        <input type="number" id="quantitedisponible" name="quantitedisponible" min="0" value={quantitedisponible} onChange={(e) => setQuantiteDisponible(e.target.value)} required /><br /><br />
        
        <label htmlFor="image">Image du produit :</label><br />
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} /><br /><br />
        <label htmlFor="description">Description :</label><br />
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea><br /><br />

        <label htmlFor="nbrProductSelled">Nombre de produits vendus :</label><br />
        <input type="number" id="nbrProductSelled" name="nbrProductSelled" min="0" value={nbrProductSelled} onChange={(e) => setNbrProductSelled(e.target.value)} required /><br /><br />
        <input type="submit" value="Ajouter le produit" />
      </form>
    </div>
  );
};

export default AjouterUnProduit;
