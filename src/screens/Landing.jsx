import React from "react";
import CSRFToken from "../components/CSRFToken";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import { register } from "../services/auth";
import Cookies from "js-cookie";

export default function Landing({ isAuthenticated }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    re_password: "",
  });

  const [accountCreated, setAccountCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

      fetch("http://localhost:8000/register", options).then((response) => {
        setAccountCreated(true);
      });
    }
  };
  if (isAuthenticated) {
    return <Navigate to="/profile" replace />;
  } else if (accountCreated) {
    return <Navigate to="/signin" replace />;
  }

  return (
    <div>
      <h1>ShareSpace</h1>
      <form onSubmit={handleSubmit} className="landing-form">
        <CSRFToken />
        <input
          placeholder="User Name"
          type="text"
          name="username"
          onChange={handleChange}
          value={formData.username}
          required
        ></input>
                <input
          placeholder="Firstname"
          type="text"
          name="first_name"
          onChange={handleChange}
          value={formData.first_name}
          required
        ></input>
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        ></input>
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          minLength="6"
          required
        ></input>
        <input
          placeholder="confirm password"
          type="password"
          name="re_password"
          onChange={handleChange}
          value={formData.re_password}
          minLength="6"
          required
        ></input>
        <button type="submit">Sign Up</button>
        <Link to="/signin" className="signin-link">
          Already a memeber? Sign in here
        </Link>
      </form>
    </div>
  );
};
