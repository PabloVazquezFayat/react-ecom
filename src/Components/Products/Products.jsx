import './Products.css'
import React from 'react';
import Navbar from '../Navbar/Navbar'

export default function Products(props) {

    const products = props.products;

    console.log('from products', products);

    const productList = ()=> {
        if(products && products.length > 0){
            return products.map((product, i)=> {
                return  <li key={i} id={product.id} className="products">
                            <a href={`/product?id=${product.id}`}>
                                <img src={product.images[0]} alt=""/>
                            </a>
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
