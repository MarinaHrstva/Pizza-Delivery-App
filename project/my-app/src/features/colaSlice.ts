import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addToTheCart } from "./cartSlice";

const initialState = {
    quantity: 50,
};


// let initialState=50;

export const colaSlice = createSlice({
    name: "cola",
    initialState,
    reducers: {
        buyCola: (state, action: PayloadAction<number>) => {
            state.quantity -= action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addToTheCart, (state, action) => {
            state.quantity--;
        });
    },
});

export const { buyCola } = colaSlice.actions;
export default colaSlice.reducer;
