import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../utils/screen/login/login";
import Home from "../utils/screen/UnAuth/Home";
import SignUp from "../utils/screen/signup/SignUp";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
