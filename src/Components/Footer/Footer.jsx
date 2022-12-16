import React from "react";
import logo from "../Images/Meat-hub-logo.jpg";
import footer from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={footer.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={footer.footer1}>
        <div className={footer.leftDiv}>
          <div>
            <h4>USEFUL LINKS</h4>
            <spen>
              <a href="https://www.licious.in/about-us">Why Licious?</a>
            </spen>
            <spen>
              <a href="https://www.licious.in/refer-earn-tnc">Refer & Earn</a>
            </spen>
            <spen>
              <a href="https://www.licious.in/licious-cash">
                Licious Cash & Cash+
              </a>
            </spen>
            <spen>
              <a href="https://www.linkedin.Components/jobs/search?f_C=9471845&location=India&originalSubdomain=in">
                Careers
              </a>
            </spen>
            <spen>
              <a href="https://www.licious.in/blog/">BLOG</a>
            </spen>
            <spen>
              <a href="https://www.licious.in/campaign">Campaign</a>
            </spen>
            <spen>
              <a href="https://www.licious.in/bug-bounty-guidelines">
                Bug Bounty Guidelines
              </a>
            </spen>
            <spen>
              <a href="https://www.licious.in/about-us-new">About Us</a>
            </spen>
            <spen>
              <a href="https://www.licious.in/certification">
                FSSC 22000 Certification
              </a>
            </spen>
            <spen>
              <a href="https://www.licious.in/fssai-licenses">FSSAI Licenses</a>
            </spen>
            <spen>
              <a href="https://www.licious.in/sitemap">Sitemap</a>
            </spen>
          </div>

          <div className={footer.storeDiv}>
            <h4>EXPERIENCE LICIOUS APP ON MOBILE</h4>
            <div>
              <a href="https://apps.apple.Components/in/app/buy-meat-online-licious/id1052440342">
                <img
                  src="https://www.licious.in/img/rebranding/app-store-new.svg"
                  alt=""
                />
              </a>
              <a href="https://play.google.Components/store/apps/details?id=Components.licious">
                {" "}
                <img
                  src="https://www.licious.in/img/rebranding/play-store-new.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className={footer.rightDiv}>
          <div>
            <spen>CONTACT US</spen>
            <spen>Call: 1800-4190-786</spen>

            <spen>
              {" "}
              <a href="Talktous@licious.Components">
                Talktous@licious.Components
              </a>
            </spen>
            <spen>REGISTERED OFFICE ADDRESS:</spen>
            <spen>House of Licious, Zed Pearl, No 12,</spen>
            <spen>Domlur Layout</spen>
            <spen>Bangalore, Karnataka - 560071</spen>
          </div>

          <div>
            <span>
              <a href="https://www.licious.in/terms">T&C</a>
            </span>
            <span>
              <a href="https://www.licious.in/faq">FAQ</a>
            </span>
            <span>
              <a href="https://www.licious.in/privacy-policy">Privacy Policy</a>
            </span>
            <span>HAVE SECURITY CONCERN?</span>
            <span>Mail us to:</span>
            <span>security@licious.Components</span>
          </div>
          <div>
            <img
              src="https://www.licious.in/img/rebranding/3-dsecure.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* insta section */}

      <div className={footer.instaDiv}>
        <span>KEEP IN TOUCH</span>
        <a href="https://www.instagram.Components/licious_foods/">
          <img
            src="https://www.licious.in/img/rebranding/insta_color.png"
            alt=""
          />
        </a>
        <a href="https://www.facebook.Components/LiciousFoods/">
          {" "}
          <img
            src="https://www.licious.in/img/rebranding/fb_color.png"
            alt=""
          />
        </a>
        <a href="https://twitter.Components/LiciousFoods">
          <img
            src="https://www.licious.in/img/rebranding/twitter_color.png"
            alt=""
          />
        </a>
      </div>

      <div style={{ width: "80%", margin: "auto" }}>
        <hr />
        {/* CITIES WE SERVE */}
        <div className={footer.city}>
          <div style={{ display: "flex" }}>
            <h2
              style={{
                fontWeight: "bold",
                color: "#4a4a4a",
                marginTop: "20px",
              }}
            >
              CITIES WE SERVE
            </h2>
          </div>

          <div style={{ fontSize: "13px", margin: "10px 10px" }}>
            <span>
              <a href="https://www.licious.in/buy-meat-online-bengaluru">
                Bengaluru {}{" "}
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-ncr">NCR</a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-hyderabad">
                Hyderabad
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-chandigarh">
                Chandigarh
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-panchkula">
                Panchkula
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-mohali">Mohali</a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-mumbai">Mumbai</a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-pune">Pune</a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-chennai">
                Chennai
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-coimbatore">
                Coimbatore
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-jaipur">Jaipur</a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-cochin">Cochin</a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-vijayawada">
                Vijayawada
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-visakhapatnam">
                Visakhapatnam
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-kolkata">
                Kolkata
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-lucknow">
                Lucknow
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-kanpur">Kanpur</a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-nagpur">Nagpur</a>
            </span>
            |
          </div>
        </div>
        <hr />
        {/* POPULAR SEARCHES*/}
        <div className={footer.city}>
          <div>
            <h2
              style={{ fontWeight: "bold", margin: "10px 0", color: "#4a4a4a" }}
            >
              POPULAR SEARCHES
            </h2>
          </div>
        </div>
        <hr />

        {/* CHICKEN*/}
        <div className={footer.city}>
          <div>
            <h2
              style={{ fontWeight: "bold", margin: "10px 0", color: "#4a4a4a" }}
            >
              CHICKEN
            </h2>
          </div>
          <div style={{ fontSize: "13px", margin: "10px 0 10px -10px" }}>
            <span>
              <a href="https://www.licious.in/buy-meat-online-bengaluru">
                Chicken Breast (Boneless)
              </a>
            </span>
          </div>
        </div>
        <hr />

        {/* MUTTON*/}
        <div className={footer.city}>
          <div>
            <h2
              style={{ fontWeight: "bold", margin: "10px 0", color: "#4a4a4a" }}
            >
              MUTTON
            </h2>
          </div>
          <div style={{ fontSize: "13px", margin: "10px 0 10px -10px" }}>
            <span>
              <a href="https://www.licious.in/buy-meat-online-bengaluru">
                Premium Lamb Curry Cut
              </a>
            </span>
          </div>
        </div>
        <hr />

        {/* FISH & SEAFOOD*/}
        <div className={footer.city}>
          <div>
            <h2
              style={{ fontWeight: "bold", margin: "10px 0", color: "#4a4a4a" }}
            >
              FISH & SEAFOOD
            </h2>
          </div>
          <div style={{ fontSize: "13px", margin: "10px 0 10px -10px" }}>
            <span>
              <a href="https://www.licious.in/buy-meat-online-bengaluru">
                Basa Fillet - (Platinum Grade)
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-bengaluru">
                Atlantic Salmon Steaks
              </a>
            </span>
            |
          </div>
        </div>
        <hr />

        {/* READY TO COOK*/}
        <div className={footer.city}>
          <div>
            <h2
              style={{ fontWeight: "bold", margin: "10px 0", color: "#4a4a4a" }}
            >
              READY TO COOK
            </h2>
          </div>
          <div style={{ fontSize: "13px", margin: "10px 0 10px -10px" }}>
            <span>
              <a href="https://www.licious.in/buy-meat-online-bengaluru">
                Amritsari Achari Murgh
              </a>
            </span>
          </div>
        </div>
        <hr />

        {/* MEAT MASALA */}
        <div className={footer.city}>
          <div style={{ display: "flex" }}>
            <h2
              style={{
                fontWeight: "bold",
                color: "#4a4a4a",
                marginTop: "20px",
              }}
            >
              MEAT MASALA
            </h2>
          </div>

          <div style={{ fontSize: "13px", margin: "10px 10px" }}>
            <span>
              <a href="https://www.licious.in/buy-meat-online-bengaluru">
                Asli Garam Masala
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-ncr">
                {" "}
                Original Tandoori Chicken Masala
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-hyderabad">
                Shandaar Butter Chicken Masala
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-chandigarh">
                Khansama Biryani Masala
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-panchkula">
                Classic Chicken Masala
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-mohali">
                Classic Meat Masala
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-mumbai">
                Chatpata Fish Fry Masala
              </a>
            </span>
            |
            <span>
              <a href="https://www.licious.in/buy-meat-online-pune">
                {" "}
                Dakshin Pepper Fry Masala
              </a>
            </span>
            |
          </div>
        </div>
        <hr />

        <div className={footer.c}>
          <p> &copy; 2022 Delightful Gourmet Pvt Ltd. All Rights Reserved.</p>
          <p>
            Licious is your one-stop fresh meat delivery shop. In here, you get
            nothing but the freshest meat & seafood, delivered straight to your
            doorstep. Now you can buy meat online anytime at your convenience.
            Indulge in our diverse selection: Chicken, Mutton, Seafood (Fish,
            Prawns, Crabs), Marinades & Cold Cuts. All our products are
            Componentspletely natural and healthy. Once you've experienced
            Licious, you'll never go back to the old way of buying meat and
            seafood.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
