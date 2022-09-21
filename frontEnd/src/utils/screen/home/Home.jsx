import React, { useContext, useState } from "react";
import Input from "../../../components/input/Input";
import Login from "../login/login";
import { UserContext } from "../../../context/Context";
import SubNav from "../../../components/subnav/SubNav";
import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import HomeNews from "../../../components/homeNews/HomeNews";
import HomeBlog from "../../../components/homeBlog/HomeBlog";
import Blogs from "../blog/Blogs";

export default function Home() {
  return (
    <div>
      <SubNav />
      <Blogs />
      {/* <div className="mt-20 ml-20 px-2 "> */}
      {/* <h1>skjsjh</h1> */}
      {/* <HomeNews /> */}
      {/* <HomeBlog /> */}
      {/* <Blogs /> */}
      {/* </div> */}
    </div>
  );
}
