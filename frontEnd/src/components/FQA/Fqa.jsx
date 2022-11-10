import React from "react";
import Button from "../button/Button";

const Fqa = ({
  para,
  heading,
  description,
  image,
  showHeadingBorder,
  onClick,
  subHeading,
  Descriptionstyle = "",
}) => {
  return (
    <>
      <div
        className="flex xl:h-screen  sm:h-auto  py-0 flex-col-reverse md:flex-row"
        onClick={onClick}
      >
        <div className="lg:w-3/5 w-full h-auto  xl:mt-0 md:mt-0 px-5 ">
          {para ? <p className="text-lg font-semibold">{para}</p> : null}
          <h1
            className={`${
              showHeadingBorder ? `border-b-2  border-secondary-black` : ``
            } mt-6 lg:w-11/12 font-bold text-2xl md:text-3xl lg:text-4xl font-heading pb-2`}
          >
            {heading}
          </h1>
          {subHeading ? (
            <p className="text-2xl mt-4 font-bold">{subHeading}</p>
          ) : null}
          <p
            className={`lg:mt-3 lg:w-11/12 overflow-hidden h-36 md:mt-2   mt-4 sm:w-full font-normal text-base ${Descriptionstyle}`}
          >
            {description}
          </p>
          <Button title="Read More" style={"w-32 h-12 mt-4"} />
        </div>
        <div className=" lg:w-2/5 w-full lg:mt-0 sm:py-6 mt-6  lg:p-3   md:mt-0 ">
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

export default Fqa;
