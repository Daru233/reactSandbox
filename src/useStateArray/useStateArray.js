import React, { useState } from 'react'
import '../App.css'

const UseStateArray = () => {

    // passing empty array into useState
    const[items, setItems] = useState([])

    // as per last the setter function does not merge and update object / list
    // use spread operator
    // pass the value to set for the items array
    const addItem = () => {
        setItems([...items, {
            id: items.length, 
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    // If the new state depends on the previous state value, you must pass a function to the 
    // setter function -> will receive the previous state as its args

    // When dealing with obj / arrays, spread state variables then call the setter function 
    // to get expected behaviiour

    return (
        <div className="useState-with-array-container">
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                <li key={item.id}> {item.value} </li>
                ))}
            </ul>
        </div>
    )
}

export default UseStateArray
