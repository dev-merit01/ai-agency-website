import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggleBtn = ({theme, setTheme}) => {

  useEffect(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark').matches
    setTheme(theme || (prefersDarkMode) ? 'dark' : 'light')
  },[])

  useEffect(()=>{
    if(theme === 'dark'){
        document.documentElement.classList.add('dark')
    }else{
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <>
      <button>
        {theme === 'dark' ? (
            <div onClick={()=> setTheme('light')} className='size-8.5 p-1.5  border-gray-500 cursor-pointer '>
                <FontAwesomeIcon icon={faSun} className='text-white' />
            </div>
        ) : (
            <div onClick={()=> setTheme('dark')} className='size-8.5 p-1.5  border-gray-500 cursor-pointer'>
                <FontAwesomeIcon icon={faMoon} />
            </div>
        )}
      </button>
    </>
  )
}

export default ThemeToggleBtn
