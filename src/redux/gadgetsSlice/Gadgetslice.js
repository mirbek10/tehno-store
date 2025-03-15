import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../axios/apiClient";

export const getGadgets = createAsyncThunk(
    "gadget/getGadgets",  
    async (_, thunkAPI) => {
        try {
            const res = await apiClient.get('/products');
            // console.log(res.data.products);
            return res.data.products;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const gadgetSlice = createSlice({
    name: "gadgets", 
    initialState: {
        gadgets: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getGadgets.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getGadgets.fulfilled, (state, action) => {
                state.gadgets = Array.isArray(action.payload) ? action.payload : []; 
                state.loading = false;
            })
            .addCase(getGadgets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default gadgetSlice.reducer;

