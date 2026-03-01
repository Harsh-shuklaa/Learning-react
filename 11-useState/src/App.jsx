import React from "react";
import { useState } from "react";

const App = () => {
  const [users, setusers] = useState(0);

 function btnClick(){

setusers(prev=> prev+1)
setusers(prev=> prev+1)
setusers(prev=> prev+1)
setusers(prev=> prev+1)
 }


return (
  <div>
    <h1>{users}</h1>
    <button onClick={btnClick} >Click</button>
  </div>
);
};
export default App;
