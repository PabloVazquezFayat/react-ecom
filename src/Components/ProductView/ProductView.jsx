import React from 'react';
import Navbar from '../Navbar/Navbar'

export default function ProductView(props) {

    const products = props.products;
    const cart = props.cart;
    const setCart = props.setCart;

    const productNotInCart = (id)=> {

        const productInCart = cart.find( product => product.id === parseInt(id) );

        if(productInCart === undefined){
            return true;
        }

        return false;
        
    }

    const addToCart = (id)=> {

        if(productNotInCart(id)){

            const cartClone = [...cart];
            const product = products.find( product => product.id === parseInt(id));

            cartClone.push(product);
            setCart(cartClone);

        }

    }

    const getProduct = ()=> {

        if(products && products.length > 0){

            const id = parseInt(window.location.href.split('?')[1].split('=')[1]);
            const product = products.find( p => p.id === id);

            if(!product){
                return <div>Nothing Found</div>
            }

            return  <div>
                        <img src={product.images[0]} alt=""/>
                        <div className="featured-details">
                            <div className="featured-name">{product.name}</div>
                            <div className="featured-price">
                                <div>
                                    <span>Price:</span>
                                    <span>${product.price}</span>
                                </div>
                                <div>
                                    <span>Polygons: </span>
                                    <span>{product.polyCount}</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" id={product.id} onClick={(e)=> addToCart(e.target.id)}>Add to cart</button>
                    </div>
        }
    }

    return (
        <div>
            <Navbar/>
            {getProduct()}
        </div>
    )
}
