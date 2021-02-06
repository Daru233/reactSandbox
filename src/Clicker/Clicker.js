import React, { useState, useEffect } from 'react';
import '../App.css';

const Clicker = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    
    // useEffect takes in a function 
    // useEffect is executed after EVERY render of the component

    // the second parameter for useEffect is an array, only if the state / props in the array change 
    // then effect is executed
    // count prop is in the array param of useEffect therefore - when count changes only then will the title change
    // check logs 

    // if you pass an empty array []
    // then effect will run once on the initial render only
    useEffect(() => {
        console.log('useEffect is updating document title')
        document.title = `You have clicked ${count} times!`
    }, [count])

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
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <h3>Click Me!</h3>
            <h3>Click Counter : {count} </h3>
            <button type="button" onClick={incrementHandler}> Increment </button>
            <button type="button" onClick={decrementHandler}> Decrement </button>
            <button type="button" onClick={resetHandler}> Reset </button>
            <h3>check the page title! - was done using useEffect hook</h3>
        </div>
    )
}

export default Clicker;
