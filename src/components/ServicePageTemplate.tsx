import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronDown, ArrowRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface Deliverable {
  icon: ReactNode;
  title: string;
  text: string;
}

interface ProcessStep {
  title: string;
  text: string;
}

interface Faq {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  desc: string;
  link: string;
  icon: ReactNode;
}

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introTitle: ReactNode;
  introText: ReactNode;
  stats: Stat[];
  deliverablesTitle: ReactNode;
  deliverables: Deliverable[];
  processTitle: ReactNode;
  processSteps: ProcessStep[];
  processImage: string;
  checklistTitle: ReactNode;
  checklistText: string;
  checklistItems: string[];
  checklistImage: string;
  faqTitle: ReactNode;
  faqs: Faq[];
  relatedServices: RelatedService[];
}

export default function ServicePageTemplate({
  badge,
  title,
  subtitle,
  heroImage,
  introTitle,
  introText,
  stats,
  deliverablesTitle,
  deliverables,
  processTitle,
  processSteps,
  processImage,
  checklistTitle,
  checklistText,
  checklistItems,
  checklistImage,
  faqTitle,
  faqs,
  relatedServices,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-white">
      {/* INNER HERO */}
      <section className="pt-12 md:pt-20 pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6 text-xs font-medium uppercase tracking-wider">
            <Link to="/" className="text-slate-500 hover:text-brand-gold transition-colors">Início</Link>
            <span className="text-slate-300">/</span>
            <Link to="/servicos" className="text-slate-500 hover:text-brand-gold transition-colors">Serviços</Link>
            <span className="text-slate-300">/</span>
            <span className="text-brand-gold">{title}</span>
          </div>
          
          <span className="inline-block px-4 py-1 border border-slate-200 rounded-full text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-4">
            {badge}
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight text-slate-900 max-w-4xl">
            {title}
          </h1>
          
          <p className="text-lg leading-relaxed text-slate-500 max-w-2xl mt-5">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <Link to="/contato" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-gold text-slate-900 font-medium rounded-full hover:bg-brand-gold/90 transition-colors">
              Consulta gratuita <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/5522992458575" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 md:mt-16">
          <div className="w-full rounded-3xl overflow-hidden">
            <img 
              src={heroImage} 
              alt={title} 
              className="w-full h-[300px] md:h-[480px] object-cover object-center hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1 border border-slate-200 rounded-full text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-4">
                {title}
              </span>
              <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-slate-900 mt-2">
                {introTitle}
              </h2>
            </div>
            <div className="text-base leading-relaxed text-slate-600 space-y-6">
              {introText}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="border-y border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-y-0">
            {stats.map((stat, index) => (
              <div key={index} className={`px-0 lg:px-8 ${index !== 0 ? 'lg:border-l border-slate-200' : ''} ${index % 2 !== 0 ? 'pl-6 border-l border-slate-200 lg:border-l-0' : ''}`}>
                <div className="text-3xl font-medium text-slate-900 flex items-baseline gap-1">
                  <span className="text-brand-gold">{stat.value.replace(/[^0-9+]/g, '')}</span>
                  {stat.value.replace(/[0-9+]/g, '')}
                </div>
                <div className="text-[11px] font-medium uppercase tracking-widest text-slate-500 mt-2 leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DELIVERABLES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 border border-slate-200 rounded-full text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-4 mx-auto">
              O que você recebe
            </span>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-slate-900 max-w-2xl mx-auto mt-2">
              {deliverablesTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:border-brand-gold/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center mb-6 text-slate-900">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 border border-slate-200 rounded-full text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-4">
                Nosso processo
              </span>
              <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-slate-900 mt-2 mb-10">
                {processTitle}
              </h2>
              
              <div className="flex flex-col">
                {processSteps.map((step, index) => (
                  <div key={index} className="grid grid-cols-[40px_1fr] gap-5 py-6 border-b border-slate-200 last:border-0 last:pb-0 first:pt-0 items-start">
                    <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-sm font-bold text-slate-900 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden h-[300px] lg:h-[480px]">
              <img 
                src={processImage} 
                alt="Processo" 
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST SPLIT */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden h-[300px] lg:h-[480px] order-2 lg:order-1">
              <img 
                src={checklistImage} 
                alt="Benefícios" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="inline-block px-4 py-1 border border-slate-200 rounded-full text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-4">
                {badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-slate-900 mt-2 mb-6">
                {checklistTitle}
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-8">
                {checklistText}
              </p>
              
              <div className="flex flex-col gap-4 mb-10">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-slate-900" />
                    </div>
                    <div className="text-base text-slate-800 leading-relaxed">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/contato" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors">
                Falar com um especialista <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block px-4 py-1 border border-slate-200 rounded-full text-[11px] font-medium uppercase tracking-widest text-slate-500 mb-4">
                Dúvidas frequentes
              </span>
              <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-slate-900 mt-2 mb-6">
                {faqTitle}
              </h2>
              <p className="text-base leading-relaxed text-slate-500 mb-8">
                Não encontrou sua dúvida? Fale diretamente com um especialista da Finance.
              </p>
              <Link to="/contato" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors">
                Falar com especialista
              </Link>
            </div>
            
            <div>
              <div className="flex flex-col border-t border-slate-200">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-slate-200">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between gap-5 py-6 bg-transparent border-none cursor-pointer text-left group"
                    >
                      <span className={`text-base font-medium leading-snug transition-colors ${openFaq === index ? 'text-brand-gold' : 'text-slate-900 group-hover:text-brand-gold'}`}>
                        {faq.question}
                      </span>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === index ? 'bg-slate-900 rotate-180' : 'bg-slate-100 group-hover:bg-brand-gold'}`}>
                        <ChevronDown className={`w-4 h-4 transition-colors ${openFaq === index ? 'text-white' : 'text-slate-900'}`} />
                      </span>
                    </button>
                    <div 
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: openFaq === index ? '400px' : '0' }}
                    >
                      <p className="text-base leading-relaxed text-slate-500 pb-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div>
            <span className="inline-block px-4 py-1 border border-brand-gold/30 rounded-full text-[11px] font-medium uppercase tracking-widest text-brand-gold mb-4">
              Outros serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-white max-w-lg mt-2 mb-4">
              Serviços que complementam <span className="text-brand-gold">este.</span>
            </h2>
            <span className="block w-12 h-1 bg-brand-gold rounded-full mb-12"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shrink-0 text-slate-900">
                  {service.icon}
                </div>
                <div className="text-base font-medium text-white tracking-tight leading-snug group-hover:text-brand-gold transition-colors">
                  {service.title}
                </div>
                <div className="text-sm text-white/70 leading-relaxed">
                  {service.desc}
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-white/40 mt-auto group-hover:text-brand-gold transition-colors">
                  Ver serviço <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative min-h-[440px] overflow-hidden flex flex-col justify-center">
        <img 
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80&auto=format&fit=crop" 
          alt="Finance Contabilidade" 
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-[11px] font-medium uppercase tracking-widest text-white/80 mb-4">
              Próximo passo
            </span>
            <h2 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-white mt-3 mb-4">
              Pronto para ter a <span className="text-brand-gold">Finance</span> cuidando deste serviço?
            </h2>
            <p className="text-base leading-relaxed text-white/70 mb-8 max-w-md">
              A primeira conversa é gratuita. Entendemos a sua realidade e apresentamos um diagnóstico honesto, sem compromisso.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contato" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-gold text-slate-900 font-medium rounded-full hover:bg-brand-gold/90 transition-colors">
                Agendar consulta gratuita <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/5522992458575" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-colors">
                📱 WhatsApp direto
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
