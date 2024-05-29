import "./Ajouterproduit.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [prixduproduit, setPrixDuProduit] = useState("");
  const [quantitedisponible, setQuantiteDisponible] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [nbrProductSelled, setNbrProductSelled] = useState(0);

  useEffect(() => {
    // Fetch the current product details
    axios
      .get(`https://ecommercebackend-service.onrender.com/api/products/${id}`)
      .then((res) => {
        const product = res.data;
        setTitle(product.title);
        setPrixDuProduit(product.prixduproduit);
        setQuantiteDisponible(product.quantitedisponible);
        setImageUrl(product.image); // Set the existing image URL
        setDescription(product.description);
        setNbrProductSelled(product.nbrProductSelled);
      })
      .catch((err) => console.error("Error fetching product details:", err));
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let updatedProduct = {
      title,
      prixduproduit,
      quantitedisponible,
      description,
      nbrProductSelled,
    };

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      try {
        // Step 1: Upload the image
        const uploadResponse = await axios.post(
          "https://ecommercebackend-service.onrender.com/api/products/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        updatedProduct.image = uploadResponse.data.url; // Assuming the server returns the URL in this format
      } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload image. Please try again.");
        return;
      }
    } else {
      updatedProduct.image = imageUrl; // Use the existing image URL if no new image is uploaded
    }

    try {
      // Step 2: Update the product
      await axios.put(
        `https://ecommercebackend-service.onrender.com/api/products/${id}`,
        updatedProduct
      );
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="container">
      <h1>Update Product</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="title">Product Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="prixduproduit">Product Price:</label>
        <br />
        <input
          type="number"
          id="prixduproduit"
          name="prixduproduit"
          min="0"
          step="0.01"
          value={prixduproduit}
          onChange={(e) => setPrixDuProduit(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="quantitedisponible">Quantity Available:</label>
        <br />
        <input
          type="number"
          id="quantitedisponible"
          name="quantitedisponible"
          min="0"
          value={quantitedisponible}
          onChange={(e) => setQuantiteDisponible(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="description">Product Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="nbrProductSelled">Number of Products Sold:</label>
        <br />
        <input
          type="number"
          id="nbrProductSelled"
          name="nbrProductSelled"
          min="0"
          value={nbrProductSelled}
          onChange={(e) => setNbrProductSelled(e.target.value)}
          required
        />
        <br />
        <br />
        <label htmlFor="image">Product Image:</label>
        <br />
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <br />
        <br />
        {imageUrl && <img src={imageUrl} alt="Current product" height={100} />}
        <br />
        <br />

        <input type="submit" value="Update Product" />
      </form>
    </div>
  );
};

export default UpdateProduit;
