import React, { useState } from "react";

export const SearchBar = () => {
  // const [search, setSearch] = useState();
  return (
    <>
      <div className="flex w-72 h-12 rounded-xl jus shadow-xl">
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
          {/* <button type="submit" className="flex items-center bg-blue-500 justify-center w-12 h-12 text-white rounded-r-lg"
                // :className="(search.length > 0) ? 'bg-purple-500' : 'bg-gray-500 cursor-not-allowed'"
                // :disabled="search.length == 0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button> */}
        </div>
      </div>
    </>
  );
};
