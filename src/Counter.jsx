import React,{useEffect,useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [counter,setCounter] = useState(10)

    useEffect(()=>{
     if(counter >= 0){         
      const interval = setInterval(()=>{setCounter(counter-1)},1000)
       return ()=>{
        clearInterval(interval)
       }      
       }
    },[counter])
  return (
    <div className='container'>
        <h1>{counter}</h1>
    </div>
  )
}

export default Counter