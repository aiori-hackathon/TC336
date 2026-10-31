import React from 'react'
import { ShieldCheck, Database, ShieldEllipsis } from 'lucide-react'

const RightValidateData = () => {
    return (
        <div className="w-[28%] rounded-xl pb-8 flex flex-col items-center border border-blue-500/50">

            <div className='flex justify-center gap-2 text-2xl font-semibold text-white items-center mt-5'>
                <ShieldEllipsis className='text-blue-400 mt-1' />
                <h1>Protocol Info</h1>
            </div>
            <div className="mt-10 flex flex-col gap-4 items-center justify-center w-[60%] h-60 border border-blue-500/15 border-b-blue-600/40">
                <ShieldCheck className="text-green-300" size={100} />
                <h1 className="text-3xl text-white font-semibold">TLS/ DTLS</h1>
            </div>

            <div className="w-[80%] mt-10 flex flex-col mx-20 gap-2 pb-3 border-b border-blue-400/40">
                <h1 className="text-[22px] text-gray-400 font-semibold ">Connection Status</h1>
                <div className="flex items-center gap-4">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#00FF9D] shadow-[0_0_15px_rgba(0,255,157,0.8)]"></div>
                    <h2 className="text-green-400 text-[17px] font-medium">Secure</h2>
                </div>
            </div>

            <div className="w-[80%] mt-10 flex flex-col mx-20 gap-2 pb-3 border-b border-blue-400/40">
                <h1 className="text-[22px] text-gray-400 font-semibold ">Protocol</h1>
                <h1 className="text-[26px] text-gray-200 font-semibold ">TLS 1.3</h1>
            </div>

        </div>
    )
}

export default RightValidateData