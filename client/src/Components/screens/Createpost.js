import React,{useState} from "react"
import M from "materialize-css"
import { useNavigate } from "react-router-dom"

const Createpost = () =>{
  const navigate=useNavigate()
  const [title,setTitle]=useState()
  const [body,setBody]=useState()
  const [image,setImage]=useState()
  const [url,setUrl]=useState()

  const postDetails= ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","Insta-clone")
    data.append("cloud_name","fastnu")
    
    fetch("https://cloudinary.com/console/c-e0a27ec884114dad869cf6c4977b23/media_library/folders/home/upload",{
      method:"post",
      body:data
    })
    .then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
    })
    .catch(err=>{
      console.log(err)
    })

    fetch("http://localhost:5000/createpost",{  // this causes error when tries to reach the sigup mathod. because both apps are running on different servers. to resolve this issue we make use of Proxying Api Requests in Development.
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bear "+ localStorage.getItem("jwt")
            },body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:"Posted Successfuly",classes:"#2e7d32 green darken-3"})
                navigate('/')  //The useHistory hook gives you access to the history instance that you may use to navigate.
            }
        }).catch(err=>{
         console.log(err)
        })
       }

    return(<div className="card input-filed" 
    style={{
      margin:"30px auto", 
      maxWidth:"500px",
      padding:"15px",
      textAlign:"center"
      }}>
        <input type="text" 
        placeholder="title"
        value={title}
        onChange={(e)=>{  // Will change the title input according to the values set by the user
          setTitle(e.target.value)}}
        />
        <input type="text" 
        placeholder="body"
        value={body}
        onChange={(e)=>{ // Will change the body input according to the values set by the user
          setBody(e.target.value)}}
        />

        {/* e.target.files[0]    This files[0] is to access data stored in Array on 0th index */}
        <div className="file-field input-field">
      <div className="btn #64b5f6 light-blue darken-1">
        <span>Upload Image</span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />  
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #64b5f6 light-blue darken-1"
    onClick={()=>postDetails()} >
    Submit post
    </button>

    </div>)
}

export default Createpost