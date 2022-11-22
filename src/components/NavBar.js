import React from "react";
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
        <li>View Properties</li>
        <li>Add a Property</li>
      </ul>
    </div>
  );
};

export default NavBar;
