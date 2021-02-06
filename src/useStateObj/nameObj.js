import React, { useState } from 'react'
import '../App.css'

const NameObj = () => {

    const [name, setName] = useState({firstName: '', lastName: ''})
    
    return (
        <div className="name-container">
            <h2>Type your name here !</h2>

            {
                /*
                setter function provided by the useState hook does NOT automatically 
                merge and update objects !!
                onChange{e => setName({firstName: e.target.value })} would not work as intended

                copy every property in the name object and overwrite firstName field with target value
                onChange={e => setName({ ...name, lastName: e.target.value })}></input>

                copy every property in the name object and overwrite lastName field with a target value
                onChange={e => setName({ ...name, lastName: e.target.value })}></input>

                uses the spread operator ... ( feature of es6 )
                */
            }
            <input value={name.firstName} 
            onChange={e => setName({ ...name, firstName: e.target.value })}></input>

            <input value={name.lastName} 
            onChange={e => setName({ ...name, lastName: e.target.value })}></input>

            <h3>Your name is {name.firstName} {name.lastName}</h3>
            <h3>Current Obejct State: {JSON.stringify(name)}</h3>

        </div>
    )
}

export default NameObj
