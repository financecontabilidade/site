import { Building2, FileText, ShieldCheck, Briefcase, TrendingUp, Users, HeartPulse, Calculator } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function AberturaEmpresas() {
  return (
    <ServicePageTemplate
      badge="Legalização"
      title="Abertura e Regularização de Empresas"
      subtitle="O primeiro passo para um negócio de sucesso é uma estrutura societária sólida e legal."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          Comece certo, cresça <span className="text-brand-gold">sem limites.</span>
        </>
      }
      introText={
        <>
          <p>
            Abrir uma empresa no Brasil é um desafio burocrático que exige conhecimento técnico. Um erro na escolha da natureza jurídica ou do regime tributário pode custar caro nos primeiros anos de vida do negócio.
          </p>
          <p>
            A Finance cuida de todo o processo de abertura, desde a viabilidade do nome até a emissão do primeiro CNPJ e alvará, garantindo que sua empresa nasça com a estrutura ideal para o seu modelo de negócio.
          </p>
        </>
      }
      stats={[
        { value: "100%", label: "Processos deferidos" },
        { value: "7", label: "Dias úteis em média" },
        { value: "17+", label: "Anos de experiência" },
        { value: "24h", label: "Tempo médio de resposta" },
      ]}
      deliverablesTitle={
        <>
          Entregáveis completos para a <span className="text-brand-gold">legalização do seu negócio.</span>
        </>
      }
      deliverables={[
        {
          icon: <Building2 className="w-5 h-5" />,
          title: "Abertura de CNPJ",
          text: "Elaboração do contrato social, registro na Junta Comercial e Receita Federal.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Alvarás e Licenças",
          text: "Obtenção de alvará de funcionamento, licença sanitária e corpo de bombeiros.",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Alterações Contratuais",
          text: "Mudança de endereço, quadro societário, capital social e atividades.",
        },
      ]}
      processTitle={
        <>
          Como trabalhamos para <span className="text-brand-gold">garantir resultados.</span>
        </>
      }
      processSteps={[
        {
          title: "Estudo de Viabilidade",
          text: "Análise do local, atividades (CNAEs) e nome empresarial.",
        },
        {
          title: "Elaboração de Documentos",
          text: "Redação do contrato social e coleta de assinaturas digitais.",
        },
        {
          title: "Registro nos Órgãos",
          text: "Acompanhamento do processo na Junta, Receita, Estado e Prefeitura.",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Por que a legalização <span className="text-brand-gold">é fundamental?</span>
        </>
      }
      checklistText="Uma empresa irregular não pode emitir notas, contratar funcionários ou obter crédito."
      checklistItems={[
        "Garante a proteção do patrimônio pessoal dos sócios",
        "Permite a emissão de notas fiscais e participação em licitações",
        "Facilita o acesso a linhas de crédito com juros menores",
        "Evita multas e interdições por falta de alvará",
      ]}
      checklistImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Suas perguntas sobre <span className="text-brand-gold">abertura de empresas.</span>
        </>
      }
      faqs={[
        {
          question: "Quanto tempo demora para abrir uma empresa?",
          answer: "O prazo varia de acordo com o município e a atividade, mas em média, o CNPJ sai em até 7 dias úteis após a assinatura dos documentos.",
        },
        {
          question: "Preciso de um endereço comercial?",
          answer: "Depende da sua atividade. Algumas empresas podem ser abertas no endereço residencial ou em coworkings (escritórios virtuais). Nós analisamos a viabilidade para você.",
        },
      ]}
      relatedServices={[
        {
          title: "Planejamento Tributário",
          desc: "Escolha o regime tributário ideal desde o primeiro dia.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Escrituração Contábil",
          desc: "Mantenha sua empresa regular após a abertura.",
          link: "/servicos/escrituracao-contabil",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          title: "Folha de Pagamento",
          desc: "Cresça seu time com segurança trabalhista e regularidade no eSocial.",
          link: "/servicos/folha-de-pagamento",
          icon: <Users className="w-4 h-4" />,
        },
        {
          title: "Contabilidade Consultiva",
          desc: "Comece seu negócio focado em rentabilidade e métricas claras.",
          link: "/servicos/contabilidade-consultiva",
          icon: <Briefcase className="w-4 h-4" />,
        },
      ]}
    />
  );
}
