import React from "react";
import { Field, ErrorMessage } from "formik";

const FormikInput = ({
  label,
  name,
  type,
  placeholder,
  style,
  ErrorName,
  ErrorStyle,
}) => {
  return (
    <>
      <label>{label}</label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={`relative p-2 bg-gray-100 border ${style}`}
      />
      <ErrorMessage
        component={"span"}
        name={ErrorName}
        className={`text-red ${ErrorStyle}`}
      />
    </>
  );
};

export default FormikInput;
