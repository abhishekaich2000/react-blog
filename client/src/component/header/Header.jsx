import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
        <img src="https://images.pexels.com/photos/14362918/pexels-photo-14362918.jpeg" alt="" className="headerImg" />
      </div>
    </div>
  )
}
