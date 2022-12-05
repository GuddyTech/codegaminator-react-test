import React from 'react'

function Button() {
    return (
        <button>Search</button>
    )
}

export default Button

export function CustomButton({ onClick, children }) {
    return (
        <button onClick={onClick}> {children} </button>
    );
}

export function NavLink({path, children }) {
    return (
        <a href={path}> {children} </a>
    );
}