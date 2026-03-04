import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Arena = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");

  const createRoom = () => {
    const id = Math.random().toString(36).substring(2, 7);
    setRoomId(id);
  };

  const copyId=()=>{
    navigator.clipboard.writeText(roomId);
    alert("Room ID copied! ");
  }

  const shareId = ()=>{
     const link = `${window.location.origin}/battle/${roomId}`;
     navigator.clipboard.writeText(link)
     alert("Battle link copied! ")
  }

  const joinRoom = () => {
    if (!roomId.trim()) {
      alert("Enter a Room ID");
      return;
    }
    navigate(`/lobby/${roomId}`);
  };
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl  font-bold mb-12 ">Battle Arena ⚔️</h1>
      <div className="bg-zinc-900 p-10 rounded-2xl  shadow-xl w-[350px]">
        <button
          onClick={createRoom}
          className=" bg-blue-600 px-4 py-2 rounded-lg mb-6 w-full font-semibold transition hover:bg-blue-700  active:scale-95"
        >
          Create Room
        </button>

        {roomId && (
          <div className=" bg-zinc-800 p-4 rounded-lg mb-4 text-center ">
            <p className="mb-2">Room ID</p>

            <div className="font-mono text-lg mb-3 ">{roomId}</div>

            <div className=" flex gap-2">
              <button  onClick={copyId} className="flex-1 bg-purple-600 px-3 py-2 rounded-lg hover:bg-purple-700 active:scale-95">Copy</button>
              <button onClick={shareId} className="flex-1 bg-orange-600 px-3 py-2 rounded-lg hover:bg-orange-700 active:scale-95">Share</button>

              <button  onClick={()=>{
                navigate(`/lobby/${roomId}`)
              }} className="flex-1 bg-blue-600 px-3 py-2 rounded-lg hover:bg-blue-700 active:scale-95">Start</button>
            </div>
          </div>
        )}

        <div className=" flex flex-col  gap-3">
          <input
            onChange={(e) => {
              setRoomId(e.target.value);
            }}
            type="text"
            placeholder="Enter Room ID"
            className="p-3 rounded-lg bg-zinc-800 outline-none"
          />
          <button
            onClick={joinRoom}
            className="bg-green-600 px-4 py-2 rounded-lg mb-6 w-full font-semibold transition hover:bg-green-700 active:scale-95"
          >
            Join Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Arena;
