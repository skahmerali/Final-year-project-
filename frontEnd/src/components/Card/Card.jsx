import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const Card = ({
  cardStyle,
  imageStyle,
  headTextStyle,
  cardInner,
  headText,
  DescriptionStyle,
  descriptionText,
  buttonStyle,
  buttonTitle,
  onClick,
  image,
  girdStyle,
}) => {
  return (
    <>
      <div
        //  className={`grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 ${girdStyle}`}
        className={`grid ${girdStyle}`}
      >
        <div>
          <div
            className={`m-2  bg-secondary-white rounded-xl shadow-xl md:flex md:max-w-md lg:flex lg:max-w-2xl ${cardStyle}`}
          >
            <img
              src={image}
              // src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              className={` lg:w-2/6 rounded-l-xl ${imageStyle}`}
            />
            <div>
              <div className={`p-6 ${cardInner} `}>
                <h2 className={`mb-1 text-2xl font-bold ${headTextStyle}`}>
                  {headText}
                </h2>
                <p className={`${DescriptionStyle}`}>{descriptionText}</p>
              </div>

              <Button
                title={buttonTitle}
                onClick={onClick}
                style={`h-9 py-1 w-24 ml-6 mb-2 -mt-4 text-center shadow-none ${buttonStyle}`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
