import './Ajouterproduit.css';
import  { useState } from 'react';
import axios from 'axios';

const AjouterUnProduit = () => {
  const [title, settitle] = useState('');
  const [prixduproduit, setprixduproduit] = useState('');
  const [quantitedisponible, setquantitedisponible] = useState('');
  // const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      const config = {
          headers: {
              'Content-Type': 'application/json'
          }
      };
      const body = JSON.stringify({ title, prixduproduit, quantitedisponible });
      console.log(body)
      const response = await axios.post('http://localhost:5000/api/products', body, config);
      alert('Produit ajouté avec succès: ' + response.data); // Correction de la syntaxe pour afficher la réponse
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  };

  const handleImageChange = (event) => {
    // setImage(event.target.files[0]);
  };

  return (
    <div className="container"> 
      <h1>Ajouter un produit</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data"> {/* Correction de la gestion de la soumission du formulaire */}
        <label htmlFor="title">title du produit :</label><br />
        <input type="text" id="title" name="title" value={title} onChange={(e) => settitle(e.target.value)} required /><br /><br />
        
        <label htmlFor="prixduproduit">prixduproduit du produit :</label><br />
        <input type="number" id="prixduproduit" name="prixduproduit" min="0" step="0.01" value={prixduproduit} onChange={(e) => setprixduproduit(e.target.value)} required /><br /><br />
        
        <label htmlFor="quantitedisponible">Quantité disponible :</label><br />
        <input type="number" id="quantitedisponible" name="quantitedisponible" min="0" value={quantitedisponible} onChange={(e) => setquantitedisponible(e.target.value)} required /><br /><br />
        
        <label htmlFor="image">Image du produit :</label><br />
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange}  /><br /><br />
        
        <input type="submit" value="Ajouter le produit" />
      </form>
    </div>
  );
};

export default AjouterUnProduit;
