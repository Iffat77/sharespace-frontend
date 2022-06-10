import { Fragment } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleClick = () => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      credentials: "include",
    };

    fetch("http://localhost:8000/logout", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          setIsAuthenticated(false);
          navigate("/");
        }
      });
  };

  const authLinks = (
    <Fragment>
      <li className="navset">
        <div>
          <NavLink id="profile" className="" to="/">
            <button className="btns">Home</button>
          </NavLink>
        </div>
      </li>
      <li className="navset">
        <div>
          <NavLink id="profile" className="" to="/feed">
            <button className="btns">Feed</button>
          </NavLink>
        </div>
      </li>

      <li className="navset">
        <div>
          <NavLink id="signin" className="" to="/signin">
            <button className="btns">SignIn</button>
          </NavLink>
        </div>
      </li>

      <li className="navset">
        <div>
          <NavLink id="profile" className="" to="/profile">
            <button className="btns">Profile</button>
          </NavLink>
        </div>
      </li>

      <div className="navset">
        <li className="" id="">
          <button id="logout" className="btns" onClick={handleClick}>
            Logout
          </button>
        </li>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="navset">
        <div>
          <NavLink id="profile" className="" to="/">
            <button className="btns">Home</button>
          </NavLink>
        </div>
      </li>
      <li className="navset">
        <div>
          <NavLink id="profile" className="btns" to="/feed">
            <button className="btns">Feed</button>
          </NavLink>
        </div>
      </li>

      <li className="navset">
        <div>
          <NavLink id="login" className="btns" to="/signin">
            <button className="btns">Login</button>
          </NavLink>
        </div>
      </li>
    </Fragment>
  );

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link to="/">
          <h3>home</h3>
        </Link>
        <h1 className="nav-logo-text">SS</h1>
      </div>
      <div className="nav-buttons">
        <ul className="login-button">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
}
