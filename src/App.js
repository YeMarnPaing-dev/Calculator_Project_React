import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

function App() {
  const [output,setOutput]=useState(0);
  const [input,setInput]=useState(0);

  function clickEvent(value){
    console.log(value);
         }

 
    
  return (
    <>
      <div className="container">
        <div className="calculator_frame">
        <Output output={output}/>
        <Input input={input}/>
        <Button clickEvent={clickEvent}/>
        </div>
      </div>
    </>
  );
}

export default App;
