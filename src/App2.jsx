import { useState } from 'react';
import './App2.css'

const App2 = () => {
  const [name,setName] = useState('')
   const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
     const [option,setOption] = useState('')
      const [checkbox,setCheckbox] = useState('')

  const programminLanguages =['PHP','Java','Python','C#','C++'];

  const submitEvent = ()=>{
    const data ={
      name:name,
      email:email,
      message:message,
      option:option
    }
    console.log(data);
    
  }
  
   return (
   <div className='container'>
     <form>
      <div className='form-group'>
        <input type="text"  onChange={(e)=>setName(e.target.value)}  className='user-name' placeholder='Enter your name...'/>
      </div>
       <div className='form-group'>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}  className='email' placeholder='Enter your email...'/>
      </div>
       <div className='form-group'>
        <textarea cols='30' onChange={(e)=>setMessage(e.target.value)}   rows="10" className='user-message' placeholder='Enter your message...' ></textarea>
      </div>
      <div className="form-group">
        <select onChange={(e)=>setOption(e.target.value)} name=""  className="user-option">
         {
          programminLanguages.map((item, index) => 
            <option key={index} value={item} >{item}</option>
          )
         }
        </select>
      </div>

       {/* <div className="form-group">
       <input type="checkbox"  name="" className='user-checkbox' onChange={(e)=>setCheckbox(e.target.value)}/>I accept all terms 
      </div> */}
       <div className='form-group'>
        <button type='button' onClick={ ()=>submitEvent()} className='contact-btn'>Create</button>
      </div>
     </form>
   </div>
  )
}

export default App2