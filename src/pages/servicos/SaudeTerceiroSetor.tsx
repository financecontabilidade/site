import { HeartPulse, FileText, TrendingUp, ShieldCheck, Users, Calculator, Briefcase, Building2 } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function SaudeTerceiroSetor() {
  return (
    <ServicePageTemplate
      badge="Especialidade"
      title="Saúde & Terceiro Setor"
      subtitle="Contabilidade especializada para clínicas, consultórios, médicos, ONGs e associações."
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          Cuidamos da sua empresa para você cuidar das <span className="text-brand-gold">pessoas.</span>
        </>
      }
      introText={
        <>
          <p>
            Profissionais da saúde e entidades do terceiro setor possuem particularidades contábeis e tributárias únicas. Equiparação hospitalar, DMED, isenções fiscais, CEBAS e prestação de contas exigem um conhecimento técnico profundo.
          </p>
          <p>
            A Finance entende a rotina corrida de médicos, dentistas e gestores de ONGs. Nós assumimos toda a burocracia, garantindo que você pague o menor imposto possível (de forma legal) e mantenha suas certidões e isenções sempre em dia.
          </p>
        </>
      }
      stats={[
        { value: "8%", label: "Tributação com Equiparação Hospitalar" },
        { value: "100%", label: "Conformidade com a DMED" },
        { value: "17+", label: "Anos de experiência no setor" },
        { value: "24h", label: "Tempo médio de resposta" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para a <span className="text-brand-gold">sua tranquilidade.</span>
        </>
      }
      deliverables={[
        {
          icon: <HeartPulse className="w-5 h-5" />,
          title: "Equiparação Hospitalar",
          text: "Redução drástica do IRPJ e CSLL para clínicas médicas e odontológicas que realizam procedimentos.",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Gestão da DMED",
          text: "Cruzamento de dados perfeito com o Carnê-Leão e a declaração de imposto de renda dos seus pacientes.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Isenções para ONGs",
          text: "Obtenção e manutenção do CEBAS, imunidade tributária e prestação de contas para o Ministério Público.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Diagnóstico Tributário",
          text: "Análise do seu modelo de atuação (Pessoa Física vs. Pessoa Jurídica) para encontrar a menor carga tributária.",
        },
        {
          title: "Estruturação Societária",
          text: "Abertura da clínica ou consultório com os CNAEs corretos para garantir benefícios fiscais.",
        },
        {
          title: "Gestão Mensal e DMED",
          text: "Acompanhamento rigoroso do faturamento e envio preciso das obrigações acessórias da saúde.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1551076805-e1869033e561?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Por que ter um contador <span className="text-brand-gold">especialista?</span>
        </>
      }
      checklistText="A malha fina da Receita Federal para profissionais da saúde é implacável. Um erro na DMED pode gerar problemas para você e seus pacientes."
      checklistItems={[
        "Evita a bitributação entre a clínica e a pessoa física do médico",
        "Garante a redução de impostos através da equiparação hospitalar",
        "Assegura a manutenção da imunidade tributária para o terceiro setor",
        "Protege o patrimônio pessoal do profissional de saúde",
      ]}
      checklistImage="https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">contabilidade para saúde.</span>
        </>
      }
      faqs={[
        {
          question: "Vale a pena abrir um CNPJ ou continuar como Pessoa Física?",
          answer: "Depende do seu faturamento. Geralmente, a partir de R$ 5.000 mensais, a carga tributária na Pessoa Física (até 27,5%) já se torna mais pesada do que na Pessoa Jurídica (a partir de 6% no Simples Nacional). Fazemos essa simulação exata para você.",
        },
        {
          question: "O que é Equiparação Hospitalar?",
          answer: "É um benefício fiscal que reduz a base de cálculo do IRPJ de 32% para 8%, e da CSLL de 32% para 12%. É aplicável a clínicas que realizam procedimentos (como cirurgias, exames, etc) e atendem a requisitos específicos da Anvisa.",
        },
      ]}
      relatedServices={[
        {
          title: "Planejamento Tributário",
          desc: "Simulação entre PF e PJ para médicos e dentistas.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Folha de Pagamento",
          desc: "Gestão de recepcionistas, enfermeiros e eSocial.",
          link: "/servicos/folha-de-pagamento",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "Escrituração Contábil",
          desc: "Mantenha a transparência exigida para aprovação de contas.",
          link: "/servicos/escrituracao-contabil",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "Contabilidade Consultiva",
          desc: "Análises precisas para o crescimento do seu consultório ou ONG.",
          link: "/servicos/contabilidade-consultiva",
          icon: <Briefcase className="w-4 h-4" />,
        },
      ]}
    />
  );
}
