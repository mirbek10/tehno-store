import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";


export const getProduct = createAsyncThunk(
  "product/getProduct",
  async ({cotegory, search}, thunkAPI) => {
    try {
      let url = '/products';
      if (cotegory) {
        url += `/category/${cotegory}`;
      }
      else if (search) {
        url += `/search?q=${search}`;
      }
      const res = await apiClient.get(url);
      return res.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'not found');
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
    cotegory: '',
    search : ''
  },
  reducers: {
    setCotegory(state, action) {
      state.cotegory = action.payload;
      state.search = '';
    },
    setSearch(state, action) {
      state.search = action.payload;
      state.cotegory = '';
    },

  },
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
export const { setCotegory, setSearch } = productsSlice.actions;
