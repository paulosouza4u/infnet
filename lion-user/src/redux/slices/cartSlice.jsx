import {createSlice} from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('lion_cart')) || [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { payload } = action;
            const existingItem = state.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                existingItem.totalPrice = parseFloat((existingItem.quantity * existingItem.price).toFixed(2));
            } else {
                const newItem = {
                    ...payload,
                    quantity: 1,
                    totalPrice: payload.price ? parseFloat(payload.price.toFixed(2)) : 0,
                };
                state.push(newItem);
            }
            localStorage.setItem('lion_cart', JSON.stringify(state));
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            return state.map((item) => {
                //item.id === id ? { ...item, quantity: quantity } : item
                if (item.id === id) {
                    const price = parseFloat(item.price);
                    if (!isNaN(price)) {
                        const quantityDifference = quantity - item.quantity;
                        const priceChange = price * quantityDifference;
                        const newTotalPrice = (item.totalPrice || price * item.quantity) + priceChange;
                        return {
                            ...item,
                            quantity: quantity,
                            totalPrice: parseFloat(newTotalPrice.toFixed(2)),
                        };
                    } else {
                        console.warn(`O preço do item com ID ${id} não é um número válido.`);
                        return { ...item, quantity: quantity };
                    }
                }
                return item;
            });
        },
        clearCart: (state) => {
            return [];
        }
    }
});

export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;