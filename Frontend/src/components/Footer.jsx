import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-[#050B14] border-t border-blue-500/20 text-gray-400 py-10 px-6 md:px-16">
      

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-4 mb-10">
        

        <div className="flex flex-col w-full md:w-[30%]">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-[#00FFD1]" size={32} />
            <div>
              <h1 className="text-2xl font-bold text-white leading-tight">SecureDNS</h1>
              <p className="text-sm text-blue-300/70">by Team Aeris</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            SecureDNS is an Authenticated Gateway-Assisted DNSSEC Validator for IoT clients.
          </p>


          <div className="flex gap-4">
            <a href="https://github.com/ParthCoder89" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FFD1] transition-colors">Github</a>
            <a href="https://www.linkedin.com/in/parth-vaish-46b51533a/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FFD1] transition-colors">Linkedin</a>
            <a href="parthgupta5041@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00FFD1] transition-colors">Email</a>
          </div>
        </div>


        <div className="flex flex-col w-full md:w-[15%]">
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="/" className="hover:text-[#00FFD1] transition-colors">Home</a></li>
            <li><a href="/validate" className="hover:text-[#00FFD1] transition-colors">Validator</a></li>
            <li><a href="/architecture" className="hover:text-[#00FFD1] transition-colors">Architecture</a></li>
            <li><a href="/history" className="hover:text-[#00FFD1] transition-colors">History</a></li>
            <li><a href="/about" className="hover:text-[#00FFD1] transition-colors">About</a></li>
            <li><a href="/contact" className="hover:text-[#00FFD1] transition-colors">Contact</a></li>
          </ul>
        </div>


        <div className="flex flex-col w-full md:w-[20%]">
          <h2 className="text-white font-semibold mb-4">Hackathon</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>AIORI Hackathon 2025</li>
            <li>Building a Safer Digital Future</li>
            <li className="text-blue-300/70 hover:text-[#00FFD1] cursor-pointer transition-colors">#TeamAeris</li>
          </ul>
        </div>


        <div className="flex flex-col w-full md:w-[25%]">
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-blue-300/70"/> 
              <span>team.aeris@secureDNS.in</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-blue-300/70"/> 
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-blue-300/70"/> 
              <span>Bengaluru, India</span>
            </li>
          </ul>
        </div>

      </div>


      <div className="max-w-7xl mx-auto border-t border-gray-700/50 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 Team Aeris. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">SecureDNS</a>
          <span>|</span>
          <a href="#" className="hover:text-white transition-colors">Trust. Validate. Connect.</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
