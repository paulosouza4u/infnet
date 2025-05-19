import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchLogin} from "../../services/apiAuth.jsx";

const tokenFromStorage = localStorage.getItem('lion_token');
const usernameFromStorage = localStorage.getItem('lion_username'); // TODO Revisar (Burlável alterar username no storage)

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
        username: usernameFromStorage ? usernameFromStorage : null,
        status:'idle',
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.username = null;
            localStorage.removeItem('lion_token');
            localStorage.removeItem('lion_username');
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
                state.username = action.payload?.username || null;

                if (state.token) {
                    localStorage.setItem('lion_token', state.token);
                    localStorage.setItem('lion_username', state.username);
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
