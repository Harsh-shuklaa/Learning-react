import React, { useContext, useState } from "react";
import  { UserContext } from "../Context/UserContextProvider";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);


  const submitHandler = (e) => {
    e.preventDefault();
   
     setUser({username,password})

    setPassword("")
    setUsername("")

    
     
   
    
  };

  return (
    <div className=" w-full max-w-md mx-auto shadow-8xl  bg-black rounded pb-5">
      <h1 className="text-2xl text-white text-center mt-10 pt-10">Login</h1>
      <div className="flex flex-col  gap-5 px-5 py-3 ">
        <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="username"
          value={username}
          className=" outline-none text-black bg-white p-2 rounded"
          placeholder="Username"
        />
        <input
          type="password"
          className="outline-none text-black bg-white p-2 rounded"
          onChange={(e) => {
            setPassword(e.target.value);

          }}
          value={password}
          placeholder="Password"
        />
        <button  onClick={submitHandler} className=" px-4 py-2 text-black bg-white font-bold mx-25 rounded  active:scale-95 hover:cursor-pointer ">Submit</button>
      </div>
    </div>
  );
};

export default Login;
