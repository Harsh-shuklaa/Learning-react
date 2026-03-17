import React from 'react'
import ContactHeader from './ContactHeader'
import {MessageCircleMore, Phone, SendHorizontal} from 'lucide-react'

const Hero = () => {
  return (
    <div className=' flex flex-col m-25'>
      <ContactHeader/>
     
      <div className=' flex flex-col m-4'>
     <div className=' flex flex-col mt-5'>
           <div className='flex gap-5 '>
            <button className='bg-black rounded text-white px-8.5 py-1 flex gap-2 hover:cursor-pointer active:scale-95' > <MessageCircleMore size={20} strokeWidth={2} />Via Support Chat</button>
            <button className='bg-black rounded text-white px-8.5 py-1 flex gap-2 hover:cursor-pointer active:scale-95'><Phone size={20} />Via Support Call </button>
        </div >
        <div className='flex flex-col '>
            <h1 className='border mt-4 text-center rounded py-1 px-8 w-full max-w-md' >Via Email Form</h1>
            <div className='flex flex-col   m-6 w-full max-w-sm  '>
                <input className=' outline-1  rounded m-2' placeholder='Name' type="text" />
            <input type="email"  className='outline-1 m-2  rounded' placeholder='Email'/>
            <textarea name="" id="" className='outline-1 m-2  rounded'  placeholder='Text'></textarea>
           <div className='flex justify-end m-2'>
             <button className='bg-black rounded text-white px-8.5 py-1 flex gap-2 hover:cursor-pointer active:scale-95 '> <SendHorizontal size={20} />Submit</button>
           </div>
            </div>

            <div>
                <img src="" alt="Image" />
            </div>
        </div>
     </div>
      </div>
    </div>
  )
}

export default Hero
