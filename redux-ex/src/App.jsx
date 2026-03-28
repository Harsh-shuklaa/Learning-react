import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./features/counterSlice";

const App = () => {

  const [num, setNum] = useState(5)
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        Increase By Amount
      </button>

      <input type="number" 
      value={num}
      onChange={(e)=>{
setNum(e.target.value)
      }}/>
    </div>
  );
};

export default App;
