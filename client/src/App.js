import React from "react";
import './Components/Navbar'
import "./App.css";
import NavBar from "./Components/Navbar"
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Components/screens/Home'
import Profile from "./Components/screens/Profile"
import Signin from "./Components/screens/Login"
import Signup from "./Components/screens/Signup"

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    
    <Route path="/">
      <Home />
    </Route>
    <Route path="/signup">
      <Signup />
    </Route>
    <Route path="/signin">
      <Signin />
    </Route>
    <Route path="/login">
      <Signin />
    </Route>
    <Route path="/profile">
      <Profile />
    </Route>

    </BrowserRouter>
  );
}

export default App;
