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
                return <li key={i} id={product.id} className="landing">
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
                        </li>
            });
        }

        return <li>Loading...</li>

    }

    return (
        <div className="featured-products-gallery">
            <h2>Featured 3D Models</h2>
            <ul className="featured-products-list">
                {createFeaturedList()}
            </ul>
        </div>
    )
}
