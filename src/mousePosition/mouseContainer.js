import React, { useState, useEffect } from 'react';
import MousePosition from './mousePosition';

const MouseContainer = () => {

    const [display, setDisplay] = useState(true)

    return (
        <div className="mouse-container-container">
            <button onClick={() => setDisplay(!display)}>Toggle Display!</button>
            {display && <MousePosition/>}
        </div>
    )
}

export default MouseContainer
