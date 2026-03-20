import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
 return (
       <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden bg-white text-black rounded-xl sm:mx-16 mx-2 sm:py-16 shadow-lg">
        
        {/* Content */}
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            
            <h2 className="text-4xl font-bold sm:text-5xl leading-tight">
              Download Now
              <span className="hidden sm:block text-3xl mt-2 text-gray-600">
                Lorem Ipsum
              </span>
            </h2>

            <Link
              className="inline-flex items-center gap-2 text-white px-6 py-3 font-medium bg-orange-600 rounded-lg hover:bg-orange-700 transition"
              to="/"
            >
              <svg
                width="22"
                height="22"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download Now
            </Link>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-start opacity-90">
          <img
            className="w-[400px] sm:w-[500px] object-contain"
            src="https://images.unsplash.com/photo-1581090700227-1e8c9b5d0b75?q=80&w=1000&auto=format&fit=crop"
            alt="hero"
          />
        </div>
      </aside>

      {/* Bottom Image */}
      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-48 rounded-lg shadow-md"
          src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop"
          alt="device"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-2xl sm:text-5xl py-10 font-semibold">
        Lorem Ipsum Yojo
      </h1>
    </div>
    );
}

export default Home
