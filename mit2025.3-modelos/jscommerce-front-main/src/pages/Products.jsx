// src/pages/Products.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Products() {
  const { token } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, [token]);

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name || `Produto ${p.id}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;