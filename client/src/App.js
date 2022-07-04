import React from "react";
import './Components/Navbar'
import "./App.css";
import NavBar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/screens/Home'
import Profile from "./Components/screens/Profile"
import Signin from "./Components/screens/SignIn"
import Signup from "./Components/screens/Signup"
import CreatePost from "./Components/screens/Createpost"

function App() {
  return (

    <BrowserRouter>
    <div className="max-w-screen-md mx-auto pt-20">
      <NavBar />
      {/* Always use Routes as parent tag to define different Route. Specify one Routes tag then in that tag specify different many route you want to and close the Routes tag at the end */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Createpost" element={<CreatePost/>} />
      </Routes>
    </div>
  </BrowserRouter>

  
  );
}

export default App;
