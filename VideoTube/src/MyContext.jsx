import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <MyContext.Provider value={{ toggle, setToggle }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
