import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, CheckCircle2, FileText, PieChart,
  ShieldCheck, Target, TrendingUp, Users, Building2, HeartPulse,
  Scale, Send, Eye, MapPin
} from "lucide-react";
import { useState } from "react";
import { usePageContent, useCmsTestimonials } from "../hooks/useCmsContent";
import type { CmsSection } from "../lib/cms";

// Mapa de ícones Lucide disponíveis no CMS
const ICON_MAP: Record<string, React.ElementType> = {
  FileText, PieChart, ShieldCheck, Target, TrendingUp,
  CheckCircle2, Users, Building2, HeartPulse, Scale,
  Send, Eye, MapPin, ArrowRight, ArrowUpRight
};

function CmsIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] || FileText;
  return <Icon className={className} />;
}

// ─── Default Content (fallback enquanto Supabase carrega) ─────────────────────
const PAGE_DEFAULTS: Record<string, CmsSection> = {
  hero: {
    titulo: "Sua empresa organizada, protegida e preparada para crescer.",
    titulo_destaque: "protegida",
    subtitulo: "Contabilidade estratégica para o mercado imobiliário, saúde e terceiro setor. Performance financeira com rigor técnico em Macaé.",
    botao_texto: "CONSULTA GRATUITA",
    botao_link: "/contato",
    imagem_fundo: "/images/hero.png"
  },
  hero_links: {
    link1_label: "01. Estratégia",
    link1_titulo: "Planejamento Tributário Avançado",
    link1_url: "/servicos/planejamento-tributario",
    link2_label: "02. Compliance",
    link2_titulo: "Auditoria e Gestão de Riscos",
    link2_url: "/servicos/compliance-auditoria",
    link3_label: "03. Performance",
    link3_titulo: "BPO Financeiro de Alta Precisão",
    link3_url: "/servicos/contabilidade-consultiva"
  },
  cards: {
    card1_tag: "QUEM SOMOS",
    card1_titulo: "17 anos de parceria contábil transformando números em decisões seguras.",
    card1_titulo_destaque: "17 anos",
    card1_imagem: "/images/card1.png",
    card2_tag: "NOSSA EXPERIÊNCIA",
    card2_titulo: "Compromisso total com o sucesso do seu negócio através de dados.",
    card2_badge: "100%",
    card2_imagem: "/images/card2.png",
    card3_tag: "ATENDIMENTO ESPECIALIZADO",
    card3_titulo: "Tecnologia de ponta aliada à experiência humana especializada.",
    card3_titulo_destaque: "experiência humana",
    card3_imagem: "/images/card3.png"
  },
  especialidades: {
    label: "ESPECIALIDADES",
    titulo: "Portfólio completo para a saúde financeira da sua operação.",
    titulo_destaque: "saúde financeira",
    cards: [
      { icone: "FileText", titulo: "Escrituração Contábil e Fiscal", descricao: "Otimização da carga tributária com total segurança jurídica.", link: "/servicos/escrituracao-contabil" },
      { icone: "PieChart", titulo: "Planejamento Estratégico", descricao: "Terceirização estratégica do seu departamento financeiro.", link: "/servicos/planejamento-tributario" },
      { icone: "ShieldCheck", titulo: "Folha de Pagamento eSocial", descricao: "Verificação minuciosa para garantir transparência e conformidade.", link: "/servicos/folha-de-pagamento" },
      { icone: "Building2", titulo: "Compliance e Auditoria Interna", descricao: "Estruturação patrimonial e sucessória para famílias e empresas.", link: "/servicos/compliance-auditoria" }
    ]
  },
  filosofia: {
    label: "NOSSA FILOSOFIA",
    titulo_bold: "Contabilidade não é sobre o passado.",
    titulo_rest: "É sobre ter clareza para decidir o futuro.",
    pilares: [
      { icone: "Target", titulo: "Rigor Técnico", descricao: "Análise profunda e fundamentada em legislação vigente e normas contábeis." },
      { icone: "Eye", titulo: "Transparência", descricao: "Relatórios claros e acesso direto aos dados que importam para você." },
      { icone: "TrendingUp", titulo: "Proatividade", descricao: "Antecipamos tendências e oportunidades tributárias antes dos problemas." },
      { icone: "CheckCircle2", titulo: "Especialização", descricao: "Equipe focada em nichos específicos de mercado para maior precisão." }
    ]
  },
  stats: {
    stat1_numero: "17+", stat1_label: "ANOS DE MERCADO",
    stat2_numero: "100%", stat2_label: "FOCO NO CLIENTE",
    stat3_numero: "5,0 ★", stat3_label: "AVALIAÇÃO GOOGLE",
    stat4_numero: "3", stat4_label: "UNIDADES MACAÉ"
  },
  cta_banner: {
    label: "17 ANOS DE EXPERIÊNCIA",
    titulo: "Pronto para elevar o nível da sua gestão contábil?",
    titulo_destaque: "gestão contábil?",
    botao_texto: "AGENDAR REUNIÃO",
    botao_link: "/contato",
    imagem_fundo: "/images/cta.png"
  },
  segmentos: {
    titulo: "Soluções desenhadas para o seu segmento.",
    titulo_destaque: "segmento.",
    botao_texto: "SAIBA MAIS",
    botao_link: "/segmentos",
    imagem_lateral: "/images/segments.png",
    segmentos: [
      { nome: "Imobiliário & Construção Civil", link: "/servicos/mercado-imobiliario" },
      { nome: "Saúde & Clínicas Médicas", link: "/servicos/saude-terceiro-setor" },
      { nome: "Terceiro Setor & ONGs", link: "/servicos/saude-terceiro-setor" },
      { nome: "Holdings Patrimoniais", link: "/servicos/holdings" },
      { nome: "Serviços Especializados", link: "/segmentos" },
      { nome: "Comércio & Varejo", link: "/segmentos" }
    ]
  },
  depoimentos: { titulo: "O que dizem nossos parceiros.", titulo_destaque: "parceiros." },
  trust_bar: {
    itens: [
      { icone: "ShieldCheck", texto: "ISO 27001" },
      { icone: "CheckCircle2", texto: "100% APROVADO MTE" },
      { icone: "Scale", texto: "RIGOR COMPLIANCE" },
      { icone: "MapPin", texto: "SEDE EM RJ" },
      { icone: "Users", texto: "ATEND. DIGITAL" }
    ]
  },
  contato: {
    titulo: "Fale com a Finance.",
    titulo_destaque: "Finance.",
    subtitulo: "Preencha o formulário e um especialista entrará em contato em até 2 horas.",
    localizacao: "R. Visc. de Quissamã, 98 - Centro, Macaé - RJ, 27910-020",
    telefone: "(22) 99245-8575",
    email: "contato@financecontabil.com.br",
    horario: "Segunda à Sexta: 08:00 às 18:00",
    imagem_fundo: "/images/contact.png"
  }
};

