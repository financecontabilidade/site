import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, CheckCircle2, FileText, PieChart, ShieldCheck, Target, TrendingUp, Users, Building2, HeartPulse, Scale, Send, Eye, MapPin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', segment: 'Imobiliário' });

  const handleWhatsappSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}. Meu e-mail é ${formData.email} e telefone ${formData.phone}. Sou do segmento de ${formData.segment} e gostaria de falar com um especialista.`;
    const url = `https://wa.me/5522992458575?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="flex flex-col bg-brand-light">
      {/* Hero Section */}
      <section className="relative bg-brand-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6 leading-[1.1]">
              Sua empresa organizada,<br/>
              <span className="text-brand-gold font-bold">protegida</span> e<br/>
              preparada para<br/>
              crescer.
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
              Contabilidade estratégica para o mercado imobiliário, saúde e terceiro setor. Performance financeira com rigor técnico em Macaé.
            </p>
            <div className="flex items-center gap-4">
              <Link
                to="/contato"
                className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                CONSULTA GRATUITA
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
              <Link to="/servicos/planejamento-tributario" className="py-6 md:pr-8 block hover:opacity-80 transition-opacity">
                <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-1">01. Estratégia</p>
                <p className="text-sm font-medium text-white">Planejamento Tributário Avançado</p>
              </Link>
              <Link to="/servicos/compliance-auditoria" className="py-6 md:px-8 block hover:opacity-80 transition-opacity">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">02. Compliance</p>
                <p className="text-sm font-medium text-white">Auditoria e Gestão de Riscos</p>
              </Link>
              <Link to="/servicos/contabilidade-consultiva" className="py-6 md:pl-8 block hover:opacity-80 transition-opacity">
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mb-1">03. Performance</p>
                <p className="text-sm font-medium text-white">BPO Financeiro de Alta Precisão</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Cards Section */}
      <section className="py-20 bg-brand-light -mt-10 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between h-[400px]">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold mb-6">
                  QUEM SOMOS <ArrowUpRight className="ml-1 h-3 w-3" />
                </div>
                <h3 className="text-2xl font-light text-gray-800 leading-tight">
                  <span className="font-bold">17 anos</span> de parceria contábil transformando números em decisões seguras.
                </h3>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden h-32 relative">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1632&auto=format&fit=crop" alt="Business Meeting" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 2 (Gold) */}
            <div className="bg-brand-gold rounded-[2rem] p-8 shadow-sm flex flex-col justify-between h-[400px] relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-brand-navy text-xs font-bold">
                  NOSSA EXPERIÊNCIA
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs font-bold text-brand-navy">
                  100%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy leading-tight z-10">
                Compromisso total com o sucesso do seu negócio através de dados.
              </h3>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
              <div className="mt-8 self-center w-40 h-40 rounded-full overflow-hidden border-4 border-brand-gold shadow-xl z-10">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1736&auto=format&fit=crop" alt="Documents" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between h-[400px]">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-navy text-white text-xs font-bold mb-6">
                  ATENDIMENTO ESPECIALIZADO
                </div>
                <h3 className="text-2xl font-light text-gray-800 leading-tight">
                  Tecnologia de ponta aliada à <span className="font-bold">experiência humana</span> especializada.
                </h3>
              </div>
              <div className="mt-8 rounded-2xl overflow-hidden h-32 relative">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Charts" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Portfolio */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">ESPECIALIDADES</p>
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 max-w-2xl leading-tight">
              Portfólio completo para a <span className="font-bold">saúde financeira</span> da sua operação.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <Link to="/servicos/escrituracao-contabil" className="block">
              <div className="bg-[#F0EEE6] rounded-3xl p-8 flex flex-col h-full relative overflow-hidden group">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                  <FileText className="h-5 w-5 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">Escrituração Contábil e Fiscal</h3>
                <p className="text-sm text-gray-600 mb-8 flex-grow">
                  Otimização da carga tributária com total segurança jurídica.
                </p>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-brand-gold group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <FileText className="h-40 w-40" />
                </div>
              </div>
            </Link>

            {/* Service 2 */}
            <Link to="/servicos/planejamento-tributario" className="block">
              <div className="bg-[#F0EEE6] rounded-3xl p-8 flex flex-col h-full relative overflow-hidden group">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                  <PieChart className="h-5 w-5 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">Planejamento Estratégico</h3>
                <p className="text-sm text-gray-600 mb-8 flex-grow">
                  Terceirização estratégica do seu departamento financeiro.
                </p>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-brand-gold group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <PieChart className="h-40 w-40" />
                </div>
              </div>
            </Link>

            {/* Service 3 */}
            <Link to="/servicos/folha-de-pagamento" className="block">
              <div className="bg-[#F0EEE6] rounded-3xl p-8 flex flex-col h-full relative overflow-hidden group">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="h-5 w-5 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">Folha de Pagamento eSocial</h3>
                <p className="text-sm text-gray-600 mb-8 flex-grow">
                  Verificação minuciosa para garantir transparência e conformidade.
                </p>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-brand-gold group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck className="h-40 w-40" />
                </div>
              </div>
            </Link>

            {/* Service 4 */}
            <Link to="/servicos/compliance-auditoria" className="block">
              <div className="bg-[#F0EEE6] rounded-3xl p-8 flex flex-col h-full relative overflow-hidden group">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                  <Building2 className="h-5 w-5 text-brand-navy" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3">Compliance e Auditoria Interna</h3>
                <p className="text-sm text-gray-600 mb-8 flex-grow">
                  Estruturação patrimonial e sucessória para famílias e empresas.
                </p>
                <div className="mt-auto">
                  <ArrowRight className="h-5 w-5 text-brand-gold group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Building2 className="h-40 w-40" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-brand-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">NOSSA FILOSOFIA</p>
          <h2 className="text-3xl md:text-4xl font-light mb-16 leading-tight max-w-3xl">
            <span className="font-bold">Contabilidade não é sobre o passado.</span> É sobre ter clareza para decidir o futuro.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1E2A40] p-8 rounded-3xl border border-white/5">
              <Target className="h-8 w-8 text-brand-gold mb-6" />
              <h3 className="text-lg font-bold mb-3">Rigor Técnico</h3>
              <p className="text-sm text-gray-400">Análise profunda e fundamentada em legislação vigente e normas contábeis.</p>
            </div>
            <div className="bg-[#1E2A40] p-8 rounded-3xl border border-white/5">
              <Eye className="h-8 w-8 text-brand-gold mb-6" />
              <h3 className="text-lg font-bold mb-3">Transparência</h3>
              <p className="text-sm text-gray-400">Relatórios claros e acesso direto aos dados que importam para você.</p>
            </div>
            <div className="bg-[#1E2A40] p-8 rounded-3xl border border-white/5">
              <TrendingUp className="h-8 w-8 text-brand-gold mb-6" />
              <h3 className="text-lg font-bold mb-3">Proatividade</h3>
              <p className="text-sm text-gray-400">Antecipamos tendências e oportunidades tributárias antes dos problemas.</p>
            </div>
            <div className="bg-[#1E2A40] p-8 rounded-3xl border border-white/5">
              <CheckCircle2 className="h-8 w-8 text-brand-gold mb-6" />
              <h3 className="text-lg font-bold mb-3">Especialização</h3>
              <p className="text-sm text-gray-400">Equipe focada em nichos específicos de mercado para maior precisão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overlapping Section */}
      <section className="relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-brand-navy mb-1">17+</h3>
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">ANOS DE MERCADO</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-brand-navy mb-1">100%</h3>
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">FOCO NO CLIENTE</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-brand-navy mb-1">5,0 <span className="text-brand-gold text-2xl">★</span></h3>
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">AVALIAÇÃO GOOGLE</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-brand-navy mb-1">3</h3>
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">UNIDADES MACAÉ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-navy py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent"></div>
            
            <div className="relative z-10 max-w-xl mb-8 md:mb-0">
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">17 ANOS DE EXPERIÊNCIA</p>
              <h2 className="text-3xl md:text-4xl font-light text-white leading-tight">
                Pronto para elevar o nível da sua <span className="font-bold">gestão contábil?</span>
              </h2>
            </div>
            
            <div className="relative z-10 flex items-center gap-4">
              <Link
                to="/contato"
                className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                AGENDAR REUNIÃO
              </Link>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <ArrowUpRight className="h-5 w-5 text-brand-navy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-10 leading-tight">
                Soluções desenhadas<br/>
                para o seu <span className="font-bold">segmento.</span>
              </h2>
              
              <div className="space-y-3">
                {[
                  { name: "Imobiliário & Construção Civil", link: "/servicos/mercado-imobiliario" },
                  { name: "Saúde & Clínicas Médicas", link: "/servicos/saude-terceiro-setor" },
                  { name: "Terceiro Setor & ONGs", link: "/servicos/saude-terceiro-setor" },
                  { name: "Holdings Patrimoniais", link: "/servicos/holdings" },
                  { name: "Serviços Especializados", link: "/segmentos" },
                  { name: "Comércio & Varejo", link: "/segmentos" }
                ].map((segment, idx) => (
                  <Link to={segment.link} key={idx} className="flex items-center justify-between p-4 rounded-xl bg-[#EFECE5] hover:bg-[#E5E1D8] transition-colors cursor-pointer block">
                    <span className="font-medium text-brand-navy text-sm">{segment.name}</span>
                    <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                      <ArrowRight className="h-3 w-3 text-gray-500" />
                    </div>
                  </Link>
                ))}
              </div>
              
              <Link
                to="/segmentos"
                className="inline-flex justify-center items-center px-8 py-3.5 mt-8 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                SAIBA MAIS
              </Link>
            </div>
            
            <div className="lg:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard on Monitor" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#EFECE5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-16">
            O que dizem nossos <span className="font-bold">parceiros.</span>
          </h2>
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
            {[
              {
                text: "A Finance Contabilidade foi fundamental para a estruturação do nosso grupo. Rigor técnico e proximidade são os grandes diferenciais.",
                author: "Jucemar Oliveira",
                role: "CEO • Grupo Imobiliário",
                bg: "bg-white",
                textColor: "text-gray-600",
                quoteColor: "text-brand-gold",
                nameColor: "text-brand-navy"
              },
              {
                text: "O BPO Financeiro deles nos permitiu focar 100% no atendimento aos pacientes. Segurança que não tem preço.",
                author: "Dra. Dilma Alva",
                role: "Diretora Clínica",
                bg: "bg-brand-gold",
                textColor: "text-brand-navy",
                quoteColor: "text-brand-navy/20",
                nameColor: "text-brand-navy",
                roleColor: "text-brand-navy/70"
              },
              {
                text: "Desde que começamos a consultoria estratégica, reduzimos nossa carga tributária de forma completamente legal e segura.",
                author: "Marcelo Cunha",
                role: "Diretor Comercial",
                bg: "bg-white",
                textColor: "text-gray-600",
                quoteColor: "text-brand-gold",
                nameColor: "text-brand-navy"
              },
              {
                text: "Equipe sempre disponível e atualizada. A auditoria interna foi um divisor de águas para nossa governança corporativa.",
                author: "Fernanda Lima",
                role: "CEO • Tech Solutions",
                bg: "bg-brand-navy",
                textColor: "text-gray-300",
                quoteColor: "text-white/10",
                nameColor: "text-white",
                roleColor: "text-gray-400"
              },
              {
                text: "Ter clareza dos números muda o jogo. A Finance nos deu visão de futuro com relatórios que realmente entendemos.",
                author: "Roberto Silva",
                role: "Sócio Fundador",
                bg: "bg-white",
                textColor: "text-gray-600",
                quoteColor: "text-brand-gold",
                nameColor: "text-brand-navy"
              },
              {
                text: "O processo de abertura da nossa filial foi extremamente ágil. Profissionalismo evidente em cada etapa.",
                author: "Camila Barros",
                role: "Gerente de Expansão",
                bg: "bg-brand-gold",
                textColor: "text-brand-navy",
                quoteColor: "text-brand-navy/20",
                nameColor: "text-brand-navy",
                roleColor: "text-brand-navy/70"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className={`flex-none w-[85%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] snap-start ${testimonial.bg} p-10 rounded-[2rem] shadow-sm relative flex flex-col justify-between min-h-[250px]`}>
                <div className={`${testimonial.quoteColor} text-4xl font-serif absolute top-8 left-8`}>"</div>
                <p className={`${testimonial.textColor} ${testimonial.bg === 'bg-brand-gold' ? 'font-medium' : ''} italic mb-8 relative z-10 pl-6 pt-2`}>
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bg === 'bg-brand-navy' ? 'bg-white/10' : testimonial.bg === 'bg-white' ? 'bg-gray-200' : 'bg-white/30'}`}></div>
                  <div>
                    <h4 className={`font-bold text-sm ${testimonial.nameColor}`}>{testimonial.author}</h4>
                    <p className={`text-xs ${testimonial.roleColor || 'text-gray-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-2 lg:hidden">
            <p className="text-xs text-brand-navy/50 font-medium">← Deslize para ver mais →</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> ISO 27001</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 100% APROVADO MTE</div>
            <div className="flex items-center gap-2"><Scale className="h-4 w-4" /> RIGOR COMPLIANCE</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> SEDE EM RJ</div>
            <div className="flex items-center gap-2"><Users className="h-4 w-4" /> ATEND. DIGITAL</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Form Side */}
          <div className="lg:w-1/2 py-20 px-4 sm:px-6 lg:px-20 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
              Fale com a <span className="font-bold">Finance.</span>
            </h2>
            <p className="text-sm text-gray-500 mb-10">
              Preencha o formulário e um especialista entrará em contato em até 2 horas.
            </p>
            
            <form className="space-y-6" onSubmit={handleWhatsappSubmit}>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">NOME COMPLETO</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">E-MAIL CORPORATIVO</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">TELEFONE/CEL.</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">SEGMENTO</label>
                <select 
                  value={formData.segment}
                  onChange={(e) => setFormData({...formData, segment: e.target.value})}
                  className="w-full bg-[#EFECE5] rounded-full px-6 py-3.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all appearance-none"
                >
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
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative min-h-[500px]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-brand-navy/40"></div>
            
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 w-full max-w-md text-white">
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">LOCALIZAÇÃO</p>
                  <p className="text-sm font-medium">Av. Atlântica, 1788 - Cavaleiros, Macaé - RJ</p>
                </div>
                <div className="mb-8">
                  <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">CANAIS DIRETOS</p>
                  <p className="text-lg font-bold mb-1">(22) 99245-8575</p>
                  <p className="text-sm">contato@financecontabil.com.br</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">HORÁRIO</p>
                  <p className="text-sm font-medium">Segunda à Sexta: 08:00 às 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
