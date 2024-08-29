import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className=" h-full flex flex-grow overflow-hidden">
      <SideBar />
      <MainContainer />
    </div>
  );
};

export default Body;
