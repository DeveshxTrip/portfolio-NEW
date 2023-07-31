import React, { useEffect } from 'react'
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import HeroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
   
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus dignissimos corporis qui et nemo asperiores modi, sint veritatis deserunt sunt?</p>
          <div>
          <Link
              to="portfolio"
              smooth
              duration={500} className='w-fit px-6 py-3 my-2 flex items-center group text-purple-400 border border-purple-700 hover:bg-none hover:text-white font-bold uppercase text-sm rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 cursor-pointer'
              >Portfolio
              <span className='group-hover:rotate-90 duration-500'>
                <MdKeyboardDoubleArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt ="devesh"
          className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
    

  );
};

export default Home
