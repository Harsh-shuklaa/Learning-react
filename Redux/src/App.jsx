import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement,incrementByamount } from './Feature/CounterSlice';

const App = () => {
  const [num, setNum] = useState(5)

  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value)
  return (
    <div>

    <h1>{count}</h1>

    <button onClick={()=>{
      dispatch(increment())
    }}>
      Increase
      </button>
      <button onClick={()=>{
      dispatch(decrement())
    }}>
Decrease
      </button>
      <button
      onClick={()=>{
      dispatch(incrementByamount(Number(num)))
    }}>Increase By amount</button>
    <input type='number'
    value={num}
    onChange={(e)=>{
      setNum(e.target.value)
    }}
     />
      
    </div>
  )
}

export default App
