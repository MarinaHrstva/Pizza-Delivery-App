import React from "react";

import "./App.css";
import Cart from "./components/Cart/Cart";
import PizzaMenu from "./components/PizzaMenu/PizzaMenu";

function App() {
  return (
    <div className="App">
      <PizzaMenu />
	  <Cart/>
    </div>
  );
}

export default App;
