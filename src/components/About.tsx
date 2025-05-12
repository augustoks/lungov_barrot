import React from 'react';
import { Shield, Scale, Award, Users } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield size={24} />,
      title: "Integridade",
      description: "Mantemos os mais altos padrões éticos em todas as nossas interações profissionais e com clientes."
    },
    {
      icon: <Scale size={24} />,
      title: "Excelência",
      description: "Buscamos superar as expectativas dos clientes através de representação jurídica excepcional e atenção aos detalhes."
    },
    {
      icon: <Award size={24} />,
      title: "Dedicação",
      description: "Comprometemo-nos com cada caso com foco inabalável e preparação minuciosa."
    },
    {
      icon: <Users size={24} />,
      title: "Foco no Cliente",
      description: "Priorizamos entender as necessidades únicas de nossos clientes para oferecer soluções jurídicas personalizadas."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">LUNGOV & BARROT</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">Há 13 anos oferecendo serviços jurídicos excepcionais com compromisso e excelência.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="LUNGOV & BARROT Advocacia" 
              className="w-full h-80 object-cover object-center"
            />
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">Nossa História</h3>
            <p className="text-slate-600 mb-4">
              O escritório nasceu da união de dois profissionais com carreiras sólidas no Direito: Carla Lungov e Alexandre Barrot. Com uma visão compartilhada de oferecer serviços jurídicos éticos, personalizados e de excelência, fundaram o escritório, que hoje atua há 13 anos no mercado jurídico.
            </p>
            <p className="text-slate-600 mb-4">
              Desde o início, nossa proposta foi clara: oferecer soluções jurídicas sob medida, aliando rigor técnico ao atendimento individualizado que cada cliente merece. Atuamos tanto na esfera contenciosa quanto preventiva, sempre pautados pelos princípios éticos e morais que são a base de nossa atuação.
            </p>
            <p className="text-slate-600 mb-4">
              Ao longo do tempo, percebemos a importância de concentrar nossa experiência em um ambiente onde a dedicação exclusiva ao cliente fosse prioridade. Essa filosofia moldou a cultura do escritório e fortaleceu nossa reputação.
            </p>
            <p className="text-slate-600">
              Hoje, contamos com uma equipe de advogados com mais de 20 anos de experiência nas áreas em que atuamos, prontos para atender com excelência, comprometimento e profundo conhecimento jurídico. Mais do que resolver conflitos, nossa missão é prevenir problemas e construir relações duradouras de confiança com nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;