import React from "react";
import Navbar from "./Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ShopByCategory from "./ShopByCategory";
import knowLiciousWay from "../Images/Know-the-licious-way.jpg";
import ExploreByCategory from "./ExploreByCategory";
import CheckoutOutBlog from "./CheckoutOutBlog";
import SlideShow from "./SlideShow";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  const sliderImages = [
    {
      id: 1,
      image:
        "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Navbar />
      <hr />
      <div style={{ paddingTop: "100px" }}>
        <Slider {...settings} w={"100vw"}>
          {sliderImages.map((item) => (
            <div className="card">
              <img src={item.image} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <ShopByCategory />
      <div>
        <img src={knowLiciousWay} alt="" />
      </div>
      <div
        style={{
          display: "flex",
          // border: "1px solid",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://dao54xqhg9jfa.cloudfront.net/OMS-StaticBanner/a5372f18-3f0a-a801-0160-cb20957f3acd/original/static-bank-units-nov-web.jpg?format=webp"
          alt=""
        />
      </div>
      <ExploreByCategory />
      <CheckoutOutBlog />
      <div
        style={{
          display: "flex",
          // border: "1px solid",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34bff287c9"
          alt=""
        />
      </div>
      <div>
        <SlideShow />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
