import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { addPizza } from '../../features/pizzaSlice';
import  Card from '../Card/Card';



function PizzaMenu() {

    const dispatch = useDispatch();
    const pizzas = useSelector((state: RootState) => state.pizza.value)

    const [newPizza, setNewPizza] = useState({ pizzaName: '', price: 0 });

    function addPizzaHandler(): void {
        if(newPizza.pizzaName==='' || newPizza.price===0) return;

        dispatch(addPizza(newPizza))
        setNewPizza({ pizzaName: '', price: 0 })
    }

    return (
        <div>
            <ul>
                {pizzas.map(p=>{
                    return <Card key={p.pizzaName+p.price} pizzaName={p.pizzaName} price={p.price}/>
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
                <button onClick={addPizzaHandler}>ADD</button>
            </form>
        </div>
    )
}

export default PizzaMenu;