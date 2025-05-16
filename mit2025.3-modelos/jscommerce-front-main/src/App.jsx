import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Admin from './pages/Admin';
import CreateProduct from './pages/CreateProduct';
import { useAuth } from "./context/AuthContext";
import EditProduct from './pages/EditProduct';
import './index.css';

function App() {
  const { token } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={token ? <Products /> : <Navigate to="/login" />} />
        <Route path="/products/:id" element={token ? <ProductDetail /> : <Navigate to="/login" />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create" element={<CreateProduct />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;