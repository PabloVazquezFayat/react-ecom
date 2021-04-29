import './Navbar.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>Cart</NavLink>
                </li>
            </ul>
        </div>
    )
}
