import React from "react";
import AboutCard from "../../../components/Card/AboutCard";

export default function About() {
  return (
    <>
      <div className="py-16 ml-9 rounded-lg mt-44 px-5" id="HomeAbout">
        {/* <!-- component --> */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="w-full text-center pb-8">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 pb-2">
              Find some testimonials about me
            </h1>
            <p className="text-gray-400 font-normal text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>
        </section>
        {/* <h1 className="text-3xl mb-10 font-bold text-center lg:text-4xl uppercase text-secondary-black">
          About us
        </h1>
        <div className="container m-auto px-6 text-secondary-black md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12 transition-all duration-100 lg:hover:scale-95">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                className="rounded-lg "
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-secondary-black font-bold md:text-4xl">
                Nuxt development is carried out by passionate developers
              </h2>
              <p className="mt-6 text-secondary-black">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-secondary-black">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
