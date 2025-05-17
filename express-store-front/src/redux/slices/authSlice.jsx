import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchLogin} from "../../services/apiAuth.jsx";

const tokenFromStorage = localStorage.getItem('lion_token');

export const loginsAsync = createAsyncThunk(
    'auth/login',
    async ({username,password}, thunkAPI) => {
        try {
            const response = await fetchLogin({username, password});
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: tokenFromStorage ? tokenFromStorage : null,
        status:'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('lion_token');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginsAsync.pending, (state) => {
                state.status = 'loading';
                state.error= null;
            })
            .addCase(loginsAsync.fulfilled, (state, action) => {
                state.status = 'succeded';
                state.token = action.payload?.token || null;

                if (state.token) {
                    localStorage.setItem('lion_token', state.token);
                } else {
                    state.error = "Token not received";
                }
            })
            .addCase(loginsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
