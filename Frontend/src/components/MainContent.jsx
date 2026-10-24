import React from 'react'

const MainContent = () => {
  return (
    <div className="w-[38%] absolute left-14 mt-10 flex flex-col gap-6">
        <h1 className="text-6xl font-bold text-white">Secure Your Iot Ecosystem With <span className='text-emerald-300'>Zero-Trust DNSSEC.</span></h1>

        <p className="text-[18px] text-amber-50 pr-10 font-medium">An Authencitaed Gateway-Assisted DNSSEC Validator that offloads validation from resource-constrained IoT Devices, ensuring a safer, faster and more reliable internet experience.</p>

        <div className="flex gap-6">
            <button className="text-white py-3 px-7 font-medium text-[17px] border border-[#00FF9D] shadow-[0_2px_15px_rgba(0,255,157,0.3)] rounded-3xl hover:bg-[#00FF9D] hover:text-black">Start Validating</button>
            <button className="text-white py-3 px-7 font-medium text-[17px] border border-[#00FF9D] shadow-[0_2px_15px_rgba(0,255,157,0.3)] rounded-3xl hover:bg-[#00FF9D] hover:text-black">View Architecture</button>
        </div>
    </div>
  )
}

export default MainContent