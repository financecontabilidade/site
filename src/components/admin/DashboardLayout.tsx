import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, LogOut, Home, Users, Briefcase, 
  FileText, Settings, Menu, X, MessageSquare, Map, Layers, ExternalLink, Zap 
} from "lucide-react";
import { useAuth, signOut } from "../../lib/auth";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/admin/login");
  };

  const navGroups = [
    {
      label: "Geral",
      items: [
        { name: "Visão Geral", icon: LayoutDashboard, href: "/admin" },
        { name: "Cabeçalho", icon: Menu, href: "/admin/header" },
        { name: "Rodapé", icon: Layers, icon_custom: Settings, href: "/admin/footer" },
      ]
    },
    {
      label: "CMS — Páginas",
      items: [
        { name: "Home", icon: Home, href: "/admin/home" },
        { name: "Quem Somos", icon: Users, href: "/admin/quem-somos" },
        { name: "Serviços", icon: Briefcase, href: "/admin/servicos" },
        { name: "Segmentos", icon: Layers, href: "/admin/segmentos" },
        { name: "Contato", icon: Map, href: "/admin/contato" },
      ]
    },
    {
      label: "CMS — Serviços",
      items: [
        { name: "Páginas de Serviço", icon: FileText, href: "/admin/servicos-individuais" },
      ]
    },
    {
      label: "Conteúdo",
      items: [
        { name: "Depoimentos", icon: MessageSquare, href: "/admin/depoimentos" },
        { name: "Categorias/Segmentos", icon: Layers, href: "/admin/segmentos-menu" },
        { name: "Textos Úteis", icon: FileText, href: "/admin/textos" },
      ]
    },
    {
      label: "Sistema",
      items: [
        { name: "Plugins", icon: Zap, href: "/admin/plugins" },
        { name: "Configurações", icon: Settings, href: "/admin/settings" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Overlay for mobile */}
      {!isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside className={`bg-brand-navy text-white w-64 flex-shrink-0 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-50 h-screen flex flex-col`}>
        <div className="h-16 flex items-center px-6 border-b border-white/10 relative shrink-0">
          <span className="text-xl font-bold tracking-tight">Finance <span className="text-brand-gold font-light">Admin</span></span>
          <button onClick={() => setIsSidebarOpen(false)} className="absolute right-4 lg:hidden">
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* View Public Site Link */}
        <div className="px-4 pt-4 shrink-0">
          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all border border-white/5"
          >
            <ExternalLink className="h-4 w-4 text-brand-gold" />
            Ver Site Público
          </a>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-5 pb-24">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 px-2">{group.label}</p>
              <nav className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-brand-gold text-brand-navy"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <item.icon className={`h-4 w-4 ${isActive ? 'text-brand-navy' : 'text-gray-400'}`} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}

          {/* Logout Section at the bottom of the list */}
          <div className="pt-4 border-t border-white/10 mt-auto">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-300 hover:bg-white/10 hover:text-red-200 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Sair do Painel
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white">
          <button 
            onClick={() => setIsSidebarOpen(true)} 
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-sm uppercase">
                {user?.email?.substring(0, 2) || "AD"}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-900 leading-none">Admin</span>
                <span className="text-[10px] text-gray-400 truncate max-w-[120px] font-medium">{user?.email}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
