import React from 'react'
import { ShieldCheck, DatabaseSearch, ShieldEllipsis } from 'lucide-react'
import CircularDataBar from './CircularDataBar'

const MiddleValidateData = () => {
    return (
        <div className="w-[30%] pb-8 flex flex-col items-center border border-blue-500/50">

            <div className='flex gap-2 text-2xl font-semibold text-white items-center mt-5'>
                <DatabaseSearch className='text-blue-400 mt-1' />
                <h1>Performance & Metrics</h1>
            </div>
            <div className="mt-12">
                <CircularDataBar />
            </div>
            <div className="mt-6">
                <CircularDataBar />
            </div>
            <div className="mt-6">
                <CircularDataBar />
            </div>

        </div>
    )
}

export default MiddleValidateData