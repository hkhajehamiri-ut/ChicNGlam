import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from './pages/shop/Shop';
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
