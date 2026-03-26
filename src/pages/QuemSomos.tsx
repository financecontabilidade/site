import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Shield, Award, Lightbulb, Linkedin } from "lucide-react";

export default function QuemSomos() {
  return (
    <div className="flex flex-col bg-brand-light">
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">
              NOSSA ESSÊNCIA
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-brand-navy tracking-tight mb-6 leading-[1.1]">
              17 anos transformando<br />
              contabilidade em estratégia.
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              A Finance Gestão e Negócios LTDA nasceu em Macaé em 2008 com a
              missão de elevar o padrão da assessoria contábil, unindo rigor técnico e
              visão de futuro.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative rounded-[2.5rem] overflow-hidden h-[400px] md:h-[500px] shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
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

      {/* Não somos apenas registradores */}
      <section className="py-24 bg-white rounded-t-[3rem] relative z-10 -mt-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-brand-navy leading-tight mb-8">
                Não somos apenas<br />
                registradores de<br />
                dados.
              </h2>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
                <p>
                  Nossa atuação vai além do cumprimento de obrigações fiscais. Somos parceiros
                  estratégicos que traduzem números em decisões inteligentes para o crescimento
                  sustentável de cada negócio.
                </p>
                <p>
                  Especializados em nichos complexos como Real Estate, Saúde e Terceiro Setor,
                  dominamos as particularidades de cada segmento para garantir segurança jurídica e
                  eficiência tributária máxima.
                </p>
                <p>
                  Com 100% de aprovação no MTE e auditorias rigorosas, nossa reputação é construída
                  sobre a solidez de processos impecáveis e atendimento humanizado.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                  RIGOR TÉCNICO
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                  VISÃO ESTRATÉGICA
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-widest">
                  COMPLIANCE TOTAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row 1 */}
      <section className="py-16 bg-brand-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200">
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-brand-gold mb-2">17+</h3>
              <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">ANOS DE MERCADO</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-brand-gold mb-2">100%</h3>
              <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">APROVAÇÃO MTE</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-brand-gold mb-2 flex items-center justify-center gap-1">
                5,0<span className="text-2xl">★</span>
              </h3>
              <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">GOOGLE REVIEWS</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-brand-gold mb-2">2008</h3>
              <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">ANO DE FUNDAÇÃO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares de Excelência */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-16">
            Nossos Pilares de Excelência
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1E2A40] p-10 rounded-3xl border border-white/5">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lealdade</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Comprometimento absoluto com o sucesso e a ética em cada parceria firmada.
              </p>
            </div>
            <div className="bg-[#1E2A40] p-10 rounded-3xl border border-white/5">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">Integridade</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Conformidade total com as normas vigentes, garantindo blindagem para o cliente.
              </p>
            </div>
            <div className="bg-[#1E2A40] p-10 rounded-3xl border border-white/5">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-brand-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">Inovação</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Tecnologia de ponta aliada à análise humana para entregar resultados superiores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-end">
          <div className="bg-white rounded-3xl p-10 md:p-12 max-w-lg w-full shadow-2xl">
            <h2 className="text-3xl font-light text-brand-navy mb-6">Como tudo começou</h2>
            <p className="text-gray-600 text-sm mb-10 leading-relaxed">
              Em 2008, identificamos uma lacuna no mercado de Macaé: empresas precisavam de mais do que
              contabilidade básica; precisavam de inteligência de negócios.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-6">
                <span className="text-brand-gold font-bold w-12 shrink-0">2008</span>
                <span className="text-gray-600 text-sm">Fundação da Finance em Macaé, RJ.</span>
              </div>
              <div className="flex gap-6">
                <span className="text-brand-gold font-bold w-12 shrink-0">2012</span>
                <span className="text-gray-600 text-sm">Expansão para a gestão do Terceiro Setor.</span>
              </div>
              <div className="flex gap-6">
                <span className="text-brand-gold font-bold w-12 shrink-0">2015</span>
                <span className="text-gray-600 text-sm">Digitalização completa e BPO Financeiro.</span>
              </div>
              <div className="flex gap-6">
                <span className="text-brand-gold font-bold w-12 shrink-0">2024</span>
                <span className="text-gray-600 text-sm">Referência nacional em consultoria estratégica.</span>
              </div>
            </div>
            
            <button className="w-full bg-brand-navy text-white font-bold text-sm rounded-full py-4 hover:bg-brand-navy/90 transition-colors">
              Nossa Trajetória
            </button>
          </div>
        </div>
      </section>

      {/* Team / Founder */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Founder Card */}
            <div className="lg:w-2/3 bg-brand-navy rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="md:w-5/12 relative min-h-[300px] md:min-h-full">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" 
                  alt="Lúcia Melo Messias" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="md:w-7/12 p-10 md:p-12 flex flex-col justify-center">
                <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-2">
                  DIRETORA & FUNDADORA
                </p>
                <h3 className="text-3xl font-light text-white mb-6">Lúcia Melo Messias</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  Com vasta experiência em gestão empresarial e contabilidade consultiva,
                  Lúcia lidera a Finance com a visão de que a contabilidade é a linguagem do sucesso.
                  Sua trajetória é marcada pela dedicação à transparência e ao desenvolvimento
                  econômico regional.
                </p>
                <a href="#" className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors text-xs font-bold tracking-wider">
                  <Linkedin className="h-5 w-5" />
                  LINKEDIN.COM/IN/LUCIAMELO
                </a>
              </div>
            </div>
            
            {/* Teams Stack */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-[#EFECE5] rounded-3xl p-8 flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-light text-brand-navy mb-3">Equipe Contábil</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Especialistas em normas internacionais de contabilidade (IFRS) e compliance fiscal.
                </p>
              </div>
              <div className="bg-[#EFECE5] rounded-3xl p-8 flex-1 flex flex-col justify-center">
                <h4 className="text-xl font-light text-brand-navy mb-3">Equipe Trabalhista</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Foco em eSocial, folha de pagamento e segurança nas relações de trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Middle */}
      <section className="py-12 bg-[#F4F1EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-light text-brand-navy mb-2">
                Quer falar diretamente com nossos especialistas?
              </h2>
              <p className="text-sm text-gray-600">
                Agende uma consultoria diagnóstica gratuita para sua empresa.
              </p>
            </div>
            <Link
              to="/contato"
              className="shrink-0 inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors"
            >
              Fale com a Finance
            </Link>
          </div>
        </div>
      </section>

      {/* Missão & Excelência */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-navy rounded-3xl p-12 flex flex-col justify-center shadow-lg">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
                Nossa Missão: Clareza para<br />
                Decisões de Impacto.
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Existimos para descomplicar a contabilidade e fornecer dados precisos que
                impulsionam o crescimento de nossos parceiros com total segurança jurídica.
              </p>
            </div>
            
            <div className="bg-[#F0E6D2] rounded-3xl p-12 relative shadow-sm">
              <div className="absolute top-8 right-8 bg-brand-gold text-brand-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                TERCEIRO SETOR
              </div>
              <h3 className="text-6xl font-light text-brand-gold mb-6">100%</h3>
              <h4 className="text-2xl font-light text-brand-navy mb-4 leading-tight">
                Excelência comprovada em auditorias<br />
                e prestações de contas.
              </h4>
              <p className="text-brand-navy/70 leading-relaxed">
                Nossa expertise permite que instituições foquem em seu propósito social
                enquanto cuidamos da integridade de sua gestão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row 2 (Dark) */}
      <section className="py-16 bg-brand-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-white mb-2">17+</h3>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">ANOS DE HISTÓRIA</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-white mb-2">100%</h3>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">COMPLIANCE MTE</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-white mb-2">5,0</h3>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">AVALIAÇÃO GOOGLE</p>
            </div>
            <div className="text-center px-4">
              <h3 className="text-4xl font-light text-white mb-2">03</h3>
              <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">DÉCADAS DE EXPERTISE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy mb-6">
            Pronto para dar o próximo passo<br />
            estratégico?
          </h2>
          <p className="text-gray-600 mb-10">
            Deixe a burocracia com quem entende e foque no que você faz de melhor:<br />
            gerir seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contato"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
            >
              Solicitar Orçamento
            </Link>
            <Link
              to="/servicos"
              className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full border border-brand-navy text-brand-navy hover:bg-brand-navy/5 transition-colors"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

