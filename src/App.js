import React, { useState, useEffect, useCallback} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import ProductList from './Components/ProductList/ProductList';
import ProductView from './Components/ProductView/ProductView';
import Cart from './Components/Cart/Cart';
import axios from 'axios';
import Query from './Utils/Query/Query';

function App() {

  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState();
  const [products, setProducts] = useState()

  console.log("cart:", cart);

  const getProducts = async()=> {
    try{
      const res = await axios.get('/products.json');
      setProducts(res.data);
    }catch(error){
      console.log(error);
    }
  }

  const getSelected = useCallback(()=> {

    const search = window.location.search;

    if(search.indexOf('id') !== -1 && products){
      const id = parseInt(Query(search).id);
      setSelected(products.find( product => product.id === id))
    }

  },[products]);

  useEffect(()=> {
    getProducts();
  }, []);

  useEffect(() => {
    getSelected();
  }, [getSelected]);

  return (
    <div className="App">
      <Router>
        <Switch>

              <Route 
                exact 
                path="/" 
                component={() => <Landing products={products} setSelected={setSelected}/>} 
              />

              <Route
                exact
                path="/products"
                component={() => <ProductList products={products} setProducts={setProducts} setSelected={setSelected}/>}
              />

              <Route
                exact
                path="/product"
                component={() => <ProductView products={products} cart={cart} setCart={setCart} selected={selected}/>}
              />

              <Route
                exact
                path="/cart"
                component={() => <Cart cart={cart} setCart={setCart} />}
              />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
