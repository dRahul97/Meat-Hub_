import React from "react";
import "./Searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div id="search-bar">
      <input
        id="search"
        type="text"
        placeholder="Search for any deleicious products"
      />
      <AiOutlineSearch className="s-icon" size={23} />
    </div>
  );
};

export default Searchbar;
