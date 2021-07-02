import React from 'react';
import { useState } from 'react';
import './App.css';

function Button ()  {
    const [count, setCount] = useState(0);

    function buttonClicked () {
        setCount(count+1);
        console.log(count);
    }
    return (
    <button onClick={buttonClicked} className="Button">Click me!</button>
    )
};

export default Button;