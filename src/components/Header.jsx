import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'> 
            <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>New: AI feature integrated</p>
                <img src={assets.star_icon} alt="" className='w-2.5' />
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold  mb-4'>Your Own <span className='text-primary'>Blogging</span> <br /> Platfrom.</h1>
            <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs'>This is your space to think out loud, to share what matters, and to write without filters. Whether it's one word or a thousand, your story starts right here.</p>

          <form className="w-full max-w-3xl mx-auto px-4">
            <div className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-primary transition-all duration-300">
    
            <input
              type="text"
              placeholder="Search for blogs"
              required
              className="flex-grow px-5 py-3 text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-6 py-2 m-1 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Search
            </button>
            </div>
          </form>


        </div>
        <img src={assets.gradientBackground} alt="" className="absolute -top-[50px] z-[-1] opacity-50"/>
    </div>
  )
}

export default Header