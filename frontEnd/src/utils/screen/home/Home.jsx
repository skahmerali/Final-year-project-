import React, { useContext, useState } from "react";
import Input from "../../../components/input/Input";
import Login from "../login/login";
import { UserContext } from "../../../context/Context";
import SubNav from "../../../components/subnav/SubNav";
// import Card from "../../../components/Card/Card";
import { useNavigate } from "react-router-dom";
// import HomeNews from "../../../components/homeNews/HomeNews";
// import HomeBlog from "../../../components/homeBlog/HomeBlog";
import Blogs from "../blog/Blogs";
import Footer from "../footer/Footer";
import About from "../about/About";
import Contact from "../contact/Contact";

export default function Home() {
  return (
    <div>
      <SubNav />
      <HomeNews />
      <HomeBlog />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
