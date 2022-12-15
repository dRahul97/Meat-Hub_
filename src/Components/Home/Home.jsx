import React from "react";
import Navbar from "./Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const sliderImages = [
    {
      id: 1,
      image:
        "https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34bff287c9",
    },
    {
      id: 2,
      image:
        "https://d2407na1z3fc0t.cloudfront.net/Slider/banner_63630e9d6ba0e",
    },
    {
      id: 3,
      image:
        "https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34bff287c9",
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
      <div style={{ paddingTop: "80px" }}>
        <Slider {...settings}>
          {sliderImages.map((item) => (
            <div className="card">
              <img src={item.image} alt="" />
              <h1>Image {item.id}</h1>
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ paddingTop: "80px" }}>
        <Slider {...settings}>
          {sliderImages.map((item) => (
            <div className="card">
              <img src={item.image} alt="" />
              <h1>Image {item.id}</h1>
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ paddingTop: "80px" }}>
        <Slider {...settings}>
          {sliderImages.map((item) => (
            <div className="card">
              <img src={item.image} alt="" />
              <h1>Image {item.id}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default Home;
