import React from 'react'
import { ShieldCheck, DatabaseSearch, ShieldEllipsis } from 'lucide-react'
import CircularDataBar from './CircularDataBar'

const MiddleValidateData = (props) => {
    return (
        <div className="w-[28%] rounded-xl pb-8 flex flex-col items-center border border-blue-500/50">

            <div className='flex gap-2 text-2xl font-semibold text-white items-center mt-5'>
                <DatabaseSearch className='text-blue-400 mt-1' />
                <h1>Performance & Metrics</h1>
            </div>
            <div className="mt-12">
                <CircularDataBar data={props?.dnsData?.latency} name={"Latency"} unit={"ms "} maxValue={200}/>
            </div>
            <div className="mt-6">
                <CircularDataBar data={props?.dnsData?.cpuUsed} name={"Cpu Used"} unit={"ms"} maxValue={10}/>
            </div>
            <div className="mt-6">
                <CircularDataBar data={props?.dnsData?.memoryUsed} name={"Memory Used"} unit={"mb"} maxValue={50}/>
            </div>

        </div>
    )
}

export default MiddleValidateData