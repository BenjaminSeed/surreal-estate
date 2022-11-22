import React from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="mainLogo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item" />
        <Link className="item" to="/">
          View Properties
        </Link>
        <Link className="item" to="/AddProperty">
          Add a Property
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
