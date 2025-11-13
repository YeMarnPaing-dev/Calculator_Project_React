import React from "react";
import "./Context.css";
import ChildOne from "./components/ChildOne";
import ChildTwo from "./components/ChildTwo";
import ChildThree from "./components/ChildThree";
import ThemeContext from "./context/ThemeContext";

const Context = () => {
  return (
    <div>
      <h1>Context</h1>
      <hr />

      <ThemeContext.Provider value={"this is testing message from root"}>
        <ChildOne  />
        <ChildTwo />
        <ChildThree />
      </ThemeContext.Provider>
    </div>
  );
};

export default Context;
