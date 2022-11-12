import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto quidem quasi ab quaerat repudiandae quis eligendi modi nostrum, placeat dicta doloribus consequatur optio laboriosam perspiciatis harum fugiat? Laboriosam, quas?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto quidem quasi ab quaerat repudiandae quis eligendi modi nostrum, placeat dicta doloribus consequatur optio laboriosam perspiciatis harum fugiat? Laboriosam, quas?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iusto quidem quasi ab quaerat repudiandae quis eligendi modi nostrum, placeat dicta doloribus consequatur optio laboriosam perspiciatis harum fugiat? Laboriosam, quas?
      </p>
    </div>
  )
}
