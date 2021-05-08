import React from 'react';
const Product = ({product, onclick}) => {
    const {id, images, name, description, price, polyCount} = product;
    return (
        <div>
            <img src={images[0]} alt=""/>
            <div className="product-details">
                <div className="product-name">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-price">
                    <div>
                        <span>Price:</span>
                        <span>${price}</span>
                    </div>
                    <div>
                        <span>Polygons: </span>
                        <span>{polyCount}</span>
                    </div>
                </div>
            </div>
            <button type="button" id={id} onClick={onclick}>Add to cart</button>
        </div>
    )
}
export default Product;