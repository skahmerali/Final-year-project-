import React from "react";
import { Field, ErrorMessage } from "formik";

const FormikDropdown = ({
  name,
  FieldStyle,
  Select,
  data,
  ErrorName,
  ErrorStyle,
}) => {
  return (
    <>
      <Field
        as="select"
        name={name}
        className={`relative p-2 bg-gray-100 border${FieldStyle}`}
      >
        <option disabled value="">
          {Select}
        </option>
        {data.map((option) => {
          return <option key={option.value}>{option.value}</option>;
        })}
      </Field>
      <ErrorMessage
        component={"span"}
        name={ErrorName}
        className={`text-red ${ErrorStyle}`}
      />
    </>
  );
};

export default FormikDropdown;
