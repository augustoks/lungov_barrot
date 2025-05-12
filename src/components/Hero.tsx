import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1920")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/75"></div>
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 animate-fadeInUp">
            Dedicados à <span className="text-amber-500">Justiça</span>,<br />
            Comprometidos com a <span className="text-amber-500">Excelência</span>
          </h1>
          
          <p className="text-xl text-slate-200 mb-8 animate-fadeInUp animation-delay-200 max-w-2xl">
            LUNGOV BARROT oferece expertise jurídica abrangente com foco no cliente. Nossa equipe experiente está pronta para guiá-lo em qualquer desafio legal.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-400">
            <a 
              href="#services" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center group"
            >
              Nossos Serviços
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-8 rounded-md transition-all duration-300"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;