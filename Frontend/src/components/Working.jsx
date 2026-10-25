import React from 'react'
// import WorkingImage from '/src/assets/WorkingImage.png'
import Esp32Image from '/src/assets/Esp32.png';
import NodeJsImage from '/src/assets/NodeJs.png';
import UnboundImage from '/src/assets/Unbound.png';
import InternetImage from '/src/assets/Internet.png';

const Working = () => {
    return (
        <div className="w-full  bg-[#060B19]">

            <h1 className="text-white text-3xl font-bold mt-10 mx-16">How It Works</h1>
            <p className="text-white text-[16px] font-normal mx-16">A Simple Flow. A Powerful Security Layer.</p>

            {/* <div className=" mt-14 w-full h-56 bg-[url('/src/assets/WorkingImage.jpeg')] bg-cover bg-center border-b"> */}
            <div className="w-full flex items-center gap-10 justify-around">

                <div className="w-[22%] pb-6 text-center bg-[#060B19] rounded-2xl">
                    <img src={Esp32Image} alt="esp32 image" className="w-full rounded-2xl object-cover " />
                    <h1 className="text-[18px] text-white font-bold">ESP32 IoT Client</h1>
                    <p className="text-[14px] text-blue-400 font-medium">Sends DNS Query over DTLS</p>
                </div>

                <div className="w-6 h-1 border-b border-blue-300 text-blue-300"></div>

                <div className="w-[22%] pb-6 text-center bg-[#060B19] rounded-2xl">
                    <img src={NodeJsImage} alt="esp32 image" className="w-full rounded-2xl object-cover " />
                    <h1 className="text-[18px] text-white font-bold">Node.js Gateway</h1>
                    <p className="text-[14px] text-blue-400 font-medium">Authentication & Forwards</p>
                </div>

                <div className="w-6 h-1 border-b border-blue-300 text-blue-300"></div>

                <div className="w-[22%] pb-6 text-center bg-[#060B19] rounded-2xl">
                    <img src={UnboundImage} alt="esp32 image" className="w-full rounded-2xl object-cover " />
                    <h1 className="text-[18px] text-white font-bold">Unbound DNSSEC</h1>
                    <p className="text-[14px] text-blue-400 font-medium">Validate Response</p>
                </div>
                
                <div className="w-6 h-1 border-b border-blue-300 text-blue-300"></div>

                <div className="w-[22%] pb-6 text-center bg-[#060B19] rounded-2xl">
                    <img src={InternetImage} alt="esp32 image" className="w-full rounded-2xl object-cover " />
                    <h1 className="text-[18px] text-white font-bold">Internet</h1>
                    <p className="text-[14px] text-blue-400 font-medium">Returns Secure Result</p>
                </div>

            </div>

            {/* </div> */}
        </div>
    )
}

export default Working