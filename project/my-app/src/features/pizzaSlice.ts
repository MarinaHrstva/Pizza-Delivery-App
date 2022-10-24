import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pizzaType } from "../components/Card/Card";

interface initialStateType{
	value: pizzaType[]
}

const initialState:initialStateType = {
	value: [
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
			state.value.push(action.payload);
		},
	},
});

export const { addPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
