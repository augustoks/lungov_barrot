import React from 'react';
import { Scale, Home, Gavel, UserCheck, Shield, Users, Briefcase, Building } from 'lucide-react';
import img1 from "../resources/img1.png";
import img2 from "../resources/img2.png";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl border-b-4 border-transparent hover:border-amber-500">
      <div className="text-amber-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

interface LawyerProfileProps {
  name: string;
  title: string;
  oab: string;
  education: {
    institution?: string;
    graduationYear: string;
  };
  credentials: string[];
  description: string;
  imgProfile: any;
}

const LawyerProfile: React.FC<LawyerProfileProps> = ({ name, title, oab, education, credentials, description, imgProfile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <div className="w-48 h-48 mx-auto bg-slate-200 rounded-full overflow-hidden mb-6 border-4 border-amber-500 transition-transform duration-300 hover:scale-105">
          {/* Placeholder for lawyer photo */}
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            <img src={imgProfile} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">{name}</h3>
        <p className="text-amber-500 font-medium mb-2">{title}</p>
        <p className="text-slate-600 font-medium">{oab}</p>
      </div>
      
      <div className="space-y-6 text-left">
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Formação</h4>
          <div className="space-y-1 text-slate-600">
            {education.institution && <p>{education.institution}</p>}
            <p>Ano de Graduação: {education.graduationYear}</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Credenciais</h4>
          <ul className="list-disc list-inside space-y-1 text-slate-600">
            {credentials.map((credential, index) => (
              <li key={index}>{credential}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-bold text-slate-800 mb-2">Sobre</h4>
          <p className="text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Briefcase size={40} />,
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para empresas, incluindo contratos, compliance e resolução de disputas comerciais."
    },
    {
      icon: <UserCheck size={40} />,
      title: "Direito Trabalhista",
      description: "Representação em questões trabalhistas, desde consultoria preventiva até defesa em processos judiciais."
    },
    {
      icon: <Shield size={40} />,
      title: "Direito do Consumidor",
      description: "Litígio e assessoria preventiva, com foco especial na área da saúde. Oferecemos suporte abrangente para proteger seus direitos como consumidor."
    },
    {
      icon: <Users size={40} />,
      title: "Direito de Família e Sucessões",
      description: "Assessoria em questões familiares e sucessórias, incluindo inventários judiciais e extrajudiciais, com abordagem sensível e personalizada."
    },
    {
      icon: <Gavel size={40} />,
      title: "Direito Criminal",
      description: "Assessoria desde a fase pré-inquisitorial, abrangendo todos os crimes previstos na legislação, com defesa técnica especializada e dedicada."
    },
    {
      icon: <Building size={40} />,
      title: "Direito Imobiliário",
      description: "Suporte jurídico em transações imobiliárias, contratos de locação, incorporações e questões condominiais."
    }
  ];

  const lawyers = [
    {
      name: "Carla Lungov",
      title: "Sócia Fundadora",
      oab: "OAB/SP: 124.995",
      education: {
        institution: "Faculdades Metropolitanas Unidas",
        graduationYear: "1993"
      },
      credentials: [
        "Membro do Instituto Brasileiro de Direito de Família (IBDFAM) e sucessões.",
        "Especialista em direito do consumidor pela ESA"
      ],
      description: "Com vasta experiência em Direito do Consumidor e Direito de Família, Carla Lungov combina expertise técnica com uma abordagem humanizada. Sua atuação é marcada pelo compromisso com a excelência e dedicação aos interesses de seus clientes.",
      imgProfile: img1
    },
    {
      name: "Alexandre Moreno Barrot",
      title: "Sócio Fundador",
      oab: "OAB/SP: 94.149",
      education: {
        institution: "Faculdade de Direito de São Bernardo do Campo",
        graduationYear: "1988"
      },
      credentials: [
        "Especialista em direito Trabalhista e Empresarial.",
      ],
      description: "Alexandre Barrot é reconhecido por sua expertise em Trabalhista e Empresarial, com uma carreira consolidada na defesa dos interesses de seus clientes. Sua abordagem estratégica e conhecimento aprofundado do sistema judicial garantem uma representação legal de excelência.",
      imgProfile: img2
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Nossas Áreas de Atuação</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Oferecemos serviços jurídicos especializados com foco na excelência e no atendimento personalizado para cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Nossos Advogados</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Conheça os profissionais dedicados que lideram nossa equipe com excelência e compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {lawyers.map((lawyer, index) => (
            <LawyerProfile
              key={index}
              name={lawyer.name}
              title={lawyer.title}
              oab={lawyer.oab}
              education={lawyer.education}
              credentials={lawyer.credentials}
              description={lawyer.description}
              imgProfile={lawyer.imgProfile}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-3 px-8 rounded-md transition-all duration-300"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;