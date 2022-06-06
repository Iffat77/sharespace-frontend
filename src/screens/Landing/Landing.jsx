import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './landing.css'
import Cookies from 'js-cookie';

export default function Landing() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    re_password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, re_password } = formData;

    if (password === re_password) {
      let options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
        credentials: "include",
        body: JSON.stringify(formData),
      };

      fetch("http://localhost:8000/register", options).then(
        response => {
          setAccountCreated(true);
        }
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value, 
    })
  }
  if (accountCreated) {
    alert("account created")
  }
  
  return (
    <div className='sign-up-container'>
      <form type='submit' onSubmit={handleSubmit} className='sign-up-form'>
        <input
          placeholder='full name'
          type='text'
          name='username'
          onChange={handleChange}
          value={formData.username}
        ></input>
        {/* <input
          placeholder='email'
          type='email'
          // name='email'
          // onChange={handleChange}
          // value={formData.username}
          // This will be commented in if we decide to store data
        ></input> */}
        <input
          placeholder='password'
          type='password'
          name={'password'}
          onChange={handleChange}
          value={formData.password}
        ></input>
        <input
          placeholder='confirm password'
          type='password'
          name={'re_password'}
          onChange={handleChange}
          value={formData.re_password}
        ></input>
        <button
          type='submit'
        >Sign Up</button>
        <Link to='/signin' className='signin-link'>Already a memeber? Sign in here</Link>
      </form>
    </div>
  )
}
