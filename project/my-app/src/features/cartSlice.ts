import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import pizzaType from "../Types/pizzaType";


interface initialStateType {
	value: pizzaType[];
}

const initialState: initialStateType = {
	value: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToTheCart: (
			state,
			action: PayloadAction<{ pizzaName: string; price: number }>
		) => {
			state.value.push(action.payload);
		},
		removeFromTheCart: (state, action: PayloadAction<number>) => {
			state.value.splice(action.payload, 1);
		},

	},
});

export const { addToTheCart, removeFromTheCart } = cartSlice.actions;
export default cartSlice.reducer;
