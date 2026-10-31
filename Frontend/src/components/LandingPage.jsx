import React from 'react'
import TopNavbar from './TopNavbar'
import MainContent from './MainContent'
import DataShowing from './DataShowing'
import Features from './Features'
import Working from './Working'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div className="w-full min-h-screen flex flex-col relative">
            

            <div className="relative bg-[url('/src/assets/LandingPage.png')] bg-cover bg-fixed bg-center pt-24">
                <div className="absolute inset-0 bg-black/35 z-0"></div>

                <TopNavbar />

                <div className="relative z-10 w-full flex mt-10">
                    <MainContent />
                </div>
                <div className="relative z-10 w-full flex justify-center mt-14">
                    <DataShowing />
                </div>
                <div className="relative z-10 w-full flex justify-center pb-16 border-b border-[#00FF9D]">
                    <Features />
                </div>
                <div className="relative z-10 w-full flex justify-center pb-16 border-b border-[#00FF9D]">
                    <Working />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default LandingPage