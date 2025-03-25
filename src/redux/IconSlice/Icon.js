import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        icon: false,
    },
    reducers: {
        ChangeIcon: (state) => {
            state.icon = !state.icon;
        },
    },
});

export const { ChangeIcon } = appSlice.actions;
export default appSlice.reducer;