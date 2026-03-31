import { Building2, FileText, ShieldCheck, Briefcase, TrendingUp } from "lucide-react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function Holdings() {
  return (
    <ServicePageTemplate
      slug="servico-holdings"
      badge="Proteção e Sucessão"
      title="Holding Familiar e Imobiliária"
      subtitle="Organização patrimonial, sucessão pacífica e eficiência tributária na gestão dos seus bens."
      heroImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop"
      introTitle={
        <>
          Proteja o que você construiu e <span className="text-brand-gold">pague menos impostos.</span>
        </>
      }
      introText={
        <>
          <p>
            A estrutura de holding familiar e imobiliária deixou de ser exclusividade de grandes fortunas. Se você possui dois ou mais imóveis para aluguel, ou deseja organizar a sucessão dos seus bens sem os altos custos e conflitos de um inventário, a holding é a solução legal mais eficiente.
          </p>
          <p>
            Na Finance Contabilidade, analisamos seus números reais e comparamos a tributação dos seus aluguéis e ganhos de capital na Pessoa Física x Pessoa Jurídica, estruturando a holding apenas quando ela é financeiramente vantajosa.
          </p>
        </>
      }
      stats={[
        { value: "Até 15%", label: "Redução no IR de aluguéis" },
        { value: "0", label: "Custos com inventário" },
        { value: "17+", label: "Anos de experiência" },
        { value: "100%", label: "Segurança jurídica" },
      ]}
      deliverablesTitle={
        <>
          Vantagens de uma <span className="text-brand-gold">Holding Patrimonial.</span>
        </>
      }
      deliverables={[
        {
          icon: <TrendingUp className="w-5 h-5" />,
          title: "Eficiência Tributária",
          text: "Redução significativa na carga tributária sobre rendimentos de aluguel e ganhos de capital na venda de imóveis.",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Proteção Patrimonial",
          text: "Maior segurança dos bens familiares contra riscos das atividades empresariais da pessoa física.",
        },
        {
          icon: <Briefcase className="w-5 h-5" />,
          title: "Planejamento Sucessório",
          text: "Transmissão de patrimônio aos herdeiros via quotas sociais, evitando o desgastante e custoso processo de inventário.",
        },
      ]}
      processTitle={
        <>
          Como estruturamos sua <span className="text-brand-gold">Holding Corporativa.</span>
        </>
      }
      processSteps={[
        {
          title: "Análise de Viabilidade",
          text: "Comparativo de custos (PF vs PJ) e gastos de constituição para garantir que a holding será rentável.",
        },
        {
          title: "Constituição da Empresa",
          text: "Abertura da sociedade com cláusulas protetivas (usufruto, incomunicabilidade, impenhorabilidade).",
        },
        {
          title: "Integralização de Bens",
          text: "Transferência dos imóveis da pessoa física para o CNPJ da holding com avaliação dos impactos fiscais (ITBI e IR).",
        },
      ]}
      processImage="https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=700&q=80&auto=format&fit=crop"
      checklistTitle={
        <>
          Quando a holding <span className="text-brand-gold">não compensa?</span>
        </>
      }
      checklistText="A holding imobiliária não é a solução mágica para todos. A estrutura pode não ser vantajosa caso você:"
      checklistItems={[
        "Possua apenas um imóvel com valor de aluguel modesto.",
        "Tenha intenção de vender o imóvel em curto prazo.",
        "Os custos mensais da contabilidade superem a economia tributária.",
        "A transferência do imóvel gere alto custo imediato (ITBI/Ganho de capital).",
      ]}
      checklistImage="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=700&q=80&auto=format&fit=crop"
      faqTitle={
        <>
          Dúvidas comuns sobre <span className="text-brand-gold">Holdings.</span>
        </>
      }
      faqs={[
        {
          question: "A Holding Imobiliária reduz o imposto do aluguel?",
          answer: "Sim. Na pessoa física, a alíquota pode chegar a 27,5% na tabela progressiva. Em uma holding no Lucro Presumido, a carga total fica geralmente entre 11% e 15% sobre a receita bruta.",
        },
        {
          question: "Como funciona a sucessão na Holding?",
          answer: "Os pais podem doar as quotas da empresa aos filhos com reserva de usufruto. Assim, continuam administrando os bens em vida, e no falecimento, os filhos já possuem as quotas, não havendo necessidade de inventariar esses imóveis.",
        },
      ]}
      relatedServices={[
        {
          title: "Mercado Imobiliário",
          desc: "Tributação especializada para investidores, construtoras e incorporadoras.",
          link: "/servicos/mercado-imobiliario",
          icon: <Building2 className="w-4 h-4" />,
        },
        {
          title: "Planejamento Tributário",
          desc: "Estratégias avançadas para reduzir o IRPJ e a CSLL legalmente.",
          link: "/servicos/planejamento-tributario",
          icon: <TrendingUp className="w-4 h-4" />,
        },
        {
          title: "Abertura de Empresas",
          desc: "Processo ágil e seguro para constituição da sua nova empresa.",
          link: "/servicos/abertura-de-empresas",
          icon: <Briefcase className="w-4 h-4" />,
        },
        {
          title: "Contabilidade Consultiva",
          desc: "Gestão completa do seu patrimônio com métricas financeiras claras.",
          link: "/servicos/contabilidade-consultiva",
          icon: <FileText className="w-4 h-4" />,
        },
      ]}
    />
  );
}
