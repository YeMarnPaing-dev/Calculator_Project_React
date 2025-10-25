import React from 'react'
import './Context.css'
import ChildOne from './components/ChildOne'
import ChildTwo from './components/ChildTwo'
import ChildThree from './components/ChildThree'

const Context = () => {
  return (
    <div>
      <h1>Context</h1>
      <hr />
      <ChildOne/>
      <ChildTwo/>
      <ChildThree/>
    </div>
  )
}

export default Context