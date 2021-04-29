import React from 'react';
import Navbar from '../Navbar/Navbar'

export default function Cart(props) {

    const cart = props.cart;
    const setCart = props.setCart;

    console.log(cart, setCart)

    return (
        <div className="cart">
            <Navbar/>
        </div>
    )
}
