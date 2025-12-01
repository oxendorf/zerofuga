import React from 'react';
import { useInView } from './useInView';

const RecoverySection: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    "Caçador de Carrinhos Abandonados",
    "Reativação de Clientes \"Mortos\"",
    "Ofertas Irresistíveis Automáticas",
    "Upsell (Venda Mais para o Mesmo)",
    "Rastreamento de Comportamento",
    "Dinheiro no Bolso em 24h"
  ];

  return (
    <section id="recuperacao" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">
            Transforme o <span className="text-gray-500 line-through decoration-red-500 decoration-4">"Não"</span> em <br/>
            <span className="text-[#00ff88] drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">PIX NA CONTA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Você já pagou por esse lead. Deixar ele ir embora é rasgar dinheiro. Nossa tecnologia <strong className="text-white">ActiveCampaign</strong> persegue, convence e recupera quem estava prestes a desistir.
          </p>
        </div>

        <div 
          ref={ref}
          className={`relative max-w-5xl mx-auto bg-gradient-to-b from-[#111] to-[#0a0a0a] rounded-[40px] p-10 md:p-16 border border-white/5 overflow-hidden transition-all duration-700 shadow-2xl ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,_#00ff8815,_transparent_70%)] pointer-events-none"></div>

          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#00ff88] text-black mb-8 shadow-[0_0_30px_rgba(0,255,136,0.3)] animate-pulse-ring">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pare de Deixar Dinheiro na Mesa</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Enquanto você lê isso, leads estão esfriando. Nós instalamos um sistema de "Resgate Automático" que traz esse dinheiro de volta para o seu bolso sem você mover um dedo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative z-10">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/[0.03] p-6 rounded-2xl border border-white/5 hover:border-[#00ff88]/30 hover:bg-white/[0.05] transition-all duration-300 group">
                <div className="w-8 h-8 rounded-full bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-base text-gray-200 font-medium group-hover:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>

          <div className="text-center relative z-10">
             <a 
              href="https://wa.me/5521981198035?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00ff88] text-[#0a0a0a] text-lg font-black px-12 py-6 rounded-full shadow-[0_0_30px_rgba(0,255,136,0.3)] hover:shadow-[0_0_60px_rgba(0,255,136,0.5)] hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
            >
              <span>QUERO RECUPERAR MEU DINHEIRO</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoverySection;