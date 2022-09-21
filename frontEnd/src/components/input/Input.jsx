import React from "react";

const Input = ({
  style,
  type,
  value,
  placeholder,
  onChange,
  required,
  name,
}) => {
  return (
    <>
      <input
        className={`w-full text-lg bg-transparent border-b-slate-400
                        py-2 border-b border-gray-300  focus:outline-none
                      focus:border-slate-900 text-black ${style}`}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        name={name}
      />
    </>
  );
};

export default Input;
