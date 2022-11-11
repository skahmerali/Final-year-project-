import { yupToFormErrors } from "formik";
import * as Yup from "yup";
import "yup-phone";

export const SigninValues = { email: "", password: "" };
export const SignupValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  contactNumber: "",
  // number: "",
  // cont: "",
  code: "",
  role: "",
  gender: "",
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// export const signinValidation = Yup.object().shape({
//   email: Yup.string()
//     .email("Please enter valid email")
//     .required("Email Address is Required"),
//   password: Yup.string()
//     .min(8, ({ min }) => `Password must be at least ${min} characters`)
//     .required("Password is required"),
// });

export const signinValidation = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: Yup.string().min(8).required("Please enter Password"),
});
export const signUpValidation = Yup.object({
  firstName: Yup.string().min(4).max(30).required("This Field is required"),
  lastName: Yup.string().min(4).max(30).required("This Field is required"),
  contactNumber: Yup.string().required("required"),
  // contactNumber: Yup.string()
  //   .required("required")
  //   .matches(phoneRegExp, "Phone number is not valid"),
  gender: Yup.string().required("required"),
  role: Yup.string().required("required"),
  code: Yup.string().required("required"),
  // contactNumber: Yup.number()
  //   .typeError("That doesn't look like a phone number")
  //   .positive("A phone number can't start with a minus")
  //   .integer("A phone number can't include a decimal point")
  //   .min(8)
  //   .required("A phone number is required"),

  // .phone("US", "Please enter a valid phone number")
  // .required("A phone number is required"),
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(5, ({ min }) => `Passowrd must be at least ${min} characters`)
    .max(30, ({ max }) => `Passowrd must be at least ${max} characters`)
    .required("Password is required"),

  // confirmPassword:yupToFormErrors.string().required().oneOf([Yup.ref('password'),null,"Password must match"])
});
