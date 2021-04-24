import React from 'react';
import { NavLink } from 'react-router-dom';

export default function index() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
            </ul>
        </div>
    )
}
