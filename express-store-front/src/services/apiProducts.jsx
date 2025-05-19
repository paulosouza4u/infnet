import axios from "axios";

const apiProducts = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    }
});

export const fetchProducts = async () => {
    try {
        const response = await apiProducts.get('/products');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os produtos.", error.message);
        throw error;
    }
};

// Adicionar um interceptor de requisição à instância apiShop
apiProducts.interceptors.request.use(
    config => {
        const token = localStorage.getItem('lion_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export const deleteProduct = async (productId) => {
    try {
        const response = await apiProducts.delete(`/admin/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error(`Erro ao deletar o produto com ID ${productId}.`, error.message);
        throw error;
    }
};