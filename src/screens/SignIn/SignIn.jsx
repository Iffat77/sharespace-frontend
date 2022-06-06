import { useState } from 'react'
import CSRFToken from '../../components/CSRFToken';
import Cookies from "js-cookie";

export default function SignIn({setIsAuthenticated, setUser}) {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault()


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

    let userOptions = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    fetch("http://localhost:8000/api_auth/login/", options)
      .then(response => {
        return response.json();
      })
      .then(data => {
        fetch("http://localhost:8000/profile/user", userOptions)
          .then(response => {
            return response.json();
          })
          .then(data => {
            setIsAuthenticated(true);
            setUser(data);
          });
      })

  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, 
      [name]: value, 
    })
  }

  return (
    <div className='sign-up-container'>
    <form type='submit' onSubmit={handleSubmit} className='sign-up-form'>
      <CSRFToken />
      <input
        placeholder='username'
        type='text'
        name='username'
        onChange={handleChange}
        value={formData.username}
      ></input>
      <input
        placeholder='password'
        type='password'
        name={'password'}
        onChange={handleChange}
        value={formData.password}
      ></input>
      <button
        type='submit'
      >Sign In</button>

    </form>
  </div>
  )
}
