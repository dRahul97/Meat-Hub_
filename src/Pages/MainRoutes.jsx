import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage";
import { Login } from "./Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
