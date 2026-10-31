import React from 'react';
import { TicketCheck, Lock, Cpu, ChartColumnDecreasing } from 'lucide-react';

const iconMap = {
    "TicketCheck": TicketCheck,
    "BrickWallShield": Lock,
    "Cpu": Cpu,
    "ChartColumnDecreasing": ChartColumnDecreasing
};

const MiddleDataShowing = ({ data, currentIndex }) => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            
            {data.map((item, index) => {
                const isCurrent = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + data.length) % data.length;
                const isNext = index === (currentIndex + 1) % data.length;

                if (!isCurrent && !isPrev && !isNext) return null;

                const IconComponent = iconMap[item.icon] || TicketCheck;

                return (
                    <div
                        key={item.id}
                        className={`absolute flex items-center gap-4 transition-all duration-500 ease-in-out ${
                            isCurrent 
                                ? "opacity-100 scale-100 z-10" 
                                : isPrev 
                                    ? "opacity-100 scale-75 left-[5%] z-0"
                                    : "opacity-100 scale-75 right-[5%] z-0"
                        }`}
                    >
                        <div className={`p-3 border rounded-full transition-colors duration-500 ${
                            isCurrent 
                            ? "border-[#00FF9D] bg-[#00FF9D]/10 shadow-[0_0_15px_rgba(0,255,157,0.3)]" 
                            : "border-gray-600 bg-transparent"
                        }`}>
                            <IconComponent className={isCurrent ? "text-[#00FF9D]" : "text-gray-400"} size={isCurrent ? 32 : 20} />
                        </div>

                        <div className="flex flex-col whitespace-nowrap">
                            <h1 className={`font-bold leading-tight tracking-wide ${
                                isCurrent ? "text-3xl text-white" : "text-lg text-gray-500"
                            }`}>
                                {item.data}
                            </h1>
                            <p className={`${isCurrent ? "text-gray-400 text-sm" : "text-gray-600 text-[10px]"}`}>
                                {item.text}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MiddleDataShowing;