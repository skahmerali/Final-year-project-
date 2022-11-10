import React from "react";
import { style } from "../navbar/Style";

const About = ({
  para,
  heading,
  description,
  image,
  showHeadingBorder,
  onClick,
  Descriptionstyle = "",
}) => {
  return (
    <>
      <div
        className="flex xl:h-screen  sm:h-auto  xl:py-24 md:py-0 mt-9 flex-col-reverse md:flex-row"
        onClick={onClick}
      >
        <div className="lg:w-3/5 w-full h-auto lg:py-16 md:py-32 lg:px-5 py- md:px-2 ">
          {para ? <p className="pt-4 text-lg font-semibold">{para}</p> : null}
          <h1
            className={`${
              showHeadingBorder ? `border-b-2  border-secondary-black` : ``
            } mt-6 lg:w-11/12 font-bold text-2xl md:text-3xl lg:text-4xl font-heading text-gray-900 `}
          >
            {heading}
          </h1>
          <p
            className={`lg:mt-20 lg:w-11/12 overflow-hidden h-48 md:mt-16   mt-10 sm:w-full font-normal text-base ${Descriptionstyle}`}
          >
            {description}
          </p>
        </div>
        <div className=" lg:w-2/5 w-full lg:mt-14 sm:py-6 mt-4 lg:p-3   md:mt-24 ">
          <img
            src={image}
            className=" rounded-3xl border-2 w-full h-96 object-cover "
            alt="ssss"
          />
        </div>
      </div>
    </>
  );
};

export default About;
