import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart";
import Register from "./pages/Register/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
