import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Shield, Award, Lightbulb, Linkedin } from "lucide-react";
import { usePageContent } from "../hooks/useCmsContent";
import type { CmsSection } from "../lib/cms";

const PAGE_DEFAULTS: Record<string, CmsSection> = {
  hero: {
    label: "NOSSA ESSÊNCIA",
    titulo: "17 anos transformando contabilidade em estratégia.",
    subtitulo: "A Finance Gestão e Negócios LTDA nasceu em Macaé em 2008 com a missão de elevar o padrão da assessoria contábil, unindo rigor técnico e visão de futuro.",
    imagem_fundo: "/images/hero.png"
  },
  sobre: {
    titulo: "Não somos apenas registradores de dados.",
    paragrafo1: "Nossa atuação vai além do cumprimento de obrigações fiscais. Somos parceiros estratégicos que traduzem números em decisões inteligentes para o crescimento sustentável de cada negócio.",
    paragrafo2: "Especializados em nichos complexos como Real Estate, Saúde e Terceiro Setor, dominamos as particularidades de cada segmento para garantir segurança jurídica e eficiência tributária máxima.",
    paragrafo3: "Com 100% de aprovação no MTE e auditorias rigorosas, nossa reputação é construída sobre a solidez de processos impecáveis e atendimento humanizado.",
    tags: ["RIGOR TÉCNICO", "VISÃO ESTRATÉGICA", "COMPLIANCE TOTAL"]
  },
  stats: {
    stat1_num: "17+", stat1_label: "ANOS DE MERCADO",
    stat2_num: "100%", stat2_label: "APROVAÇÃO MTE",
    stat3_num: "5,0 ★", stat3_label: "GOOGLE REVIEWS",
    stat4_num: "2008", stat4_label: "ANO DE FUNDAÇÃO"
  },
  pilares: {
    titulo: "Nossos Pilares de Excelência",
    pilares: [
      { icone: "Shield", titulo: "Lealdade", descricao: "Comprometimento absoluto com o sucesso e a ética em cada parceria firmada." },
      { icone: "Award", titulo: "Integridade", descricao: "Conformidade total com as normas vigentes, garantindo blindagem para o cliente." },
      { icone: "Lightbulb", titulo: "Inovação", descricao: "Tecnologia de ponta aliada à análise humana para entregar resultados superiores." }
    ]
  },
  timeline: {
    titulo: "Como tudo começou",
    subtitulo: "Em 2008, identificamos uma lacuna no mercado de Macaé: empresas precisavam de mais do que contabilidade básica; precisavam de inteligência de negócios.",
    imagem_fundo: "/images/timeline.png",
    eventos: [
      { ano: "2008", texto: "Fundação da Finance em Macaé, RJ." },
      { ano: "2012", texto: "Expansão para a gestão do Terceiro Setor." },
      { ano: "2015", texto: "Digitalização completa e BPO Financeiro." },
      { ano: "2024", texto: "Referência nacional em consultoria estratégica." }
    ]
  },
  fundadora: {
    label: "DIRETORA & FUNDADORA",
    nome: "Lúcia Melo Messias",
    bio: "Com vasta experiência em gestão empresarial e contabilidade consultiva, Lúcia lidera a Finance com a visão de que a contabilidade é a linguagem do sucesso.",
    linkedin: "#",
    imagem: "/images/lucia.png",
    equipe1_titulo: "Equipe Contábil",
    equipe1_desc: "Especialistas em normas internacionais de contabilidade (IFRS) e compliance fiscal.",
    equipe2_titulo: "Equipe Trabalhista",
    equipe2_desc: "Foco em eSocial, folha de pagamento e segurança nas relações de trabalho."
  },
  missao: {
    titulo_missao: "Nossa Missão: Clareza para Decisões de Impacto.",
    desc_missao: "Existimos para descomplicar a contabilidade e fornecer dados precisos que impulsionam o crescimento de nossos parceiros com total segurança jurídica.",
    badge_excelencia: "TERCEIRO SETOR",
    numero_excelencia: "100%",
    titulo_excelencia: "Excelência comprovada em auditorias e prestações de contas.",
    desc_excelencia: "Nossa expertise permite que instituições foquem em seu propósito social enquanto cuidamos da integridade de sua gestão."
  },
  cta: {
    titulo: "Quer falar diretamente com nossos especialistas?",
    subtitulo: "Agende uma consultoria diagnóstica gratuita para sua empresa.",
    botao_texto: "Fale com a Finance",
    botao_link: "/contato"
  },
  cta_final: {
    titulo: "Pronto para dar o próximo passo estratégico?",
    subtitulo: "Deixe a burocracia com quem entende e foque no que você faz de melhor: gerir seu negócio.",
    botao1_texto: "Solicitar Orçamento",
    botao1_link: "/contato",
    botao2_texto: "Ver Serviços",
    botao2_link: "/servicos"
  }
};

const ICON_MAP: Record<string, React.ElementType> = { Shield, Award, Lightbulb };

