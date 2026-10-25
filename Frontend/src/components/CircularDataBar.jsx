import React from 'react';

const CircularDataBar = ({ latency = 28 }) => {
  const maxValue = 100;
  const percent = Math.min((latency / maxValue) * 100, 100);

  return (
    <div className="flex flex-col items-center justify-center">
      
      <div 
        className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,209,0.15)]"
        style={{ 
          background: `conic-gradient(#00FFD1 ${percent}%, #0F2A3F ${percent}%)` 
        }}
      >

        <div className="w-24.5 h-24.5 bg-[#0a1533] rounded-full flex items-center justify-center flex-col shadow-inner">
          
          <span className="text-3xl font-bold text-white">
            {latency}
            <span className="text-lg text-gray-300 ml-1">ms</span>
          </span>
          
        </div>
      </div>

      <span className="text-blue-300/70 text-sm font-medium mt-2 tracking-wide">
        Latency
      </span>
      
    </div>
  );
};

export default CircularDataBar;