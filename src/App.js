import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Products from "./Components/Products/Products";
import ProductView from "./Components/ProductView/ProductView";
import Cart from "./Components/Cart/Cart";
import axios from "axios";

function App() {

  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const getProducts = async () => {
    try {
      const response = await axios.get("/products.json");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productNotInCart = (cart, id) => {
    const productInCart = cart.find((product) => product.id === parseInt(id));

    if (productInCart === undefined) {
      return true;
    }

    return false;
  };

  const addToCart = (id) => {
    const product = products.find((product) => product.id === parseInt(id));

    setCart((prevState) => {
      if (productNotInCart(prevState, product.id)) {
        return [...prevState, product];
      } else {
        return prevState;
      }
    });
  };
  
  const getProduct = (id)=> {
    const product = products.find(product => product.id === parseInt(id))
    setSelectedProduct(product);
  }

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route 
            exact 
            path="/" 
            component={() => <Landing />} 
          />

          <Route
            exact
            path="/products"
            component={() => <Products products={products} getProduct={getProduct} />}
          />

          <Route
            exact
            path="/product"
            component={() => <ProductView addToCart={addToCart} selected={selectedProduct}/>}
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
