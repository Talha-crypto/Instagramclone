import React from "react";
import NavBar from "./components/NavBar";
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/screens/Home"
import Signin from "./components/screens/Signin"
import Profile from "./components/screens/Profile"
import Signup from "./components/screens/Signup"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
    </BrowserRouter>
  );
}

export default App;
