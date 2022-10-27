import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import Card from "../Card/Card";

function PizzaMenu() {
  const pizzas = useSelector((state: RootState) => state.pizza.pizzas);

  return (
    <div>
      <ul>
        {pizzas.map((p) => {
          return (
            <Card
              key={p.pizzaName + p.price}
              pizzaName={p.pizzaName}
              price={p.price}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default PizzaMenu;
