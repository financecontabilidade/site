import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageSquare, Clock, ArrowRight, CheckCircle2, Star, ShieldCheck, Award } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    segment: "",
    message: ""
  });

  const handleWhatsApp = () => {
    const message = "Olá, Finance Contabilidade! Gostaria de conversar sobre o meu negócio.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5522992458575?text=${encodedMessage}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nova solicitação de contato pelo site*\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*WhatsApp:* ${formData.whatsapp}\n*Empresa:* ${formData.company}\n*Segmento:* ${formData.segment}\n\n*Mensagem:* ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5522992458575?text=${encoded}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Section - Dark */}
      <section className="bg-brand-navy pt-32 pb-40 px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mb-16"
          >
            <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-6 block">
              Atendimento Personalizado
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Vamos conversar sobre o seu negócio?
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              O primeiro contato não precisa ser formal... Queremos entender seus desafios e apresentar soluções estratégicas que impulsionam seu crescimento.
            </p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#151E32] p-8 rounded-3xl"
            >
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-brand-navy" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Visite-nos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rua Visconde de Quissama, 98<br />
                Macaé, RJ - CEP 27910-020
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#151E32] p-8 rounded-3xl"
            >
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-5 h-5 text-brand-navy" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">WhatsApp</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Atendimento imediato via chat:<br />
                (22) 99245-8575
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#151E32] p-8 rounded-3xl"
            >
              <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                <Clock className="w-5 h-5 text-brand-navy" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Horários</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Segunda a Sexta<br />
                08:00 às 18:00
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Light */}
      <section className="bg-[#FDFBF7] relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          
          {/* Floating WhatsApp Icon */}
          <div className="absolute right-8 md:right-16 -top-8 z-20">
            <button 
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform"
            >
              <MessageSquare className="w-8 h-8" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-20">
            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm"
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-2">Envie uma mensagem</h2>
              <p className="text-gray-500 text-sm mb-10">
                Preencha o formulário abaixo e um de nossos especialistas entrará em contato em até 24h.
              </p>

              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Seu Nome</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm text-brand-navy placeholder:text-gray-400"
                      placeholder="Como podemos te chamar?"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">E-mail Corporativo</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm text-brand-navy placeholder:text-gray-400"
                      placeholder="seu@email.com.br"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm text-brand-navy placeholder:text-gray-400"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm text-brand-navy placeholder:text-gray-400"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="segment" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Segmento</label>
                  <select
                    id="segment"
                    required
                    value={formData.segment}
                    onChange={(e) => setFormData({...formData, segment: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm text-gray-500 appearance-none"
                  >
                    <option value="">Selecione seu segmento</option>
                    <option value="imobiliario">Mercado Imobiliário</option>
                    <option value="saude">Área da Saúde</option>
                    <option value="terceiro-setor">Terceiro Setor</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none transition-all text-sm text-brand-navy placeholder:text-gray-400 resize-none"
                    placeholder="Conte-nos um pouco sobre sua necessidade..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-brand-gold text-brand-navy font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-brand-gold/90 transition-colors mt-4"
                >
                  Enviar Mensagem <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Map & CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col"
            >
              {/* Map Placeholder */}
              {/* Google Maps Embed */}
              <div className="rounded-[2rem] aspect-square md:aspect-[4/3] lg:aspect-auto lg:flex-1 relative overflow-hidden flex items-center justify-center shadow-lg mb-6 border border-gray-100">
                <iframe
                  title="Google Maps"
                  src="https://maps.google.com/maps?q=Rua%20Visconde%20de%20Quissama%2C%2098%2C%20Maca%C3%A9%2C%20RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* WhatsApp CTA */}
              <button 
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white rounded-2xl p-6 flex items-center gap-6 shadow-lg hover:bg-[#20bd5a] transition-colors w-full group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 block mb-1">
                    Resposta em minutos
                  </span>
                  <span className="text-xl font-bold block">
                    Chamar no WhatsApp Agora
                  </span>
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            <div className="flex items-center gap-3 text-gray-400">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-bold text-sm">Registro CRC Activo</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Star className="w-6 h-6" />
              <span className="font-bold text-sm">5.0 Avaliações Google</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <ShieldCheck className="w-6 h-6" />
              <span className="font-bold text-sm">Conformidade eSocial</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <Award className="w-6 h-6" />
              <span className="font-bold text-sm">Certificação MTE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
