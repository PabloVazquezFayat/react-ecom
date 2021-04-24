import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import ProductView from './Components/ProductView/ProductView';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' render={ ()=> <Landing/>}/>
            <Route exact path='/products' render={ ()=> <Landing/>}/>
            <Route exact path='/product/:id' render={ ()=> <ProductView/>}/>
            <Route exact path='/checkout/:id' render={ ()=> <Landing/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
