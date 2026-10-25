import React from 'react'
import { ShieldCheck, DatabaseSearch, ShieldEllipsis } from 'lucide-react'
import LeftValidateData from './LeftValidateData'
import MiddleValidateData from './MiddleValidateData'
import RightValidateData from './RightValidateData'

const ValidateData = () => {
    return (
        <div className="w-full flex gap-4 justify-around">

            <LeftValidateData />
            <MiddleValidateData />
            <RightValidateData />
            
        </div>
    )
}

export default ValidateData