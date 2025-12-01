import React from 'react';
import { useInView } from './useInView';

const AiSection: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="ia24-7" className="py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Background Ambience */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#00ff88]/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight leading-tight">
            Sua Máquina de Vendas <br />
            <span className="text-[#00ff88]">100% Autônoma</span>
          </h2>
          <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            Elimine o erro humano. Nossa IA não tira férias, não fica doente e <strong className="text-white">nunca deixa um cliente no vácuo</strong>. Ela qualifica, convence e agenda. Você só aparece para receber.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mt-12">
          {/* Phone Mockup */}
          <div className="relative w-[320px] h-[650px] bg-[#1a1a1a] rounded-[50px] p-2 border-[6px] border-[#333] shadow-[0_0_50px_-15px_rgba(0,255,136,0.3)] animate-float-phone flex-shrink-0 z-10">
            {/* Glossy reflection */}
            <div className="absolute inset-0 rounded-[44px] bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-20"></div>
            
            <div className="w-full h-full bg-[#0a0a0a] rounded-[42px] overflow-hidden flex flex-col relative border border-white/5">
              <div className="bg-[#151515] p-5 pt-10 flex items-center gap-3 border-b border-white/5 z-10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00ff88] to-[#00cc6f] flex items-center justify-center font-bold text-black text-xs">ZF</div>
                <div>
                  <div className="text-white font-bold text-sm">Zero Fuga IA</div>
                  <div className="text-[#00ff88] text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse"></span>
                    Digitando...
                  </div>
                </div>
              </div>
              
              <div className="flex-1 bg-black/50 p-4 flex flex-col gap-4 overflow-hidden relative">
                {/* Chat pattern bg */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div 
                  className={`self-start max-w-[85%] bg-[#222] p-4 rounded-2xl rounded-tl-sm border border-white/10 text-gray-200 text-sm leading-relaxed shadow-lg transform transition-all duration-500 delay-500 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                  <p>Olá! Vi que você quer escalar suas vendas. O que te impede de começar hoje?</p>
                  <span className="text-[10px] text-gray-500 mt-2 block">23:42</span>
                </div>
                
                <div className="self-end max-w-[85%] bg-[#00ff88]/10 border border-[#00ff88]/20 p-4 rounded-2xl rounded-tr-sm text-gray-200 text-sm leading-relaxed shadow-lg opacity-80">
                  <p>Medo de investir e não ter retorno...</p>
                  <span className="text-[10px] text-gray-500 mt-2 block text-right">23:43</span>
                </div>

                <div 
                  className={`self-start max-w-[85%] bg-[#222] p-4 rounded-2xl rounded-tl-sm border border-white/10 text-gray-200 text-sm leading-relaxed shadow-lg transform transition-all duration-500 delay-1000 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                  <p>Entendo. Mas e se eu te garantisse que o sistema se paga na primeira semana recuperando clientes perdidos?</p>
                  <span className="text-[10px] text-gray-500 mt-2 block">23:43</span>
                </div>

                <div className="self-end max-w-[85%] bg-[#00ff88]/10 border border-[#00ff88]/20 p-4 rounded-2xl rounded-tr-sm text-gray-200 text-sm leading-relaxed shadow-lg opacity-80">
                  <p>Sério? Como funciona?</p>
                  <span className="text-[10px] text-gray-500 mt-2 block text-right">23:44</span>
                </div>
                
                <div 
                  className={`self-start max-w-[85%] bg-[#00ff88] text-black p-4 rounded-2xl rounded-tl-sm shadow-[0_0_20px_rgba(0,255,136,0.2)] font-medium text-sm transform transition-all duration-500 delay-1500 ${isInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                  <p>🔥 Já preparei uma demonstração personalizada para o seu negócio. Posso te enviar o link?</p>
                  <span className="text-[10px] text-black/60 mt-2 block">23:44</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div ref={ref} className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-8 flex flex-col gap-2">
              <span className="opacity-50 text-xl font-medium uppercase tracking-widest">Tecnologia Zero Fuga</span>
              <span>O Fim do <span className="text-[#00ff88] underline decoration-[#00ff88]/30 underline-offset-4">Lead Frio</span></span>
            </h3>
            
            <div className="space-y-8 mb-12">
               <div className="flex gap-5 group">
                 <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] flex-shrink-0 border border-[#00ff88]/20 group-hover:bg-[#00ff88] group-hover:text-black transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#00ff88] transition-colors">Atendimento na Velocidade da Luz</h4>
                   <p className="text-gray-400 text-sm leading-relaxed">O cliente mandou "Oi", a IA responde em milissegundos. Acabe com a chance dele procurar o concorrente.</p>
                 </div>
               </div>
               
               <div className="flex gap-5 group">
                 <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] flex-shrink-0 border border-[#00ff88]/20 group-hover:bg-[#00ff88] group-hover:text-black transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#00ff88] transition-colors">Qualificação Cirúrgica</h4>
                   <p className="text-gray-400 text-sm leading-relaxed">A IA separa curiosos de compradores reais. Sua equipe só fala com quem já está com o cartão na mão.</p>
                 </div>
               </div>
               
               <div className="flex gap-5 group">
                 <div className="w-14 h-14 rounded-2xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] flex-shrink-0 border border-[#00ff88]/20 group-hover:bg-[#00ff88] group-hover:text-black transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-lg mb-1 group-hover:text-[#00ff88] transition-colors">Agenda Lotada 24/7</h4>
                   <p className="text-gray-400 text-sm leading-relaxed">Acorde com sua agenda cheia de reuniões qualificadas. A IA negocia horários e confirma presença automaticamente.</p>
                 </div>
               </div>
            </div>

            <a 
              href="https://wa.me/5521981198035?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full md:w-auto bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-[#00ff88] transition-all duration-300 shadow-[0_5px_15px_rgba(255,255,255,0.1)] hover:shadow-[0_5px_30px_rgba(0,255,136,0.4)] hover:-translate-y-1"
            >
              ATIVAR MINHA IA AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;