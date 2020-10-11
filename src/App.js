import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import Checkout from "./Checkout/Checkout.js";
import Login from "./Login/Login.js";
import { useStateValue } from "./store/StateProvider";
import { auth } from "./firebase.js";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //useEffect <<<<<<<POWERFUL
  // Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in....
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out....
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      //any cleanup operation goes here;
      unsubscribe();
    };
  }, []);
  console.log("USER:-", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
