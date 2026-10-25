import React from 'react'
import TopNavbar from './TopNavbar'
import MainContent from './MainContent'
import DataShowing from './DataShowing'
import Features from './Features'

const LandingPage = () => {
  return (
    <div className="bg-[url('/src/assets/LandingPage.png')] bg-cover bg-fixed bg-center min-h-screen w-full flex flex-col relative pt-24">

        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <TopNavbar />
        <div className="relative z-10 w-full flex mt-10">
            <MainContent />
        </div>
        <div className="relative z-10 w-full flex justify-center mt-14">
            <DataShowing />
        </div>
        <div className="relative z-10 w-full flex justify-center">
            <Features />
        </div>
        
    </div>
  )
}

export default LandingPage