import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SlideShowImages = [
  {
    id: 1,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae",
    title:
      "Licious Is India's First Animal Protein Brand to be Certified With SA8000",
  },
  {
    id: 2,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/35/inthenews_62aadde78bdae",
    title: "Licious announces continuous liquidity of ESOPs from 2022",
  },
  {
    id: 3,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/37/inthenews_62aae0b741820",
    title: "Why Licious wants to become the everything store for meat",
  },
  {
    id: 4,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/38/inthenews_62aae10540001",
    title: "India’s Licious becomes unicorn with $52 million fresh fundraise",
  },
  {
    id: 5,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/39/inthenews_62aae1c5de08e",
    title:
      "They slayed COVID, went on to build a unicorn: Meet the founders of Licious",
  },
  {
    id: 6,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e",
    title:
      "Licious founders on building a unicorn startup based on what the consumer wants",
  },
  {
    id: 7,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/40/inthenews_62aae21e9a38e",
    title:
      "Licious founders on building a unicorn startup based on what the consumer wants",
  },

  {
    id: 8,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/42/inthenews_62aae2a6d9bc4",
    title: "Licious wants you to eat more meat",
  },
  {
    id: 9,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/43/inthenews_62aae2dadd8aa",
    title: "Licious pledges to be ESG compliant in the next 12 months",
  },
  {
    id: 10,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/44/inthenews_62aae32108c39",
    title:
      "Online meat startup Licious unveils ads featuring Anil Kapoor, Arjun Kapoor",
  },
  {
    id: 11,
    image:
      "https://d2407na1z3fc0t.cloudfront.net/inTheNews/45/inthenews_62aae4c4d8331",
    title: "Faster Chef Treats  Uninvited Friends With Licious",
  },
];

const SlideShow = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h1 style={{ fontSize: "22px", color: "#4a4a4a", fontWeight: "bold" }}>
        In The News
      </h1>
      <Carousel responsive={responsive}>
        {SlideShowImages.map((item) => (
          <div style={{ height: "270px" }}>
            <div
              style={{
                background: "#fff",
                boxShadow: "0 0.79px 3.16px rgb(0 0 0 / 20%)",
                borderRadius: "5.52px",
                width: "95%",
                height: "170px",
                objectFit: "contain",
                marginTop: "3px",
                padding: "8px",
              }}
            >
              <img
                style={{
                  height: "80%",
                  width: "90%",
                  margin: "auto",
                  marginTop: "15px",
                }}
                src={item.image}
                alt={item.title}
              />
            </div>
            <h2
              style={{
                position: "absolute",
                top: "65%",
                fontWeight: "bold",
                fontFamily: "lato !important",
              }}
            >
              {item.title}
            </h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideShow;
