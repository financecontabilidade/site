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

// Admin Pages
import Login from "./pages/admin/Login";
import DashboardLayout from "./components/admin/DashboardLayout";
import EditHome from "./pages/admin/EditHome";
import EditQuemSomos from "./pages/admin/EditQuemSomos";
import EditServicos from "./pages/admin/EditServicos";
import EditSegmentos from "./pages/admin/EditSegmentos";
import EditContato from "./pages/admin/EditContato";
import EditServicosIndividuais from "./pages/admin/EditServicosIndividuais";
import EditTestimonials from "./pages/admin/EditTestimonials";
import EditSegments from "./pages/admin/EditSegments";
import EditHeader from "./pages/admin/EditHeader";
import EditFooter from "./pages/admin/EditFooter";
import Overview from "./pages/admin/Overview";
import Settings from "./pages/admin/Settings";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import GlobalStyleManager from "./components/GlobalStyleManager";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyleManager />
      <ScrollToTop />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="home" element={<EditHome />} />
            <Route path="quem-somos" element={<EditQuemSomos />} />
            <Route path="servicos" element={<EditServicos />} />
            <Route path="segmentos" element={<EditSegmentos />} />
            <Route path="contato" element={<EditContato />} />
            <Route path="servicos-individuais" element={<EditServicosIndividuais />} />
            <Route path="depoimentos" element={<EditTestimonials />} />
            <Route path="segmentos-menu" element={<EditSegments />} />
            <Route path="header" element={<EditHeader />} />
            <Route path="footer" element={<EditFooter />} />
            <Route path="textos" element={<div className="p-8">Em desenvolvimento...</div>} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* Public Routes */}
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
