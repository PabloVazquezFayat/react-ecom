import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import ProductList from "./Components/ProductList/ProductList";
import ProductView from "./Components/ProductView/ProductView";
import Cart from "./Components/Cart/Cart";

function App() {

  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState({});
  const [products, setProducts] = useState([]);

  console.log(cart);

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route 
            exact 
            path="/" 
            component={() => <Landing  setSelected={setSelected}/>} 
          />

          <Route
            exact
            path="/products"
            component={() => <ProductList setProducts={setProducts} />}
          />

          <Route
            exact
            path="/product"
            component={() => <ProductView products={products} setCart={setCart} selected={selected}/>}
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
