import React from "react";
import { Link } from "react-router-dom";
const Button = ({ style, disabled, onClick, title, Link }) => {
  return (
    <>
      <button
        type="button"
        className={`bg-primary-zinc text-secondary-white w-36 py-3 
                        rounded-xl tracking-wide font-semibold
                        font-display focus:outline-none shadow-md
                        focus:shadow-outline hover:bg-red-900 ${style}`}
        disabled={disabled}
        onClick={onClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
