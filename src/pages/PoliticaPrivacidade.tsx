import { motion } from "framer-motion";

export default function PoliticaPrivacidade() {
  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 rounded-[2rem] shadow-sm"
        >
          <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">Atualizado em Janeiro de 2025</p>
          <h1 className="text-4xl md:text-5xl font-light text-brand-navy mb-12">Política de Privacidade</h1>
          
          <div className="text-gray-600 space-y-6 leading-relaxed">
            <p>
              A <strong>Finance Gestão e Negócios LTDA (Finance Contabilidade)</strong>, com sede na Rua Visconde de Quissama, 98, Centro, Macaé/RJ, inscrita no CNPJ sob o nº 10.379.943/0001-20, valoriza a privacidade de seus usuários e clientes. Elaboramos esta Política de Privacidade para demonstrar nosso compromisso em proteger seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">1. Dados que Coletamos</h2>
            <p>
              Quando você acessa nosso site ou entra em contato conosco, podemos coletar os seguintes dados:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Contato:</strong> Nome, e-mail corporativo, telefone/WhatsApp, nome da empresa e segmento de atuação (fornecidos através de formulários).</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas acessadas e tempo de permanência (coletados via cookies, dependendo de suas preferências).</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">2. Como Utilizamos seus Dados</h2>
            <p>
              Os dados coletados são utilizados para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder às solicitações e mensagens enviadas via formulário de contato ou WhatsApp.</li>
              <li>Fornecer informações detalhadas sobre nossos serviços de contabilidade e gestão.</li>
              <li>Analisar o desempenho do nosso site e melhorar a experiência do usuário.</li>
              <li>Enviar comunicações sobre atualizações tributárias, desde que você tenha consentido (por exemplo, na nossa newsletter).</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">3. Compartilhamento de Dados</h2>
            <p>
              A Finance Contabilidade compromete-se a não vender, alugar ou repassar suas informações para terceiros com fins comerciais. O compartilhamento só ocorrerá:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Com prestadores de serviço terceirizados que nos auxiliam na operação do site e atendimento (ex: provedores de hospedagem), exigindo sempre o sigilo e segurança.</li>
              <li>Quando exigido por lei, ordem judicial ou determinação de autoridades competentes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">4. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Nosso site pode utilizar cookies para melhorar o seu desempenho e customizar a sua experiência de navegação. Você pode configurar seu navegador para recusar cookies, mas isso pode limitar algumas funcionalidades do site.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">5. Proteção e Segurança</h2>
            <p>
              Adotamos as melhores práticas gerenciais e tecnológicas de mercado para garantir a segurança dos seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">6. Seus Direitos (LGPD)</h2>
            <p>
              Conforme a LGPD, você tem direito a solicitar:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A confirmação da existência de tratamento dos seus dados;</li>
              <li>O acesso e correção de dados incompletos ou desatualizados;</li>
              <li>A anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>A revogação do consentimento concedido anteriormente.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">7. Contato</h2>
            <p>
              Caso tenha dúvidas sobre como seus dados são tratados, entre em contato através do formulário na nossa página de contato, ou visite nosso escritório na Rua Visconde de Quissama, 98, Macaé/RJ.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
