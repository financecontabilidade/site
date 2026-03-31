import { ShieldCheck, FileText, Search, Briefcase, TrendingUp, Users, HeartPulse, Calculator, Building2 } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function ComplianceAuditoria() {
  return (
    <ServicePageTemplate
      slug="servico-compliance"
      badge="Governança"
      title="Compliance e Auditoria Interna"
      subtitle="Proteja o patrimônio da sua empresa e garanta que todos os processos estejam dentro da lei."
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          A certeza de que sua empresa está no <span className="text-brand-gold">caminho certo.</span>
        </>
      }
      introText={
        <>
          <p>
            O crescimento acelerado de uma empresa muitas vezes traz desorganização e riscos ocultos. Falhas em processos internos, fraudes e não conformidades com a legislação podem destruir anos de trabalho.
          </p>
          <p>
            A Finance realiza auditorias preventivas e implementa programas de compliance para garantir que sua empresa opere com transparência, ética e segurança jurídica, atraindo investidores e protegendo o patrimônio dos sócios.
          </p>
        </>
      }
      stats={[
        { value: "100%", label: "Redução de riscos fiscais" },
        { value: "0", label: "Passivos ocultos" },
        { value: "17+", label: "Anos de experiência" },
        { value: "24h", label: "Tempo médio de resposta" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para a <span className="text-brand-gold">segurança do seu negócio.</span>
        </>
      }
      deliverables={[
        {
          icon: <Search className="w-5 h-5" />,
          title: "Auditoria Contábil e Fiscal",
          text: "Revisão minuciosa de balanços, apurações e declarações para identificar inconsistências.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Programa de Compliance",
          text: "Criação de códigos de ética, canais de denúncia e políticas internas de conformidade.",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Due Diligence",
          text: "Análise profunda de riscos para processos de fusão, aquisição ou entrada de investidores.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Mapeamento de Riscos",
          text: "Identificação das áreas mais vulneráveis da empresa (fiscal, trabalhista, financeira).",
        },
        {
          title: "Análise e Testes",
          text: "Revisão documental e entrevistas para validar a eficácia dos controles internos.",
        },
        {
          title: "Relatório e Plano de Ação",
          text: "Apresentação das falhas encontradas e recomendação de melhorias práticas.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Por que investir em <span className="text-brand-gold">compliance?</span>
        </>
      }
      checklistText="Uma empresa sem controles internos está vulnerável a fraudes, multas e perda de reputação."
      checklistItems={[
        "Previne fraudes financeiras e desvios de recursos",
        "Aumenta o valor da empresa (valuation) para investidores",
        "Evita multas milionárias por descumprimento de leis (LGPD, Anticorrupção)",
        "Garante a continuidade do negócio a longo prazo",
      ]}
      checklistImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">auditoria.</span>
        </>
      }
      faqs={[
        {
          question: "Minha empresa é pequena, preciso de compliance?",
          answer: "Sim. O compliance não é apenas para grandes corporações. Pequenas empresas também estão sujeitas a multas trabalhistas, fiscais e da LGPD. Implementamos controles proporcionais ao tamanho do seu negócio.",
        },
        {
          question: "A auditoria vai apontar erros da minha equipe?",
          answer: "O objetivo da auditoria não é punir, mas sim identificar falhas nos processos para corrigi-las antes que gerem prejuízos. É uma ferramenta de melhoria contínua.",
        },
      ]}
      relatedServices={[
        {
          title: "Planejamento Tributário",
          desc: "Garanta que sua economia de impostos seja 100% legal.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Contabilidade Consultiva",
          desc: "Apoio estratégico para a tomada de decisões seguras.",
          link: "/servicos/contabilidade-consultiva",
          icon: <Briefcase className="w-4 h-4" />,
        },
        {
          title: "Abertura de Empresas",
          desc: "Legalize filiais ou Holdings com máxima segurança jurídica.",
          link: "/servicos/abertura-de-empresas",
          icon: <Building2 className="w-4 h-4" />,
        },
        {
          title: "Escrituração Contábil",
          desc: "A base firme para processos livres de inconformidades.",
          link: "/servicos/escrituracao-contabil",
          icon: <FileText className="w-4 h-4" />,
        },
      ]}
    />
  );
}
