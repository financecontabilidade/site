import { Users, FileText, ShieldCheck, Briefcase, TrendingUp, HeartPulse, Calculator, Building2 } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function FolhaDePagamento() {
  return (
    <ServicePageTemplate
      badge="Departamento Pessoal"
      title="Folha de Pagamento e eSocial"
      subtitle="Gestão completa do seu time, garantindo que sua empresa cumpra 100% das obrigações trabalhistas e previdenciárias."
      heroImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          A tranquilidade de saber que sua equipe está <span className="text-brand-gold">segura.</span>
        </>
      }
      introText={
        <>
          <p>
            Gerenciar a folha de pagamento e as obrigações do eSocial é uma das tarefas mais complexas e arriscadas para qualquer empresa. Erros aqui não apenas geram multas pesadas, mas também processos trabalhistas que podem comprometer o negócio.
          </p>
          <p>
            A Finance assume toda a burocracia do seu departamento pessoal. Desde a admissão até a rescisão, cuidamos de cada detalhe para que você foque no que importa: liderar sua equipe e crescer sua empresa.
          </p>
        </>
      }
      stats={[
        { value: "100%", label: "Conformidade com o eSocial" },
        { value: "0", label: "Atrasos no fechamento" },
        { value: "17+", label: "Anos de experiência" },
        { value: "24h", label: "Tempo médio de resposta" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para a <span className="text-brand-gold">gestão do seu time.</span>
        </>
      }
      deliverables={[
        {
          icon: <Users className="w-5 h-5" />,
          title: "Processamento da Folha",
          text: "Cálculo preciso de salários, horas extras, adicionais, férias e 13º salário.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Gestão do eSocial",
          text: "Envio de todos os eventos obrigatórios dentro dos prazos legais, evitando multas.",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Admissão e Rescisão",
          text: "Processos ágeis e seguros para a entrada e saída de colaboradores.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Recebimento de Dados",
          text: "Coleta das informações de ponto, atestados e variáveis do mês.",
        },
        {
          title: "Processamento e Conferência",
          text: "Nossa equipe calcula a folha e realiza dupla checagem para evitar erros.",
        },
        {
          title: "Envio e Pagamento",
          text: "Disponibilização dos holerites e guias de impostos (INSS, FGTS, IRRF) com antecedência.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Por que terceirizar o <span className="text-brand-gold">departamento pessoal?</span>
        </>
      }
      checklistText="A legislação trabalhista brasileira é complexa e muda constantemente. Terceirizar é a forma mais segura de se proteger."
      checklistItems={[
        "Elimina o risco de multas por atrasos no eSocial",
        "Reduz drasticamente o risco de passivos trabalhistas",
        "Garante o cálculo correto de todos os direitos dos funcionários",
        "Libera seu tempo para focar na gestão do negócio",
      ]}
      checklistImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">folha de pagamento.</span>
        </>
      }
      faqs={[
        {
          question: "Vocês cuidam do ponto eletrônico?",
          answer: "Nós recebemos os dados do seu sistema de ponto para processar a folha. Podemos indicar excelentes sistemas parceiros caso você ainda não tenha um.",
        },
        {
          question: "Como funciona o eSocial?",
          answer: "O eSocial é o sistema do governo que unificou as informações trabalhistas. Nós cuidamos de todos os envios (admissões, férias, afastamentos, folha) para que você não precise se preocupar.",
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
          title: "Compliance e Auditoria",
          desc: "Revisão completa das suas práticas trabalhistas.",
          link: "/servicos/compliance-auditoria",
          icon: <ShieldCheck className="w-4 h-4" />,
        },
        {
          title: "Planejamento Tributário",
          desc: "Reduza os custos tributários incidentes sobre a folha.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Abertura de Empresas",
          desc: "Regularize vínculos e crie filiais com segurança plena.",
          link: "/servicos/abertura-de-empresas",
          icon: <Building2 className="w-4 h-4" />,
        },
      ]}
    />
  );
}
