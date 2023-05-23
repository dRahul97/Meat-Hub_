import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../Pages/Homepage/Homepage";
import { Login } from "../Pages/Login/Login";
import { Register } from "../Pages/Register/Register";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
