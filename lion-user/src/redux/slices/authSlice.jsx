import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchLogin} from "../../services/apiAuth.jsx";

export const loginsAsync = createAsyncThunk(
    'auth/login',
    async ({username,password}, thunkAPI) => {
        try {
            const response = await fetchLogin({username, password});
            console.log(response);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {

    }
});

export default authSlice.reducer;