import { div } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import "./navBar.css";

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
    <div>
      <div>
        <NavLink id="profile" className="btn" to="/">
          <button className="">Home</button>
        </NavLink>

        <NavLink id="profile" className="btn" to="/feed">
          <button className="">Feed</button>
        </NavLink>

        <NavLink id="signin" className="btn" to="/signin">
          <button className="">SignIn</button>
        </NavLink>

        <NavLink id="profile" className="btn" to="/profile">
          <button className="">Profile</button>
        </NavLink>

        <button id="logout" className="btn" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );

  const guestLinks = (
    <div>
      <div>
        <NavLink id="profile" className="btn" to="/">
          <button className="">Home</button>
        </NavLink>
      </div>

      <div>
        <NavLink id="profile" className="btn" to="/feed">
          <button className="">Feed</button>
        </NavLink>
      </div>

      <div>
        <NavLink id="login" className="btn" to="/signin">
          <button className="">Login</button>
        </NavLink>
      </div>
    </div>
  );

  return (
    <div className="nav">
      <Link to="/">
        <h1 className="title">SS</h1>
      </Link>

      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
}
