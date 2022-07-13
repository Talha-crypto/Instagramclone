import React,{useState} from "react";

const Createpost = () =>{
  const [title,setTitle]=useState()
  const [body,setBody]=useState()
  const [image,setImage]=useState()

  const postDetails= ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","Insta-clone")
    data.append("cloud_name","fastnu")
    
    fetch("https://cloudinary.com/console/c-e0a27ec884114dad869cf6c4977b23/media_library/folders/home/upload",{
      method:"post",
      body:data})
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
    .catch(err=>{
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
    onClick={()=>postDetails()}
    >
                    Submit post
                </button>

    </div>)
}

export default Createpost