import React, { useContext, useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";

import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/Context";
import DropDown from "../../../components/dropdown/DropDown";

const item = [
  {
    name: "Teacher",
  },
  {
    name: "Student",
  },
  {
    name: "News",
  },
];

const Signup = () => {
  const navigate = useNavigate();
  const { signData, setSignData } = useContext(UserContext);
  const { token, setToken } = useContext(UserContext);
  const [field, setField] = useState("");
  const handleChange = (e) => {
    setSignData({
      ...signData,
      [e.target.name]: e.target.value,
    });
  };
  const Sign = async (e) => {
    e.preventDefault();
    // setToken(set)
  };

  return (
    <>
      <div className="flex-center">
        <div className=" mt-20 rounded-md px-20 shadow-2xl bg-secondary-white ">
          <h1 className="text-center text-3xl mt-3 font-bold">SignUp</h1>
          {/* <img className=" mt-2 w-16 ml-32" src="logo192.png"></img> */}
          <div className="mt-5">
            <form>
              <div>
                <div className="text-sm font-bold tracking-wide">
                  Email Address
                </div>

                <Input
                  style="w-80"
                  type={"text"}
                  placeholder={"Enter Email"}
                  onChange={handleChange}
                  required
                  name={"Email"}
                />
              </div>
              <div className="mt-7">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold tracking-wide">
                    First Name
                  </div>
                </div>
                <Input
                  type={"text"}
                  placeholder={"Enter First Name"}
                  onChange={handleChange}
                  name={"FirstName"}
                  required
                />
              </div>
              <div className="mt-7">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold tracking-wide">
                    Last Name
                  </div>
                </div>
                <Input
                  type={"text"}
                  placeholder={"Enter Last Name"}
                  onChange={handleChange}
                  name={"LastName"}
                  required
                />
              </div>
              <div className="mt-7">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold tracking-wide">
                    Password
                  </div>
                </div>
                <Input
                  type={"password"}
                  placeholder={"Enter Password"}
                  onChange={handleChange}
                  name={"Password"}
                  required
                />
              </div>
              <DropDown
                style={"mt-4 shadow-md bg-primary-zinc"}
                selectStyle={" border-2"}
                header={"Select Account"}
                items={item}
                handler={setField}
                selected={field}
                captionKey={item.language}
              />
              <div className="mt-7">
                <Button title={"Sign Up"} onClick={Sign} style="" />
                {/* {!loading ? (
                  <Button title={"Login"} onClick={""} style="" />
                ) : (
                  <Loading />
                )} */}
              </div>
            </form>

            <div
              className="mt-4 mr-32 mb-4 text-sm 
              font-display font-semibold "
            >
              Don't have an account ?{" "}
              <Link
                to="/"
                className="cursor-pointer 
                text-indigo-600 hover:text-indigo-800"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
