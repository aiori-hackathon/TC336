import React from 'react'
import ReactLogo from '/src/assets/react.svg'

const LeftNav = () => {
  return (
    <div className="h-full flex items-center px-5 gap-4">
        <img src={ReactLogo} className="w-9 h-10 object-contain" />
        <div>
            <h1 className="text-2xl font-bold text-white leading-tight">Secure DNS</h1>
            <h2 className="text-[14px] font-semibold text-blue-300 tracking-wider">By TEAM AERIS</h2>
        </div>
        
    </div>
  )
}

export default LeftNav