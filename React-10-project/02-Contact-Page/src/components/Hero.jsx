import React from 'react'

const Hero = () => {
  return (
    <div className='text-white flex flex-col m-25'>
      <div className='flex flex-col '>
        <h1 className='text-4xl font-bold ' >Contact Us</h1>
        <p className='pt-4 w-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus repellendus, blanditiis ipsam non aperiam praesentium et fugiat laboriosam magni nisi culpa perferendis sapiente similique. Voluptas quia exercitationem atque officiis quod.
        Delectus nesciunt dignissimos culpa!  laboriosam mollitia? Iste sint eligendi natus sunt dolores tempora eius dolorem enim mollitia dignissimos, ipsa nam ullam? .</p>
      </div>
      <div className=' flex flex-col mt-10'>
     <div className=' flex flex-col'>
           <div className='flex gap-5'>
            <button className='bg-white rounded text-black px-5 py-1'>Via Support Chat</button>
            <button className='bg-white rounded text-black px-5 py-1'>Via Support Call </button>
        </div >
        <div className='flex flex-col '>
            <h1 className='w-84  border mt-4 text-center rounded py-1' >Via Email Form</h1>
            <div className='flex flex-col '>
                <input className='' placeholder='Name' type="text" />
            <input type="email"  className='' placeholder='Email'/>
            <textarea name="" id="" placeholder='Text'></textarea>
            <button>Submit</button>
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
