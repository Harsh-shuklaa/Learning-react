import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { setQuery } from "../redux/feature/searchSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
   const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
   dispatch(()=>{
    setQuery(input)
   })
    setInput("");
  };


  return (
    <div className="">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex bg-gray-900 gap-5 p-10"
      >
        <input
          required
          className=" w-full border-2 px-4 py-2 rounded text-xl outline-none"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Search anything..."
        />
        <button className="border-2 px-4 py-2 rounded text-xl outline-none hover:cursor-pointer active:scale-95">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
