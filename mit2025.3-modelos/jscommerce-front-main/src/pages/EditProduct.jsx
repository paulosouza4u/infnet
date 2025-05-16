import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    brand: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        const productData = response.data;
        setProduct({
          id: productData.id,
          name: productData.name || '',
          description: productData.description || '',
          price: productData.price || '',
          stock: productData.stock || '',
          category: productData.category || '',
          brand: productData.brand || ''
        });
        // Set the image preview with the complete URL
        setImagePreview(
          productData.image 
            ? `http://localhost:3000/uploads/${productData.image}`
            : ''
        );
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      // Append all product data to FormData
      formData.append('id', parseInt(id));
      formData.append('name', product.name);
      formData.append('description', product.description);
      formData.append('price', parseFloat(product.price));
      formData.append('stock', parseInt(product.stock));
      formData.append('category', product.category);
      formData.append('brand', product.brand);

      // Append image if there's a new one
      if (imageFile) {
        formData.append('image', imageFile);
      }

      await axios.put(`http://localhost:3000/products/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      navigate('/admin');
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="edit-product-container">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Brand"
          name="brand"
          value={product.brand}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
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
        <div className="form-actions">
          <button type="submit">Save Changes</button>
          <button 
            type="button" 
            onClick={() => navigate('/admin')} 
            className="cancel-button"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;