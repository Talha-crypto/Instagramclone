import React from "react";
import './Components/Navbar'
import "./App.css";
import NavBar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/screens/Home'
import Profile from "./Components/screens/Profile"
import Signin from "./Components/screens/Login"
import Signup from "./Components/screens/Signup"

function App() {
  return (

    <BrowserRouter>
    <div className="max-w-screen-md mx-auto pt-20">
      <NavBar />
      <Routes>
        <Route exact path="/" component={Home} />
      </Routes>
      <Routes>
        <Route exact path="/login" component={Signin} />
      </Routes>
      <Routes>
        <Route exact path="/profile" component={Profile} />
      </Routes>
      <Routes>
        <Route exact path="/signup" component={Signup} />
      </Routes>
    </div>
  </BrowserRouter>
  
  );
}

export default App;
