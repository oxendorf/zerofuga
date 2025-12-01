import React, { ReactNode } from 'react';
import { useInView } from './useInView';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  link?: string;
  isPrimary?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, buttonText, link = "https://wa.me/5521981198035", isPrimary = false }) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Ensure WhatsApp links have the text query parameter
  const finalLink = link.includes('wa.me') && !link.includes('?text=') 
    ? `${link}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista` 
    : link;

  return (
    <div 
      ref={ref}
      className={`group relative rounded-3xl p-1 transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Border Gradient Background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-50 group-hover:opacity-100 group-hover:from-[#00ff88]/50 transition-opacity duration-500"></div>
      
      <div className="relative h-full bg-[#121212] rounded-[22px] p-8 overflow-hidden hover:bg-[#151515] transition-colors">
        {/* Glow Effect */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-[#00ff88] rounded-full mix-blend-screen filter blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
        
        <div className="relative z-10">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-colors ${
                isPrimary ? 'bg-[#00ff88] text-black' : 'bg-white/5 text-[#00ff88] group-hover:bg-[#00ff88] group-hover:text-black'
            }`}>
                {icon}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00ff88] transition-colors">{title}</h3>
            <p className="text-gray-400 leading-relaxed mb-8 min-h-[80px]">{description}</p>
            
            <ul className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                </li>
                ))}
            </ul>

            <a 
                href={finalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 border ${
                    isPrimary 
                    ? 'bg-[#00ff88] text-black border-transparent hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]' 
                    : 'bg-transparent text-white border-white/10 hover:border-[#00ff88] hover:text-[#00ff88]'
                }`}
            >
                {buttonText}
            </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;