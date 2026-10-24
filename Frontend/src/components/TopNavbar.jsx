import React from 'react'
import LeftNav from './LeftNav'
import NavLinks from './NavLinks'

const TopNavbar = () => {
  return (
    <div className="flex justify-between w-full h-22 fixed top-0 z-50 border-b border-[#00FF9D] shadow-[0_1px_15px_rgba(0,255,157,0.3)] bg-[#060B19]">

        <LeftNav />
        <NavLinks />
        <button>Hello</button>
        
    </div>
  )
}

export default TopNavbar