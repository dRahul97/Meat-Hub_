import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import shopCategory from "../Home/ShopByCategory.module.css";

const ExploreByCategoryImages = [
  {
    id: 1,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/cb6e4eb8-6aec-7872-1638-0c2cf7970b71/original/Todays_Deals.png",
    title: "Today's Deals",
  },
  {
    id: 2,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/34466dbd-a515-edd1-3e99-05000f217cb6/original/Chicken_(2).png",
    title: "Chicken",
  },
  {
    id: 3,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/caac432f-545f-f03f-ce10-3b911916da70/original/FIsh_(1).png",
    title: "Fish & Seafood",
  },
  {
    id: 4,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3a3d173d-5537-dafc-0be4-dec0791dcd24/original/MUT.png",
    title: "Mutton",
  },
  {
    id: 5,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/21653c3a-4d6d-da71-2432-6833b88e9629/original/RC.png",
    title: "Ready to Cook",
  },
  {
    id: 6,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f4053965-f199-80a0-2551-d85d712574e2/original/Prawn_(2).png",
    title: "Prawns",
  },
  {
    id: 7,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/49a8dd0c-7254-0b89-b348-b57281c76f5a/original/Coldcuts_(2).png",
    title: "Cold Cuts",
  },

  {
    id: 8,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d9a97969-ebd7-977c-e676-b343a18d7318/original/SPD.png",
    title: "Spreads",
  },
  {
    id: 9,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1bd08fae-c971-390a-ce8a-6f6502f5bd0d/original/Eggs_(1).png",
    title: "Eggs",
  },
  {
    id: 10,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/0b7ccd0f-0811-c38b-5420-0317c8006bda/original/Biryani_(2).png",
    title: "Biryani & Kebab",
  },
  {
    id: 11,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/66e49926-d949-dfb3-2e79-8052d07f0a3b/original/PBM_6_(8).png",
    title: "Plant Based Meat",
  },
  {
    id: 12,
    image:
      "https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3f37d093-81cf-3c66-115a-2a4575420d68/original/Masala_1200x840_web.png",
    title: "Meat Masala",
  },
];

const ExploreByCategory = () => {
  return (
    <>
      <div
        className={shopCategory.mainDiv}
        style={{ fontFamily: "Lato !important" }}
      >
        <h2 className={shopCategory.h2}>Explore by categories</h2>

        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4, "2xl": 4 }}
          spacing="50px"
          gap="20px"
          borderRadius="10px"
        >
          {ExploreByCategoryImages.map((item) =>
            item.title === "Chicken" ? (
              <Link to={"/chicken"}>
                <Box height="250px" w="260px">
                  {" "}
                  <img
                    className={shopCategory.images}
                    src={item.image}
                    alt=""
                  />
                  <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
                    {item.title}
                  </h1>
                </Box>
              </Link>
            ) : (
              <Box height="250px" w="260px">
                {" "}
                <img className={shopCategory.images} src={item.image} alt="" />
                <h1 style={{ textAlign: "center", paddingTop: "10px" }}>
                  {item.title}
                </h1>
              </Box>
            )
          )}
        </SimpleGrid>
      </div>
    </>
  );
};

export default ExploreByCategory;
