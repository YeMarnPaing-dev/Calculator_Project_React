import React,{useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const GrandChild1 = ({title}) => {
  const data = useContext(ThemeContext);
  console.log(data);
  
  return (
    <div>GrandChild1 | {title}</div>
  )
}

export default GrandChild1