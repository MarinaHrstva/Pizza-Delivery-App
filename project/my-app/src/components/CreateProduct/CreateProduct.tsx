import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../../features/pizzaSlice";

function PizzaMenu() {
  const dispatch = useDispatch();

  const [newPizza, setNewPizza] = useState({ pizzaName: "", price: 0 });

  function addPizzaHandler(): void {
    if (newPizza.pizzaName === "" || newPizza.price === 0) return;

    dispatch(addPizza(newPizza));
    setNewPizza({ pizzaName: "", price: 0 });
  }


  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="pizzaName">Pizza Name</label>
          <input
            type="text"
            name="pizzaName"
            value={newPizza.pizzaName}
            onChange={(e) => {
              setNewPizza((state) => ({
                ...state,
                pizzaName: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => {
              setNewPizza((state) => ({
                ...state,
                price: Number(e.target.value),
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            type="text"
            name="imgUrl"
            onChange={(e) => {
              setNewPizza((state) => ({
                ...state,
                imgUrl: Number(e.target.value),
              }));
            }}
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            onChange={(e) => {
              setNewPizza((state) => ({
                ...state,
                desc: Number(e.target.value),
              }));
            }}
          />
        </div>
        <button onClick={addPizzaHandler}>ADD</button>
      </form>
    </div>
  );
}

export default PizzaMenu;
