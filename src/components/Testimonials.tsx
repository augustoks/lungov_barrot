import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
  image: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, author, position, image, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mx-4">
      <div className="flex items-center space-x-1 text-amber-400 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill={i < rating ? "currentColor" : "none"} />
        ))}
      </div>
      <blockquote className="text-slate-700 mb-6 italic">"{text}"</blockquote>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={author} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-slate-800">{author}</h4>
          <p className="text-slate-500 text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      text: "A equipe jurídica da LUNGOV BARROT foi fundamental na resolução de nossa disputa corporativa. Sua abordagem estratégica e atenção aos detalhes resultaram em um desfecho favorável que superou nossas expectativas.",
      author: "David Miller",
      position: "CEO, TechVision Inc.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      text: "Não posso recomendar Elena Lungov o suficiente. Sua expertise em direito de família tornou um processo de divórcio difícil muito mais gerenciável. Ela foi compassiva, responsiva e lutou pelos meus interesses em cada etapa.",
      author: "Jennifer Adams",
      position: "Diretora de Marketing",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5
    },
    {
      text: "A expertise em direito empresarial da LUNGOV BARROT foi crucial durante a fusão de nossa empresa. Michael Barrot supervisionou pessoalmente a transação, garantindo que tudo procedesse sem problemas e todos os requisitos legais fossem atendidos.",
      author: "Roberto Chen",
      position: "CFO, Inovações Globais",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4
    }
  ];

  useEffect(() => {
    let interval: number | undefined;
    
    if (autoplay) {
      interval = window.setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Depoimentos de Clientes</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            Veja o que nossos clientes dizem sobre sua experiência com nosso escritório.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full">
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-md text-slate-800 hover:bg-amber-500 hover:text-white transition-colors duration-300 z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-md text-slate-800 hover:bg-amber-500 hover:text-white transition-colors duration-300 z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-amber-500' : 'bg-white/30'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;