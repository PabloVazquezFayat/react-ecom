import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Product from '../Product/Product';
import Alert from '../Alert/Alert';
import Query from '../../Utils/Query/Query'

const ProductView =({cart, products, setCart}) =>  {
    const [product, setProduct] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const { search } = useLocation();
    const params = Query(search);
    const idInParams = parseInt(params.id);

    useEffect(() => {
        if(products.length && !product.id){
            setProduct(products.find( product => product.id === idInParams));
        }
    }, [products, product, idInParams]);

    const addToCart = ({productId, selectedProduct}) => {
        const productInCart = cart.find((selectedProduct) => selectedProduct.id === parseInt(productId));
        if (productInCart) return setShowAlert(true);
        return setCart((prevState) => [...prevState, selectedProduct] );
    };

    if(!product.id) return <div>Nothing Found</div>

    return (
        <div>
            <Alert alert={showAlert} setAlert={setShowAlert}>
                This product is already in your cart!
            </Alert>
            <Navbar/>
            <Product product={product} onclick={(e) => addToCart({productId: e.target.id, selectedProduct: product})}/>       
        </div>
    )
};

export default ProductView;