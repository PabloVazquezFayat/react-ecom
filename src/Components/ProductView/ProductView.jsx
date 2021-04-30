import React from 'react';
import Navbar from '../Navbar/Navbar';

export default function ProductView(props) {

    const product = props.selected;

    const handleCartClick = (e)=> {
        props.addToCart(e.target.id);
    }

    const getProduct = ()=> {

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
