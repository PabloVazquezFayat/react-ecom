import './Featured.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Featured(props) {

    const setSelected = props.setSelected;
    const products = props.products;

    const handleClick = (product)=> {
        setSelected(product);
    }

    const createFeaturedList = ()=> {

        if(products){

            const featured = products.filter( product => product.featured === true );

            return featured.map((product, i) => {
                return <div key={i} id={product.id} className="landing">
                            <NavLink to={`/product?id=${product.id}`}>
                                <img src={product.images[0]} alt="" onClick={()=> handleClick(product)}/>
                            </NavLink>
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
                        </div>
            });
        }

        return <div>Loading...</div>

    }

    return (
        <div className="featured-products-gallery">
            <div className="featured-products-container">
                <h2>Featured 3D Models</h2>
                <div className="featured-products-list">
                    {createFeaturedList()}
                </div>
            </div>
        </div>
    )
}
