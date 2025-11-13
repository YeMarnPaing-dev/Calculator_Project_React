import React,{useContext} from "react";
import GrandChild1 from "./GrandChild1";
import "./GrandChild.css";
import ThemeContext from "../context/ThemeContext";

const ChildOne = ({title}) => {
  const contextData = useContext(ThemeContext)
  console.log(contextData);
  
  return (
    <div className={contextData == 'dark' ? 'bg-dark' : 'bg-white'}>
      ChildOne|
      <span className="red">
        <GrandChild1 />
      </span>
    </div>
  );
};

export default ChildOne;
