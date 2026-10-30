import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const IPCard = (props) => {

  const domain = props?.dnsData?.domain || "example.com"; 
  const ipAddress = props?.dnsData?.ip?.[0] || "IP Address";

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ipAddress)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2 second baad wapas icon change
      })
      .catch((err) => console.error("Copy failed!", err));
  };

  return (
    // Main Container
    <div className="w-[70%] bg-[#050B14] border border-blue-500/30 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
      
      <h2 className="text-[#00ffd0ce] text-2xl font-mono font-semibold tracking-wide">
        {ipAddress}
      </h2>

      <div className="w-full h-px bg-blue-500/20 my-3"></div>

      <div className="flex justify-between items-center">
        <span className="text-gray-400 font-mono text-sm">
          {domain}
        </span>

        <button 
          onClick={handleCopy}
          className="text-gray-400 hover:text-[#00FFD1] transition-colors p-1"
        >
          {copied ? (
            <Check className="w-4 h-4 text-[#00FFD1]" /> // Copy hone par Tick
          ) : (
            <Copy className="w-4 h-4" /> // Normal Copy icon
          )}
        </button>
      </div>

    </div>
  );
};

export default IPCard;