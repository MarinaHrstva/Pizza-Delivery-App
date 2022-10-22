import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PizzaState {
  value: object[];
}

const initialState: PizzaState = {
  value: [
    { name: "Margarita", price: 12 },
    { name: "Peperoni", price: 15 },
    { name: "Cheeses", price: 14 },
  ],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    buyPizza: (state, action: PayloadAction<object>) => {
        state.value.push(action.payload)
    },
  },
});

export default pizzaSlice.reducer;
