import React from "react";
import { style } from "./Style";
// import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { FaAlignJustify, FaRegWindowClose } from "react-icons/fa";

const MENU_ITEMS = [
  { id: "/", label: "Home" },
  { id: "News", label: "News" },
  { id: "AboutUs", label: "About Us" },
  { id: "Contact", label: "Contact Us" },
  { id: "Blogs", label: "Blogs" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="flex ">
        <div
          className="flex py-4  md:mx-auto md:justify-around justify-center bg-secondary-white/90  border-b
         border-primary-zinc backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10"
        >
          {/* <!-- Logo --> */}

          <h3 className="text-2xl uppercase font-bold text-primary-zinc">
            SK tech
          </h3>

          {/* <!-- Links Section --> */}

          <div className="flex w-1/2  flex-row-reverse  md:flex  md:w-max md:flex-row ">
            <ul className="items-center hidden active:text-red space-x-8 md:flex md">
              {MENU_ITEMS?.map((item, ind) => {
                return (
                  <NavLink
                    to={item.id}
                    key={ind}
                    className={({ isActive }) =>
                      isActive
                        ? "underline ring-offset-8 decoration-2 decoration-primary-zinc underline-offset-8"
                        : undefined
                    }
                  >
                    <li className={style.list}>{item.label}</li>
                  </NavLink>
                );
              })}
            </ul>
          </div>

          {/* <!-- Login --> */}
          <div className="flex items-center">
            <button
              className={`block  cursor-pointer rounded border border-solid border-transparent bg-transparent px-2 py-1 
              text-xl leading-none outline-none focus:outline-none md:hidden md:px-3 lg:hidden ${
                navbarOpen && "hidden"
              }`}
              type="button"
              onClick={() => setNavbarOpen(true)}
            >
              <FaAlignJustify className="h-5 w-5" />
            </button>

            <NavLink
              to="/login"
              className="flex text-secondary-black  
              cursor-pointer transition-colors duration-300 font-semibold"
            >
              <button className="w-28 h-9  bg-primary-zinc ">Login</button>
            </NavLink>
          </div>
        </div>
      </nav>

      {navbarOpen ? (
        <>
          <div className="items-center relative">
            <div
              className={`
            "fixed mt-20 w-5/6 sm:items-center sm:mt-28 md:hidden -z-40 m-0 p-0  transition-all duration-1000 "
            ${
              (navbarOpen && "top-0  left-0 w-7/12 ",
              !navbarOpen && "-left-full w-6/12")
            }`}
            >
              <div className="absolute right-9 -top-3 ">
                <button
                  onClick={() => setNavbarOpen(false)}
                  className="cursor-pointer mt-10"
                >
                  <FaRegWindowClose className="h-5 w-5  text-black" />
                </button>
              </div>
              <ul className="flex list-none justify-center flex-col pt-6 ">
                {MENU_ITEMS?.map((item, ind) => {
                  return (
                    <NavLink
                      to={item.id}
                      className={({ isActive }) =>
                        isActive
                          ? "underline text-red-600 ring-offset-8 decoration-2 decoration-primary-zinc underline-offset-8"
                          : undefined
                      }
                    >
                      <li
                        className="mx-auto flex sm:w-11/12 items-center ml-16 sm:ml-24  justify-center divide-y border-b-2 border-solid p-4 active:text-primary"
                        key={ind}
                      >
                        {item.label}
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
