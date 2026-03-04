import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

    
    
    

const Lobby = () => {
    const {roomId}= useParams();
    const [players,setplayers] = useState(1);
    const [countDown, setCountDown] = useState(null)
    const navigate = useNavigate();

    //fake opponent join simulation
    useEffect(()=>{
    const timer = setTimeout(() => {
        setplayers(2)
    }, 4000);
  return()=>{
    clearTimeout(timer)
  }
    },[]);

    

    const startMatch = ()=>{
        if(players<2)return alert("Waiting for opponent");

        let time = 3;
         setCountDown(time);
         const  interval = setInterval(()=>{
            time--;
            if(time ===0){
                clearInterval(interval);
                  navigate(`/battle/${roomId}`);
            }
            setCountDown(time);
         },1000);
       
    };
    
    
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-black'>
      <h1 className='text-4xl font-bold mb-6'>Room:  {roomId} </h1>
      <div className=''>
        <p className=' mb-4'>
            Players: {players} / 2
        </p>

        {players<2 &&(
            <p className='text-yellow-400 mb-4'>Waiting for opponent...</p>
        )
        }
       {
         countDown !==null &&(
            <h2 className='text-6xl font-bold mb-4'>{countDown}</h2>
         )
       }

       <button  onClick={startMatch} className='bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg active:scale-95 '>
        Start Match
       </button>

        
      </div>
    </div>
  )
}

export default Lobby
