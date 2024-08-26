import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="border-2 border-green-200 h-full flex flex-grow overflow-hidden">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
