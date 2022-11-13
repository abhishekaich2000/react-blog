import React, { useContext } from 'react'
import "./settings.css"
import Sidebar from '../../sidebar/Sidebar'
import {Context} from "../../../context/Context"

export default function Settings() {

  const {user} = useContext(Context);

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={user.profilePic} alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Abhishek"/>
          <label>Email</label>
          <input type="email" placeholder="abhishek@gmail.com"/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
