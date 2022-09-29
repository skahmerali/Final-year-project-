import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/Context";

const Login = () => {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(loginData);

  const login = (e) => {
    e.preventDefault();
    setLoginData({ email, password });
    return loginData;
  };

  // const handleChange = (e) => {
  //   setLoginData({
  //     ...loginData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <>
      <div className="flex-center ">
        <div className="mt-48 rounded-md px-20 py-2 backdrop-blur-md shadow-lg bg-secondary-white ">
          <h1 className="text-center text-3xl mt-3  font-bold">Login</h1>
          <div className="mt-6">
            <div>
              <div
                className="text-sm font-bold 
                tracking-wide"
              >
                Email Address
              </div>
              <Input
                style="w-80"
                type={"text"}
                placeholder={"Enter Email"}
                onChange={(e) => setEmail(e.target.value)}
                required
                name={"Email"}
              />
            </div>
            <div className="mt-7">
              <div className="flex justify-between items-center">
                <div
                  className="text-sm font-bold 
                tracking-wide"
                >
                  Password
                </div>
              </div>
              <Input
                type={"password"}
                placeholder={"Enter Password"}
                onChange={(e) => setPassword(e.target.value)}
                name={"Password"}
                required
              />
            </div>
            <div className="mt-5">
              <Button title={"Login"} onClick={login} style="" />
            </div>
          </div>
          <div
            className=" text-sm mt-4 mb-3
           font-display font-semibold  "
          >
            Don't have an account ?
            <Link
              to="/SignUp"
              className="cursor-pointer 
             text-indigo-600 hover:text-indigo-800"
            >
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
