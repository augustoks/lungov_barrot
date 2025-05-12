import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

interface TeamMemberProps {
  image: string;
  name: string;
  position: string;
  specialization: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, specialization, bio }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-amber-400 font-medium">{position}</p>
        </div>
        
        <div className="absolute top-4 right-4 flex space-x-2">
          <a href="#" className="bg-white text-slate-800 p-2 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300">
            <Linkedin size={16} />
          </a>
          <a href="#" className="bg-white text-slate-800 p-2 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300">
            <Mail size={16} />
          </a>
          <a href="#" className="bg-white text-slate-800 p-2 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300">
            <Phone size={16} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <span className="bg-slate-100 text-slate-700 text-sm py-1 px-3 rounded-full">
            {specialization}
          </span>
        </div>
        <p className="text-slate-600">{bio}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Elena Lungov",
      position: "Founding Partner",
      specialization: "Corporate Law",
      bio: "With over 25 years of experience, Elena specializes in complex corporate litigation and has successfully represented Fortune 500 companies in high-stakes cases."
    },
    {
      image: "https://images.pexels.com/photos/5588225/pexels-photo-5588225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Michael Barrot",
      position: "Founding Partner",
      specialization: "Business Law",
      bio: "Michael brings 30 years of expertise in business law and transactions. He excels in mergers and acquisitions, having overseen deals exceeding $5 billion in total value."
    },
    {
      image: "https://images.pexels.com/photos/5668468/pexels-photo-5668468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Sarah Rodriguez",
      position: "Senior Attorney",
      specialization: "Family Law",
      bio: "Sarah has dedicated her 15-year career to family law, focusing on complex divorce cases, child custody disputes, and family mediation with compassion and expertise."
    },
    {
      image: "https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "James Chen",
      position: "Senior Attorney",
      specialization: "Real Estate Law",
      bio: "James specializes in commercial real estate transactions and development. His 18 years of experience includes representing major developers across residential and commercial projects."
    }
  ];

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Our Expert Team</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Meet our team of experienced attorneys dedicated to providing exceptional legal representation and personalized service to every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              specialization={member.specialization}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;