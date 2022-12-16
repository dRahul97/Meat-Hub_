import React from "react";
import blog from "../Home/CheckoutBlog.module.css";

const CheckoutOutBlog = () => {
  return (
    <div
      style={{
        width: "78%",
        margin: "auto",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <h1 style={{ fontSize: "22px", color: "#4a4a4a", fontWeight: "bold" }}>
        Checkout out our blog
      </h1>
      <div className={blog.blogDiv}>
        <a href="https://www.licious.in/blog/recipe/homemade-shawarma-recipe">
          <div>
            <img
              src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_1339636625-1.jpg"
              alt=""
            />
            <p>
              Wait a Minute! Don’t Buy Shawarma Anymore, Make it at Home
              Instead!
            </p>
            <p></p>
          </div>
        </a>

        <a href="https://www.licious.in/blog/recipe/creamy-herbed-chicken-recipe">
          <div>
            <img
              src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2055615416.jpg"
              alt=""
            />
            <p>
              This Creamy Herbed Chicken Recipe is the Perfect Meal Any Day of
              the Week!
            </p>
            <p></p>
          </div>
        </a>

        <a href="https://www.licious.in/blog/recipe/paprika-roast-chicken">
          <div>
            <img
              src="https://www.licious.in/blog/wp-content/uploads/2022/06/shutterstock_2040426830.jpg"
              alt=""
            />
            <p>
              Savour a Mouth-Watering Paprika Roast Chicken On a Lazy Weekend!
            </p>
            <p></p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CheckoutOutBlog;
