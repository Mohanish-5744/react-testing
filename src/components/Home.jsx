import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import profile from '../assets/Profile.jpg';

const Home = () => {
  return (
    <div name='home' className='flex w-full h-screen bg-center bg-cover bg-transparent' >
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ml-[10%]'>
        <p className='mb-3 mt-3 text-2xl text-[#ffffff]'>Hi,</p>
        <h1 className='text-5xl sm:text-7xl font-bold text-[#ffffff]'>
          I'm Mohanish Khambadkar
        </h1>
        <h2 className='text-4xl sm:text-4xl font-bold mt-10 mb-5 text-[#b2e08c]'>
          I'm a Full Stack Developer.
        </h2>
        <button className='text-white group border-2 px-4 py-2 my-2 flex items-center hover:bg-[#F5E6D0] hover:border-[#F5E6D0] hover:text-[#0a192f]'>
          About Me
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-2' />
          </span>
        </button>

      </div>
      <div className='text-center mt-[10%] mr-[5%]'>
        <img
          src={profile} alt='Profile Photo' className='max-w-[400px] mx-auto mb-4 rounded-md border border-blue-500 border-opacity-200 border-silver' />
      </div>

    </div>
  );
}

export default Home;
