import React, { useEffect, useState } from "react";
import "./homepage.css";
import { allCategories } from "../../data/home";
import SingleProduct from "../../components/ProductCard/SingleProduct";
import axios from "axios";

export const Homepage = () => {
  const [bestseller, setBestSeller] = useState([]);
  const [combo, setCombo] = useState([]);

  const bestsellerData = () => {
    try {
      axios
        .get("http://localhost:7400/products?category=Chicken")
        .then((res) => setBestSeller(res.data));
    } catch (e) {
      console.log(e);
    }
  };
  const comboData = () => {
    try {
      axios
        .get("http://localhost:7400/products?category=Chicken&subcat=combo")
        .then((res) => setCombo(res.data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    bestsellerData();
    comboData();
  }, []);
  console.log(combo);
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

      <div id="best-seller">
        <div id="best-seller-title">
          <h2>Bestsellers</h2>
          <p>Most popular products near you!</p>
        </div>
        <div id="bestseller-products">
          {bestseller.length > 0 &&
            bestseller.map((prod) => {
              return <SingleProduct {...prod} />;
            })}
        </div>
      </div>

      <div id="combo">
        <div id="combo-title">
          <h2>Combos for you</h2>
          <p>Savour the savings!</p>
        </div>
        <div id="combo-products">
          {combo.length > 0 &&
            combo.map((prod) => {
              return <SingleProduct {...prod} />;
            })}
        </div>
      </div>
    </div>
  );
};
