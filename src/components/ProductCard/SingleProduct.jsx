import React from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div id="single-prod">
      <img
        id="single-prod-img"
        src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0d6cb916-dcc3-5634-dc77-5850211c7096/original/chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).jpg?format=webp"
        alt=""
      />
      <button id="add-to-cart-btn">+</button>
      <div id="single-prod-details">
        <h3>Chicken Curry Cut - Small Pieces</h3>
        <p>500gms</p>
        <div id="single-prod-price">
          <p>₹170</p>
          <p>₹179</p>
          <p>15% off</p>
        </div>
        <p>Tomorrow in 90 min</p>
      </div>
    </div>
  );
};

export default SingleProduct;
