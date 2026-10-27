import React, { useState } from 'react'
import TopNavbar from './TopNavbar'
import ValidateContent from './ValidateContent'
import ValidateData from './ValidateData'

const Validate = () => {

    const [dnsData, setDnsData] = useState(null);

    console.log(dnsData)

    return (
        <div className="w-full min-h-screen bg-[#0a1533] pt-22">
            <TopNavbar />

            <div className="bg-[#0a1533] relative z-10 w-full flex justify-center pb-16 ">
                <ValidateContent setDnsData={setDnsData} />
            </div>

            {dnsData? (

                <div className="bg-[#0a1533] relative z-10 w-full flex justify-center pb-16 border-b border-[#00FF9D] shadow- [0_1px_15px_rgba(0, 255, 157, 0.1)]">
                    <ValidateData dnsData={dnsData} />
                </div>

            ) : null}

        </div>
    )
}

export default Validate