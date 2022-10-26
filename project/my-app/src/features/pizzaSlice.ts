import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import pizzaType from "../Types/pizzaType";

interface initialStateType {
	isLoading?: boolean;
	pizzas: pizzaType[];
	error?: string;
}

const initialState: initialStateType = {
	pizzas: [
		{ pizzaName: "Margarita", price: 12 },
		{ pizzaName: "Peperoni", price: 15 },
		{ pizzaName: "Cheeses", price: 14 },
	],
};

export const pizzaSlice = createSlice({
	name: "pizza",
	initialState,
	reducers: {
		addPizza: (
			state,
			action: PayloadAction<{ pizzaName: string; price: number }>
		) => {
			state.pizzas.push(action.payload);
		},
	},
});

export const { addPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
