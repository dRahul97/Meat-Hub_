import React from "react";
import "./Navbar.css";
import navLogo from "../../Assets/Meat-hub-logo.jpg";
import Searchbar from "../Searchbar/Searchbar";
import Categories from "./Categories";
import { Login } from "../../Pages/Login/Login";

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
          <Categories />
        </div>
        <div className="nav-section">
          <img
            src="https://www.licious.in/image/rebranding/svg/profile-grey.svg"
            alt=""
          />
          <Login />
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
