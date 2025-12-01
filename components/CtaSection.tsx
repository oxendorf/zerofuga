import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88] to-[#00cc6f]"></div>
      
      {/* Texture Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black opacity-10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 text-[#0a0a0a] tracking-tighter leading-tight">
            PARE DE PERDER DINHEIRO
            </h2>
            <p className="text-xl md:text-3xl font-bold mb-12 text-[#0a0a0a]/80">
            Cada minuto sem o Zero Fuga IA é um cliente que você está entregando para o concorrente.
            </p>
            
            <a 
            href="https://wa.me/5521981198035?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white text-lg md:text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 group"
            >
            <span>FALAR COM ESPECIALISTA</span>
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            </a>
            
            <div className="mt-8 flex items-center justify-center gap-2 text-[#0a0a0a] font-bold opacity-70">
                <span className="w-2 h-2 bg-[#0a0a0a] rounded-full animate-pulse"></span>
                Atendimento imediato via WhatsApp
            </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;