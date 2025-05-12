import React from 'react';
import { Scale, Award, Briefcase, ArrowRight } from 'lucide-react';

interface CaseStudyProps {
  icon: React.ReactNode;
  title: string;
  area: string;
  challenge: string;
  solution: string;
  outcome: string;
  imageUrl: string;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ icon, title, area, challenge, solution, outcome, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-slate-900">
              {icon}
            </div>
            <span className="bg-amber-500/20 text-amber-500 text-sm py-1 px-3 rounded-full">
              {area}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      
      <div className="p-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="space-y-4">
          <div className="relative pl-6 border-l-2 border-amber-500">
            <h4 className="font-bold text-slate-700 mb-2">Desafio:</h4>
            <p className="text-slate-600">{challenge}</p>
          </div>
          <div className="relative pl-6 border-l-2 border-amber-500">
            <h4 className="font-bold text-slate-700 mb-2">Solução:</h4>
            <p className="text-slate-600">{solution}</p>
          </div>
          <div className="relative pl-6 border-l-2 border-amber-500">
            <h4 className="font-bold text-slate-700 mb-2">Resultado:</h4>
            <p className="text-slate-600">{outcome}</p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200">
          <a 
            href="#contact" 
            className="inline-flex items-center text-amber-500 hover:text-amber-600 font-medium transition-colors duration-300"
          >
            Consulte Nossos Especialistas
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const cases = [
    {
      icon: <Scale size={20} />,
      title: "Fusão Empresarial Complexa",
      area: "Direito Empresarial",
      challenge: "Uma fusão de R$ 500 milhões entre duas grandes empresas do setor de tecnologia, com desafios regulatórios e trabalhistas.",
      solution: "Desenvolvemos uma estratégia abrangente para abordar questões regulatórias, due diligence detalhada e negociação de acordos trabalhistas.",
      outcome: "Fusão concluída com sucesso em 6 meses, preservando 98% dos empregos e gerando sinergia operacional significativa.",
      imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Briefcase size={20} />,
      title: "Reestruturação Societária",
      area: "Direito Societário",
      challenge: "Empresa familiar com conflitos internos necessitando reorganização societária para continuidade dos negócios.",
      solution: "Mediação entre as partes, implementação de governança corporativa e elaboração de acordo de acionistas.",
      outcome: "Resolução do conflito familiar, profissionalização da gestão e crescimento de 40% no faturamento.",
      imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Award size={20} />,
      title: "Recuperação Judicial",
      area: "Direito Recuperacional",
      challenge: "Indústria tradicional com 500 funcionários enfrentando grave crise financeira e risco de falência.",
      solution: "Plano de recuperação judicial estruturado, negociação com credores e reestruturação operacional.",
      outcome: "Empresa recuperada, dívidas renegociadas e manutenção de 400 empregos diretos.",
      imageUrl: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Casos de Sucesso</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-300 text-lg">
            Conheça alguns dos casos emblemáticos em que nossa expertise fez a diferença para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <CaseStudy
              key={index}
              icon={caseStudy.icon}
              title={caseStudy.title}
              area={caseStudy.area}
              challenge={caseStudy.challenge}
              solution={caseStudy.solution}
              outcome={caseStudy.outcome}
              imageUrl={caseStudy.imageUrl}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-3 px-8 rounded-md transition-all duration-300 group"
          >
            Consulte Nossos Especialistas
            <ArrowRight size={18} className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;