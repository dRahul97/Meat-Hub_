import React from "react";
import "./Navbar.css";
import navLogo from "../../Assets/Meat-hub-logo.jpg";
import Searchbar from "../Searchbar/Searchbar";
import Categories from "./Categories";
import { Login } from "../../Pages/Login/Login";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div id="nav-container">
      <div id="navbar">
        <div className="hamburger">
          <HamburgerIcon boxSize={7} />
        </div>
        <Link to="/" id="nav-logo">
          <img src={navLogo} alt="" />
        </Link>
        <div id="nav-location">Location</div>
        <Searchbar />
        <div className="nav-section">
          <img
            src="https://www.licious.in/image/rebranding/svg/categories-grey.svg"
            alt=""
          />
          <Categories />
        </div>
        <Link to="/">
          <div className="nav-section">
            <img
              src="https://www.licious.in/image/rebranding/svg/profile-grey.svg"
              alt=""
            />
            <Login />
          </div>
        </Link>

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
