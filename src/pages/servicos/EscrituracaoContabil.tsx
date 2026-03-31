import { FileText, Building2, TrendingUp, ShieldCheck, Calculator, Briefcase, Users, HeartPulse } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function EscrituracaoContabil() {
  return (
    <ServicePageTemplate
      slug="servico-escrituracao"
      badge="Contabilidade Base"
      title="Escrituração Contábil e Fiscal"
      subtitle="A base de dados que alimenta um planejamento tributário eficiente e garante a conformidade do seu negócio."
      heroImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          Muito mais que guias: a <span className="text-brand-gold">inteligência</span> por trás dos seus números.
        </>
      }
      introText={
        <>
          <p>
            A escrituração contábil e fiscal é a base de qualquer empresa saudável. É através dela que transformamos os dados do seu dia a dia em informações estratégicas para a tomada de decisão.
          </p>
          <p>
            Na Finance, não somos apenas "geradores de guias". Nós analisamos cada lançamento para garantir que você esteja em total conformidade com a legislação, evitando multas e passivos ocultos.
          </p>
        </>
      }
      stats={[
        { value: "100%", label: "Conformidade com o Fisco" },
        { value: "0", label: "Atrasos na entrega de obrigações" },
        { value: "24h", label: "Tempo médio de resposta" },
        { value: "17+", label: "Anos de experiência" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para a <span className="text-brand-gold">tranquilidade do seu negócio.</span>
        </>
      }
      deliverables={[
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Balanços e DREs",
          text: "Demonstrativos claros e precisos para você entender a saúde financeira da sua empresa.",
        },
        {
          icon: <Calculator className="w-5 h-5" />,
          title: "Apuração de Impostos",
          text: "Cálculo exato de todos os tributos, garantindo que você pague apenas o necessário.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Obrigações Acessórias",
          text: "Entrega pontual de SPED, DCTF, DEFIS e todas as declarações exigidas pelo governo.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Coleta de Dados",
          text: "Integração com seu sistema financeiro para importação ágil e segura das informações.",
        },
        {
          title: "Processamento e Análise",
          text: "Nossa equipe classifica e analisa cada documento, garantindo a correta alocação contábil.",
        },
        {
          title: "Fechamento Mensal",
          text: "Emissão de relatórios e guias de impostos com antecedência para seu planejamento.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Por que a escrituração <span className="text-brand-gold">é fundamental?</span>
        </>
      }
      checklistText="Uma contabilidade desorganizada é o caminho mais rápido para problemas com a Receita Federal e perda de dinheiro."
      checklistItems={[
        "Evita multas por atraso ou omissão de informações",
        "Permite a distribuição de lucros isenta de impostos",
        "Facilita a obtenção de crédito em bancos",
        "Base sólida para o planejamento tributário",
      ]}
      checklistImage="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">escrituração.</span>
        </>
      }
      faqs={[
        {
          question: "Preciso enviar documentos físicos?",
          answer: "Não. Nosso processo é 100% digital. Você pode enviar tudo pelo nosso portal ou integrar seu sistema financeiro diretamente com o nosso.",
        },
        {
          question: "Como sei se minha empresa está regular?",
          answer: "Emitimos mensalmente certidões negativas de débitos (CNDs) e enviamos um relatório de conformidade para sua tranquilidade.",
        },
      ]}
      relatedServices={[
        {
          title: "Planejamento Tributário",
          desc: "Pague menos impostos legalmente com base nos seus dados contábeis.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Folha de Pagamento",
          desc: "Gestão completa do seu departamento pessoal e eSocial.",
          link: "/servicos/folha-de-pagamento",
          icon: <Briefcase className="w-4 h-4" />,
        },
        {
          title: "Abertura de Empresas",
          desc: "Legalizamos seu negócio para que você comece com o pé direito.",
          link: "/servicos/abertura-de-empresas",
          icon: <Building2 className="w-4 h-4" />,
        },
        {
          title: "Compliance e Auditoria",
          desc: "Proteja seu patrimônio com processos auditados e em conformidade.",
          link: "/servicos/compliance-auditoria",
          icon: <ShieldCheck className="w-4 h-4" />,
        },
      ]}
    />
  );
}
