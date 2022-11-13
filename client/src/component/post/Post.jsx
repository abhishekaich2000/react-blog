import React from 'react'
import "./post.css"
import {Link} from "react-router-dom";

export default function Post({post}) {
  const public_folder = "http://localhost:5000/images/";
  return (
    <div className="post">
      <img className="postImg" src={public_folder + post.photo} alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  )
}
