import { TrendingUp, FileText, Briefcase, Calculator, Building2, HeartPulse, ShieldCheck, Users } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function ContabilidadeConsultiva() {
  return (
    <ServicePageTemplate
      badge="Gestão Estratégica"
      title="Contabilidade Consultiva e Estratégica"
      subtitle="Transformamos os números da sua empresa em um mapa claro para o crescimento e a lucratividade."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          O contador como seu <span className="text-brand-gold">conselheiro financeiro.</span>
        </>
      }
      introText={
        <>
          <p>
            A contabilidade tradicional olha para o passado: registra o que já aconteceu para pagar impostos. A contabilidade consultiva olha para o futuro: analisa os dados de hoje para projetar o crescimento de amanhã.
          </p>
          <p>
            A Finance atua como um braço estratégico do seu negócio. Nós traduzimos balanços e DREs em indicadores de desempenho (KPIs), ajudando você a entender para onde está indo o seu dinheiro e como aumentar a sua margem de lucro.
          </p>
        </>
      }
      stats={[
        { value: "100%", label: "Foco no crescimento" },
        { value: "12", label: "Reuniões anuais de resultados" },
        { value: "17+", label: "Anos de experiência" },
        { value: "24h", label: "Tempo médio de resposta" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para a <span className="text-brand-gold">gestão do seu negócio.</span>
        </>
      }
      deliverables={[
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Dashboard Financeiro",
          text: "Acompanhamento em tempo real de receitas, despesas, margem de lucro e ponto de equilíbrio.",
        },
        {
          icon: <Calculator className="w-5 h-5" />,
          title: "Precificação Inteligente",
          text: "Cálculo do custo real dos seus produtos/serviços para garantir que você não tenha prejuízo.",
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          title: "Reuniões de Resultados",
          text: "Apresentação mensal ou trimestral dos números da empresa com recomendações práticas.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Diagnóstico Inicial",
          text: "Análise profunda da saúde financeira atual da empresa e definição de metas.",
        },
        {
          title: "Estruturação de Dados",
          text: "Organização do plano de contas e integração de sistemas para gerar relatórios confiáveis.",
        },
        {
          title: "Acompanhamento Contínuo",
          text: "Monitoramento dos KPIs e ajustes de rota para atingir os objetivos traçados.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Por que ter um <span className="text-brand-gold">contador consultor?</span>
        </>
      }
      checklistText="Tomar decisões baseadas em 'achismos' ou no saldo da conta bancária é o maior erro dos empresários."
      checklistItems={[
        "Identifica ralos financeiros e despesas desnecessárias",
        "Mostra qual produto/serviço é mais lucrativo",
        "Ajuda a definir o momento certo para contratar ou investir",
        "Prepara a empresa para momentos de crise ou expansão",
      ]}
      checklistImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">contabilidade consultiva.</span>
        </>
      }
      faqs={[
        {
          question: "Qual a diferença para a contabilidade normal?",
          answer: "A contabilidade normal (fiscal) é obrigatória por lei e foca em entregar guias de impostos. A consultiva é opcional e foca em ajudar você a ganhar mais dinheiro, usando os dados contábeis para gestão.",
        },
        {
          question: "Vocês fazem o meu financeiro (BPO)?",
          answer: "A contabilidade consultiva analisa os dados que o seu financeiro gera. Se você precisar que nós executemos o seu financeiro (pagar contas, emitir notas), oferecemos o serviço de BPO Financeiro separadamente.",
        },
      ]}
      relatedServices={[
        {
          title: "Planejamento Tributário",
          desc: "Aumente sua margem de lucro pagando menos impostos.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Escrituração Contábil",
          desc: "A base de dados confiável para a nossa consultoria.",
          link: "/servicos/escrituracao-contabil",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "Mercado Imobiliário",
          desc: "Gestão dedicada para empresas de construção e incorporação.",
          link: "/servicos/mercado-imobiliario",
          icon: <Building2 className="w-4 h-4" />,
        },
        {
          title: "Folha de Pagamento",
          desc: "Otimize os custos com contratações de novos talentos do negócio.",
          link: "/servicos/folha-de-pagamento",
          icon: <Users className="w-4 h-4" />,
        },
      ]}
    />
  );
}
