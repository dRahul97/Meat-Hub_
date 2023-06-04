import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({
  _id,
  image,
  name,
  net,
  price,
  orgprice,
  discount,
  delivery,
}) => {
  return (
    <div id="single-prod" key={_id}>
      <img id="single-prod-img" src={image} alt="" />
      <button id="add-to-cart-btn">+</button>
      <div id="single-prod-details">
        <h3>{name}</h3>
        <p>{net}</p>
        <div id="single-prod-price">
          <p>₹{price}</p>
          <p>₹{orgprice}</p>
          <p>{discount}% off</p>
        </div>
        <p>{delivery}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
