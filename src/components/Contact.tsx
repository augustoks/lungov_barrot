import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formStatus, setFormStatus] = useState<{ submitted: boolean; success: boolean; message: string }>({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Formulário enviado:', formData);
      
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Obrigado por entrar em contato! Retornaremos em breve.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">Entre em Contato</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            Tem uma questão jurídica para discutir? Entre em contato com nossa equipe hoje para orientação jurídica especializada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <div className="bg-slate-800 text-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Fale Conosco</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Nosso Escritório</h4>
                    <p className="text-slate-300">Rua Augusta, 2.709, Conjunto 114 – Bairro Cerqueira César, São Paulo – SP</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Telefones</h4>
                    <p className="text-slate-300">(11) 2667-8036</p>
                    <p className="text-slate-300">(11) 3082-6333</p>
                    <p className="text-slate-300">WhatsApp: (11) 91020-8036</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">E-mail</h4>
                    <p className="text-slate-300">lungovebarrot@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={24} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Horário de Atendimento</h4>
                    <p className="text-slate-300">Segunda - Sexta: 9:00 - 18:00</p>
                    <p className="text-slate-300">Sábado: 10:00 - 14:00</p>
                    <p className="text-slate-300">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-slate-50 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">Envie uma Mensagem</h3>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Nome Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Seu nome"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-700 font-medium mb-2">E-mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                      placeholder="Seu e-mail"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-slate-700 font-medium mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Seu telefone"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-slate-700 font-medium mb-2">Área de Interesse</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="">Selecione uma área</option>
                      <option value="Direito Empresarial">Direito Empresarial</option>
                      <option value="Direito Trabalhista">Direito Trabalhista</option>
                      <option value="Direito Societário">Direito Societário</option>
                      <option value="Direito de Família">Direito de Família</option>
                      <option value="Direito Criminal">Direito Criminal</option>
                      <option value="Direito Imobiliário">Direito Imobiliário</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Sua Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-amber-500`}
                    placeholder="Descreva sua questão jurídica..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-medium py-3 px-8 rounded-md transition-all duration-300 flex items-center"
                >
                  Enviar Mensagem
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              title="LUNGOV & BARROT Localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0998847906366!2d-46.65390492359619!3d-23.564616161669317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0x63b9f0e6074baa47!2sRua%20Augusta%2C%202709%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001413-100!5e0!3m2!1spt-BR!2sbr!4v1709901234567!5m2!1spt-BR!2sbr"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;