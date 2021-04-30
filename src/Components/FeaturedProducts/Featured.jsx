import './Featured.css';
import React, { useState, useEffect }  from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Featured(props) {

    const setSelected = props.setSelected;

    const [products, setProducts] = useState([]);

    const getProducts = async ()=> {
        try{
            const products = await axios.get('/products.json');
            setProducts(products.data);
        }catch(error){
            console.log(error);
        }   
    }

    useEffect(()=> {
        getProducts();
    }, []);

    const handleClick = (product)=> {
        setSelected(product);
    }

    const createFeaturedList = ()=> {

        if(products.length === 0){
            return <li>Loading...</li>
        }

        const featured = products.filter((product)=> {
            return product.featured === true;
        });

        const featuredList = featured.map((product, i) => {
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

        return featuredList;

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
