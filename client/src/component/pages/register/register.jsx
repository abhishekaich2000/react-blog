import React from 'react'
import "./register.css"

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Resigter</span>
      <from className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput"    placeholder="Enter your name..."/>
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email..."/>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your password..."/>
        <button className="registerButton">Register</button>
        <button className="loginButton">Login</button>
      </from>
    </div>
  )
}
