import React from "react";
import './Components/Navbar'
import "./App.css";
import NavBar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/screens/Home'
import Profile from "./Components/screens/Profile"
import Signin from "./Components/screens/SignIn"
import Signup from "./Components/screens/Signup"

function App() {
  return (

    <BrowserRouter>
    <div className="max-w-screen-md mx-auto pt-20">
      <NavBar />
      <Routes >
        <Route path="/" element={<Home/>} />
      </Routes>
      <Routes >
      <Route path="/signin" element={<Signin />} />
      </Routes>
      <Routes >
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Routes >
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  </BrowserRouter>


  );
}

export default App;
