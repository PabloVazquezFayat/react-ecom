import React from 'react';
import Navbar from '../Navbar/Navbar'

export default function Cart(props) {

    // var names = [];
    // names[0] = prompt("New member name?");
    // localStorage.setItem("names", JSON.stringify(names));

    // //...
    // var storedNames = JSON.parse(localStorage.getItem("names"));

    const cart = props.cart;
    const setCart = props.setCart;

    console.log(cart, setCart)

    return (
        <div className="cart">
            <Navbar/>
        </div>
    )
}
