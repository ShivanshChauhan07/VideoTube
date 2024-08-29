import React from "react";
import "../index.css";
const buttonList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentine",
  "Boxing",
  "Punjabi Song",
  "News",
  "T-Series",
  "Indian pop Music",
  "Hockey",
  "Olympics",
  "God of War",
];

const ButtonList = () => {
  return (
    <div className="btn-list flex justify-around flex-nowrap gap-3 overflow-x-auto">
      {buttonList.map((item) => {
        return (
          <button className=" btn btn-ghost btn-sm bg-gray-100 px-4 my-2">
            {item}
          </button>
        );
      })}
      <div className="absolute right-3 top-[63px]  bg-gradient-to-r from-transparent from-5% to-50%  to-gray-200 w-28 h-9 p-1 px-4 z-0 "></div>
      <button className="absolute right-0 p-1 px-4 top-[63px] text-xl bg-gray-200 z-10">
        <i className="fa-solid fa-arrow-right  text-black"></i>
      </button>
    </div>
  );
};

export default ButtonList;
