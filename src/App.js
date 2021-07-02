import React from "react";

import NavBar from "./NavBar";
import SurpriseMe from "./SurpriseMe";
import SliderDiv from "./SliderDiv";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./App.css";
import UserDetails from "./UserDetails";
import useCurrentUser from "./useCurrentUser";
import Login from "./Login";
import MyProfile from "./MyProfile";

function App() {
  // const userStatus = useCurrentUser();

  // const isLoggedIn = null !== userStatus;
  // const history = useHistory();
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/product1">
            <NavBar />
            <SurpriseMe />
            <Footer />
          </Route>
          <Route path="/login">
            {/* {isLoggedIn ? <Route exact path="/" /> : <AmplifyAuthenticator />} */}
            <Login />
          </Route>
          <Route path="/details">
            <NavBar />
            <UserDetails />
            <Footer />
          </Route>
          <Route path="/myprofile">
            <NavBar />
            <MyProfile />
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
