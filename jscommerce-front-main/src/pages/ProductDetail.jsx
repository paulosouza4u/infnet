// src/pages/ProductDetail.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProductDetail() {
  const { id } = useParams();
  const { token } = useAuth();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Erro ao buscar produto:", err));
  }, [id, token]);

  if (!product) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img
        src={`http://localhost:3000/uploads/${product.image}`}
        alt={product.name}
        style={{ maxWidth: '300px' }}
      />
      <p>{product.description}</p>
      <p>Preço: R$ {product.price}</p>
      <p>Estoque: {product.stock}</p>
      <p>Categoria: {product.category}</p>
      <p>Marca: {product.brand}</p>
    </div>
  );  
}

export default ProductDetail;