import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Chicken from "./Chicken";
import Fish from "./Fish";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/fish" element={<Fish />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
