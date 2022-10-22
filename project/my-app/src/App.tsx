import React from 'react';

import './App.css';
import AddPizza from './components/AddPizza/AddPizza';
import PizzaMenu from './components/PizzaMenu/PizzaMenu';

function App() {
	return (
		<div className="App">
			<PizzaMenu/>
			<AddPizza />
		</div>
	);
}

export default App;
