import React, { useState, useEffect } from 'react';
import Navbar from '.././Navbar/Navbar';
import Product from '../Product/Product';
import Alert from '../Alert/Alert';

export default function ProductView(props) {    

    const product = props.selected ?? null;
    
    const [alert, setAlert] = useState(false);

    const handleCartClick = (e)=> {
        addToCart(e.target.id);
    }

    const addToCart = (id) => {

        props.setCart((prevState) => {

            const productInCart = prevState.find((product) => product.id === parseInt(id));

            if (!productInCart) {
                return [...prevState, product];
            } else {
                setAlert(true);
                return prevState;
            }

        });

    };

    const createProduct = ()=> {

        if(product){
            return  <Product product={product} action={handleCartClick}/>
        }

        return <div>Nothing Found</div>
            
    }

    return (
        <div>
            <Navbar/>
            <Alert alert={alert} setAlert={setAlert}>
                This product is already in your cart!
            </Alert>
            {createProduct()}
        </div>
    )
}