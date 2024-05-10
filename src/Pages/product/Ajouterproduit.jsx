import './Ajouterproduit.css';
import { useState } from 'react';
import axios from 'axios';

const AjouterUnProduit = () => {
  const [title, settitle] = useState('');
  const [prixduproduit, setprixduproduit] = useState('');
  const [quantitedisponible, setquantitedisponible] = useState('');
  const [image, setImage] = useState(null);
  console.log(image)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('prixduproduit', prixduproduit);
      formData.append('quantitedisponible', quantitedisponible);
      formData.append('image', image);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      };
      // console.log(image)

      const response = await axios.post('http://localhost:5000/api/products', formData, config);
      alert('Produit ajouté avec succès: ' + response.data);
    } catch (error) {
      alert(JSON.stringify(error.message));
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="container">
    <h1>Add a product</h1>
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="title">Product Title:</label><br />
      <input type="text" id="title" name="title" value={title} onChange={(e) => settitle(e.target.value)} required /><br /><br />

      <label htmlFor="prixduproduit">Product Price:</label><br />
      <input type="number" id="prixduproduit" name="prixduproduit" min="0" step="0.01" value={prixduproduit} onChange={(e) => setprixduproduit(e.target.value)} required /><br /><br />

      <label htmlFor="quantitedisponible">Available Quantity:</label><br />
      <input type="number" id="quantitedisponible" name="quantitedisponible" min="0" value={quantitedisponible} onChange={(e) => setquantitedisponible(e.target.value)} required /><br /><br />

      <label htmlFor="image">Product Image:</label><br />
      <input type="file" id="image" name="image" onChange={handleImageChange} />
      <br /><br />
      <input type="submit" value="Add Product" />
    </form>
  </div>
  );
};

export default AjouterUnProduit;


