import React from 'react';
import ServiceCard from './ServiceCard';

const GmbSection: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Imã de Clientes Qualificados",
      description: "Transformamos seu perfil no Google em uma vitrine irresistível. Quando procurarem pelo seu serviço, sua empresa será a única opção lógica.",
      features: [
        "SEO Local de Alta Performance",
        "Top 3 no Google Maps (Garantido)",
        "Copywriting Persuasivo no Perfil",
        "Fotos Estratégicas que Vendem"
      ],
      buttonText: "DOMINAR MINHA REGIÃO"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Blindagem de Autoridade",
      description: "Ninguém compra de quem tem nota baixa. Criamos uma muralha de prova social ao redor da sua marca com avaliações 5 estrelas constantes.",
      features: [
        "Máquina de Gerar Reviews 5 Estrelas",
        "Respostas que Quebram Objeções",
        "Remoção de Avaliações Injustas",
        "Monitoramento 24/7 da Reputação"
      ],
      buttonText: "CONSTRUIR AUTORIDADE"
    }
  ];

  return (
    <section id="gmb" className="py-32 bg-[#050505] relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#00ff88] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Tráfego Qualificado Gratuito</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
            Seja o <span className="text-[#00ff88]">Líder Absoluto</span> <br/> nas Buscas do Google
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Não basta estar no Google. Você precisa estar no topo. Clientes prontos para comprar estão procurando você agora. <strong className="text-white">Não deixe eles caírem no colo do concorrente.</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GmbSection;