import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import ProductList from './Components/ProductList/ProductList';
import ProductView from './Components/ProductView/ProductView';
import Cart from './Components/Cart/Cart';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState({});
  const [products, setProducts] = useState([]);

  console.log(cart);

  const getProducts = async () => {
    try {
      const res = await axios.get('/products.json');
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Landing setSelected={setSelected} />}
          />

          <Route
            exact
            path="/products"
            component={() => <ProductList setProducts={setProducts} />}
          />

          <Route
            exact
            path="/product"
            component={() => (
              <ProductView
                cart={cart}
                products={products}
                setCart={setCart}
                selected={selected}
              />
            )}
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
