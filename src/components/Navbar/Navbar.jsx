import React from "react";
import "./Navbar.css";
import navLogo from "../../Assets/Meat-hub-logo.jpg";
import Searchbar from "../Searchbar/Searchbar";

export const Navbar = () => {
  return (
    <div id="nav-container">
      <div id="navbar">
        <img id="nav-logo" src={navLogo} alt="" />
        <div id="nav-location">Location</div>
        <Searchbar />
        <div className="nav-section">
          <img
            src="https://www.licious.in/image/rebranding/svg/categories-grey.svg"
            alt=""
          />
          <p>Categories</p>
        </div>
        <div className="nav-section">
          <img
            src="https://www.licious.in/image/rebranding/svg/profile-grey.svg"
            alt=""
          />
          <p>Login</p>
        </div>
        <div className="nav-section">
          <img
            src="https://www.licious.in/image/rebranding/svg/cart.svg"
            alt=""
          />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
};
