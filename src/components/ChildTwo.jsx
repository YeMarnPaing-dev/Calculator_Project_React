import React from "react";
import GrandChild2 from "./GrandChild2";
import "./GrandChild.css";

const ChildTwo = () => {
  return (
    <div>
      ChildTwo|{" "}
      <span className="red">
        <GrandChild2 />
      </span>
    </div>
  );
};

export default ChildTwo;
