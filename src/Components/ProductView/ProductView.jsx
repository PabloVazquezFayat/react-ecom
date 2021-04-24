import React, { useState, useEffect }  from 'react';
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

export default function ProductView() {

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

    const getProduct = ()=> {

        if(products.length > 0){

            const id = parseInt(window.location.href.split('/')[4]);
            const product = products.find( p => p.id === id);

            if(!product){
                return <div>Nothing Found</div>
            }

            return  <div>
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
                    </div>
        }else{
            return <div>Loading...</div>
        }
    }

    return (
        <div>
            <Navbar/>
            {getProduct()}
        </div>
    )
}
