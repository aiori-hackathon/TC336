import React, { useState } from 'react'
import TopNavbar from './TopNavbar'
import ValidateContent from './ValidateContent'
import ValidateData from './ValidateData'
import { ArrowRight } from 'lucide-react'
import HistoryDataBox from './HistoryDataBox'
import { useNavigate } from 'react-router-dom'

const Validate = () => {

    const [dnsData, setDnsData] = useState(null);
    const [historyData, setHistoryData] = useState(null);
    const [refreshHistoryData, setRefreshHistoryData] = useState(0);
    const navigate = useNavigate();

    // console.log(savedData)

    return (

        <div className="w-full flex flex-col items-center min-h-screen bg-[#0a1533] pt-22">
            <TopNavbar />

            <div className="bg-[#0a1533] relative z-10 w-full flex justify-center pb-16 ">
                <ValidateContent setDnsData={setDnsData} setHistoryData = {setHistoryData} setRefreshHistoryData = {setRefreshHistoryData} />
            </div>

            {dnsData ? (
                <div className="bg-[#0a1533] relative z-10 w-full flex justify-center pb-16  shadow-[0_1px_15px_rgba(0,255,157,0.1)]">
                    <ValidateData dnsData={dnsData} onBack={() => setDnsData(null)} />
                </div>
            ) : null}


            <HistoryDataBox refreshHistoryData={refreshHistoryData} limit={10} />

            <div onClick={() => navigate('/history')} className="w-full mt-auto flex justify-end px-10 py-4 text-blue-200 cursor-pointer hover:text-white transition-colors">
                <span className="font-semibold">Full History</span>
                <ArrowRight size={16} className="mt-0.5 ml-1" />
            </div>

        </div>
    )
}
    
export default Validate