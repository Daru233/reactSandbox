import React, { useState } from 'react';
import '../App.css';

const Clicker = () => {

    const [count, setCount] = useState(0);
    

    // When you have to update state based on previous state value
    // pass a function into the state setter
    // setState(oldState => oldState + newState)
    const incrementHandler = () => {
        setCount(previousCount => previousCount + 1)
    }

    const decrementHandler = () => {
        setCount(previousCount => previousCount - 1)
    }

    const resetHandler = () => {
        setCount(previousCount => previousCount = 0)
    }

    return(
        <div className="clicker-container">
            <h3>Click Me!</h3>
            <h3>Click Counter : {count} </h3>
            <button type="button" onClick={incrementHandler}> Increment </button>
            <button type="button" onClick={decrementHandler}> Decrement </button>
            <button type="button" onClick={resetHandler}> Reset </button>
        </div>
    )
}

export default Clicker;
