import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

const BogusData = ({ dnsData, onBack }) => {
    return (
        <div className="w-full flex justify-center items-center py-18">
            <div className="w-[70%] bg-[#1a0b12] border border-red-500/50 rounded-2xl p-10 flex flex-col items-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                    <ShieldAlert className="text-red-500" size={40} />
                </div>
                
                <h1 className="text-3xl font-bold text-red-500 mb-2">BOGUS DOMAIN</h1>
                
                <p className="text-gray-400 mb-6">
                    DNSSEC Validation Failed for <span className="text-white font-mono">{dnsData?.domain || "Unknown"}</span>
                </p>

                <button
                    onClick={onBack}
                    className="my-4 flex items-center gap-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 px-6 py-3 rounded-lg font-semibold transition-all border border-red-500/50"
                >
                    <ArrowLeft size={20} />
                    Try Another Domain
                </button>
            </div>
        </div>
    );
};

export default BogusData;