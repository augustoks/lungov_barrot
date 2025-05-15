import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">
              <span className="text-white">LUNGOV</span> <span className="text-white">&</span> <span className="text-white">BARROT</span>
            </h3>
            <p className="text-slate-300 mb-6">
              Fornecendo serviços jurídicos excepcionais com integridade, profissionalismo e dedicação para alcançar os melhores resultados para nossos clientes desde 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-amber-500 pb-2">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Início', href: '#home' },
                { label: 'Sobre', href: '#about' },
                { label: 'Serviços', href: '#services' },
                { label: 'Contato', href: '#contact' }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="text-amber-500 mr-2">›</span> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-amber-500 pb-2">
              Áreas de Atuação
            </h3>
            <ul className="space-y-3">
              {[
                'Direito Trabalhista',
                'Direito Civil',
                'Direito Empresarial',
                'Direito de Família',
                'Direito Criminal',
                'Direito Imobiliário'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-slate-300 hover:text-amber-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="text-amber-500 mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-12 after:bg-amber-500 pb-2">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Rua Augusta, 2.709, Conjunto 114 – Bairro Cerqueira César, São Paulo – SP</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="text-amber-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">(11) 2667-8036</p>
                  <p className="text-slate-300">(11) 3082-6333</p>
                  <p className="text-slate-300">(11) 91020-8036</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">lungovebarrot@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {currentYear} LUNGOV & BARROT Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;