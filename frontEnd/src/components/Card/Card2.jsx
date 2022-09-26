import React from "react";

const Card2 = () => {
  return (
    <>
      <div class="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div class="card">
          <div class="card-header mx-4 -mt-6">
            <a
              href="https://www.material-tailwind.com"
              blur-shadow-image="true"
            >
              <img
                class="w-auto rounded-lg"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="tailwind-card-image"
              />
            </a>
          </div>
          <div class="card-body">
            <a href="#">
              <h4 class="font-semibold">Material Design 3</h4>
            </a>
            <p class="opcacity-60 mb-4">
              The time is now for it to be okay to be great. People in this
              world shun people for being great. For being a bright color. For
              standing out.
            </p>
            <button class="button button-pink" data-ripple-light="true">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
