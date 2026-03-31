import { useEffect, useState } from "react";
import { 
  Users, MessageSquare, Layout, MousePointer, 
  ExternalLink, BarChart3, ShieldCheck 
} from "lucide-react";
import { getPageContent } from "../../lib/cms";

export default function Overview() {
  const [stats, setStats] = useState({
    ga_active: false,
    ga_id: "Não configurado",
    pages_count: 5,
    testimonials_count: 0
  });

  useEffect(() => {
    getPageContent('globals').then(data => {
      if (data.google_analytics) {
        setStats(prev => ({
          ...prev,
          ga_active: !!(data.google_analytics as any).is_active,
          ga_id: (data.google_analytics as any).measurement_id || "Não configurado"
        }));
      }
    });
  }, []);

  const cards = [
    { title: "Usuários Ativos", value: "--", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Sessões", value: "--", icon: MousePointer, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Taxa de Rejeição", value: "--", icon: BarChart3, color: "text-amber-600", bg: "bg-amber-50" },
    { title: "Conversões", value: "--", icon: ShieldCheck, color: "text-emerald-600", bg: "bg-emerald-50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Visão Geral</h1>
        <p className="text-sm text-gray-500 mt-1">Bem-vindo ao seu painel de controle da Finance Contabilidade.</p>
      </div>

      {/* Analytics Info Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm overflow-hidden relative group">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
          <BarChart3 size={120} />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${stats.ga_active ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Google Analytics 4</span>
            </div>
            <h2 className="text-xl font-bold text-brand-navy">
              {stats.ga_active ? "Monitoramento Ativo" : "Monitoramento Desativado"}
            </h2>
            <p className="text-sm text-gray-500 max-w-md">
              O rastreamento de visitantes está {stats.ga_active ? "funcionando" : "desabilitado"}. 
              ID: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-brand-gold">{stats.ga_id}</code>
            </p>
          </div>
          
          <a 
            href="https://analytics.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-navy text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-navy/90 transition-all shadow-sm shrink-0"
          >
            Acessar Dashboard Completo
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center mb-4`}>
              <card.icon className={`h-6 w-6 ${card.color}`} />
            </div>
            <p className="text-sm font-medium text-gray-500">{card.title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Ações Rápidas</h3>
          <div className="grid grid-cols-2 gap-4">
            <QuickAction icon={Layout} title="Editar Home" href="/admin/home" />
            <QuickAction icon={MessageSquare} title="Depoimentos" href="/admin/depoimentos" />
            <QuickAction icon={Users} title="Quem Somos" href="/admin/quem-somos" />
            <QuickAction icon={BarChart3} title="Configurações" href="/admin/settings" />
          </div>
        </div>
      </div>
    </div>
  );
}

function QuickAction({ icon: Icon, title, href }: { icon: any, title: string, href: string }) {
  return (
    <a 
      href={href}
      className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl hover:bg-brand-gold/10 transition-colors group border border-transparent hover:border-brand-gold/20"
    >
      <Icon className="h-6 w-6 text-gray-400 group-hover:text-brand-gold mb-2 transition-colors" />
      <span className="text-sm font-bold text-gray-700 group-hover:text-brand-navy">{title}</span>
    </a>
  );
}
