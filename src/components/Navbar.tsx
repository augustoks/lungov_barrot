import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Contato', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);

      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold text-white flex items-center">
          <span className="text-white">LUNGOV</span>
          <span className="mx-2 text-white">&</span>
          <span className="text-white">BARROT</span>
        </a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-amber-500'
                  : 'text-white hover:text-amber-400'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-4 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded px-4 py-2 text-sm uppercase tracking-wider font-medium transition-colors duration-300"
          >
            Fale Conosco
          </a>
        </nav>

        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`fixed inset-0 bg-slate-900 bg-opacity-95 z-40 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg uppercase tracking-wider font-medium transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? 'text-amber-500'
                  : 'text-white hover:text-amber-400'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded px-6 py-3 text-lg uppercase tracking-wider font-medium transition-colors duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>

      <a
        href="https://wa.me/5511910208036"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 z-30"
        aria-label="Chat no WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </header>
  );
};

export default Navbar;