import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageSquare, Clock, ArrowRight, CheckCircle2, Star, ShieldCheck, Award } from "lucide-react";
import { usePageContent } from "../hooks/useCmsContent";
import type { CmsSection } from "../lib/cms";

const PAGE_DEFAULTS: Record<string, CmsSection> = {
  hero: {
    label: "Atendimento Personalizado",
    titulo: "Vamos conversar sobre o seu negócio?",
    subtitulo: "O primeiro contato não precisa ser formal... Queremos entender seus desafios e apresentar soluções estratégicas que impulsionam seu crescimento."
  },
  info_cards: {
    card1_titulo: "Visite-nos",
    card1_texto: "R. Visc. de Quissamã, 98 - Centro\nMacaé, RJ - CEP 27910-020",
    card2_titulo: "WhatsApp",
    card2_texto: "Atendimento imediato via chat:\n(22) 99245-8575",
    card3_titulo: "Horários",
    card3_texto: "Segunda a Sexta\n08:00 às 18:00"
  },
  formulario: {
    titulo: "Envie uma mensagem",
    subtitulo: "Preencha o formulário abaixo e um de nossos especialistas entrará em contato em até 24h.",
    whatsapp_numero: "5522992458575",
    botao_texto: "Enviar Mensagem"
  },
  trust: {
    itens: [
      { icone: "CheckCircle2", texto: "Registro CRC Activo" },
      { icone: "Star", texto: "5.0 Avaliações Google" },
      { icone: "ShieldCheck", texto: "Conformidade eSocial" },
      { icone: "Award", texto: "Certificação MTE" }
    ]
  },
  mapa: {
    endereco_maps: "R. Visc. de Quissamã, 98, Centro, Macaé, RJ",
    zoom: "16",
    whatsapp_texto: "Resposta em minutos",
    whatsapp_botao: "Chamar no WhatsApp Agora"
  }
};

export default function Contato() {
  const { data: cms } = usePageContent('contato', PAGE_DEFAULTS);
  const hero = cms.hero;
  const infoCards = cms.info_cards;
  const formulario = cms.formulario;
  const trust = cms.trust;
  const mapa = cms.mapa;

  const [formData, setFormData] = useState({ name: "", email: "", whatsapp: "", company: "", segment: "", message: "" });

  const waNum = String(formulario.whatsapp_numero || '5522992458575');

  const handleWhatsApp = () => {
    const message = "Olá, Finance Contabilidade! Gostaria de conversar sobre o meu negócio.";
    window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*Nova solicitação de contato pelo site*\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*WhatsApp:* ${formData.whatsapp}\n*Empresa:* ${formData.company}\n*Segmento:* ${formData.segment}\n\n*Mensagem:* ${formData.message}`;
    window.open(`https://wa.me/${waNum}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const TRUST_ICONS: Record<string, React.ElementType> = { CheckCircle2, Star, ShieldCheck, Award };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Section - Dark */}
      <section className="bg-brand-navy pt-32 pb-40 px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-6 block">{String(hero.label || '')}</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{String(hero.titulo || '')}</h1>
            <p className="text-gray-300 text-lg leading-relaxed">{String(hero.subtitulo || '')}</p>
          </motion.div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, titulo: String(infoCards.card1_titulo || ''), texto: String(infoCards.card1_texto || '') },
              { icon: MessageSquare, titulo: String(infoCards.card2_titulo || ''), texto: String(infoCards.card2_texto || '') },
              { icon: Clock, titulo: String(infoCards.card3_titulo || ''), texto: String(infoCards.card3_texto || '') }
            ].map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * (i + 1) }} className="bg-[#151E32] p-8 rounded-3xl">
                <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                  <card.icon className="w-5 h-5 text-brand-navy" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{card.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{card.texto}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#FDFBF7] relative z-10 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="absolute right-8 md:right-16 -top-8 z-20">
            <button onClick={handleWhatsApp} className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 -mt-20">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white p-10 md:p-12 rounded-[2rem] shadow-sm">
              <h2 className="text-3xl font-bold text-brand-navy mb-2">{String(formulario.titulo || '')}</h2>
              <p className="text-gray-500 text-sm mb-10">{String(formulario.subtitulo || '')}</p>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Seu Nome</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none text-sm" placeholder="Como podemos te chamar?" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">E-mail Corporativo</label>
                    <input type="email" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none text-sm" placeholder="seu@email.com.br" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">WhatsApp</label>
                    <input type="tel" required value={formData.whatsapp} onChange={e => setFormData({ ...formData, whatsapp: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none text-sm" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Empresa</label>
                    <input type="text" required value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none text-sm" placeholder="Nome da sua empresa" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Segmento</label>
                  <select required value={formData.segment} onChange={e => setFormData({ ...formData, segment: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none text-sm appearance-none">
                    <option value="">Selecione seu segmento</option>
                    <option value="imobiliario">Mercado Imobiliário</option>
                    <option value="saude">Área da Saúde</option>
                    <option value="terceiro-setor">Terceiro Setor</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Mensagem</label>
                  <textarea required rows={4} value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} className="w-full px-5 py-4 rounded-xl bg-[#F5F3ED] border-none focus:ring-2 focus:ring-brand-gold outline-none text-sm resize-none" placeholder="Conte-nos um pouco sobre sua necessidade..." />
                </div>
                <button type="submit" className="bg-brand-gold text-brand-navy font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-brand-gold/90 transition-colors mt-4">
                  {String(formulario.botao_texto || 'Enviar Mensagem')} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Map & WhatsApp */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col">
              <div className="rounded-[2rem] aspect-square md:aspect-[4/3] lg:aspect-auto lg:flex-1 relative overflow-hidden flex items-center justify-center shadow-lg mb-6 border border-gray-100">
                <iframe
                  title="Google Maps"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(String(mapa.endereco_maps || 'R. Visc. de Quissamã, 98, Centro, Macaé, RJ'))}&t=&z=${mapa.zoom || 16}&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <button onClick={handleWhatsApp} className="bg-[#25D366] text-white rounded-2xl p-6 flex items-center gap-6 shadow-lg hover:bg-[#20bd5a] transition-colors w-full group">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 block mb-1">{String(mapa.whatsapp_texto || '')}</span>
                  <span className="text-xl font-bold block">{String(mapa.whatsapp_botao || '')}</span>
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
            {((trust.itens as Array<{ icone: string; texto: string }>) || []).map((item, i) => {
              const Icon = TRUST_ICONS[item.icone] || CheckCircle2;
              return (
                <div key={i} className="flex items-center gap-3 text-gray-400">
                  <Icon className="w-6 h-6" />
                  <span className="font-bold text-sm">{item.texto}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
