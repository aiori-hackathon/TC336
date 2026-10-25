import React from 'react'
import { ShieldCheck, DatabaseSearch, ShieldEllipsis } from 'lucide-react'
import LeftValidateData from './LeftValidateData'
import MiddleValidateData from './MiddleValidateData'

const ValidateData = () => {
    return (
        <div className="w-full flex gap-4 justify-around">

            <LeftValidateData />

            <MiddleValidateData />

            <div className="w-[30%] pb-8 flex flex-col items-center border border-blue-500/50">
                <div className='flex gap-2 text-2xl font-semibold text-white items-center mt-5'>
                    <ShieldEllipsis className='text-blue-400 mt-1' />
                    <h1>Protocol Info</h1>
                </div>
            </div>
        </div>
    )
}

export default ValidateData