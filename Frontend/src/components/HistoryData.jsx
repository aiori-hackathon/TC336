import React, { useState } from 'react'

const HistoryData = (props) => {
    
    

    return (
        <div className="w-full bg-[#081434] flex flex-col">

            {props.history.map((e, index) => {
                console.log(e)
                return (
                    <div key={e._id} className="w-full flex text-[18px] font-normal text-blue-300 border-y py-3 border-blue-950">
                        <h1 className="w-[8%] text-center">{index + 1}</h1>
                        <h1 className="w-[20%] text-center text-white">{e.url}</h1>
                        <h1 className="w-[20%] text-center">{e.status}</h1>
                        <h1 className="w-[12%] text-center text-white">{e.latency}</h1>
                        <h1 className="w-[10%] text-center">{e.cpuUsed}</h1>
                        <h1 className="w-[10%] text-center text-white">{e.memoryUsed}</h1>
                        <h1 className="w-[20%] text-center">{e.updatedAt}</h1>
                    </div>
                )
            })}

        </div>
    )
}

export default HistoryData