import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import pizzaType from "../Types/pizzaType";
import axios from "axios";

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

const fetchPizzas = createAsyncThunk("pizza/getPizzas", () => {
  axios.get("http://localhost:3030/").then((response) =>{
	return  response.data as initialStateType
  });
});

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
  extraReducers(builder) {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.pizzas = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.isLoading = false;
      state.pizzas = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const { addPizza } = pizzaSlice.actions;
export default pizzaSlice.reducer;
