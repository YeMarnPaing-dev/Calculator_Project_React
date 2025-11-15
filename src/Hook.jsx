import React,{useState} from "react";
import "./Hook.css";

const Hook = () => {
    const [posts,setPost] = useState([]);

const fetchData = async () => {
  const data = await fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch(error => console.log(error.message));

   setPost(data)
     
};

fetchData();

    
  return (
    <div>
        <h1>Api Post Data</h1>
        <hr />
        {
            posts.map((post,index)=>{
                <li key={index}>{post.title}</li>
            })
         }       
  </div>
  )
  
};

export default Hook;
