import React from "react";

const AboutCard = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center space-x-6 mb-4">
          <img
            className="h-28 w-28 object-cover object-center rounded-full"
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            alt="photo"
          />
          <div>
            <p className="text-xl text-gray-700 font-normal mb-1">
              Dany Bailey
            </p>
            <p className="text-base text-blue-600 font-normal">
              Software Engineer
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-400 leading-loose font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
