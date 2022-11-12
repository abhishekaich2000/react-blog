import React from 'react'
import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fineInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fineInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Submit</button>
      </form>
    </div>
  )
}
