import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiClient } from "../../axios/apiClient";


export const getProduct = createAsyncThunk(
    "product/getProduct",  
    async (cotegory, thunkAPI) => {
        try {
            const res = await apiClient.get(`/products/category/${cotegory}`);
            return res.data.products;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message  || 'not found');
        }
    }
);

const productsSlice = createSlice({
    name: "products", 
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.products = Array.isArray(action.payload) ? action.payload : []; 
                state.loading = false;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default productsSlice.reducer;
