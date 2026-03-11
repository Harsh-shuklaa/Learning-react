import React, { useCallback, useEffect, useState ,useRef } from "react";

const App = () => {
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~!@#$%^*()_+-<>?/|";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length );
      pass+= str.charAt(char);
    }

    setPassword(pass);
  }, [length, characterAllowed, numberAllowed]);

  const copyPasswordClipboard = useCallback(()=>{
    passwordRef.current?.select(password)
window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    generatePassword();
  }, [numberAllowed, characterAllowed, length, generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 bg-gray-700 text-orange-500">
      <h1 className=" text-2xl  text-white text-center my-3">
        Password Generator
      </h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className=" bg-white outline-none w-full px-3 py-1 "
          placeholder="password"
          readOnly
          ref={passwordRef}
          
        />
        <button onClick={copyPasswordClipboard} className="bg-blue-600 text-black px-4 py-2 shrink-0 active:scale-95">
          Copy
        </button>
      </div>
      <div className="flex text-sm  gap-1 ">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            min={6}
            max={50}
            value={length}
            name=""
            id=""
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) =>  !prev );
            }}
          />
          <label htmlFor="">Number</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterAllowed"
            defaultChecked={characterAllowed}
            className="cursor-pointer"
            onChange={() => {
              setCharacterAllowed((prev) => {
              return  !prev;
              });
            }}
          />
          <label htmlFor="">Character</label>
        </div>
      </div>
    </div>
  );
};

export default App;
