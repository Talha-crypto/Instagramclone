import React from "react";
import './Components/Navbar'
import "./App.css";
import NavBar from "./Components/Navbar"
import {BrowserRouter} from 'react-router-dom'
import { Route } from "react-router-dom"
import Home from './Components/screens/Home'
import Profile from "./Components/screens/Profile"
import Signin from "./Components/screens/Login"
import Signup from "./Components/screens/Signup"

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
      </BrowserRouter>
  );
}

export default App;
