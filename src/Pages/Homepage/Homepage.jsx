import React from "react";
import "./homepage.css";
import { allCategories } from "../../data/home";
import SingleProduct from "../../components/ProductCard/SingleProduct";

export const Homepage = () => {
  return (
    <div id="homepage">
      <div className="home-banner-div">
        <img
          src="https://dao54xqhg9jfa.cloudfront.net/oms/cb499295-2fd9-0de1-bdba-57f43a886a7d/original/Breast_web_NEW_50.jpeg"
          alt=""
        />
      </div>

      <div id="shop-by-category">
        <div id="category-title">
          <h2>Shop by categories</h2>
          <p>Freshest meats and much more!</p>
        </div>
        <div id="all-category">
          {allCategories.map((prod) => {
            return (
              <div>
                <img src={prod.image} alt="" />
                <p>{prod.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <SingleProduct />
    </div>
  );
};
