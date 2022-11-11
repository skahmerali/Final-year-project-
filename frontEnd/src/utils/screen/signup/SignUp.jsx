import React, { useContext, useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../../../context/Context";
import { SignupValues, signUpValidation } from "../../../components/yup/Yup";
import FormikInput from "../../../components/input/FormikInput";
import FormikDropdown from "../../../components/dropdown/FormikDropdown";

const item = [
  {
    value: "Teacher",
  },
  {
    value: "Student",
  },
  {
    value: "News",
  },
];
const items = [
  {
    value: "Male",
  },
  {
    value: "Female",
  },
  {
    value: "Other",
  },
];
const country = [
  {
    value: "PK +92",
    numStart: "+92",
  },
  {
    value: "US +1",
    numStart: "+1",
  },
  {
    value: "UK +44",
    numStart: "+44",
  },
];

const Signup = () => {
  const { signData, setSignData } = useContext(UserContext);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  console.log({ signData });

  // const found = country.find((obj) => {
  //   return obj.name === signData.phone;
  // });
  // console.log({ found });

  const handleSignUp = () => {
    // navigate("/Login");
  };
  return (
    <div className="">
      {/* <div className="fixed top-0 w-full h-screen">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          // src={loginImg}
          alt="/"
        />
      </div> */}
      {/* <div className="absolute w-full"> */}
      <div className="flex h-auto items-center justify-center ">
        <Formik
          initialValues={SignupValues}
          validationSchema={signUpValidation}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            const { code, contactNumber, ...data } = values;
            const num = "(" + code + ")" + contactNumber;
            alert(JSON.stringify({ ...data, num }, null, 2));
            setSignData({ ...data, num });
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          <Form className=" mt-24 rounded-md  xl:w-1/3 py-2 px-14 shadow-2xl bg-secondary-white">
            <h2 className="py-2 text-4xl font-bold text-center">Sign Up</h2>
            {/* <div className="flex justify-between py-8">
              <p className="relative flex items-center px-6 py-2 border shadow-lg hover:shadow-xl">
                <AiFillFacebook className="mr-2" /> Facebook
              </p>
              <p className="relative flex items-center px-6 py-2 border shadow-lg hover:shadow-xl">
                <FcGoogle className="mr-2" /> Google
              </p>
            </div> */}
            <div className="flex flex-col mb-3">
              <FormikInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                ErrorName="email"
              />
            </div>

            <div className="flex flex-col mb-3">
              <FormikInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="First Name"
                ErrorName="firstName"
              />
            </div>

            <div className="flex flex-col mb-3">
              <FormikInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                ErrorName="lastName"
              />
            </div>

            <div className="flex flex-col mb-3">
              <FormikInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                ErrorName="password"
              />
            </div>

            <div className="flex justify-between mt-5">
              <div className="flex flex-col mb-3">
                <FormikDropdown
                  name="gender"
                  Select=" Select Gender"
                  data={items}
                  ErrorName="gender"
                />
              </div>
              <div className="flex flex-col mb-3">
                <FormikDropdown
                  name="role"
                  Select="Select Option"
                  data={item}
                  ErrorName="role"
                />
              </div>
            </div>
            <div className="flex justify-between  gap-2 mt-2 ">
              <div className="flex w-fit flex-col mb-0">
                <FormikDropdown
                  name="code"
                  Select="Country"
                  data={country}
                  ErrorName="code"
                />
              </div>

              <div className="flex w-4/6 flex-col mb-3 ">
                <FormikInput
                  name="contactNumber"
                  type="number"
                  placeholder="Phone Number"
                  ErrorName="contactNumber"
                />
              </div>
            </div>
            <div className="mt-4 w-16">
              <Button title="Login" type="submit" onClick={handleSignUp} />
            </div>
            <div
              className=" text-sm mt-4 mb-3
            font-display font-semibold  "
            >
              Have an account ?
              <Link
                to="/Login"
                className="cursor-pointer 
              text-indigo-600 hover:text-indigo-800"
              >
                {" "}
                Login
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    // </div>
  );
};

export default Signup;