export default function QuemSomos() {
  const { data: cms } = usePageContent('quem-somos', PAGE_DEFAULTS);
  const hero = cms.hero;
  const sobre = cms.sobre;
  const stats = cms.stats;
  const pilares = cms.pilares;
  const timeline = cms.timeline;
  const fundadora = cms.fundadora;
  const missao = cms.missao;
  const cta = cms.cta;
  const ctaFinal = cms.cta_final;

  return (
    <div className="flex flex-col bg-brand-light">
      {/* Hero */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">{String(hero.label || '')}</p>
            <h1 className="text-5xl md:text-6xl font-light text-brand-navy tracking-tight mb-6 leading-[1.1]">
              {String(hero.titulo || '')}
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">{String(hero.subtitulo || '')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-16 relative rounded-[2.5rem] overflow-hidden h-[400px] md:h-[500px] shadow-2xl">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${hero.imagem_fundo}')` }} />
            <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wider">ESCRITÓRIO</h2>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
              <Play className="h-5 w-5 text-white ml-1" fill="currentColor" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-24 bg-white rounded-t-[3rem] relative z-10 -mt-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-brand-navy leading-tight mb-8">{String(sobre.titulo || '')}</h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
                <p>{String(sobre.paragrafo1 || '')}</p>
                <p>{String(sobre.paragrafo2 || '')}</p>
                <p>{String(sobre.paragrafo3 || '')}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {(sobre.tags as string[] || []).map((tag, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            {[1,2,3,4].map(i => (
              <div key={i} className="text-center px-4">
                <h3 className="text-4xl font-light text-brand-gold mb-2">{String((stats as Record<string,unknown>)[`stat${i}_num`] || '')}</h3>
                <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">{String((stats as Record<string,unknown>)[`stat${i}_label`] || '')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">{String(pilares.titulo || '')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {((pilares.pilares as Array<{ icone: string; titulo: string; descricao: string }>) || []).map((pilar, i) => {
              const Icon = ICON_MAP[pilar.icone] || Shield;
              return (
                <div key={i} className="bg-[#1E2A40] p-10 rounded-3xl border border-white/5">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-brand-navy" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{pilar.titulo}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{pilar.descricao}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${timeline.imagem_fundo}')` }} />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          <div className="bg-white rounded-3xl p-10 md:p-12 max-w-lg w-full shadow-2xl">
            <h2 className="text-3xl font-light text-brand-navy mb-6">{String(timeline.titulo || '')}</h2>
            <p className="text-gray-600 text-sm mb-10 leading-relaxed">{String(timeline.subtitulo || '')}</p>
            <div className="space-y-6 mb-10">
              {((timeline.eventos as Array<{ ano: string; texto: string }>) || []).map((ev, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-brand-gold font-bold w-12 shrink-0">{ev.ano}</span>
                  <span className="text-gray-600 text-sm">{ev.texto}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-brand-navy text-white font-bold text-sm rounded-full py-4 hover:bg-brand-navy/90 transition-colors">Nossa Trajetória</button>
          </div>
        </div>
      </section>

      {/* Fundadora */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 bg-brand-navy rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-5/12 relative min-h-[300px] md:min-h-full">
                <img src={String(fundadora.imagem || '')} alt={String(fundadora.nome || '')} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="md:w-7/12 p-10 md:p-12 flex flex-col justify-center">
                <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">{String(fundadora.label || '')}</p>
                <h3 className="text-3xl font-light text-white mb-6">{String(fundadora.nome || '')}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">{String(fundadora.bio || '')}</p>
                <a href={String(fundadora.linkedin || '#')} className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors text-xs font-bold tracking-wider">
                  <Linkedin className="h-5 w-5" />
                  LINKEDIN.COM/IN/LUCIAMELO
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-[#EFECE5] rounded-3xl p-8 flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-light text-brand-navy mb-3">{String(fundadora.equipe1_titulo || '')}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{String(fundadora.equipe1_desc || '')}</p>
              </div>
              <div className="bg-[#EFECE5] rounded-3xl p-8 flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-light text-brand-navy mb-3">{String(fundadora.equipe2_titulo || '')}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{String(fundadora.equipe2_desc || '')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Middle */}
      <section className="py-12 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-light text-brand-navy mb-2">{String(cta.titulo || '')}</h2>
              <p className="text-sm text-gray-600">{String(cta.subtitulo || '')}</p>
            </div>
            <Link to={String(cta.botao_link || '/contato')} className="shrink-0 inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors">
              {String(cta.botao_texto || '')}
            </Link>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-navy rounded-3xl p-12 flex flex-col justify-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">{String(missao.titulo_missao || '')}</h2>
              <p className="text-gray-300 leading-relaxed">{String(missao.desc_missao || '')}</p>
            </div>
            <div className="bg-[#F0E6D2] rounded-3xl p-12 relative shadow-sm">
              <div className="absolute top-8 right-8 bg-brand-gold text-brand-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{String(missao.badge_excelencia || '')}</div>
              <h3 className="text-6xl font-light text-brand-gold mb-6">{String(missao.numero_excelencia || '')}</h3>
              <h4 className="text-2xl font-light text-brand-navy mb-4 leading-tight">{String(missao.titulo_excelencia || '')}</h4>
              <p className="text-brand-navy/70 leading-relaxed">{String(missao.desc_excelencia || '')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-6">{String(ctaFinal.titulo || '')}</h2>
          <p className="text-gray-600 mb-10">{String(ctaFinal.subtitulo || '')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={String(ctaFinal.botao1_link || '/contato')} className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors">
              {String(ctaFinal.botao1_texto || '')}
            </Link>
            <Link to={String(ctaFinal.botao2_link || '/servicos')} className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full border border-brand-navy text-brand-navy hover:bg-brand-navy/5 transition-colors">
              {String(ctaFinal.botao2_texto || '')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
