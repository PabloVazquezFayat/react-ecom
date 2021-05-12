import './ProductList.css';
import React from 'react';
import Navbar from ".././Navbar/Navbar";
import { NavLink } from 'react-router-dom';

export default function ProductList(props) {

    const setSelected = props.setSelected;
    const products = props.products;

    const productList = ()=> {
        if(products && products.length > 0){
            return products.map((product, i)=> {
                return  <div key={i} id={product.id} className="products" onClick={()=> setSelected(product)}>
                            <NavLink to={`/product?id=${product.id}`}>
                                <img src={product.images[0]} alt=""/>
                            </NavLink>
                        </div>
            });
        }

        return <div>Loading...</div>
    }

    return (
        <div>
            <Navbar/>
            <div className="products-list-wrapper">
                <div className="products-list">
                    {productList()}
                </div>
            </div>
        </div>
    )
}
