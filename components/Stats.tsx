import React from 'react';
import { useInView } from './useInView';

const StatCard: React.FC<{ number: string; label: string; delay: number }> = ({ number, label, delay }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className={`relative group p-4 md:p-8 text-center transition-all duration-700 transform ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      <div className="relative">
        {/* Adicionado pb-2 para evitar corte do gradiente na parte inferior e ajustado tamanhos de fonte */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#00ff88] to-[#00cc6f] mb-3 drop-shadow-lg pb-2 leading-tight">{number}</div>
        <div className="text-gray-400 font-medium tracking-wide uppercase text-xs md:text-sm">{label}</div>
      </div>
    </div>
  );
};

const Stats: React.FC = () => {
  const stats = [
    { number: '24/7', label: 'Atendimento' },
    { number: '90%', label: 'Retenção de Leads' },
    { number: '3x', label: 'Mais Conversões' },
    { number: '100%', label: 'Automatizado' },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0a0a0a] border-y border-white/5 relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={index} className={index > 0 ? "border-l border-white/5 pl-4" : ""}>
               <StatCard 
                 number={stat.number} 
                 label={stat.label} 
                 delay={index * 100}
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;