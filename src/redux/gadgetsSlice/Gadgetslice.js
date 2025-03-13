import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "https://67d015f4823da0212a848a3b.mockapi.io/Gadgets";

export const getGadgets = createAsyncThunk(
    "gadget/getGadgets",  
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(API);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const gadgetSlice = createSlice({
    name: "gadget", 
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
