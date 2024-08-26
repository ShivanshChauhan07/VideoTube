import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="bg-white flex flex-col h-screen">
      <Header />
      <Body />
    </div>
  );
}

export default App;
