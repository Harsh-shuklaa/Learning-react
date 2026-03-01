import React, { useEffect, useState } from 'react'

const App = () => {
const [num, setNum] = useState(0)
const [num2, setNum2] = useState(100)

function numChanger(){
  setNum(num+1);
}
function num2Changer(){
  setNum2(num2+100);
}
useEffect(()=>{
  console.log("useEffect is running....");
},[num2])
  return (
    <div>
       <h1>{num}</h1>
       <h1>{num2}</h1>
       <button 
       onMouseEnter={numChanger}
       onMouseLeave={num2Changer}
       
       >Click</button>
    </div>
  )
}

export default App
