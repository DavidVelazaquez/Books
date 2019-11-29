import React from "react";
import { Link } from "react-router-dom";

import "./components-styles/navbar.css";
import logo from "../images/book.png";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="menu p-m">
        <Link to="/home">
          <img src={logo} alt="Book Logo" />
        </Link>
        <ul>
          <Link
            className="btn__secondary text__decoration-none mr-m"
            to="/home/signin"
          >
            Sign in
          </Link>
          <Link
            className="btn__primary text__decoration-none"
            to="/home/signup"
          >
            Sign up
          </Link>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
