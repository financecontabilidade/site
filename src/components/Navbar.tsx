import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "../lib/utils";
import { getPageContent } from "../lib/cms";

const servicesDropdown = [
  { name: "Escrituração Contábil e Fiscal", path: "/servicos/escrituracao-contabil" },
  { name: "Planejamento Tributário", path: "/servicos/planejamento-tributario" },
  { name: "Folha de Pagamento e eSocial", path: "/servicos/folha-de-pagamento" },
  { name: "Abertura e Regularização de Empresas", path: "/servicos/abertura-de-empresas" },
  { name: "Compliance e Auditoria Interna", path: "/servicos/compliance-auditoria" },
  { name: "Contabilidade Consultiva e Estratégica", path: "/servicos/contabilidade-consultiva" },
  { name: "Mercado Imobiliário", path: "/servicos/mercado-imobiliario" },
  { name: "Saúde & Terceiro Setor", path: "/servicos/saude-terceiro-setor" },
];

const navLinks = [
  { name: "Início", path: "/" },
  { name: "A Empresa", path: "/quem-somos" },
  { name: "Serviços", path: "/servicos", hasDropdown: true },
  { name: "Segmentos", path: "/segmentos" },
  { name: "Contato", path: "/contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [headerSettings, setHeaderSettings] = useState({
    logo_url: "/logo.png",
    whatsapp_phone: "(22) 99245-8575",
    whatsapp_link: "https://wa.me/5522992458575",
    cta_text: "Fale Conosco"
  });

  useEffect(() => {
    getPageContent('globals').then(data => {
      if (data.header) setHeaderSettings(data.header as any);
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-light border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img src={headerSettings.logo_url} alt="Finance" className="h-[36px] md:h-[44px] transition-transform group-hover:scale-105" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/servicos'));
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.path} 
                    className="relative" 
                    ref={dropdownRef}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                        isActive
                          ? "text-brand-gold bg-brand-gold/10"
                          : "text-brand-navy hover:text-brand-gold"
                      )}
                    >
                      {link.name}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", isServicesOpen && "rotate-180")} />
                    </Link>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-80 z-50">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 py-4 overflow-hidden">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-6 py-3 text-sm text-brand-navy hover:bg-gray-50 hover:text-brand-gold transition-colors font-medium"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <div className="mt-2 pt-2 border-t border-gray-100">
                            <Link
                              to="/servicos"
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center justify-between px-6 py-4 bg-brand-navy text-white hover:bg-brand-navy/90 transition-colors group"
                            >
                              <span className="font-bold text-sm">Todos os Serviços</span>
                              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                                <ArrowUpRight className="w-3 h-3 text-white group-hover:text-brand-navy" />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "text-brand-gold bg-brand-gold/10"
                      : "text-brand-navy hover:text-brand-gold"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href={headerSettings.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-navy/90 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4" />
              {headerSettings.cta_text}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-navy focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.path} className="space-y-1">
                    <div className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-brand-navy hover:bg-gray-50">
                      <Link 
                        to={link.path} 
                        onClick={() => setIsOpen(false)}
                        className="flex-1 py-1"
                      >
                        {link.name}
                      </Link>
                      <button 
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="p-2 -mr-2"
                      >
                        <ChevronDown className={cn("w-5 h-5 transition-transform", isServicesOpen && "rotate-180")} />
                      </button>
                    </div>
                    {isServicesOpen && (
                      <div className="pl-4 space-y-1 bg-gray-50 rounded-lg py-2">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-gold hover:bg-white"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/servicos"
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 mt-2 rounded-md text-sm font-bold text-brand-navy bg-brand-gold/10 hover:bg-brand-gold/20"
                        >
                          Ver todos os serviços
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "text-brand-gold bg-brand-gold/10"
                      : "text-brand-navy hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a
                href={headerSettings.whatsapp_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-brand-navy text-white px-6 py-3 rounded-full text-base font-medium hover:bg-brand-navy/90"
              >
                <Phone className="w-5 h-5" />
                {headerSettings.cta_text}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
