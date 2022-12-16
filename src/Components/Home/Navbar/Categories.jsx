import React from "react";
import { Link } from "react-router-dom";
import navStyle from "../Navbar/navbar.module.css";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Divider,
} from "@chakra-ui/react";

const Categories = () => {
  return (
    <>
      <img
        style={{ marginRight: "-45px" }}
        src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg"
        alt="categories logo"
      />
      <Menu>
        <MenuButton className={navStyle.btnColor}>Categories</MenuButton>
        <MenuList
          className={navStyle.overflow}
          style={{ overflowY: "scroll", height: "510px", padding: "10px" }}
        >
          <Link to={"/"}>
            <MenuItem minH="55px" width="280px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png"
                alt="Simon the pensive"
                mr="12px"
              />
              <span>Today's Deals</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/chicken"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Chicken</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Fish & Seafood</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png"
                alt="Fluffybuns the destroyer"
                mr="12px"
              />
              <span>Mutton</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png"
                mr="12px"
              />
              <span>Ready to Cook</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png"
                mr="12px"
              />
              <span>Prawns</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png"
                mr="12px"
              />
              <span>Cold Cuts</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png"
                mr="12px"
              />
              <span>Spreads</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png"
                mr="12px"
              />
              <span>Eggs</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/189690c6-c9d5-2441-938b-6c7e124972c7/original/Biryani.png"
                mr="12px"
              />
              <span>Biryani & Kebab</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/fe100e84-9e15-c179-ecca-7cde26af9969/original/PBM_6_(7).png"
                mr="12px"
              />
              <span>Plant Based Meat</span>
            </MenuItem>
          </Link>
          <Divider />
          <Link to={"/fish"}>
            <MenuItem minH="55px">
              <Image
                boxSize="2rem"
                borderRadius="full"
                src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f8280057-1010-7378-c66e-dd35a1782741/original/Masala_180x180_App.png"
                mr="12px"
              />
              <span>Meat Masala</span>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default Categories;
