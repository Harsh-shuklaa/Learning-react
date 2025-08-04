//https://jsonplaceholder.typicode.com/posts

// import React, { useEffect, useState } from "react";
import { useFetch } from "./hooks/useCurrencyInfo";

const App = () => {
  // const [data, setData]=useState([])

  const {data , loading , error} = useFetch("https://jsonplaceholder.typicode.com/posts")
 

if(loading) {
  return <h2>Loading...</h2>
}

if(error){
  return <h2>Error: {error}</h2>
}
  return <div>
    <div><h1>Posts</h1></div>

   <ul>
    {
data.map((elem)=>{
 return (<li key={elem.id}>{elem.title}</li> )
 
})
}
   </ul>


  </div>;
};

export default App;
