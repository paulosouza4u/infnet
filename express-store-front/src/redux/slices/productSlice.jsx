import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "../../services/apiProducts.jsx";

export const fetchProductsAsync = createAsyncThunk(
    'products',
    async (_, thunkAPI) => {
        try {
            const response = await fetchProducts();
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message); // Rejeita com a mensagem de erro
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        clearProducts: (state) => {
            state.items = [];
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                state.error = null;
            })
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.items = [];
            });
    }
});

export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;