import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPasswpord]=useState("")
    const Postdata=()=>{
        
        if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email))
        //Regular expression used for authenticating the email pattern from emailregix.com
        {
            M.toast({html: "Invalid Email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("http://localhost:5000/Signup",{  // this causes error when tries to reach the sigup mathod. because both apps are running on different servers. to resolve this issue we make use of Proxying Api Requests in Development.
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },body:JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:"Successfuly Signed-In",classes:"#2e7d32 green darken-3"})
                navigate('/')  //The useHistory hook gives you access to the history instance that you may use to navigate.
            }
        }).catch(err=>{
            console.log(err)
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
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPasswpord(e.target.value)}
                />  
                <button className="btn waves-effect waves-light #64b5f6 light-blue darken-1">
                    Login
                </button>
                <h5>
                    <Link to="/signup">Don't have an account?</Link>
                </h5>
            </div>
        </div>
    )
}

export default SignIn