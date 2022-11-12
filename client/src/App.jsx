import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

const App = () => {
  const user = true
  return (
    <Router>
 
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route  path='/products/:category'>
        <ProductList/>
      </Route>
      <Route  path='/product/:id'>
        <Product/>
      </Route>
      <Route  path='/login'>
        {user ? <Redirect to ="/"/>:<Login/>}
        <Login/>
      </Route>
      <Route  path='/cart'>

        <Cart/>
      </Route>
      <Route  path='/register'>
      {user ? <Redirect to ="/"/>:<Register/>}
      </Route>
    
      </Switch>
  </Router>
  );
};
//comment


export default App;