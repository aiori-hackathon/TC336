    import React from 'react'
    import { Search } from 'lucide-react'

    const ValidateForm = () => {
        return (
            <div className="w-[90%] md:w-[80%] mx-auto my-10 py-4 border  border-blue-500/50 rounded-lg p-1.5 shadow-[0_0_15px_rgba(59,130,246,0.15)]">

                <form className="flex flex-col md:flex-row items-center justify-between gap-4 w-full px-2">

                    <div className="w-full md:w-[80%] rounded-2xl border bg-[#071948] flex h-16 items-center gap-4">
                        <Search className='ml-4'/>
                        <input className="focus:outline-none focus:ring-0 focus:border-blue-500/50 w-[90%]" type="text" placeholder='e g, example.com, iot.device.local' />
                    </div>
                    <button className="w-full md:w-auto px-8 py-3 md:py-4 text-[18px] rounded-xl font-bold text-black bg-linear-to-r from-[#00FFD1] to-[#00B3FF] shadow-[0_0_15px_rgba(0,255,209,0.4)] hover:scale-105 transition-transform">
                        Validate
                    </button>

                </form>

            </div>
        )
    }

    export default ValidateForm

// import React from 'react'
// import { Search } from 'lucide-react'

// const ValidateForm = () => {
//     return (
//         // Main container
//         <div className="w-[90%] md:w-[80%] mx-auto my-10 py-4 border border-blue-500/50 rounded-lg p-1.5 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
            
//             {/* Form: Mobile pe column, bade screen pe row */}
//             <form className="flex flex-col md:flex-row items-center justify-between gap-4 w-full px-2">

//                 {/* Input Container: Mobile pe full width, desktop pe 85% */}
//                 <div className="w-full md:w-[80%] rounded-2xl border border-blue-500/30 bg-[#071948] flex h-16 items-center gap-4 px-4">
//                     <Search className='text-gray-400'/>
//                     <input 
//                         className="bg-transparent text-white placeholder-gray-500 focus:outline-none w-full" 
//                         type="text" 
//                         placeholder='e.g., example.com, iot.device.local' 
//                     />
//                 </div>

//                 {/* Button: Mobile pe full width, desktop pe auto */}
//                 <button className="w-full md:w-auto px-8 py-3 md:py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#00FFD1] to-[#00B3FF] shadow-[0_0_15px_rgba(0,255,209,0.4)] hover:scale-105 transition-transform">
//                     Validate
//                 </button>

//             </form>

//         </div>
//     )
// }

// export default ValidateForm