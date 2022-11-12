import React from 'react'
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/10348391/pexels-photo-10348391.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit 
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Abhishek</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quam laborum voluptatibus quibusdam architecto. Tempora natus error magnam pariatur praesentium ad veniam corrupti, voluptatibus eaque ipsa enim, impedit iusto doloremque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quam laborum voluptatibus quibusdam architecto. Tempora natus error magnam pariatur praesentium ad veniam corrupti, voluptatibus eaque ipsa enim, impedit iusto doloremque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quam laborum voluptatibus quibusdam architecto. Tempora natus error magnam pariatur praesentium ad veniam corrupti, voluptatibus eaque ipsa enim, impedit iusto doloremque.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quam laborum voluptatibus quibusdam architecto. Tempora natus error magnam pariatur praesentium ad veniam corrupti, voluptatibus eaque ipsa enim, impedit iusto doloremque.
        </p>
      </div>
    </div>
  )
}
