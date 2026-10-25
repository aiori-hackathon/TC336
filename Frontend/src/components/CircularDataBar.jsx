// import React from 'react'

// const CircularDataBar = ({ latency = 28 }) => {

//     const maxValue = 100;
//     const percent = Math.min((latency/ maxValue) *100 * 100);

//     return (
//         <div className='flex not-visited:items-center justify-center flex-col'>

//             <div className="relative w-32 h-32" style={{background: `conic-gradient(#00FFD1 ${percent}%, #0F2A3F ${percent}%)`}}>
//                 <div className='w-25 h-25 bg-[#0508B14] rounded-full flex items-center justify-center flex-col shadow-inner'>
//                     <span className="text-2xl font-semibold text-white">
//                         Latency
//                         <span className='text-lg'>
//                             mg
//                         </span>
//                     </span>
//                 </div>
//             </div>

//             <span className="text-blue-300/70 text-sm font-medium mt-4 tracking-wide">
//                 Latency
//             </span>

//         </div>
//     )
// }

// export default CircularDataBar