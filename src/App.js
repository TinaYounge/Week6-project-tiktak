import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import SingleProduct from "./pages/SingleProduct";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default App;
