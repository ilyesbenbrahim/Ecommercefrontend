import './Ajouterproduit.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [prixduproduit, setPrixDuProduit] = useState('');
  const [quantitedisponible, setQuantiteDisponible] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    // Fetch the current product details
    axios.get(`http://localhost:5000/api/products/${'66468390d4b832b9e2bc7466'}`)
      .then((res) => {
        const product = res.data;
        setTitle(product.title);
        setPrixDuProduit(product.prixduproduit);
        setQuantiteDisponible(product.quantitedisponible);
        setImageUrl(product.image);  // Set the existing image URL
      })
      .catch((err) => console.error('Error fetching product details:', err));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let updatedProduct = {
      title,
      prixduproduit,
      quantitedisponible
    };

    if (image) {
      const formData = new FormData();
      formData.append('image', image);

      try {
        // Step 1: Upload the image
        const uploadResponse = await axios.post('http://localhost:5000/api/products/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        updatedProduct.image = uploadResponse.data.url;  // Assuming the server returns the URL in this format
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('Failed to upload image. Please try again.');
        return;
      }
    } else {
      updatedProduct.image = imageUrl;  // Use the existing image URL if no new image is uploaded
    }

    try {
      // Step 2: Update the product
      await axios.put(`http://localhost:5000/api/products/${'66468390d4b832b9e2bc7466'}`, updatedProduct);
      alert('Product updated successfully!');
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Failed to update product. Please try again.');
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="container">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Product Title:</label><br />
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br /><br />

        <label htmlFor="prixduproduit">Product Price:</label><br />
        <input type="number" id="prixduproduit" name="prixduproduit" min="0" step="0.01" value={prixduproduit} onChange={(e) => setPrixDuProduit(e.target.value)} required /><br /><br />

        <label htmlFor="quantitedisponible">Quantity Available:</label><br />
        <input type="number" id="quantitedisponible" name="quantitedisponible" min="0" value={quantitedisponible} onChange={(e) => setQuantiteDisponible(e.target.value)} required /><br /><br />

        <label htmlFor="image">Product Image:</label><br />
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} /><br /><br />
        {imageUrl && <img src={imageUrl} alt="Current product" height={100} />}<br /><br />

        <input type="submit" value="Update Product" />
      </form>
    </div>
  );
};

export default UpdateProduit;
