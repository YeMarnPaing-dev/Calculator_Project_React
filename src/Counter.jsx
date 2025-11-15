import React,{useEffect,useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [counter,setCounter] = useState(10)

    useEffect(()=>{
        setCounter(--counter)
    })
  return (
    <div className='container'>
        <h1>{counter}</h1>
    </div>
  )
}

export default Counter