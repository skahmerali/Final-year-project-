import React from "react";
import About from "../../../../components/About/About";
import Carousal from "../../../../components/carousal/Carousal";
import { Data } from "../../../../components/carousal/CarousalData";
import Fqa from "../../../../components/Card/Fqa";

const data = {
  para: "who i am",
  heading: " About Me",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. ",
  image: require("../../../image/bg.jpg"),
};

const faqdata = {
  para: "who i am",
  heading: " Frequently Asked Questions",
  subHead: "Our Priorities ",
  description:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.",
  image: require("../../../image/FQA.png"),
};
const Home = () => {
  return (
    <>
      <div className="flex justify-center md:mt-20 mt-28 ">
        <div className=" w-2/3   ">
          <Carousal slides={Data} />
        </div>
      </div>
      <div className=" flex justify-center  ">
        <div className="w-4/6 h-auto mt-0">
          <About
            para={data.para}
            heading={data.heading}
            showHeadingBorder={true}
            description={data.description}
            image={data.image}
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-4/6 h-auto mt-0">
          <Fqa
            showHeadingBorder={false}
            heading={faqdata.heading}
            description={faqdata.description}
            subHeading={faqdata.subHead}
            image={faqdata.image}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
