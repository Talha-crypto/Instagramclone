import React,{createContext, useReducer} from "react"; // Whenever a state changes our component will re-render. For this we are using useReducer
import './Components/Navbar'
import "./App.css";
import NavBar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/screens/Home'
import Profile from "./Components/screens/Profile"
import Signin from "./Components/screens/SignIn"
import Signup from "./Components/screens/Signup"
import CreatePost from "./Components/screens/Createpost"
import {reducer, initialState} from './reducers/useReducer'

export const UserContext= createContext()

const Routing=()=>{
//  const navigate = useNavigate()
  return(
    <Routes> 
       {/* Always use Routes as parent tag to define different Route. Specify one Routes tag then in that tag specify different many route you want to and close the Routes tag at the end */}
      <Route exact path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Createpost" element={<CreatePost />} />
      
    </Routes>
  )
}

export function App() {
  const [state,dispatch]= useReducer(reducer,initialState);
  return(
  <UserContext.Provider value={{state:state,dispatch:dispatch}}>
    <BrowserRouter>    
    <NavBar />
    <Routing />
  </BrowserRouter>
  </UserContext.Provider>)
}

export default App;
