import React from 'react'

const RightOutput = (props) => {
  return (
    <div className="w-[50%] bg-gray-200 border-l-2 flex flex-col gap-6 text-[20px] font-semibold">
        <div className="flex gap-50 justify-center mt-6">
            <h1>Latency : {props?.data?.latency}</h1>
            <h1>CPU Usage : {}</h1>
        </div>
        <div className="flex gap-50 justify-center">
            <h1>Memory Used : {}</h1>
            <h1>Protocol : {}</h1>
        </div>
    </div>
  )
}

export default RightOutput