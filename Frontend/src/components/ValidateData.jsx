import React from 'react';
import LeftValidateData from './LeftValidateData';
import MiddleValidateData from './MiddleValidateData';
import RightValidateData from './RightValidateData';
import BogusData from './BogusData';

const ValidateData = (props) => {

    const isBogus = props.dnsData.status === "BOGUS";
    console.log(isBogus)
    
    if (isBogus) {
        // ✅ Data aur onBack dono pass karo
        return <BogusData dnsData={props.dnsData} onBack={props.onBack} />;
    }
    

    return (
        <div className="w-full flex gap-4 justify-around mt-10">
            <LeftValidateData dnsData={props.dnsData}/>
            <MiddleValidateData dnsData={props.dnsData}/>
            <RightValidateData dnsData={props.dnsData}/>
        </div>
    )
}
export default ValidateData;