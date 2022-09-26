import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "../utils/screen/blog/Blogs";
import Home from "../utils/screen/home/Home";
import Login from "../utils/screen/login/login";
import Signup from "../utils/screen/signup/SignUp";

const ProtectedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
};

export default ProtectedRoutes;
