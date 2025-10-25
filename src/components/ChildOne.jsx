import React from "react";
import GrandChild1 from "./GrandChild1";
import "./GrandChild.css";

const ChildOne = ({title}) => {
  return (
    <div>
      ChildOne|
      <span className="red">
        <GrandChild1 title={title}/>
      </span>
    </div>
  );
};

export default ChildOne;
