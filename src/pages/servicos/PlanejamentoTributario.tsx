import { FileText, Building2, TrendingUp, ShieldCheck, Calculator, Briefcase, Users, HeartPulse } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function PlanejamentoTributario() {
  return (
    <ServicePageTemplate
      badge="Estratégia Fiscal"
      title="Planejamento Tributário"
      subtitle="Pague menos impostos legalmente. Decisões fiscais inteligentes antes que a obrigação aconteça."
      heroImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          A diferença entre pagar o que você deve e pagar mais do que o <span className="text-brand-gold">necessário.</span>
        </>
      }
      introText={
        <>
          <p>
            O planejamento tributário é o conjunto de estratégias legais para reduzir a carga de impostos da sua empresa. Não é sonegação, é o uso inteligente das opções que a própria legislação oferece a quem conhece as regras.
          </p>
          <p>
            A escolha equivocada do regime tributário pode custar dezenas de milhares de reais por ano. A Finance realiza a simulação comparativa completa entre Simples Nacional, Lucro Presumido e Lucro Real para identificar qual regime gera a menor carga tributária para o seu perfil de negócio.
          </p>
          <p>
            <strong className="font-semibold text-slate-900">Além do regime</strong>: mapeamos créditos tributários não utilizados, deduções legais e oportunidades específicas para o seu setor, especialmente no mercado imobiliário, saúde e terceiro setor.
          </p>
        </>
      }
      stats={[
        { value: "3", label: "Regimes simulados antes de cada decisão" },
        { value: "17+", label: "Anos de expertise fiscal em Macaé" },
        { value: "100%", label: "Legalidade, sem risco fiscal" },
        { value: "2025", label: "Reforma Tributária: IBS, CBS e IS" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para a <span className="text-brand-gold">conformidade total.</span>
        </>
      }
      deliverables={[
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Diagnóstico Tributário",
          text: "Análise completa da situação fiscal atual da empresa: regime vigente, alíquotas praticadas, créditos e deduções disponíveis.",
        },
        {
          icon: <Calculator className="w-5 h-5" />,
          title: "Simulação de Regimes",
          text: "Comparativo detalhado entre Simples Nacional, Lucro Presumido e Lucro Real com projeção de carga tributária para os próximos 12 meses.",
        },
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Planejamento Anual",
          text: "Calendário fiscal estratégico com antecipação de pagamentos, aproveitamento de deduções e otimização do fluxo de caixa tributário.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Créditos Tributários",
          text: "Mapeamento e recuperação de créditos de PIS, COFINS, ICMS e IPI pagos a maior nos últimos 5 anos.",
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          title: "Reforma Tributária 2025",
          text: "Análise do impacto do IBS, CBS e IS no seu negócio, com simulações para a transição 2026-2033 e estratégias de adaptação.",
        },
        {
          icon: <Building2 className="w-5 h-5" />,
          title: "Holding e Patrimônio",
          text: "Estruturação tributária para holdings imobiliárias e familiares, análise de vantagens fiscais na gestão de imóveis e sucessão patrimonial.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Mapeamento do Perfil",
          text: "Levantamento de faturamento, margem, folha de pagamento, natureza das operações e histórico tributário dos últimos 3 anos.",
        },
        {
          title: "Simulação Comparativa",
          text: "Projeção da carga tributária nos 3 regimes com variações de cenário para crescimento, contração e sazonalidade.",
        },
        {
          title: "Identificação de Oportunidades",
          text: "Análise de créditos não aproveitados, deduções legais e incentivos fiscais aplicáveis ao seu setor.",
        },
        {
          title: "Plano de Ação",
          text: "Documento com as estratégias recomendadas, cronograma de implementação e impacto financeiro estimado.",
        },
        {
          title: "Monitoramento Anual",
          text: "Revisão do planejamento a cada exercício e alerta proativo sobre mudanças na legislação que impactem a empresa.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Quanto custa não fazer <span className="text-brand-gold">planejamento tributário?</span>
        </>
      }
      checklistText="A maioria das empresas paga mais impostos do que deveria. A diferença pode ser a margem que separa crescimento de estagnação."
      checklistItems={[
        "Economia tributária legal que pode chegar a 30% da carga atual",
        "Eliminação de riscos de autuação por escolhas fiscais inadequadas",
        "Recuperação de créditos pagos a maior nos últimos 5 anos",
        "Preparação antecipada para os impactos da Reforma Tributária 2025",
        "Estrutura societária eficiente para holding e patrimônio familiar",
        "Fluxo de caixa otimizado com calendário tributário estratégico",
      ]}
      checklistImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">planejamento tributário.</span>
        </>
      }
      faqs={[
        {
          question: "Qual a diferença entre Simples Nacional, Lucro Presumido e Lucro Real?",
          answer: "O Simples Nacional é um regime unificado para empresas com faturamento até R$ 4,8 milhões/ano, com alíquotas progressivas. O Lucro Presumido aplica um percentual fixo de presunção de lucro sobre o faturamento. O Lucro Real tributa o lucro contábil efetivo. A escolha certa depende da margem de lucro, do porte e do setor, e pode gerar economias significativas.",
        },
        {
          question: "Toda empresa pode mudar de regime tributário?",
          answer: "A opção pelo regime tributário é feita no início de cada ano-calendário, com prazo até o pagamento da primeira guia. Algumas mudanças têm restrições, por exemplo, empresas com faturamento acima de R$ 4,8 milhões/ano não podem optar pelo Simples. Fazemos a análise de viabilidade antes de qualquer recomendação.",
        },
        {
          question: "Planejamento tributário é legal?",
          answer: "Sim, totalmente. O planejamento tributário é o uso das opções que a própria legislação oferece ao contribuinte, escolha de regime, aproveitamento de deduções e créditos, estruturação societária eficiente. É diferente de sonegação, que é o ocultamento de receitas ou despesas. Tudo o que a Finance recomenda tem amparo legal explícito.",
        },
        {
          question: "O que muda com a Reforma Tributária para o planejamento?",
          answer: "A Reforma Tributária substitui gradualmente PIS, COFINS, IPI, ICMS e ISS pelo IBS, CBS e IS (IVA Dual) a partir de 2026. Isso altera cálculos de crédito, alíquotas e obrigações acessórias. A Finance já está preparada para orientar empresas na transição, inclusive com simulações de impacto por regime tributário.",
        },
      ]}
      relatedServices={[
        {
          title: "Escrituração Contábil",
          desc: "A base de dados que alimenta um planejamento tributário eficiente.",
          link: "/servicos/escrituracao-contabil",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "Mercado Imobiliário",
          desc: "Planejamento tributário especializado para investidores e construtoras.",
          link: "/segmentos/mercado-imobiliario",
          icon: <Building2 className="w-4 h-4" />,
        },
        {
          title: "Contabilidade Consultiva",
          desc: "Planejamento estratégico integrado, da fiscal à gestão.",
          link: "/servicos/contabilidade-consultiva",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Folha de Pagamento",
          desc: "Alinhe a tributação com os encargos trabalhistas da sua equipe.",
          link: "/servicos/folha-de-pagamento",
          icon: <Users className="w-4 h-4" />,
        },
      ]}
    />
  );
}
