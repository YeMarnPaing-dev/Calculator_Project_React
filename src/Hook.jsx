import React,{useState, useEffect} from "react";
import "./Hook.css";

const Hook = () => {
    const [posts,setPost] = useState([]);

    const [message,setMessage] = useState('THis is Testing message');

const fetchData = async () => {
  const data = await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error => console.log(error.message));

   setPost(data)
   console.log(data);
   
     
};

useEffect(()=> {
    // console.log('This is Testing Message');
    fetchData();
},[message])



    
  return (
    <div>
        <p>{message}</p>
         <button onClick={()=> setMessage('Update text')}>Set Message Button</button>
        
        <h1>Api Post Data</h1>
        <hr />
        {
           posts.map((post,index)=>(
            <li key={post.id}> {post.title}</li>
           ))
         }       
  </div>
  )
  
};

export default Hook;
