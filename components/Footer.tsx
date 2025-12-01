import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 text-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00ff88] blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-8 flex flex-col justify-center items-center">
            <span className="text-4xl font-black tracking-tighter text-white leading-none">ZERO <span className="text-[#00ff88]">FUGA</span></span>
            <span className="text-xs tracking-[0.3em] text-gray-500 uppercase leading-tight mt-2">Secretaria Digital</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-400 font-medium text-sm">
            <a href="#ia24-7" className="hover:text-[#00ff88] transition-colors">IA 24/7</a>
            <a href="#crm" className="hover:text-[#00ff88] transition-colors">CRM</a>
            <a href="#gmb" className="hover:text-[#00ff88] transition-colors">Google Business</a>
            <a href="#recuperacao" className="hover:text-[#00ff88] transition-colors">Recuperação</a>
        </div>

        <div className="border-t border-white/5 pt-8">
            <p className="text-gray-600 mb-2">
            &copy; {new Date().getFullYear()} Zero Fuga - Secretaria Digital. Todos os direitos reservados.
            </p>
            <p className="text-gray-700 text-sm">
            Transformando leads em clientes com tecnologia de ponta.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;