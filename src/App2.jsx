import React from 'react'
import './App2.css'

const App2 = () => {

  const programminLanguages =['PHP','Java','Python','C#','C++'];
   return (
   <div className='container'>
     <form>
      <div className='form-group'>
        <input type="text"  className='user-name' placeholder='Enter your name...'/>
      </div>
       <div className='form-group'>
        <input type="email"  className='email' placeholder='Enter your email...'/>
      </div>
       <div className='form-group'>
        <textarea cols='30'  rows="10" className='user-message' placeholder='Enter your message...' ></textarea>
      </div>
      <div className="form-group">
        <select name=""className="user-option">
         {
          programminLanguages.map((item, index) => 
            <option key={index} value={item} >{item}</option>
          )
         }
        </select>
      </div>

       <div className="form-group">
       <input type="checkbox" name="" className='user-checkbox'  />I accept all terms 
      </div>
       <div className='form-group'>
        <button type='button'  className='contact-btn'>Create</button>
      </div>
     </form>
   </div>
  )
}

export default App2