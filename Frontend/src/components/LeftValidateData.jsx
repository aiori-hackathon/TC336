import React from 'react'
import { ShieldCheck, DatabaseSearch, ShieldEllipsis } from 'lucide-react'
import IPCard from './IPCard'

const LeftValidateData = () => {
    return (
        <div className="w-[28%] rounded-xl pb-8 flex flex-col gap-18 items-center border border-blue-500/50">

            {/*Top Heading of the Left Page*/}

            <div className='flex gap-2 text-2xl font-semibold text-white items-center mt-5'>
                <ShieldCheck className='text-green-600 mt-1' />
                <h1>Status & IP</h1>
            </div>

            {/*3 Div of the status of the DNS in Left Page*/}

            <div className="w-full flex flex-col items-center gap-4">

                <div className="w-[70%] flex justify-center items-center gap-4 bg-[#0A1128] border border-blue-500/20 p-2 pr-6 rounded-xl">

                    <div className="w-12 h-12 rounded-lg bg-[#00FF9D]/10 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-[#00FF9D] shadow-[0_0_15px_rgba(0,255,157,0.8)]"></div>
                    </div>
                    <span className="text-white font-medium">Secure</span>

                </div>

                <div className="w-[70%] flex justify-center items-center gap-4 bg-[#0A1128] border border-blue-500/20 p-2 pr-6 rounded-xl">

                    <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>
                    </div>
                    <span className="text-white font-medium">Insecure</span>

                </div>

                <div className="w-[70%] flex justify-center items-center gap-4 bg-[#0A1128] border border-blue-500/20 p-2 pr-6 rounded-xl">

                    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
                    </div>
                    <span className="text-white font-medium">Bogus</span>


                </div>

            </div>

            {/*Real Validate DNS*/}

            <div className="w-full flex justify-center">
                <IPCard />
            </div>
        </div>
    )
}

export default LeftValidateData