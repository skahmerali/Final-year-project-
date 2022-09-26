import React from "react";
import { style } from "./Style";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";

export default function Navbar() {
  return (
    <>
      <nav className={style.mainNav}>
        <div className={style.subNav}>
          <Link to="/" className="flex items-center">
            {/* <img className="w-10" src="logo.192.png" /> */}

            <span className={style.Head}>SK Tech</span>
          </Link>

          <div className="hidden  md:block md:w-auto" id="navbar-default">
            <ul className={style.ul}>
              <li>
                <Link to="/" className={style.textHome}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Blogs" className={style.text}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/Profile" className={style.text}>
                  Profile
                </Link>
              </li>

              <li>
                <Link to="/Signup" className={style.text}>
                  Sign Up
                </Link>
              </li>

              <li>
                <Link to="/login" className={style.text}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/" className="">
                  <Button
                    title="Log Out"
                    // onClick={logOut}
                    style={`h-9 py-1 w-24 -mt-1 shadow-none`}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
