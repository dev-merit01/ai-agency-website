import React, { useState } from 'react'
import assets from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX, faBars } from '@fortawesome/free-solid-svg-icons';
import ThemeToggleBtn from './ThemeToggleBtn';
import { motion } from "motion/react"


const Navbar = ({theme, setTheme}) => {

  // 1. FIX: Set initial state to false (closed)
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <motion.div
    initial={{opacity: 0, y: -50}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky
    top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-black'>
      
      {/* 3. FIX: Simplified logo source and corrected class application */}
      <a href="#">
        <img href="#" src={theme === 'dark' ? assets.logo_dark : assets.logo_light} className='w-40 sm:w-40 cursor-pointer'  alt="Company Logo" />
      </a>
      

      {/* MOBILE SIDEBAR CONTAINER */}
      <div className={`text-grey-700 dark:text-white sm:text-sm 
        ${!sideBarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed 
        top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col 
        max-sm:bg-primary max-sm:text-white flex
        max-sm:pt-20 sm:flex sm:items-center gap-5 transition-all font-bold`}>

        {/* 'X' CLOSE ICON - Visible only on Mobile */}
        <div className="sm:hidden absolute top-4 right-4 w-5 cursor-pointer">
          <FontAwesomeIcon 
            icon={faX} 
            onClick={() => setSideBarOpen(false)}
          />
        </div>

        <a onClick={()=> setSideBarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={()=> setSideBarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
        <a onClick={()=> setSideBarOpen(false)} href="#our-work" className='sm:hover:border-b'>Our Work</a>
        <a onClick={()=> setSideBarOpen(false)} href="#contact-us" className='sm:hover:border-b'>Contact Us</a>
      </div>

      {/* DESKTOP CONNECT BUTTON & MOBILE HAMBURGER BUTTON CONTAINER */}
      <div className='flex items-center sm:gap-4 gap-2'> 

        {/* USE THIS COMPONENT FOR TOGGLING DARK/LIGHT MODE */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
        
        {/* 2. FIX: Bars icon now opens sidebar and is hidden on desktop */}
        <div className="text-gray-700 dark:text-white sm:hidden text-2xl cursor-pointer">
          <FontAwesomeIcon 
            icon={faBars}
            onClick={() => setSideBarOpen(true)}
          />
        </div>

        <a href="#contact-us" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white
        px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'>
            Connect <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </motion.div>
  )
}

export default Navbar