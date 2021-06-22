import logo from "./logo.svg";
import React, { useEffect } from "react";

import NavBar from "./NavBar";
import SurpriseMe from "./SurpriseMe";
import SliderDiv from "./SliderDiv";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Amplify from "aws-amplify";

import "./App.css";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/product1">
            <NavBar />
            <SurpriseMe />
            <Footer />
          </Route>
          <Route path="/details">
            <NavBar />
            <UserDetails />
            <Footer />
          </Route>
          {/* <Route path="/checkout">
          <Header1 />
          <Checkout />
        </Route> */}
          {/* <Route path="/newheader">
          <Header1 />
        </Route> */}
          <Route path="/">
            <NavBar />
            <SliderDiv />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
