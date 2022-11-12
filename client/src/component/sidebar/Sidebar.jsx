import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://images.pexels.com/photos/14361900/pexels-photo-14361900.jpeg" alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis explicabo inventore nostrum iure placeat architecto suscipit dolores nisi facilis.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Style</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  )
}
