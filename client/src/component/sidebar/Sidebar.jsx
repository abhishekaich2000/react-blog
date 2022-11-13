import axios from 'axios';
import React, { useState, useEffect } from 'react'
import "./sidebar.css"
import {Link} from "react-router-dom"

export default function Sidebar() {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCats = async()=>{
      const res = await axios.get("http://localhost:5000/api/categories");
      setCategories(res.data);
    }
    getCats();
  }, [])
  
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
          {categories.map(c=>{
            return <Link key={c._id} to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          })}
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
