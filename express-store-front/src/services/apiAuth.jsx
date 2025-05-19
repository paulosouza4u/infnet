import axios from "axios";

const apiAuth = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        Accept: "application/json",
        "Content-type": "application/json",
    }
});

export const fetchLogin = async (credentials) => {
    try {
        const response = await apiAuth.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error("Error user login.", error.message);
        throw error;
    }
};