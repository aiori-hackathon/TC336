import React from 'react'
import TopNavbar from './TopNavbar'
import MainContent from './MainContent'
import DataShowing from './DataShowing'
import Features from './Features'
import Working from './Working'

const LandingPage = () => {
    return (
        <div className="bg-[url('/src/assets/LandingPage.png')] bg-cover bg-fixed bg-center min-h-screen w-full flex flex-col relative pt-24">

            <div className="absolute inset-0 bg-black/35 z-0"></div>

            <TopNavbar />

            <div className="relative z-10 w-full flex mt-10">
                <MainContent />
            </div>
            <div className="relative z-10 w-full flex justify-center mt-14">
                <DataShowing />
            </div>
            <div className="relative z-10 w-full flex justify-center pb-16 border-b border-[#00FF9D] shadow- [0_1px_15px_rgba(0, 255, 157, 0.1)] ">
                <Features />
            </div>
            <div className="relative z-10 w-full flex justify-center pb-16 border-b border-[#00FF9D] shadow- [0_1px_15px_rgba(0, 255, 157, 0.1)] ">
                <Working />
            </div>
            {/* <div className="relative z-10 w-full flex justify-center pb-16 border-b border-[#00FF9D] shadow- [0_1px_15px_rgba(0, 255, 157, 0.1)] ">
            <Working />
        </div> */}

        </div>
    )
}

export default LandingPage