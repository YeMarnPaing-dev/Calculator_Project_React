import React from "react";
import GrandChild1 from "./GrandChild1";
import "./GrandChild.css";

const ChildOne = () => {
  return (
    <div>
      ChildOne|{" "}
      <span className="red">
        <GrandChild1 />
      </span>
    </div>
  );
};

export default ChildOne;
