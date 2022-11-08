import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../utils/screen/UnAuth/Home";

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
