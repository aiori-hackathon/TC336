import React from 'react'
import { ShieldCheck } from 'lucide-react'
import IPCard from './IPCard'

const LeftValidateData = (props) => {

    const status = props?.dnsData?.status;

    return (
        
        <div className="w-[28%] rounded-xl pb-8 flex flex-col gap-12 items-center border border-blue-500/50 bg-[#0a1533]">

            <div className='flex gap-2 text-2xl font-semibold text-white items-center mt-5'>
                <ShieldCheck className='text-blue-400 mt-1' />
                <h1>Status & IP</h1>
            </div>

            <div className="w-full flex flex-col items-center gap-6 mt-4">

                <div className="w-[70%] flex justify-center items-center gap-4 bg-[#0A1128] border border-blue-500/20 p-2 pr-6 rounded-xl">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${status === "SECURE" ? "bg-[#00FF9D]/10" : "bg-gray-800"}`}>
                        <div className={`w-5 h-5 rounded-full ${status === "SECURE" ? "bg-[#00FF9D] shadow-[0_0_15px_rgba(0,255,157,0.8)]" : "bg-gray-600"}`}></div>
                    </div>
                    <span className={`font-medium ${status === "SECURE" ? "text-white" : "text-gray-500"}`}>Secure</span>
                </div>

                <div className="w-[70%] flex justify-center items-center gap-4 bg-[#0A1128] border border-blue-500/20 p-2 pr-6 rounded-xl">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${status === "INSECURE" ? "bg-yellow-500/10" : "bg-gray-800"}`}>
                        <div className={`w-5 h-5 rounded-full ${status === "INSECURE" ? "bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)]" : "bg-gray-600"}`}></div>
                    </div>
                    <span className={`font-medium ${status === "INSECURE" ? "text-white" : "text-gray-500"}`}>Insecure</span>
                </div>

            </div>

            <div className="w-full flex justify-center mt-4">
                <IPCard dnsData={props.dnsData}/>
            </div>
        </div>
    )
}

export default LeftValidateData