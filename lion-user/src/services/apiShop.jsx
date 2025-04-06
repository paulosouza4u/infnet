import axios from "axios";

const apiShop = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    }
});

export const fetchProducts = async () => {
    try {
        const response = await apiShop.get('/products');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar os produtos.", error.message);
        throw error;
    }
};