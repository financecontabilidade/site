import { motion } from "framer-motion";
import { ArrowRight, Shield, LineChart, CheckCircle2, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Escrituração Fiscal & Contábil",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    link: "/servicos/escrituracao-contabil",
  },
  {
    title: "Planejamento Tributário",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    link: "/servicos/planejamento-tributario",
  },
  {
    title: "Gestão de Folha & eSocial",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    link: "/servicos/folha-de-pagamento",
  },
  {
    title: "Abertura & Legalização",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=600&auto=format&fit=crop",
    link: "/servicos/abertura-de-empresas",
  },
  {
    title: "Compliance & Auditoria",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    link: "/servicos/compliance-auditoria",
  },
  {
    title: "Contabilidade Consultiva",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
    link: "/servicos/contabilidade-consultiva",
  },
  {
    title: "Mercado Imobiliário",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    link: "/servicos/mercado-imobiliario",
  },
  {
    title: "Saúde & Terceiro Setor",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600",
    link: "/servicos/saude-terceiro-setor",
  }
];

export default function Servicos() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">
              EXCELÊNCIA CONTÁBIL
            </p>
            <h1 className="text-5xl md:text-6xl font-light text-brand-navy tracking-tight mb-6 leading-[1.1]">
              Sua empresa organizada, protegida e preparada para crescer.
            </h1>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
              Contabilidade estratégica para empresas que buscam segurança jurídica e eficiência financeira através de dados precisos e consultoria proativa.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                to="/contato"
                className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-gold/90 transition-colors"
              >
                Começar Agora
              </Link>
              <Link
                to="/segmentos"
                className="text-brand-navy font-bold flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                Ver Portfólio <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative shadow-2xl">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Escritório" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                <p className="text-lg text-brand-navy font-light italic leading-relaxed text-center">
                  "Nossa missão é transformar números frios em estratégias de crescimento real para o seu negócio."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro & Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-brand-navy leading-tight">
            Contabilidade estratégica e consultiva em Macaé.
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Com mais de 17 anos de atuação sólida, a Finance Contabilidade consolidou-se como referência no mercado de Macaé e região. Nossa abordagem vai além do preenchimento de guias: somos parceiros estratégicos que utilizam tecnologia de ponta para garantir que sua empresa opere em conformidade total.
            </p>
            <p>
              Atuamos com integração direta via SPED e sistemas de gestão, reduzindo riscos operacionais e proporcionando uma visão clara da saúde financeira da sua organização.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-gold mb-2">17+</div>
            <div className="text-xs font-bold tracking-widest text-brand-navy uppercase">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-gold mb-2">100%</div>
            <div className="text-xs font-bold tracking-widest text-brand-navy uppercase">Conformidade Legal</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-gold mb-2">0</div>
            <div className="text-xs font-bold tracking-widest text-brand-navy uppercase">Autuações Fiscais</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-gold mb-2">SPED</div>
            <div className="text-xs font-bold tracking-widest text-brand-navy uppercase">Integrado Full</div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-8">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Conformidade & Risco</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Blindagem fiscal contra autuações
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Revisão periódica de enquadramento
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Auditoria digital de obrigações
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-8">
                <LineChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Consultoria Ativa</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Análise de indicadores de performance
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Planejamento tributário anual
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Reuniões estratégicas mensais
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mb-8">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-6">Especialização</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Foco em Médias e Grandes Empresas
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Expertise em Terceiro Setor e Saúde
                </li>
                <li className="flex items-start gap-3 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                  Suporte especializado para Holding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">
              NOSSAS SOLUÇÕES
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-brand-navy tracking-tight leading-tight">
              Serviços Especializados
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer block"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/40 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-end justify-between">
                      <h3 className="text-white font-bold text-lg leading-tight max-w-[80%]">
                        {service.title}
                      </h3>
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

      {/* Ecosystem & Guarantee */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Ecosystem Card */}
            <div className="bg-brand-navy rounded-[2rem] p-12 text-white">
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">
                ECOSSISTEMA
              </p>
              <h3 className="text-3xl font-light mb-6">
                Serviços 360º Integrados
              </h3>
              <p className="text-gray-300 mb-10 leading-relaxed">
                Nossa plataforma conecta sua empresa a um ecossistema completo de gestão. Do fiscal ao financeiro, tudo opera de forma síncrona para eliminar retrabalho e inconsistências.
              </p>
              <button className="bg-brand-gold text-brand-navy px-8 py-3 rounded-full font-bold hover:bg-brand-gold/90 transition-colors text-sm">
                Conhecer Integrações
              </button>
            </div>

            {/* Guarantee Card */}
            <div className="bg-[#FDF6E3] rounded-[2rem] p-12">
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">
                GARANTIA MTE
              </p>
              <h3 className="text-3xl font-light text-brand-navy mb-6">
                100% de Aprovação em Fiscalizações
              </h3>
              <p className="text-gray-600 mb-10 leading-relaxed">
                Nosso rigoroso processo de conferência de folha e encargos sociais garantiu a todos os nossos clientes aprovação total em auditorias do Ministério do Trabalho e Emprego nos últimos 5 anos.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold text-brand-navy text-sm">Selo de Qualidade Finance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-[2rem] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000"
            alt="Business meeting"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-transparent" />
          
          <div className="relative z-10 p-12 md:p-20 flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
              Pronto para elevar o nível da sua gestão contábil?
            </h2>
            <p className="text-lg text-gray-200 mb-10">
              Agende uma reunião diagnóstica com nossos especialistas e descubra como podemos otimizar seus resultados.
            </p>
            <Link
              to="/contato"
              className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-gold/90 transition-colors inline-block"
            >
              Solicitar Proposta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
