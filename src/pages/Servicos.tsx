import { motion } from "framer-motion";
import { ArrowRight, Shield, LineChart, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageContent } from "../hooks/useCmsContent";
import type { CmsSection } from "../lib/cms";

const ICON_MAP: Record<string, React.ElementType> = { Shield, LineChart, CheckCircle2, ShieldCheck, ArrowRight };

const PAGE_DEFAULTS: Record<string, CmsSection> = {
  hero: {
    label: "EXCELÊNCIA CONTÁBIL",
    titulo: "Sua empresa organizada, protegida e preparada para crescer.",
    subtitulo: "Contabilidade estratégica para empresas que buscam segurança jurídica e eficiência financeira através de dados precisos e consultoria proativa.",
    botao1_texto: "Começar Agora", botao1_link: "/contato",
    botao2_texto: "Ver Portfólio", botao2_link: "/segmentos",
    imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    frase_destaque: "Nossa missão é transformar números frios em estratégias de crescimento real para o seu negócio."
  },
  intro: {
    titulo: "Contabilidade estratégica e consultiva em Macaé.",
    paragrafo1: "Com mais de 17 anos de atuação sólida, a Finance Contabilidade consolidou-se como referência no mercado de Macaé e região.",
    paragrafo2: "Atuamos com integração direta via SPED e sistemas de gestão, reduzindo riscos operacionais e proporcionando uma visão clara da saúde financeira da sua organização."
  },
  stats: { stat1_num: "17+", stat1_label: "Anos de Experiência", stat2_num: "100%", stat2_label: "Conformidade Legal", stat3_num: "0", stat3_label: "Autuações Fiscais", stat4_num: "SPED", stat4_label: "Integrado Full" },
  pilares: {
    pilares: [
      { icone: "Shield", titulo: "Conformidade & Risco", itens: ["Blindagem fiscal contra autuações", "Revisão periódica de enquadramento", "Auditoria digital de obrigações"] },
      { icone: "LineChart", titulo: "Consultoria Ativa", itens: ["Análise de indicadores de performance", "Planejamento tributário anual", "Reuniões estratégicas mensais"] },
      { icone: "CheckCircle2", titulo: "Especialização", itens: ["Foco em Médias e Grandes Empresas", "Expertise em Terceiro Setor e Saúde", "Suporte especializado para Holding"] }
    ]
  },
  catalogo: {
    label: "NOSSAS SOLUÇÕES", titulo: "Serviços Especializados",
    servicos: [
      { titulo: "Escrituração Fiscal & Contábil", imagem: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600", link: "/servicos/escrituracao-contabil" },
      { titulo: "Planejamento Tributário", imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", link: "/servicos/planejamento-tributario" },
      { titulo: "Gestão de Folha & eSocial", imagem: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", link: "/servicos/folha-de-pagamento" },
      { titulo: "Abertura & Legalização", imagem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=600&auto=format&fit=crop", link: "/servicos/abertura-de-empresas" },
      { titulo: "Compliance & Auditoria", imagem: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600", link: "/servicos/compliance-auditoria" },
      { titulo: "Contabilidade Consultiva", imagem: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600", link: "/servicos/contabilidade-consultiva" },
      { titulo: "Mercado Imobiliário", imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600", link: "/servicos/mercado-imobiliario" },
      { titulo: "Saúde & Terceiro Setor", imagem: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600", link: "/servicos/saude-terceiro-setor" }
    ]
  },
  ecossistema: {
    label_eco: "ECOSSISTEMA", titulo_eco: "Serviços 360º Integrados",
    desc_eco: "Nossa plataforma conecta sua empresa a um ecossistema completo de gestão.",
    botao_eco: "Conhecer Integrações",
    label_garantia: "GARANTIA MTE", titulo_garantia: "100% de Aprovação em Fiscalizações",
    desc_garantia: "Nosso rigoroso processo garantiu aprovação total em auditorias do MTE nos últimos 5 anos.",
    badge_garantia: "Selo de Qualidade Finance"
  },
  cta_final: {
    titulo: "Pronto para elevar o nível da sua gestão contábil?",
    subtitulo: "Agende uma reunião diagnóstica com nossos especialistas.",
    botao_texto: "Solicitar Proposta", botao_link: "/contato",
    imagem_fundo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
  }
};

export default function Servicos() {
  const { data: cms } = usePageContent('servicos', PAGE_DEFAULTS);
  const hero = cms.hero;
  const intro = cms.intro;
  const stats = cms.stats;
  const pilares = cms.pilares;
  const catalogo = cms.catalogo;
  const eco = cms.ecossistema;
  const ctaFinal = cms.cta_final;

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">{String(hero.label || '')}</p>
            <h1 className="text-5xl md:text-6xl font-light text-brand-navy tracking-tight mb-6 leading-[1.1]">{String(hero.titulo || '')}</h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">{String(hero.subtitulo || '')}</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link to={String(hero.botao1_link || '/contato')} className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-gold/90 transition-colors">{String(hero.botao1_texto || '')}</Link>
              <Link to={String(hero.botao2_link || '/segmentos')} className="text-brand-navy font-bold flex items-center gap-2 hover:text-brand-gold transition-colors">
                {String(hero.botao2_texto || '')} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative shadow-2xl">
              <img src={String(hero.imagem || '')} alt="Escritório" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                <p className="text-lg text-brand-navy font-light italic leading-relaxed text-center">"{String(hero.frase_destaque || '')}"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro & Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy leading-tight">{String(intro.titulo || '')}</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>{String(intro.paragrafo1 || '')}</p>
            <p>{String(intro.paragrafo2 || '')}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-16">
          {[1,2,3,4].map(i => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-brand-gold mb-2">{String((stats as Record<string,unknown>)[`stat${i}_num`] || '')}</div>
              <div className="text-xs font-bold tracking-widest text-brand-navy uppercase">{String((stats as Record<string,unknown>)[`stat${i}_label`] || '')}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {((pilares.pilares as Array<{ icone: string; titulo: string; itens: string[] }>) || []).map((pilar, i) => {
              const Icon = ICON_MAP[pilar.icone] || Shield;
              return (
                <div key={i} className="bg-white p-10 rounded-3xl shadow-sm">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-8">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-6">{pilar.titulo}</h3>
                  <ul className="space-y-4">
                    {pilar.itens.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Catálogo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">{String(catalogo.label || '')}</p>
            <h2 className="text-3xl md:text-4xl font-light text-brand-navy tracking-tight leading-tight">{String(catalogo.titulo || '')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {((catalogo.servicos as Array<{ titulo: string; imagem: string; link: string }>) || []).map((service, index) => (
              <Link to={service.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer block"
                >
                  <img src={service.imagem} alt={service.titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-end justify-between">
                      <h3 className="text-white font-bold text-lg leading-tight max-w-[80%]">{service.titulo}</h3>
                      <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-brand-gold group-hover:border-brand-gold transition-colors">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ecossistema & Garantia */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-brand-navy rounded-[2rem] p-12 text-white">
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">{String(eco.label_eco || '')}</p>
              <h3 className="text-3xl font-light mb-6">{String(eco.titulo_eco || '')}</h3>
              <p className="text-gray-300 mb-10 leading-relaxed">{String(eco.desc_eco || '')}</p>
              <button className="bg-brand-gold text-brand-navy px-8 py-3 rounded-full font-bold hover:bg-brand-gold/90 transition-colors text-sm">{String(eco.botao_eco || '')}</button>
            </div>
            <div className="bg-[#FDF6E3] rounded-[2rem] p-12">
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">{String(eco.label_garantia || '')}</p>
              <h3 className="text-3xl font-light text-brand-navy mb-6">{String(eco.titulo_garantia || '')}</h3>
              <p className="text-gray-600 mb-10 leading-relaxed">{String(eco.desc_garantia || '')}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center"><ShieldCheck className="w-6 h-6 text-white" /></div>
                <span className="font-bold text-brand-navy text-sm">{String(eco.badge_garantia || '')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[2rem] overflow-hidden">
          <img src={String(ctaFinal.imagem_fundo || '')} alt="Business meeting" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-transparent" />
          <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">{String(ctaFinal.titulo || '')}</h2>
            <p className="text-lg text-gray-200 mb-10">{String(ctaFinal.subtitulo || '')}</p>
            <Link to={String(ctaFinal.botao_link || '/contato')} className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-gold/90 transition-colors inline-block">{String(ctaFinal.botao_texto || '')}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
