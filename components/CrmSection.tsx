import React from 'react';
import ServiceCard from './ServiceCard';

const CrmSection: React.FC = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Visão Raio-X do Faturamento",
      description: "Pare de dirigir no escuro. Tenha um painel visual onde você enxerga exatamente quanto dinheiro está parado em cada etapa da negociação.",
      features: [
        "Pipeline Visual de Alta Clareza",
        "Previsibilidade de Receita",
        "Detecção de Gargalos de Venda",
        "Controle Total do Processo"
      ],
      buttonText: "ASSUMIR O CONTROLE"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Central de Comando",
      description: "Centralize WhatsApp, Instagram, Email e Telefone em um único lugar. O histórico vitalício de cada cliente na palma da sua mão.",
      features: [
        "Omnichannel (Tudo em um lugar)",
        "Histórico \"Caixa Preta\" do Cliente",
        "Segmentação Inteligente (Tags)",
        "Organização de Nível Militar"
      ],
      buttonText: "ORGANIZAR O CAOS"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Piloto Automático de Lucro",
      description: "Configure uma única vez e deixe o sistema trabalhar eternamente. O CRM nutre, convence e faz o follow-up chato por você.",
      features: [
        "Follow-up Infalível Automático",
        "Sequências de E-mail Persuasivas",
        "Disparos de WhatsApp em Massa",
        "Tarefas que se criam sozinhas"
      ],
      buttonText: "AUTOMATIZAR TUDO",
      isPrimary: true
    }
  ];

  return (
    <section id="crm" className="py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#00ff88] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">O Cérebro do Negócio</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
            Seu Ecossistema de <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Alta Performance</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Abandone as planilhas amadoras. O <strong className="text-white">Zero Fuga CRM</strong> é a diferença entre uma empresa que sobrevive e uma que domina o mercado.
          </p>
        </div>

        {/* Updated grid to force 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmSection;