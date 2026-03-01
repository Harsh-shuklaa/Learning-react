import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const btnClick = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list" );

    setData(response.data)
  };
  return (
    <div>
      <button onClick={btnClick}>Click</button>
     {
      data.map((elem,idx)=>{
       return <h1>{elem.author}{idx}</h1>
      })
     }
    </div>
    
  );
};

export default App;
