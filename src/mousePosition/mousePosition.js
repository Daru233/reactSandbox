import React, { useState, useEffect } from 'react'
import '../App.css'

const MousePosition = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    // empty array is passed
    // this effect is called ONLY on INITIAL render
    // mimics componentDidMount()
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        // when you want to execute component clean up code, include it in the function passed to useEffect
        // return the function from the function passed into useEffect
        // clean up code can be cancelling subscriptions, timers or removing event handlers
        return () => {
            console.log('Component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div className="mouse-position-container"> 
            <h2>Your mouse position: X: {x}, Y: {y}</h2>
        </div>
    )
}

export default MousePosition
