import './ProductList.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

export default function ProductList(props) {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get("/products.json");
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const productList = ()=> {
        if(products && products.length > 0){
            return products.map((product, i)=> {
                return  <li key={i} id={product.id} className="products">
                            <NavLink to={`/product?id=${product.id}`}>
                                <img src={product.images[0]} alt=""/>
                            </NavLink>
                        </li>
            });
        }
    }

    return (
        <div>
            <Navbar/>
            <div className="products-list-wrapper">
                <ul className="products-list">
                    {productList()}
                </ul>
            </div>
        </div>
    )
}
