import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    brand: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct({ ...product, image: file });
      // Create preview URL for the image
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      // Append all product data to FormData
      Object.keys(product).forEach(key => {
        if (key === 'image') {
          if (product.image) {
            formData.append('image', product.image);
          }
        } else {
          formData.append(key, product[key]);
        }
      });

      await axios.post('http://localhost:3000/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/admin');
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <div className="create-product-container">
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          placeholder="Product ID"
          value={product.id}
          onChange={(e) => setProduct({ ...product, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          value={product.stock}
          onChange={(e) => setProduct({ ...product, stock: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Brand"
          value={product.brand}
          onChange={(e) => setProduct({ ...product, brand: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          required
        />
        <div className="image-upload-container">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image-input"
          />
          {imagePreview && (
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="image-preview"
            />
          )}
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;