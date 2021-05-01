import React from 'react';

export default function Product(props) {

    const { product, action } = props;

    return (
        <div>
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
            <button type="button" id={product.id} onClick={action}>Add to cart</button>
        </div>
    )
}
