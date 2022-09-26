import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeNews from "../components/homeNews/HomeNews";
import About from "../utils/screen/about/About";
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
        <Route path="/about" element={<About />} />

        {/* <Route path="/HomeNews" element={<HomeNews />} /> */}
      </Routes>
    </>
  );
};

export default ProtectedRoutes;
