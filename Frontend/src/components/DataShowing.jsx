import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MiddleDataShowing from './MiddleDataShowing';

const DataShowing = () => {

    const middleData = [
        {
            id: 1,
            icon: "TicketCheck",
            data: "10,000+",
            text: "Queries Validated"
        },
        {
            id: 2,
            icon: "Lock",
            data: "0ms",
            text: "Gateway Downtime"
        },
        {
            id: 3,
            icon: "Cpu",
            data: "100%",
            text: "TLS/ DTLS Encrypted"
        },
        {
            id: 4,
            icon: "ChartColumnDecreasing",
            data: "24/7",
            text: "Active Monitoring"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? middleData.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === middleData.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="w-full h-24 bg-[#060B19] border-y rounded-2xl border-[#76b1f8b5] shadow-[0_1px_15px_rgba(0,255,157,0.3)] flex items-center justify-between overflow-hidden">
            
            <button onClick={handlePrev} className="h-full px-4 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group">
                <ChevronLeft className="text-gray-400 group-hover:text-[#00FF9D] transition-colors text-3xl" />
            </button>

            <div className="flex-1 flex items-center justify-center h-full relative">
                <MiddleDataShowing data={middleData} currentIndex={currentIndex} />
            </div>

            <button onClick={handleNext} className="h-full px-4 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer group">
                <ChevronRight className="text-gray-400 group-hover:text-[#00FF9D] transition-colors text-3xl" />
            </button>
            
        </div>
    );
};

export default DataShowing;