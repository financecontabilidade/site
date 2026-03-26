/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Servicos from "./pages/Servicos";
import Segmentos from "./pages/Segmentos";
import Contato from "./pages/Contato";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

// Service Pages
import PlanejamentoTributario from "./pages/servicos/PlanejamentoTributario";
import EscrituracaoContabil from "./pages/servicos/EscrituracaoContabil";
import FolhaDePagamento from "./pages/servicos/FolhaDePagamento";
import AberturaEmpresas from "./pages/servicos/AberturaEmpresas";
import ComplianceAuditoria from "./pages/servicos/ComplianceAuditoria";
import ContabilidadeConsultiva from "./pages/servicos/ContabilidadeConsultiva";
import MercadoImobiliario from "./pages/servicos/MercadoImobiliario";
import SaudeTerceiroSetor from "./pages/servicos/SaudeTerceiroSetor";
import Holdings from "./pages/servicos/Holdings";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="segmentos" element={<Segmentos />} />
          <Route path="contato" element={<Contato />} />
          
          {/* Rotas de Serviços Individuais */}
          <Route path="servicos/planejamento-tributario" element={<PlanejamentoTributario />} />
          <Route path="servicos/escrituracao-contabil" element={<EscrituracaoContabil />} />
          <Route path="servicos/folha-de-pagamento" element={<FolhaDePagamento />} />
          <Route path="servicos/abertura-de-empresas" element={<AberturaEmpresas />} />
          <Route path="servicos/compliance-auditoria" element={<ComplianceAuditoria />} />
          <Route path="servicos/contabilidade-consultiva" element={<ContabilidadeConsultiva />} />
          <Route path="servicos/mercado-imobiliario" element={<MercadoImobiliario />} />
          <Route path="servicos/saude-terceiro-setor" element={<SaudeTerceiroSetor />} />
          <Route path="servicos/holdings" element={<Holdings />} />
          
          {/* Páginas Legais */}
          <Route path="politica-de-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="termos-de-uso" element={<TermosUso />} />
        </Route>
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  );
}
