import { motion } from "framer-motion";
import { usePageContent } from "../hooks/useCmsContent";
import type { CmsSection } from "../lib/cms";

const PAGE_DEFAULTS: Record<string, CmsSection> = {
  hero: {
    label: "Atualizado em Janeiro de 2025",
    titulo: "Termos de Uso"
  },
  conteudo: {
    empresa: "Finance Gestão e Negócios LTDA (Finance Contabilidade)",
    cnpj: "10.379.943/0001-20",
    endereco: "R. Visc. de Quissamã, 98 - Centro, Macaé - RJ, 27910-020",
    intro: "Bem-vindo ao site da Finance Gestão e Negócios LTDA (Finance Contabilidade). Ao acessar e utilizar nosso site, você concorda legalmente com estes Termos de Uso. Leia-os com atenção."
  }
};

export default function TermosUso() {
  const { data: cms } = usePageContent('termos-uso', PAGE_DEFAULTS);
  const hero = cms.hero;
  const conteudo = cms.conteudo;

  return (
    <div className="bg-brand-light min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 md:p-16 rounded-[2rem] shadow-sm"
        >
          <p className="text-[10px] font-bold text-brand-gold tracking-widest uppercase mb-4">{String(hero.label || '')}</p>
          <h1 className="text-4xl md:text-5xl font-light text-brand-navy mb-12">{String(hero.titulo || '')}</h1>
          
          <div className="text-gray-600 space-y-6 leading-relaxed">
            <p>
              {String(conteudo.intro || '')}
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">1. Objetivo do Site</h2>
            <p>
              Este portal tem como finalidade apresentar o portfólio de serviços contábeis, tributários e de gestão estratégica prestados pela Finance Contabilidade. Todo o conteúdo publicado possui caráter meramente informativo e educacional, não substituindo uma consultoria formal especializada com nossos contadores.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">2. Direitos de Propriedade Intelectual</h2>
            <p>
              Todos os direitos de propriedade intelectual relacionados ao website, incluindo textos institucionais, logotipos, organização das sessões, design, gráficos e imagens, são de propriedade exclusiva da {String(conteudo.empresa || '')} ou de parceiros licenciados.
            </p>
            <p>
              A reprodução, distribuição, modificação ou uso comercial não autorizado de qualquer material deste site constitui violação de direitos autorais e sujeitará o infrator às sanções legais.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">3. Uso Permitido</h2>
            <p>
              É concedida ao usuário a permissão para acessar o site visualizando e entrando em contato conosco. É expressamente proibido:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar o conteúdo do site para fins ilegais ou não autorizados.</li>
              <li>Tentar interferir ou burlar a segurança da rede e do site.</li>
              <li>Extrair ou copiar (web scraping) dados e conteúdos dos nossos posts e páginas sem expressa autorização.</li>
            </ul>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">4. Limitação de Responsabilidade</h2>
            <p>
              A Finance Contabilidade emprega todos os esforços razoáveis para disponibilizar informações exatas em nossos conteúdos e formulários. Contudo, devido às transições frequentes da legislação tributária e trabalhista brasileira, não assumimos responsabilidade por decisões empresariais tomadas baseadas exclusivamente na leitura dos artigos publicados neste portal. 
            </p>
            <p>
              Recomendamos fortemente que o usuário agende uma consultoria antes de implementar estratégias fiscais ou tributárias, pois as interpretações legais podem divergir conforme as minúcias de cada negócio.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">5. Links para Terceiros</h2>
            <p>
              Nosso portal, incluindo os artigos informativos, pode incorporar links externos para sites governamentais, da Receita Federal ou outros órgãos associados. Não possuímos controle sobre essas plataformas, as quais dispõem de Políticas de Privacidade e Termos próprios, isentando-nos do comportamento ou estabilidade dos mesmos.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">6. Alterações nos Termos</h2>
            <p>
              Reservamo-nos o direito de alterar, complementar ou modificar estes Termos de Uso a qualquer momento. A nova versão será sempre atualizada nesta mesma página e vigorará a partir de sua publicação.
            </p>

            <h2 className="text-2xl font-bold text-brand-navy pt-6">7. Foro</h2>
            <p>
              Para dirimir qualquer litígio oriundo destes Termos de Uso e o uso deste ambiente eletrônico, as partes elegem o foro da Comarca de Macaé, Estado do Rio de Janeiro.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
