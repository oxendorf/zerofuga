import React, { useState, useEffect } from 'react';

// Dados de conteúdo persuasivo para os modais
const modalContent: Record<string, {
  title: string;
  subtitle: string;
  body: string;
  benefits: string[];
  cta: string;
  icon: React.ReactNode;
}> = {
  'ia24-7': {
    title: "Sua Secretária Digital Que Nunca Dorme",
    subtitle: "Atendimento 24/7 com Inteligência Artificial",
    body: "Você sabia que responder um lead em 5 minutos aumenta a chance de venda em 9x? A Zero Fuga IA atende em 5 segundos. \n\nEnquanto você dorme ou está ocupado, nossa IA conversa, tira dúvidas, quebra objeções e agenda reuniões diretamente no seu calendário. É como ter seu melhor vendedor trabalhando 24 horas por dia, sem férias e sem encargos trabalhistas.",
    benefits: [
      "Resposta Imediata (0s de espera)",
      "Qualificação Automática de Leads",
      "Agendamento direto na Agenda",
      "Atendimento Humanizado e Natural"
    ],
    cta: "AUTOMATIZAR ATENDIMENTO",
    icon: (
      <svg className="w-12 h-12 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    )
  },
  'crm': {
    title: "O Cérebro da Sua Operação de Vendas",
    subtitle: "CRM & Gestão Comercial Completa",
    body: "Planilhas são onde os leads vão para morrer. Para escalar, você precisa de organização profissional. \n\nO CRM Zero Fuga centraliza todos os seus canais (WhatsApp, Email, Instagram) em um único lugar. Tenha visão total do seu funil, saiba exatamente quanto dinheiro está em negociação e nunca mais perca uma venda por esquecer de responder um cliente.",
    benefits: [
      "Visão Raio-X do Funil de Vendas",
      "Histórico Unificado de Conversas",
      "Lembretes e Tarefas Automáticas",
      "Relatórios de Previsibilidade de Lucro"
    ],
    cta: "ORGANIZAR EMPRESA",
    icon: (
      <svg className="w-12 h-12 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )
  },
  'gmb': {
    title: "Domine a Primeira Página do Google",
    subtitle: "Gestão de Google Meu Negócio (GMB)",
    body: "Quando seu cliente busca pelo seu serviço na sua cidade, quem aparece primeiro? Se não, você está invisível. \n\nNós otimizamos seu perfil para o topo do Google Maps. Gerenciamos suas avaliações para construir uma reputação blindada de 5 estrelas e transformamos visitantes em clientes prontos para comprar, sem gastar um centavo com anúncios pagos.",
    benefits: [
      "Posicionamento Top 3 no Google Maps",
      "Gestão Estratégica de Avaliações",
      "Atração de Clientes Qualificados",
      "Aumento de Ligações e Visitas"
    ],
    cta: "SER O Nº1 DA CIDADE",
    icon: (
      <svg className="w-12 h-12 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )
  },
  'recuperacao': {
    title: "Gestão de Email Marketing & ActiveCampaign",
    subtitle: "A Máquina de Vendas Automática",
    body: "A maioria das empresas deixa dinheiro na mesa todos os dias. Leads que pararam de responder, carrinhos abandonados, clientes antigos esquecidos. \n\nNós implementamos e gerenciamos a plataforma ActiveCampaign para o seu negócio. Criamos funis de email marketing sofisticados que perseguem, nutrem e vendem automaticamente. Transformamos sua lista de contatos em uma mina de ouro recorrente.",
    benefits: [
      "Implementação Completa ActiveCampaign",
      "Funis de Email Marketing Persuasivos",
      "Recuperação Automática de Vendas",
      "Reativação da Base de Clientes"
    ],
    cta: "VENDER POR E-MAIL",
    icon: (
      <svg className="w-12 h-12 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )
  }
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll quando modal está aberto
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  const handleMenuClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveModal(id);
    setIsMobileMenuOpen(false);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const menuItems = [
    {
      id: 'ia24-7',
      label: 'IA 24/7',
      href: '#ia24-7',
      headline: 'Atendimento Autônomo',
      description: 'Sua secretária digital responde em segundos, qualifica leads e agenda reuniões enquanto você dorme.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
      )
    },
    {
      id: 'crm',
      label: 'CRM Completo',
      href: '#crm',
      headline: 'Central de Comando',
      description: 'Organize o caos. Tenha visão raio-x do seu faturamento e nunca mais perca uma venda por esquecimento.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      )
    },
    {
      id: 'gmb',
      label: 'Google Meu Negócio',
      href: '#gmb',
      headline: 'Dominância Local',
      description: 'Seja o #1 no Google. Atraia clientes qualificados que já estão procurando por você sem gastar com anúncios.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      )
    },
    {
      id: 'recuperacao',
      label: 'Gestão de Email Marketing',
      href: '#recuperacao',
      headline: 'ActiveCampaign & Email',
      description: 'Gestão completa de ActiveCampaign. Crie funis automáticos que recuperam vendas e nutrem leads.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#0a0a0a]/90 backdrop-blur-xl border-white/10 py-3 shadow-lg shadow-[#00ff88]/5' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <a href="#" className="flex flex-col group relative z-50">
             <span className="text-2xl font-black tracking-tighter text-white leading-none">ZERO <span className="text-[#00ff88]">FUGA</span></span>
             <span className="text-[0.6rem] tracking-[0.2em] text-gray-400 uppercase leading-tight mt-0.5">Secretaria Digital</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-1">
              {menuItems.map((item) => (
                <li 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button 
                    onClick={(e) => handleMenuClick(e, item.id)}
                    className="px-5 py-3 text-gray-300 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide block relative z-10 bg-transparent border-none cursor-pointer"
                  >
                    {item.label}
                  </button>
                  
                  {/* Desktop Hover Hint (Optional: Keep small preview) */}
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-max max-w-xs bg-[#121212] border border-[#00ff88]/20 rounded-xl p-3 shadow-xl backdrop-blur-md transition-all duration-300 origin-top pointer-events-none opacity-0 group-hover:opacity-100 translate-y-2`}
                  >
                    <div className="text-[#00ff88] text-xs font-bold text-center">Clique para ver detalhes</div>
                  </div>
                </li>
              ))}
            </ul>
            
            <a 
              href="https://wa.me/5521981198035?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#00ff88] text-[#0a0a0a] px-7 py-2.5 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative text-sm tracking-wide">FALAR NO WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-8 h-8 flex flex-col justify-center gap-1.5 items-end">
              <span className={`block h-0.5 bg-[#00ff88] transition-all duration-300 ${isMobileMenuOpen ? 'w-full rotate-45 translate-y-2' : 'w-full'}`} />
              <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-3/4'}`} />
              <span className={`block h-0.5 bg-[#00ff88] transition-all duration-300 ${isMobileMenuOpen ? 'w-full -rotate-45 -translate-y-2' : 'w-1/2'}`} />
            </div>
          </button>

          {/* Rich Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 bg-[#050505] z-40 overflow-y-auto transition-all duration-500 ease-in-out ${
              isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="min-h-screen pt-28 pb-10 px-6 flex flex-col">
              <div className="flex flex-col gap-4 mb-8">
                {menuItems.map((item, idx) => (
                  <button 
                    key={item.id}
                    onClick={(e) => handleMenuClick(e, item.id)}
                    className="group relative overflow-hidden rounded-2xl bg-[#111] border border-white/5 p-5 transition-all active:scale-95 text-left w-full"
                    style={{ transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : '0ms' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00ff88]/10 flex items-center justify-center text-[#00ff88] flex-shrink-0 group-hover:bg-[#00ff88] group-hover:text-black transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#00ff88] transition-colors">
                          {item.headline}
                        </h3>
                        <p className="text-gray-400 text-sm leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-[#00ff88]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-auto">
                <a 
                  href="https://wa.me/5521981198035?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-[#00ff88] text-black px-6 py-5 rounded-2xl font-black text-lg shadow-[0_0_20px_rgba(0,255,136,0.2)]"
                >
                  <span>FALAR NO WHATSAPP</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* DETAILED INFO MODAL */}
      {activeModal && modalContent[activeModal] && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity animate-[fadeIn_0.3s_ease-out]"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-[#0a0a0a] w-full max-w-2xl rounded-3xl border border-[#00ff88]/20 shadow-[0_0_50px_rgba(0,255,136,0.15)] overflow-hidden animate-[slideIn_0.4s_cubic-bezier(0.16,1,0.3,1)] max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Header / Gradient */}
            <div className="relative p-8 md:p-12 pb-6 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-[#00ff88]/10 to-transparent pointer-events-none"></div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none"></div>
               
               <div className="relative z-10">
                  <div className="w-20 h-20 rounded-2xl bg-[#00ff88]/10 border border-[#00ff88]/20 flex items-center justify-center mb-6 text-[#00ff88]">
                    {modalContent[activeModal].icon}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] text-xs font-bold uppercase tracking-wider mb-3">
                    {modalContent[activeModal].subtitle}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.95] tracking-tight mb-4">
                    {modalContent[activeModal].title}
                  </h2>
               </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-12 pt-0">
               <p className="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
                 {modalContent[activeModal].body}
               </p>

               <div className="bg-white/5 rounded-2xl p-6 border border-white/5 mb-8">
                 <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                   <span className="w-1.5 h-6 bg-[#00ff88] rounded-full"></span>
                   O que você ganha com isso:
                 </h4>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   {modalContent[activeModal].benefits.map((benefit, i) => (
                     <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                       <svg className="w-5 h-5 text-[#00ff88] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                       {benefit}
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="flex flex-col gap-3">
                 <a 
                   href="https://wa.me/5521981198035?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full bg-[#00ff88] hover:bg-[#00cc6f] text-black font-black text-lg py-5 rounded-xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-[0_0_30px_rgba(0,255,136,0.3)] text-center"
                 >
                   <span>{modalContent[activeModal].cta}</span>
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </a>
                 <button 
                    onClick={() => {
                        const element = document.getElementById(activeModal || '');
                        if (element) {
                            closeModal();
                            setTimeout(() => {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        } else {
                            closeModal();
                        }
                    }}
                    className="text-gray-500 hover:text-white text-sm font-medium py-2 transition-colors"
                 >
                    Prefiro ver mais detalhes no site
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;