import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/Context";
import { Formik, Form } from "formik";
import { signinValidation, SigninValues } from "../../../components/yup/Yup";
import FormikInput from "../../../components/input/FormikInput";

const Login = () => {
  // const SigninValues = { email: "", password: "" };
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(UserContext);
  console.log({ loginData });

  const handlelog = () => {
    // navigate("/Signup");
  };

  return (
    <>
      <div className="flex h-auto items-center justify-center ">
        <Formik
          initialValues={SigninValues}
          validationSchema={signinValidation}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            setLoginData(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          <Form className=" mt-36 rounded-md xl:w-1/3 lg:w-5/12 md:w-7/12 w-4/5  py-3 px-12 shadow-2xl bg-secondary-white">
            <h2 className="py-0 text-4xl font-bold text-center">Login</h2>
            {/* <div className="flex justify-between py-8">
              <p className="relative flex items-center px-6 py-2 border shadow-lg hover:shadow-xl">
                <AiFillFacebook className="mr-2" /> Facebook
              </p>
              <p className="relative flex items-center px-6 py-2 border shadow-lg hover:shadow-xl">
                <FcGoogle className="mr-2" /> Google
              </p>
            </div> */}
            <div className="flex flex-col mb-4 mt-4">
              <FormikInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                ErrorName="email"
              />
            </div>

            <div className="flex flex-col mb-8">
              <FormikInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                ErrorName="password"
              />
            </div>

            <div className="mt-4 w-16">
              <Button title="Login" type="submit" onClick={handlelog} />
            </div>
            <div
              className=" text-sm mt-4 mb-3
            font-display font-semibold  "
            >
              Have an account ?
              <Link
                to="/Signup"
                className="cursor-pointer 
              text-indigo-600 hover:text-indigo-800"
              >
                {" "}
                SignUp
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
