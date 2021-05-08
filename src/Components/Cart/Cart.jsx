import './Cart.css';
import React from 'react';
import Navbar from ".././Navbar/Navbar";

export default function Cart(props) {

    const cart = props.cart;

    const calculatedFinalTotal = (price, discounts)=> {

        if(!discounts){
            return price;
        }

        const discountAmounts = discounts.filter( discount => discount.offer.indexOf('-') !== -1)
            .map( discount => discount.offer.split('-')[1])    
            .reduce((a, b)=> parseInt(a) + parseInt(b));

        const discountPercentages = discounts.filter( discount => discount.offer.indexOf('%') !== -1)
            .map( discount => discount.offer.split('%')[0]);

        price -= discountAmounts || 0;

        discountPercentages.forEach( discount => {
            let discountInDollars = (price * discount) / 100;
            price -= discountInDollars;
        });

        console.log(price)

        return price;

    }

    const generatePriceString = (price)=> {
        return `$${price.toFixed(2)}`;
    }

    const createCartItems = ()=> {

        if(!cart){
            return <li className="cart-item">Cart is empty</li>
        }

        return cart.map((product, i)=> {
            return  <li key={i} id={product.id} className="cart-item">
                        <h5>{product.name}</h5>
                        <div className="cart-item-price">
                            {generatePriceString(product.price)}
                            {
                                product.discounts 
                                ? 
                                <ul>
                                    {product.discounts.map((discount, i) => <li key={i}>{`${discount.name}.......${discount.offer}${discount.offer.indexOf('%') === -1 ? '.00' : '' }`}</li>)}
                                </ul>
                                :
                                null
                            }
                            {
                                product.discounts 
                                ?
                                <div className="final-total">
                                    {`$${calculatedFinalTotal(product.price, product.discounts)}`}
                                </div>
                                :
                                null
                            }
                        </div>
                    </li>
        });

    }

    const getTotal = ()=> {

        if(cart.length === 0){
            return "0.00";
        }

        const prices = cart.map( product => calculatedFinalTotal(product.price, product.discounts));
        const total = prices.reduce( (a, b) => a + b);

        return total.toFixed(2);

    }

    return (
        <div className="cart">
            <Navbar/>
            <div className="cart-container">

                <div className="cart-items-container">
                    <ul>
                        {createCartItems()}
                    </ul>
                </div>

                <div className="cart-order">
                    <div>Total: ${getTotal()}</div>
                    <h2>Grand Total: ${getTotal()}</h2>
                </div>

            </div>

        </div>
    )
}
