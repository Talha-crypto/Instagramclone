import React from "react";

const Createpost = () =>{
    return(<div className="card input-filed" style={{margin:"30px auto", maxWidth:"500px",padding:"15px",textAlign:"center"}}>
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="body"/>
        <div class="file-field input-field">
      <div className="btn #64b5f6 light-blue darken-1">
        <span>Upload Image</span>
        <input type="file"/>
      </div>
      <div className="file-path-wrapper">
        <input class="file-path validate" type="text"/>
      </div>
    </div>
    <button className="btn waves-effect waves-light #64b5f6 light-blue darken-1">
                    Submit post
                </button>

    </div>)
}

export default Createpost