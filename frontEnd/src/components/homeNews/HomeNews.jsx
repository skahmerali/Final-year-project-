import React from "react";
import Card from "../Card/Card";
import Card1 from "../Card/Card1";

const HomeNews = () => {
  return (
    <>
      <div className=" mt-36 px-14" id="HomeNews">
        {/* <h1 className=" text-3xl ml-3 font-bold ">News</h1> */}
        {/* <div className="w-6/7  bg-slate-600"></div> */}

        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
          <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
            <div className="max-w-lg md:mx-12 md:order-2">
              <h1 className="text-3xl font-medium tracking-wide text-secondary-black dark:text-secondary-black md:text-4xl">
                The best Apple Watch apps
              </h1>
              <p className="mt-4 text-secondary-black">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                quia asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="block px-3 py-2 font-semibold text-center text-secondary-black transition-colors duration-200 transform bg-primary-zinc rounded-md md:inline hover:bg-blue-400"
                >
                  Visit Now
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-5/6  md:w-1/2">
            <img
              className="object-cover w-full h-full  max-w-3xl rounded-md"
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              alt="apple watch photo"
            />
          </div>
        </div>
        {/* </header> */}
      </div>
    </>
  );
};

export default HomeNews;
