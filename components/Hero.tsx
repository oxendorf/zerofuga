import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0a0a0a]">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#00ff880f,transparent)]"></div>
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ff88] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse-ring"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00cc6f] rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse-ring delay-1000"></div>

      {/* Floating 3D Elements (CSS only representation) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-[20%] w-12 h-12 border border-[#00ff88]/30 rounded-xl rotate-12 animate-float bg-black/20 backdrop-blur-sm"></div>
        <div className="absolute right-[10%] top-[30%] w-16 h-16 border border-white/10 rounded-full animate-float delay-1000 bg-black/20 backdrop-blur-sm"></div>
        <div className="absolute left-[20%] bottom-[20%] w-8 h-8 bg-[#00ff88] rounded-full opacity-20 animate-float delay-2000 blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-in backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">Inovação em Vendas Automáticas</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
          NUNCA MAIS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00cc6f] drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
            PERCA UM CLIENTE
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          A primeira Inteligência Artificial que trabalha <span className="text-white font-semibold">24/7</span> para transformar cada lead em uma oportunidade de ouro.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/5521981198035?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-[#00ff88] text-[#0a0a0a] text-lg font-bold px-10 py-5 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,136,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              QUERO AUMENTAR MINHAS VENDAS
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;