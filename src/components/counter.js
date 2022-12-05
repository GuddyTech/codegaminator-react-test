import React, { useState } from 'react'
import { CustomButton, NavLink } from './Button';

function Counter() {
    const [state, setState] = useState("Duff");
    const [count, setCount] = useState(143);

    function changeName() {
        setState("Praise");
    }

    function increaseValue() {
        setCount(count + 1)
    }

    function decreaseValue() {
        setCount(count -1)
    }

    return (
        <div>
            <h1> Counter App </h1>
            <p> {state} </p>
            <button onClick={changeName}> Change Name </button>

            <h1>{count}</h1>
            <button onClick={increaseValue}> Increment </button>
            <button onClick={decreaseValue}> Decrement </button>
            <CustomButton onClick={increaseValue}> Increment </CustomButton>
            <CustomButton onClick={decreaseValue}> Decrement </CustomButton>
            <NavLink path="https://google.com"> Home </NavLink>
        </div>
    )
}

export default Counter