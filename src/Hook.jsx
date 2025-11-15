import React,{useState, useEffect} from "react";
import "./Hook.css";

const Hook = () => {
    const [posts,setPost] = useState([]);

const fetchData = async () => {
  const data = await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error => console.log(error.message));

   setPost(data)
   console.log(data);
   
     
};

useEffect(()=> {
fetchData();
},[])



    
  return (
    <div>
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
