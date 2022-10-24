import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removeFromTheCart } from "../../features/cartSlice";

const Cart = () => {
    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart.value);

    function removePizza(index: number) {
        dispatch(removeFromTheCart(index))

    }

    return (
        <ul>
            {cart.map((p, index) => {
                return <li onClick={()=>removePizza(index)}>{p.pizzaName}</li>;
            })}
        </ul>
    );
};

export default Cart;
