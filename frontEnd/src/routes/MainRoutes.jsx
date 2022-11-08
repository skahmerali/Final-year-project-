import React from "react";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoutes = () => {
  return (
    <>
      <PublicRoutes />
      <ProtectedRoutes />
    </>
  );
};

export default MainRoutes;
