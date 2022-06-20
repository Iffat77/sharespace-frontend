import React from 'react'
import { useState } from "react";
import CSRFToken from "../CSRFToken";
import Cookies from "js-cookie";
import './addPost.css';

export default function AddPost({ setToggle, user }) {
  
  const [newPost, setNewPost] = useState({
    post: "",
    profile: user ? user.profile.user_id : null 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
      body: JSON.stringify(newPost)
    };
    
    fetch("http://localhost:8000/posts/", options).then(response => {
      return response.json();
    }).then(data => {
      // setToggle(prev => !prev)
    });

};

  

  return (
    <div className='post-container'>
      <form type='submit' onSubmit={handleSubmit} className='thoughts-container'>
      <CSRFToken />
        <input
          placeholder='Share your thoughts'
          name="post"
          type='text'
          onChange={handleChange}
          className='share-txt'
        >

        </input>
          <button className='share-btn'>Share!</button>
      </form>
    </div>
  )
}