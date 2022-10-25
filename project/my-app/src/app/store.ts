import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import colaReducer from "../features/colaSlice";
import pizzaReducer from '../features/pizzaSlice'

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        cart: cartReducer,
        cola: colaReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = typeof store.dispatch;
