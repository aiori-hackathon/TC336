import React from 'react'

const MiddleDataShowing = (props) => {
    console.log(props.data)
  return (
    <div>
       {props.data.map((d)=>{
        console.log(d)
       })} 
    </div>
  )
}

export default MiddleDataShowing