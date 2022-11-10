import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousal = ({ slides }) => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      infiniteLoop
    >
      {slides.map((slide, ind) => {
        return (
          <img
            src={slide.image}
            key={ind}
            height="40%"
            className="rounded-lg"
            alt="sss"
          />
        );
      })}
    </Carousel>
  );
};

export default Carousal;
