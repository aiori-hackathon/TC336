import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HistoryDataBox from './HistoryDataBox';
import TopNavbar from './TopNavbar';

const HistoryPage = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen bg-[#0a1533] pt-22 flex flex-col items-center">
            <TopNavbar />
            
            <div className="w-[90%] md:w-[80%] mt-10 flex flex-col">
                {/* Back Button */}
                <button 
                    onClick={() => navigate('/validate')} 
                    className="flex items-center gap-2 text-blue-300 hover:text-white transition-colors w-fit mb-6"
                >
                    <ArrowLeft size={20} />
                    <span className="font-semibold">Back to Validator</span>
                </button>

                <h1 className="text-3xl font-bold text-white mb-6">Full Validation History</h1>
                
                {/* Isme saara data aayega */}
                <HistoryDataBox limit={null} /> 
            </div>
        </div>
    );
};

export default HistoryPage;