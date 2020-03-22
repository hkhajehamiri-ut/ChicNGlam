import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/Shop";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signin&signup/SignIn-SignUp";
// used to store the state of the user in the app
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    // onAuthStateChanged is a method that comes with firebase
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  render() {
    return (
      <div>
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignInSignUp} />
        <Switch></Switch>
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInSignUp} />
      </div>
    );
  }
}

export default App;
