import { Building2, FileText, TrendingUp, Calculator, ShieldCheck, Briefcase, Users, HeartPulse } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function MercadoImobiliario() {
  return (
    <ServicePageTemplate
      slug="servico-imobiliario"
      badge="Especialidade"
      title="Mercado Imobiliário"
      subtitle="Contabilidade e planejamento tributário especializados para construtoras, incorporadoras, loteadoras e imobiliárias."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          Construa seu patrimônio com <span className="text-brand-gold">segurança jurídica e fiscal.</span>
        </>
      }
      introText={
        <>
          <p>
            O mercado imobiliário possui uma das legislações tributárias mais complexas e específicas do Brasil. RET (Regime Especial de Tributação), SPE (Sociedade de Propósito Específico), SCP (Sociedade em Conta de Participação), permutas físicas e financeiras exigem um contador que respire o seu setor.
          </p>
          <p>
            A Finance tem mais de 17 anos de experiência atendendo os maiores players do mercado imobiliário de Macaé e região. Nós estruturamos seus empreendimentos para garantir a menor carga tributária possível, desde a compra do terreno até a entrega das chaves.
          </p>
        </>
      }
      stats={[
        { value: "4%", label: "Tributação no RET (Regime Especial)" },
        { value: "100%", label: "Conformidade com a Receita" },
        { value: "17+", label: "Anos de experiência no setor" },
        { value: "24h", label: "Tempo médio de resposta" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para o <span className="text-brand-gold">sucesso do seu empreendimento.</span>
        </>
      }
      deliverables={[
        {
          icon: <Building2 className="w-5 h-5" />,
          title: "Estruturação de SPE e SCP",
          text: "Abertura e gestão contábil de Sociedades de Propósito Específico e Sociedades em Conta de Participação para isolar riscos.",
        },
        {
          icon: <Calculator className="w-5 h-5" />,
          title: "Adesão ao RET",
          text: "Processo completo para enquadramento no Regime Especial de Tributação (4% sobre a receita recebida).",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Contabilidade de Permutas",
          text: "Tratamento fiscal e contábil correto para permutas físicas e financeiras de terrenos por unidades construídas.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Estudo de Viabilidade Fiscal",
          text: "Antes de lançar o empreendimento, simulamos a carga tributária em diferentes cenários societários.",
        },
        {
          title: "Constituição e Patrimônio de Afetação",
          text: "Abertura da SPE e registro do Patrimônio de Afetação para garantir a segurança dos adquirentes e o direito ao RET.",
        },
        {
          title: "Acompanhamento da Obra",
          text: "Gestão contábil mensal das receitas (POC - Percentual de Obra Concluída) e custos incorridos.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Por que ter um contador <span className="text-brand-gold">especialista?</span>
        </>
      }
      checklistText="Errar na tributação de um empreendimento imobiliário pode consumir toda a margem de lucro do projeto."
      checklistItems={[
        "Evita a bitributação na venda de imóveis",
        "Garante a correta apropriação de custos (terreno, obra, comissões)",
        "Protege o patrimônio dos sócios através de SPEs e Holdings",
        "Assegura a conformidade com as normas contábeis específicas (ICPC 02)",
      ]}
      checklistImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">contabilidade imobiliária.</span>
        </>
      }
      faqs={[
        {
          question: "O que é o RET e quem pode usar?",
          answer: "O Regime Especial de Tributação unifica IRPJ, CSLL, PIS e COFINS em uma alíquota única de 4% sobre as receitas recebidas. É exclusivo para incorporações imobiliárias que tenham o Patrimônio de Afetação registrado no cartório.",
        },
        {
          question: "Qual a diferença entre SPE e SCP?",
          answer: "A SPE (Sociedade de Propósito Específico) é uma empresa nova com CNPJ próprio, usada para isolar o risco de um único empreendimento. A SCP (Sociedade em Conta de Participação) é um contrato de investimento onde o sócio ostensivo (construtora) realiza a obra e o sócio oculto (investidor/terrenista) apenas aporta capital ou terreno, sem aparecer para terceiros.",
        },
      ]}
      relatedServices={[
        {
          title: "Planejamento Tributário",
          desc: "Reduza a carga tributária da sua construtora ou holding.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Abertura de Empresas",
          desc: "Constituição ágil de SPEs, SCPs e Holdings Patrimoniais.",
          link: "/servicos/abertura-de-empresas",
          icon: <Building2 className="w-4 h-4" />,
        },
        {
          title: "Escrituração Contábil",
          desc: "Processamento de permutas, estoques e POC com precisão.",
          link: "/servicos/escrituracao-contabil",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "Contabilidade Consultiva",
          desc: "Visualização clara do fluxo financeiro das suas obras.",
          link: "/servicos/contabilidade-consultiva",
          icon: <Briefcase className="w-4 h-4" />,
        },
      ]}
    />
  );
}
