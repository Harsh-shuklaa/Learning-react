import React from 'react'

const ResultCard = ({item}) => {
  return (
    <div className='  relative bg-white w-[18vw] h-80 rounded '>
     <div className='h-full'>
       {item.type=="photo" ? <img  className='h-full w-full object-cover object-center'  src={item.url}alt="" />:""}
      {item.type=="video" ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}alt="" ></video>:""}
     </div>
     <div  id='bottom' className= 'w-full  px-6  py-10 absolute bottom-0 text-white '> <h2 className='text-xl font-semibold capitalize'>{item.title}</h2></div>
     
    </div>
  )
}

export default ResultCard;