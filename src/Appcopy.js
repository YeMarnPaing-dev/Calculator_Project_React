import React from 'react'
import './Appcopy.css'
import { useRef } from 'react'

const Appcopy = () => {
  let name= useRef('');
  let email= useRef('');
  let message= useRef('');

  const userData = ()=> {
    const data = {
      userName : name.current.value,
      userEmail : email.current.value,
      userMessage : message.current.value,
    }

    name.current.value = '';
    email.current.value = '';
    message.current.value = '';
    

    console.log(data);
    
  }

  const changeRed = ()=>{
    name.current.style.border = '1px solid red';    
    email.current.style.border = '1px solid red';
    message.current.style.border = '1px solid red';
  }

   const changeBlue = ()=>{
     name.current.style.border = '1px solid blue';    
    email.current.style.border = '1px solid blue';
    message.current.style.border = '1px solid blue';
    
  }
  return (
   <div className='container'>
     <form>
      <div className='form-group'>
        <input type="text" ref={name} className='user-name' placeholder='Enter your name...'/>
      </div>
       <div className='form-group'>
        <input type="email" ref={email} className='email' placeholder='Enter your email...'/>
      </div>
       <div className='form-group'>
        <textarea cols='30' ref={message} rows="10" className='user-message' placeholder='Enter your message...' ></textarea>
      </div>
       <div className='form-group'>
        <button type='button' onClick={()=> userData()}  className='contact-btn'>Create</button>
      </div>
      <div className='form-group'>
        <button type='button' onClick={()=> changeRed()} className='contact-btn btn-danger'>Change Red</button>
        <button type='button' onClick={()=> changeBlue()} className='contact-btn btn-primary'>Change BLue</button>
      </div>
     </form>
   </div>
  )
}

export default Appcopy