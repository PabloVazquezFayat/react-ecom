import React from 'react';

export default function Product(props) {

    const { product, action } = props;

    return (
        <div>
            <img src={product.images[0]} alt=""/>
            <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-description">{product.description}</div>
                <div className="product-price">
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
