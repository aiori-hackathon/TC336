import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import MiddleDataShowing from './MiddleDataShowing'

const DataShowing = () => {

    const [middleData, setMiddleData] = useState([
        {
            icon: "<TicketCheck />",
            data: "100+",
            text: "Queries Validate"
        },
        {
            icon: "<BrickWallShield />",
            data: "100%",
            text: "Secure"
        },
        {
            icon: "<Cpu />",
            data: "0ms",
            text: "Queries Validate"
        },
        {
            icon: "<ChartColumnDecreasing />",
            data: "100%",
            text: "TLS/ DTLS Encrypted"
        }
    ])

  return (
    <div className="w-full h-20 bg-[#060B19] border-y rounded-2xl border-[#76b1f8b5] shadow-[0_1px_15px_rgba(0,255,157,0.3)] flex items-center justify-between ">

        <ChevronLeft  className="text-gray-300 text-3xl mx-4"/>
        <MiddleDataShowing data={middleData} />
        <ChevronRight  className="text-gray-300 text-3xl mx-4"/>
        
    </div>
  )
}

export default DataShowing