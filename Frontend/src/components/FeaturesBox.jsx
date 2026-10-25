import React from 'react'
import { Lock, Cpu , ChartColumnDecreasing  } from 'lucide-react';

const FeaturesBox = (props) => {
    console.log(props.data)
  return (
    <div className="w-full flex gap-10 mt-10 justify-center">
        {props.data.map((ele)=>{
            const Icon = ele.icon
            return(
                <div className="w-[28vw] flex flex-col border border-[#76b1f8b5] shadow-[0_1px_15px_rgba(0,255,157,0.2)] pb-10 rounded-2xl">  
                    <div className="text-white p-2 ">
                        <Icon size={48} strokeWidth={2} className="mt-4 ml-10 rounded-2xl p-2 border border-[#00FF9D] shadow-[0_1px_15px_rgba(0,255,157,0.3)]"/>
                    </div>  
                    
                    <h1 className="text-white font-semibold text-[20px] ml-10 mt-3">{ele.heading}</h1>
                    <p className="text-blue-400 mt-4 ml-10">{ele.para}</p>

                </div>
            )
        })}
    </div>
  )
}

export default FeaturesBox