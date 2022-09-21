import React from "react";

const DropDown = ({
  style,
  handler,
  items,
  selected,
  selectStyle,
  // disable,
  // captionKey,
  header,
}) => {
  // console.log({ captionKey });
  return (
    <>
      <div className={`relative inline-flex rounded-xl shadow-xl ${style}`}>
        <svg
          className="w-3 h-4 absolute top-0 right-0 m-4 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 412 232"
        >
          <path
            d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
            fill="#648299"
          />
        </svg>
        <select
          // disabled={disable}
          onChange={(e) => handler(e.target.value)}
          value={selected}
          className={`rounded-xl h-12 pl-5 pr-16 cursor-pointer  hover:border-primary-zinc focus:outline-none appearance-none ${selectStyle}`}
        >
          <option value="" className="optionList" disabled>
            {header}
          </option>
          {items.map((item, ind) => (
            <option className="optionList" key={ind}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DropDown;
