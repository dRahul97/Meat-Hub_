import React from "react";
import styled from "styled-components";
import "./Footer.css";
import FooterSocial from "./FooterSocial";

export const Footer = () => {
  let Cities = [
    "Bengaluru",
    "NCR",
    "Hyderabad",
    "Chandigarh",
    "Panchkula",
    "Mohali",
    "Mumbai",
    "Pune",
    "Chennai",
    "Coimbatore",
    "Jaipur",
    "Cochin",
    "Vijayawada",
    "Visakhapatnam",
    "Kolkata",
    "Lucknow",
    "Kanpur",
    "Nagpur",
  ];
  return (
    <DIV>
      <div id="footer-sec1">
        <div id="footer-sec1-2">
          <div>
            <span></span>
            <h2>We will sell only the meat that we would eat ourselves.</h2>
            <p>
              At Licious, we’re big meat-lovers. And by big, we mean huge. So
              when it comes to the meat we put on your plate, we’re extremely
              picky. Every single product is handpicked by a team with years of
              experience.
            </p>
          </div>
          <div>
            <span></span>
            <h2>If it’s not fresh, we won’t sell it</h2>
            <p>
              For meat to stay fresh and retain its natural juices, it needs to
              be stored at a temperature between 0° and 5°C. We maintain this
              temperature from the time we procure the product to cleaning,
              cutting and storing it, until it leaves for delivery. And even
              when it’s out for delivery, we keep it chilled right up to your
              doorstep.Did we mention that we’re obsessed?
            </p>
          </div>
          <div>
            <span></span>
            <h2>We will charge only for what you buy</h2>
            <p>
              Doesn’t everyone do this? Not really. Most other places first
              weigh the meat, then cut up the pieces, and throw out the parts
              which aren’t fit to eat, such as offal, gizzard, wingtips, etc.
              But you still pay based on the original weight even though what
              you finally get is 10% to 30% less
            </p>
          </div>
        </div>
      </div>
      <FooterSocial id="footer-sec2" />
      <div id="footer-sec3">
        <p>CITIES WE SERVE</p>

        <div id="footer-sec3-2">
          {Cities.map((city) => {
            return (
              <button
                bg="#fff"
                borderRadius={"15px"}
                variant="outline"
                fontSize={"14px"}
                fontFamily={"lato"}
                fontWeight={"500"}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>
      <div id="footer-sec4">
        <div>
          <h3>POPULAR SEARCHES</h3>
          <h4>Chicken</h4>
          <p>Chicken Breast Boneless</p>
          <h4>Ready to Cook</h4>
          <p>Mixed Party Platter</p>
        </div>
      </div>
      <div id="footer-sec5">
        <p>© 2021 Delightful Gourmet Pvt Ltd. All Rights Reserved.</p>
        <div>
          Licious is your one-stop fresh meat delivery shop. In here, you get
          nothing but the freshest meat & seafood, delivered straight to your
          doorstep. Now you can buy meat online anytime at your convenience.
          Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
          Prawns, Crabs), Marinades & Cold Cuts. All our products are completely
          natural and healthy. Once you've experienced Licious, you'll never go
          back to the old way of buying meat and seafood.
        </div>
      </div>
    </DIV>
  );
};

const DIV = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  margin-top: 50px;
`;
