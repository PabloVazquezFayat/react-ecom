import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

export default function ProductView(props) {
    
    const [product, setProduct] = useState({});

    const getProducts = async (id) => {
        try {
            const response = await axios.get("/products.json");
            const product = response.data.find( product => product.id === id)
            setProduct(product);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const id = parseInt(window.location.search.split('=')[1]);
        getProducts(id);
    }, []);

    const productNotInCart = (cart, id) => {
        const productInCart = cart.find((product) => product.id === parseInt(id));

        if (productInCart === undefined) {
            return true;
        }

        return false;
    };
    
    const addToCart = (id) => {
        props.setCart((prevState) => {
            if (productNotInCart(prevState, product.id)) {
                return [...prevState, product];
            } else {
                return prevState;
            }
        });
    };

    const handleCartClick = (e)=> {
        addToCart(e.target.id);
    }

    const getProduct = ()=> {

        if(Object.keys(product).length === 0){
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
                    <button type="button" id={product.id} onClick={handleCartClick}>Add to cart</button>
                </div>
            
    }

    return (
        <div>
            <Navbar/>
            {getProduct()}
        </div>
    )
}
