import {createSlice} from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('lion_cart')) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({...action.payload, quantity: 1});
            }
            localStorage.setItem('lion_cart', JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            return state.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            );
        },
        clearCart: (state) => {
            return [];
        }
    }
});

export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;