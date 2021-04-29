import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Products from './Components/Products/Products'
import ProductView from './Components/ProductView/ProductView';
import Cart from './Components/Cart/Cart';
import axios from 'axios';


function App() {

  const [cart, setCart] = useState([]);

  const [products, setProducts] = useState([]);

  const getProducts = async ()=> {
    try{
      const response = await axios.get('/products.json');
      setProducts(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=> {
    if(!products || products.length === 0){
      getProducts();
    }
  }, [products]);

  console.log("cart: ", cart)
  console.log("products: ", products);

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' render={ ()=> <Landing/>}/>
            <Route exact path='/products' render={ ()=> <Products products={products}/>}/>
            <Route exact path='/product' render={ ()=> <ProductView products={products} cart={cart} setCart={setCart}/>}/>
            <Route exact path='/cart' render={ ()=> <Cart cart={cart} setCart={setCart}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
