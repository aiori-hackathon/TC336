import React from 'react'
import RightOutput from './RightOutput'
import LeftOutput from './LeftOutput'

const Output = (props) => {
    return (
        <div className="w-full flex flex-col">
            <div className="text-4xl font-bold flex justify-center py-12">Output</div>
            <div className="w-full flex">
                <LeftOutput data={props.result}/>
                <RightOutput data={props.result}/>
            </div>
        </div>
    )
}

export default Output