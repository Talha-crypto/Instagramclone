import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
const Signup = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPasswpord]=useState("")
    const Postdata=()=>{
        fetch("http://localhost:5000/Signup",{  // this causes error when tries to reach the sigup mathod. because both apps are running on different servers. to resolve this issue we make use of Proxying Api Requests in Development.
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                name:"",
                email:"",
                password:""
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPasswpord(e.target.value)}
                />
                <button className="btn waves-effect waves-light #64b5f6 light-blue darken-1"
                onClick={()=>Postdata()}
                >
                    SignUp
                </button>
                <h5>
                    <Link to="/signin">Already have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup