import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { addPizza } from '../../features/pizzaSlice';


function AddPizza() {

    const dispach = useDispatch();
    const pizzas = useSelector((state: RootState) => state.pizza.value)

    const [newPizza, setNewPizza] = useState({ pizzaName: '', price: 0 });

    function addPizzaHandel(): void {
        dispach(addPizza(newPizza))
        setNewPizza({ pizzaName: '', price: 0 })
    }

    return (
        <div>
            <ul>
                {pizzas.map(p=>{
                    return <li key={p.pizzaName+p.price}>{p.pizzaName}</li>
                })}
            </ul>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="pizzaName" />
                <input type="text"
                    name='pizzaName'
                    value={newPizza.pizzaName}
                    onChange={(e) => {
                        setNewPizza(state => ({
                            ...state,
                            pizzaName: e.target.value
                        }))
                    }}
                />
                <label htmlFor="price" />
                <input type="number"
                    name='price'
                    onChange={(e) => {
                        setNewPizza(state => ({
                            ...state,
                            price: Number(e.target.value)
                        }))
                    }}
                />
                <button onClick={addPizzaHandel}>ADD</button>
            </form>
        </div>
    )
}

export default AddPizza;