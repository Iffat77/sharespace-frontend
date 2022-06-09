import React from 'react'
import { useState } from "react";
import CSRFToken from "./CSRFToken";
import Cookies from "js-cookie";

export default function AddPost({ setToggle, user }) {
  
  const [newPost, setNewPost] = useState({
    post: "",
    // publish_date: "",
    profile: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
    console.log(newPost)
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
    
    console.log(newPost)
    console.log(user.profile.user_id)

    fetch("http://localhost:8000/posts/", options).then(response => {
      console.log(response)
      return response.json();
    }).then(data => {
      console.log(data)
      // setToggle(prev => !prev)
    });
};

  

  return (
    <div className='post-container'>
      <form type='submit' name='poop' onSubmit={handleSubmit} className='thoughts-container'>
      <CSRFToken />
        <textarea
          placeholder='Share your thoughts'
          name="post"
          type='text'
          // value={newPost.post}
          onChange={handleChange}
          className='share-txt'
        ></textarea>
        {/* <input type='hidden' name='profile' value={user ? user.profile.id : null} >{user.user_id}</input> */}
        <input type='text' name='profile' value={newPost.profile} onChange={handleChange}></input>
        <button className='share-btn'>Share!</button>
      </form>
    </div>
  )
}