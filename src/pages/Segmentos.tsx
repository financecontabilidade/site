import { motion } from "framer-motion";
import { ArrowRight, Star, ArrowRightLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Segmentos() {
  return (
    <div className="flex flex-col bg-brand-light">
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">
                COMUNICAÇÃO SETORIAL
              </p>
              <h1 className="text-5xl md:text-6xl font-light text-brand-navy tracking-tight mb-6 leading-[1.1]">
                Cada setor tem<br />
                sua própria<br />
                linguagem. <span className="text-brand-gold italic font-serif">Nós<br />falamos a sua.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                Especialização profunda em três segmentos estratégicos
                para garantir que seu negócio opere com máxima
                eficiência tributária e conformidade.
              </p>
              <Link
                to="/contato"
                className="inline-flex justify-center items-center px-8 py-3.5 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 w-full"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1974&auto=format&fit=crop" alt="Desk setup" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white rounded-t-[3rem] relative z-10 -mt-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-brand-navy leading-tight mb-6">
                Especialização<br />
                profunda, não<br />
                diversificação<br />
                indiscriminada.
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Acreditamos que para oferecer excelência, é preciso
                foco. Nossa estrutura é desenhada para dominar as
                nuances fiscais e contábeis de nichos específicos.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="bg-brand-light p-8 rounded-3xl">
                <h3 className="text-4xl font-light text-brand-gold mb-2">17+</h3>
                <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">ANOS DE EXPERIÊNCIA</p>
              </div>
              <div className="bg-brand-light p-8 rounded-3xl">
                <h3 className="text-4xl font-light text-brand-gold mb-2">100%</h3>
                <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">CONFORMIDADE LEGAL</p>
              </div>
              <div className="bg-brand-light p-8 rounded-3xl">
                <h3 className="text-4xl font-light text-brand-gold mb-2">3</h3>
                <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">SETORES FOCO</p>
              </div>
              <div className="bg-brand-light p-8 rounded-3xl">
                <h3 className="text-4xl font-light text-brand-gold mb-2 flex items-center gap-1">5,0<Star className="h-6 w-6 fill-brand-gold text-brand-gold" /></h3>
                <p className="text-[10px] font-bold text-brand-navy tracking-widest uppercase">AVALIAÇÃO GOOGLE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Finance List */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">Segmentos de atuação</p>
            <h2 className="text-3xl md:text-4xl font-light text-brand-navy">Nossa experiência abrange cada setor com profundidade técnica.</h2>
          </div>

          <div className="space-y-4">
            {[
              { num: "01", title: "Mercado Imobiliário", desc: "Estruturação de SPE, SCP e planejamento tributário focado em incorporação.", tags: ["RET", "SPE/SCP"], link: "/servicos/mercado-imobiliario" },
              { num: "02", title: "Saúde e Clínicas", desc: "Equiparação hospitalar e gestão de folha para profissionais liberais.", tags: ["CLÍNICAS", "MÉDICOS"], link: "/servicos/saude-terceiro-setor" },
              { num: "03", title: "Terceiro Setor", desc: "Gestão de imunidades e isenções para ONGs e fundações.", tags: ["ISENÇÃO", "COMPLIANCE"], link: "/servicos/saude-terceiro-setor" },
              { num: "04", title: "Holding Familiar", desc: "Proteção patrimonial e planejamento sucessório estratégico.", tags: ["PATRIMÔNIO", "SUCESSÃO"], link: "/servicos/holdings" },
              { num: "05", title: "Abertura de Empresas", desc: "Processo ágil para novos negócios com consultoria inicial.", tags: ["CNPJ", "CUIDADOS"], link: "/servicos/abertura-de-empresas" },
              { num: "06", title: "Reforma Tributária", desc: "Assessoria completa para transição e adaptação ao novo sistema.", tags: ["CONSULTORIA", "FUTURO"], link: "/servicos/planejamento-tributario" },
            ].map((item, idx) => (
              <Link to={item.link} key={idx} className="flex flex-col md:flex-row md:items-center gap-6 p-6 border-b border-gray-200 hover:bg-white/50 transition-colors rounded-2xl group cursor-pointer">
                <div className="text-6xl font-light text-brand-gold/20 w-20 shrink-0">{item.num}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-brand-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-200/50 text-gray-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                  <ArrowRight className="h-5 w-5 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity md:-translate-x-4 md:group-hover:translate-x-0 duration-300 hidden md:block" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-serif text-white/[0.03] leading-none select-none">
          "
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-white italic mb-12 leading-relaxed">
            "A Finance transformou a forma como enxergamos nossos
            números. A especialização deles no mercado imobiliário nos
            trouxe uma segurança jurídica que nunca tivemos com
            contabilidades generalistas."
          </h2>
          <div>
            <p className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-1">RENATO MOTA</p>
            <p className="text-gray-400 text-xs">Empresário Macaé / CEO Mota Imóveis</p>
          </div>
        </div>
      </section>



      {/* Benefits Row */}
      <section className="py-24 bg-brand-light border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <ArrowRightLeft className="h-8 w-8 text-brand-gold mb-6" />
              <h3 className="text-xl font-bold text-brand-navy mb-4">Migração Facilitada</h3>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Cuidamos de toda a transição da sua contabilidade atual para a Finance sem dores de cabeça ou interrupções.
              </p>
              <Link to="/contato" className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-brand-navy transition-colors">
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm">
              <ShieldCheck className="h-8 w-8 text-brand-gold mb-6" />
              <h3 className="text-xl font-bold text-brand-navy mb-4">Segurança Digital</h3>
              <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                Todos os seus documentos e dados financeiros protegidos por criptografia de ponta e redundância em nuvem.
              </p>
              <Link to="/contato" className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-brand-navy transition-colors">
                Saiba mais <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-navy rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6 leading-tight">
                Pronto para elevar sua<br />gestão financeira?
              </h2>
              <p className="text-gray-300 mb-10 max-w-xl mx-auto">
                Agende uma consultoria diagnóstica gratuita com nossos especialistas no seu setor.
              </p>
              <Link
                to="/contato"
                className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold rounded-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 transition-colors"
              >
                Solicitar Orçamento
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
