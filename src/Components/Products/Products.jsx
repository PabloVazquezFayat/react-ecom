import './Products.css'
import React from 'react';
import Navbar from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'

export default function Products(props) {

    const products = props.products;
    const setSelectedProduct = props.getProduct;

    const handleSetSelected = (id)=>{
        setSelectedProduct(id);
    }

    const productList = ()=> {
        if(products && products.length > 0){
            return products.map((product, i)=> {
                return  <li key={i} id={product.id} className="products">
                            <NavLink to={`/product?id=${product.id}`}>
                                <img src={product.images[0]} alt="" onClick={ ()=> handleSetSelected(product.id)}/>
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