const DEFAULT_TESTIMONIALS = [
  { id: "1", texto: "A Finance Contabilidade foi fundamental para a estruturação do nosso grupo. Rigor técnico e proximidade são os grandes diferenciais.", autor: "Jucemar Oliveira", cargo: "CEO • Grupo Imobiliário", tema: "white" as const, ordem: 1, ativo: true },
  { id: "2", texto: "O BPO Financeiro deles nos permitiu focar 100% no atendimento aos pacientes. Segurança que não tem preço.", autor: "Dra. Dilma Alva", cargo: "Diretora Clínica", tema: "gold" as const, ordem: 2, ativo: true },
  { id: "3", texto: "Desde que começamos a consultoria estratégica, reduzimos nossa carga tributária de forma completamente legal e segura.", autor: "Marcelo Cunha", cargo: "Diretor Comercial", tema: "white" as const, ordem: 3, ativo: true },
  { id: "4", texto: "Equipe sempre disponível e atualizada. A auditoria interna foi um divisor de águas para nossa governança corporativa.", autor: "Fernanda Lima", cargo: "CEO • Tech Solutions", tema: "navy" as const, ordem: 4, ativo: true },
  { id: "5", texto: "Ter clareza dos números muda o jogo. A Finance nos deu visão de futuro com relatórios que realmente entendemos.", autor: "Roberto Silva", cargo: "Sócio Fundador", tema: "white" as const, ordem: 5, ativo: true },
  { id: "6", texto: "O processo de abertura da nossa filial foi extremamente ágil. Profissionalismo evidente em cada etapa.", autor: "Camila Barros", cargo: "Gerente de Expansão", tema: "gold" as const, ordem: 6, ativo: true }
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', segment: 'Imobiliário' });
  const { data: cms } = usePageContent('home', PAGE_DEFAULTS);
  const { data: testimonials } = useCmsTestimonials(DEFAULT_TESTIMONIALS);

  const hero = cms.hero;
  const heroLinks = cms.hero_links;
  const cards = cms.cards;
  const especialidades = cms.especialidades;
  const filosofia = cms.filosofia;
  const stats = cms.stats;
  const ctaBanner = cms.cta_banner;
  const segmentos = cms.segmentos;
  const depoimentos = cms.depoimentos;
  const trustBar = cms.trust_bar;
  const contato = cms.contato;

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}. Meu e-mail é ${formData.email} e telefone ${formData.phone}. Sou do segmento de ${formData.segment} e gostaria de falar com um especialista.`;
    const url = `https://wa.me/5522992458575?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // Helper para destacar parte do título
  const renderTitle = (titulo: unknown, destaque: unknown, className: string, destaqueClass: string) => {
    const t = String(titulo || '');
    const d = String(destaque || '');
    if (!d || !t.includes(d)) return <span className={className}>{t}</span>;
    const [before, after] = t.split(d);
    return (
      <>{before}<span className={destaqueClass}>{d}</span>{after}</>
    );
  };

  return (
    <div className="flex flex-col bg-brand-light">
      {/* ── Hero Section ── */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url('${hero.imagem_fundo}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
              {renderTitle(hero.titulo, hero.titulo_destaque,
                "text-white",
                "text-brand-gold font-bold"
              )}
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              {String(hero.subtitulo || '')}
            </p>
            <div className="flex items-center gap-4">
              <Link
                to={String(hero.botao_link || '/contato')}
                className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                {String(hero.botao_texto || 'CONSULTA GRATUITA')}
              </Link>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-20 border-t border-white/10 bg-brand-navy/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <Link to={String(heroLinks.link1_url || '#')} className="py-6 md:pr-8 block hover:opacity-80 transition-opacity">
                <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-1">{String(heroLinks.link1_label || '')}</p>
                <p className="text-sm font-medium text-white">{String(heroLinks.link1_titulo || '')}</p>
              </Link>
              <Link to={String(heroLinks.link2_url || '#')} className="py-6 md:px-8 block hover:opacity-80 transition-opacity">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{String(heroLinks.link2_label || '')}</p>
                <p className="text-sm font-medium text-white">{String(heroLinks.link2_titulo || '')}</p>
              </Link>
              <Link to={String(heroLinks.link3_url || '#')} className="py-6 md:pl-8 block hover:opacity-80 transition-opacity">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">{String(heroLinks.link3_label || '')}</p>
                <p className="text-sm font-medium text-white">{String(heroLinks.link3_titulo || '')}</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Cards Section ── */}
      <section className="py-20 bg-brand-light -mt-10 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between h-[400px]">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold mb-6">
                  {String(cards.card1_tag || '')} <ArrowUpRight className="ml-1 h-3 w-3" />
                </div>
                <h3 className="text-2xl font-light text-gray-800 leading-tight">
                  {renderTitle(cards.card1_titulo, cards.card1_titulo_destaque, "", "font-bold")}
                </h3>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden h-32 relative">
                <img src={String(cards.card1_imagem || '')} alt="Card 1" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2 (Gold) */}
            <div className="bg-brand-gold rounded-[2rem] p-8 shadow-sm flex flex-col justify-between h-[400px] relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-brand-navy text-xs font-bold">
                  {String(cards.card2_tag || '')}
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs font-bold text-brand-navy">
                  {String(cards.card2_badge || '100%')}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy leading-tight z-10">
                {String(cards.card2_titulo || '')}
              </h3>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
              <div className="mt-8 self-center w-40 h-40 rounded-full overflow-hidden border-4 border-brand-gold shadow-xl z-10">
                <img src={String(cards.card2_imagem || '')} alt="Card 2" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between h-[400px]">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold mb-6">
                  {String(cards.card3_tag || '')}
                </div>
                <h3 className="text-2xl font-light text-gray-800 leading-tight">
                  {renderTitle(cards.card3_titulo, cards.card3_titulo_destaque, "", "font-bold")}
                </h3>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden h-32 relative">
                <img src={String(cards.card3_imagem || '')} alt="Card 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Especialidades ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">
              {String(especialidades.label || 'ESPECIALIDADES')}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 max-w-2xl leading-tight">
              {renderTitle(especialidades.titulo, especialidades.titulo_destaque, "", "font-bold")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(especialidades.cards as Array<{ icone: string; titulo: string; descricao: string; link: string }> || []).map((card, idx) => (
              <Link to={card.link} key={idx} className="block">
                <div className="bg-[#F0EEE6] rounded-3xl p-8 flex flex-col h-full relative overflow-hidden group">
                  <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                    <CmsIcon name={card.icone} className="h-5 w-5 text-brand-navy" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy mb-3">{card.titulo}</h3>
                  <p className="text-sm text-gray-600 mb-8 flex-grow">{card.descricao}</p>
                  <div className="mt-auto">
                    <ArrowRight className="h-5 w-5 text-brand-gold group-hover:translate-x-2 transition-transform" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                    <CmsIcon name={card.icone} className="h-40 w-40" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filosofia / Pilares ── */}
      <section className="py-24 bg-brand-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">
            {String(filosofia.label || '')}
          </p>
          <h2 className="text-3xl md:text-4xl font-light mb-16 leading-tight max-w-3xl">
            <span className="font-bold">{String(filosofia.titulo_bold || '')}</span>{' '}
            {String(filosofia.titulo_rest || '')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(filosofia.pilares as Array<{ icone: string; titulo: string; descricao: string }> || []).map((pilar, idx) => (
              <div key={idx} className="bg-[#1E2A40] p-8 rounded-3xl border border-white/5">
                <CmsIcon name={pilar.icone} className="h-8 w-8 text-brand-gold mb-6" />
                <h3 className="text-lg font-bold mb-3">{pilar.titulo}</h3>
                <p className="text-sm text-gray-400">{pilar.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: stats.stat1_numero, label: stats.stat1_label },
              { num: stats.stat2_numero, label: stats.stat2_label },
              { num: stats.stat3_numero, label: stats.stat3_label },
              { num: stats.stat4_numero, label: stats.stat4_label }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
                <h3 className="text-3xl font-bold text-brand-navy mb-1">{String(s.num || '')}</h3>
                <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">{String(s.label || '')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-navy py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
              style={{ backgroundImage: `url('${ctaBanner.imagem_fundo}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent" />
            <div className="relative z-10 max-w-xl mb-8 md:mb-0">
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">{String(ctaBanner.label || '')}</p>
              <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
                {renderTitle(ctaBanner.titulo, ctaBanner.titulo_destaque, "", "font-bold")}
              </h2>
            </div>
            <div className="relative z-10 flex items-center gap-4">
              <Link
                to={String(ctaBanner.botao_link || '/contato')}
                className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                {String(ctaBanner.botao_texto || 'AGENDAR REUNIÃO')}
              </Link>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="h-5 w-5 text-brand-navy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Segmentos ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-10 leading-tight">
                {renderTitle(segmentos.titulo, segmentos.titulo_destaque, "", "font-bold")}
              </h2>
              <div className="space-y-3">
                {(segmentos.segmentos as Array<{ nome: string; link: string }> || []).map((seg, idx) => (
                  <Link to={seg.link} key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[#EFECE5] hover:bg-[#E5E1D8] transition-colors cursor-pointer block">
                    <span className="font-medium text-brand-navy text-sm">{seg.nome}</span>
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-gray-500" />
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                to={String(segmentos.botao_link || '/segmentos')}
                className="inline-flex justify-center items-center px-8 py-3.5 mt-8 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                {String(segmentos.botao_texto || 'SAIBA MAIS')}
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src={String(segmentos.imagem_lateral || '')} alt="Segmentos" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section className="py-24 bg-[#EFECE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-16">
            {renderTitle(depoimentos.titulo, depoimentos.titulo_destaque, "", "font-bold")}
          </h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
            {testimonials.map((t) => {
              const bgMap = { white: 'bg-white', gold: 'bg-brand-gold', navy: 'bg-brand-navy' };
              const textMap = { white: 'text-gray-600', gold: 'text-brand-navy', navy: 'text-gray-300' };
              const quoteMap = { white: 'text-brand-gold', gold: 'text-brand-navy/20', navy: 'text-white/10' };
              const nameMap = { white: 'text-brand-navy', gold: 'text-brand-navy', navy: 'text-white' };
              const roleMap = { white: 'text-gray-500', gold: 'text-brand-navy/70', navy: 'text-gray-400' };
              const bg = bgMap[t.tema] || 'bg-white';
              return (
                <div key={t.id} className={`flex-none w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] snap-start ${bg} p-10 rounded-[2rem] shadow-sm relative flex flex-col justify-between min-h-[250px]`}>
                  <div className={`${quoteMap[t.tema]} text-4xl font-serif absolute top-8 left-8`}>"</div>
                  <p className={`${textMap[t.tema]} italic mb-8 relative z-10 pl-6 pt-2`}>{t.texto}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className={`w-12 h-12 rounded-full ${t.tema === 'navy' ? 'bg-white/10' : t.tema === 'white' ? 'bg-gray-200' : 'bg-white/30'}`} />
                    <div>
                      <h4 className={`font-bold text-sm ${nameMap[t.tema]}`}>{t.autor}</h4>
                      <p className={`text-xs ${roleMap[t.tema]}`}>{t.cargo}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center mt-2 lg:hidden">
            <p className="text-xs text-brand-navy/50 font-medium">← Deslize para ver mais →</p>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-8 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            {(trustBar.itens as Array<{ icone: string; texto: string }> || []).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CmsIcon name={item.icone} className="h-4 w-4" />
                {item.texto}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contato ── */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 py-20 px-4 sm:px-6 lg:px-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              {renderTitle(contato.titulo, contato.titulo_destaque, "", "font-bold")}
            </h2>
            <p className="text-sm text-gray-500 mb-10">{String(contato.subtitulo || '')}</p>

            <form className="space-y-6" onSubmit={handleWhatsappSubmit}>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">NOME COMPLETO</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">E-MAIL CORPORATIVO</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">TELEFONE/CEL.</label>
                  <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">SEGMENTO</label>
                <select value={formData.segment} onChange={(e) => setFormData({ ...formData, segment: e.target.value })} className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all appearance-none">
                  <option value="Imobiliário">Imobiliário</option>
                  <option value="Saúde">Saúde</option>
                  <option value="Terceiro Setor">Terceiro Setor</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-brand-gold text-brand-navy font-bold text-sm rounded-full py-4 hover:bg-brand-gold/90 transition-colors mt-4">
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>

          <div className="lg:w-1/2 relative min-h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${contato.imagem_fundo}')` }}
            />
            <div className="absolute inset-0 bg-brand-navy/40" />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 w-full max-w-md text-white">
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">LOCALIZAÇÃO</p>
                  <p className="text-sm font-medium">{String(contato.localizacao || '')}</p>
                </div>
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">CANAIS DIRETOS</p>
                  <p className="text-lg font-bold mb-1">{String(contato.telefone || '')}</p>
                  <p className="text-sm">{String(contato.email || '')}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">HORÁRIO</p>
                  <p className="text-sm font-medium">{String(contato.horario || '')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
