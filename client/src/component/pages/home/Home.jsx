import React, { useState } from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import "./home.css"
import axios from "axios"
import { useLocation } from 'react-router-dom'

export default function Home() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const search = location.search;

  useState(()=>{
    const fetchPost = async()=>{
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    }
    fetchPost();
  },[search])

  return (
    <>
      <Header/>
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </>
  )
}
