import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="">
        <div className="shadow-xl rounded-xl h-1/4 bg-secondary-white  ">
          <div className="grid grid-cols-2 h-96 ">
            <div className="h-64 overflow-hidden rounded-tl-xl">
              <img
                className="object-cover h-80 w-full"
                src="https://images.freeimages.com/images/small-previews/20c/my-puppy-maggie-1362787.jpg"
              />
            </div>
            <div className="h-64 overflow-hidden rounded-tr-xl">
              <img
                className="object-cover h-44 w-full"
                src="https://images.freeimages.com/images/small-previews/e71/frog-1371919.jpg"
              />
              <img
                className="object-cover h-44 w-full"
                src="https://img.freepik.com/free-photo/beautiful-endangered-american-jaguar-nature-habitat-panthera-onca-wild-brasil-brasilian-wildlife-pantanal-green-jungle-big-cats_475641-2191.jpg?w=1380&t=st=1659969671~exp=1659970271~hmac=09544e5c9ac070a09c464342394c6657fafdd87b4c9772f2d5679a70e20a68e0"
              />
            </div>
          </div>
          {/* <div className="p-3">
            <div className="block md:flex justify-between">
              <div>
                <h3 className="font-medium">Card Title</h3>
                <span className="text-sm text-gray-500">
                  Author Name &bull; author@email.com
                </span>
              </div>

              <div className="">
                <div>
                  <span className="text-sm text-gray-500">
                    01-20-2020 12:30
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Card1;
