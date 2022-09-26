import React, { useState } from "react";

export const SearchBar = () => {
  // const [search, setSearch] = useState();
  return (
    <>
      <div className="flex w-72 h-12  rounded-xl backdrop-blur-md shadow-md">
        <div className="w-auto ">
          <input
            type="search"
            className=" px-4 py-3 text-black rounded-l-xl focus:outline-none"
            placeholder="search"
            x-model="search"
          />
        </div>
        <div>
          <button className="flex-center bg-primary-zinc justify-center w-14 h-12 text-white rounded-r-xl">
            SR
          </button>
        </div>
      </div>
    </>
  );
};
