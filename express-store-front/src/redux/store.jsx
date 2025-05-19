import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
        products: productsSlice,
    }
});