import React from 'react'
import { ShieldCheck, DatabaseSearch, ShieldEllipsis } from 'lucide-react'
import LeftValidateData from './LeftValidateData'
import MiddleValidateData from './MiddleValidateData'
import RightValidateData from './RightValidateData'

const ValidateData = (props) => {
    return (
        <div className="w-full flex gap-4 justify-around">

            <LeftValidateData dnsData = {props.dnsData}/>
            <MiddleValidateData dnsData = {props.dnsData}/>
            <RightValidateData dnsData = {props.dnsData}/>
            
        </div>
    )
}

export default ValidateData