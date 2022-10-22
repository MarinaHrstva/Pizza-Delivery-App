import { stringify } from 'querystring';
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';



function AddPizza() {

    const pizzas = useSelector((state: RootState) => state.pizza.value)

    const [newPizza, setNewPizza] = useState({ pizzaName: '', price: 0 });

    return (
        <div>
            <form >
                <label htmlFor="pizzaName" />
                <input type="text"
                    name='pizzaName'
                    value={newPizza.pizzaName}

                    // to ask about it!!!!!!!!!!!
                    // onChange={e=>setNewPizza(state=>...state, pizzaName: e.target.value:string)} 
                    />
                <label htmlFor="price" />
                <input type="number" name='price'/>
                <button>ADD</button>
            </form>
        </div>
    )
}

export default AddPizza;