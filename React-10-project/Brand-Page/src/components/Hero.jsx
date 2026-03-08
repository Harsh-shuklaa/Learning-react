import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className=" flex flex-col  p-20">
       <div className=" flex flex-col w-200">
         <h1 className="  font-poppins font-bold text-9xl    ">Your Feet <br /> Deserve <br />The Best</h1>
        <p className="mt-2 w-150 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum quia ducimus sint itaque optio animi molestiae. Eligendi fugiat nam praesentium voluptatum corporis minima velit. Libero consectetur pariatur quia repellat?
        sed id alias commodi error minima tempore blanditiis magnam vel ab. Earum, possimus veniam?
  </p>
  
  <div className="flex items-start gap-10 pt-5 ">
      <button className="bg-red-600 px-6 py-2 text-white  font-medium text-l">Shop Now</button>
    <button className="px-6 py-2 text-zinc-500 border font-medium text-l">Category</button>
  
  </div>
       </div>
      </div>
      <div className=" ">
        <img className="bg-white"
          src="https://e7.pngegg.com/pngimages/820/94/png-clipart-shoe-nike-air-max-sneakers-running-running-shoes-orange-outdoor-shoe.png"
          alt="Image"
        />
      </div>
    </div>
  );
};

export default Hero;
