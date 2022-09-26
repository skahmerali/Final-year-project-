import React from "react";
import Button from "../button/Button";
import Card2 from "../Card/Card2";

const HomeBlog = () => {
  return (
    <>
      <div id="HomeBlogs">
        <h1 className="text-3xl mt-10 font-bold text-center lg:text-4xl uppercase text-secondary-black">
          Blogs
        </h1>
        <div className="px-4 mx-auto  max-w-screen-xl  sm:py-3">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div className=" h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Party"
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                className="  object-cover w-full h-full rounded-lg"
              />
            </div>

            <div className="lg:py-16">
              <article className="text-gray-600 space-y-4">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
              <Button title="Read More" style={"mt-10"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBlog;
