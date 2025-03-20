import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getProductDetails = createAsyncThunk(
  "product/getProductDetails",
  async (id, thunkAPI) => { 
    try {
      const res = await apiClient.get(`/products/${id}`); 
      return res.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Failed to fetch product details");
    }
  }
);

const productsSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductDetails.fulfilled, (state, action) => {
        state.product = action.payload; 
        state.loading = false;
      })
      .addCase(getProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        
      });
  },
});

export default productsSlice.reducer;