import React from "react";

import "./App.css";
import Cart from "./components/Cart/Cart";
import PizzaMenu from "./components/PizzaMenu/PizzaMenu";
import CreateProduct from "./components/CreateProduct/CreateProduct";

function App() {
	return (
		<div className="App">
			<PizzaMenu />
			<CreateProduct />
			<Cart />
		</div>
	);
}

export default App;
