import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext";

const Header = () => {
  const { toggle, setToggle } = useContext(MyContext);
  return (
    <div className="grid grid-flow-col px-4 py-3 shadow-lg">
      <div className=" h-8 flex col-span-1">
        <img
          className="max-h-full cursor-pointer  p-1 hover:bg-gray-200 hover:rounded-full"
          src="../../hum.png"
          alt=""
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        <img className="max-h-full mx-2" src="../../Logo.png" alt="VideoTube" />
      </div>
      <div className="h-8 col-span-10 text-center">
        <input
          className="w-1/2 input input-bordered input-sm rounded-r-none bg-white border-gray-400"
          type="text"
        />
        <button className="btn btn-primary btn-sm text-white rounded-l-none">
          {" "}
          Search
        </button>
      </div>
      <div className="h-8 col-span-1 justify-self-end">
        <img className="max-h-full" src="../../login.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
