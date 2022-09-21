import React, { useState } from "react";
import DropDown from "../dropdown/DropDown";
// import Input from "../input/Input";
import { SearchBar } from "../searchbar/SearchBar";
const item = [
  {
    name: "Dot Net",
  },
  {
    name: "React Js",
  },
  {
    name: "Next Js",
  },
];

const SubNav = () => {
  const [language, setLanguage] = useState("");
  return (
    <>
      <div className="flex-center ">
        <div className="h-28 px-24 py-9 mt-20 bg-primary-HR fixed top-0 left-0 right-0 ">
          <div className="flex flex-row justify-between">
            <div>
              <SearchBar />
            </div>
            <div>
              <DropDown
                header={"Select teacher"}
                items={item}
                handler={setLanguage}
                selected={language}
                captionKey={item.language}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;
