import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
import Alert from '../Alert/Alert';
import axios from 'axios';
import Query from '../../Utils/Query/Query'

export default function ProductView(props) {
    
    const [product, setProduct] = useState({});
    const [alert, setAlert] = useState(false);

    const { search } = useLocation();
    const params = Query(search);

    const getProducts = async (id) => {
        try {
            const response = await axios.get("/products.json");
            const product = response.data.find( product => product.id === id)
            setProduct(product);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const id = parseInt(params.id);
        getProducts(id);
    }, [params.id]);

    const handleCartClick = (e)=> {
        addToCart(e.target.id);
    }

    const addToCart = (id) => {

        props.setCart((prevState) => {

            const productInCart = prevState.find((product) => product.id === parseInt(id));

            if (!productInCart) {
                return [...prevState, product];
            } else {
                setAlert(true);
                return prevState;
            }

        });

    };

    const createProduct = ()=> {

        if(Object.keys(product).length !== 0){
            return  <Product product={product} action={handleCartClick}/>
        }

        return <div>Nothing Found</div>
            
    }

    return (
        <div>
            <Alert alert={alert} setAlert={setAlert}>
                This product is already in your cart!
            </Alert>
            <Navbar/>
            {createProduct()}
        </div>
    )
}