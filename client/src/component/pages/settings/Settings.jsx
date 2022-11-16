import React, { useContext, useState } from 'react'
import "./settings.css"
import Sidebar from '../../sidebar/Sidebar'
import {Context} from "../../../context/Context"
import axios from 'axios';

export default function Settings() {

  const {user, dispatch} = useContext(Context);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const public_images = "http://localhost:5000/images/";

  const handleSubmit = async(e)=>{
     e.preventDefault();
     dispatch({type:"UPDATE_START"});
     const updatedUser = {
      userId: user._id,
      username,
      email,
      password
    };
    
    const data = new FormData();
    if(file){
      const fileName =  Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updatedUser.profilePic = fileName;
    }
    try {
      await axios.post("http://localhost:5000/api/upload", data);
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({type:"UPDATE_SUCCESS", payload:res.data})
    } catch (error) {
      console.log(error);
      dispatch({type:"UPDATE_FAILURE"})
    }
  }

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {
              file ? (
                <img src={URL.createObjectURL(file)} alt="" />
              ) : (
                <img src={public_images + user.profilePic} alt="" />
              )}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <button className="settingsSubmit" type="submit">Update</button>
          {success && <span style={{color:"green", marginTop:"20px", textAlign:"center"}}> Profile has been updated...</span>}
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
