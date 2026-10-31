import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hammer, ArrowLeft, Construction } from 'lucide-react';
import TopNavbar from './TopNavbar';
import Footer from './Footer';

const WorkInProgress = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen bg-[#050B14] flex flex-col relative overflow-hidden">
            <TopNavbar />

            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00FF9D]/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 pt-20 py-20">
                

                <div className="relative flex items-center justify-center w-32 h-32 mb-8 mt-10">
                    <div className="absolute inset-0 bg-[#00FF9D]/20 rounded-full animate-ping opacity-75"></div>
                    <div className="relative bg-[#0a1533] border border-[#00FF9D]/50 w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,157,0.3)]">
                        <Construction className="text-[#00FF9D]" size={40} />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center tracking-wide">
                    Work In Progress
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl leading-relaxed mb-10">
                    We are currently building this page. For the Hackathon demonstration, 
                    please explore the <strong className="text-white">Home</strong> and <strong className="text-white">Validator</strong> pages.
                </p>


                <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                        onClick={() => navigate(-1)} // Go back to previous page
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-blue-500/50 text-blue-300 hover:bg-blue-500/10 transition-colors font-medium"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                    
                    <button 
                        onClick={() => navigate('/validate')} 
                        className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#00FFD1] to-[#00B3FF] text-black font-bold hover:scale-105 transition-transform"
                    >
                        Go to Validator
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default WorkInProgress;