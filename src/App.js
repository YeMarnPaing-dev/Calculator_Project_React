import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

function App() {
  const [output,setOutput]=useState(0);
  const [input,setInput]=useState(0);

  function clickEvent(value){
    setInput(value)
    setOutput(value)
  if(value == 'C'){
    setInput(0);
    setOutput(0);
  }else if(value=='AC'){
if(input != 0){
     input.length==1 ? setInput(0) :  setInput(input.slice(0, input.length-1));
}
  }else if(value == '='){
       setOutput(eval(input))
       setInput(0);
  }else{
   input == 0 ? setInput(value) : setInput(input + value);
  //  input == '00' ? setInput(value) : setInput(input + value);
  }
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
