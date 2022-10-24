import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import pizzaReducer from '../features/pizzaSlice'

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        cart: cartReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
