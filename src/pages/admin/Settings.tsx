import { useState, useEffect } from "react";
import { Save, Check, Palette, BarChart, Settings as SettingsIcon } from "lucide-react";
import { getPageContent, updateSection } from "../../lib/cms";

export default function Settings() {
  const [styles, setStyles] = useState({
    color_navy: "#162032",
    color_gold: "#D4A320",
    color_light: "#F5F4F0",
    font_sans: "Outfit"
  });
  const [analytics, setAnalytics] = useState({
    measurement_id: "G-XXXXXXXXXX",
    is_active: false
  });
  const [loading, setLoading] = useState(true);
  const [savingStyles, setSavingStyles] = useState(false);
  const [savingGA, setSavingGA] = useState(false);
  const [savedStyles, setSavedStyles] = useState(false);
  const [savedGA, setSavedGA] = useState(false);

  useEffect(() => {
    getPageContent('globals').then(data => {
      if (data.styles) setStyles(data.styles as any);
      if (data.google_analytics) setAnalytics(data.google_analytics as any);
      setLoading(false);
    });
  }, []);

  const handleSaveStyles = async () => {
    setSavingStyles(true);
    const ok = await updateSection('globals', 'styles', styles as any);
    if (ok) {
      setSavedStyles(true);
      setTimeout(() => setSavedStyles(false), 2000);
      // Reaplicar estilos na mesma hora para o Admin ver a mudança
      const root = document.documentElement;
      root.style.setProperty('--dynamic-navy', styles.color_navy);
      root.style.setProperty('--dynamic-gold', styles.color_gold);
      root.style.setProperty('--dynamic-light', styles.color_light);
    }
    setSavingStyles(false);
  };

  const handleSaveGA = async () => {
    setSavingGA(true);
    const ok = await updateSection('globals', 'google_analytics', analytics as any);
    if (ok) {
      setSavedGA(true);
      setTimeout(() => setSavedGA(false), 2000);
    }
    setSavingGA(false);
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="max-w-4xl space-y-12">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configurações Gerais</h1>
        <p className="text-sm text-gray-500 mt-1">Gerencie a identidade visual e integrações do site.</p>
      </div>

      {/* Visual Identity Section */}
      <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <Palette className="h-5 w-5 text-brand-gold" />
          <h2 className="text-lg font-bold text-gray-900">Identidade Visual</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ColorField 
              label="Cor Primária (Navy)" 
              value={styles.color_navy} 
              onChange={v => setStyles({...styles, color_navy: v})} 
            />
            <ColorField 
              label="Cor de Destaque (Gold)" 
              value={styles.color_gold} 
              onChange={v => setStyles({...styles, color_gold: v})} 
            />
            <ColorField 
              label="Cor de Fundo (Light)" 
              value={styles.color_light} 
              onChange={v => setStyles({...styles, color_light: v})} 
            />
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Preview em tempo real</p>
            <div className="w-full h-12 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm" style={{ backgroundColor: styles.color_navy, color: 'white' }}>
              Botão Primário
            </div>
            <div className="w-full h-12 rounded-lg flex items-center justify-center text-sm font-bold shadow-sm border" style={{ borderColor: styles.color_gold, color: styles.color_gold, backgroundColor: 'white' }}>
              Botão Secundário
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            onClick={handleSaveStyles}
            disabled={savingStyles}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${savedStyles ? 'bg-green-500 text-white' : 'bg-brand-gold text-brand-navy hover:bg-brand-gold/90'}`}
          >
            {savingStyles ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : savedStyles ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
            {savingStyles ? 'Salvando...' : savedStyles ? 'Salvo!' : 'Salvar Visual'}
          </button>
        </div>
      </section>

      {/* Google Analytics Section */}
      <section className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
          <BarChart className="h-5 w-5 text-brand-navy" />
          <h2 className="text-lg font-bold text-gray-900">Google Analytics</h2>
        </div>

        <div className="max-w-md space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-gray-700">Estado do Rastreamento</label>
              <button 
                onClick={() => setAnalytics({...analytics, is_active: !analytics.is_active})}
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 ${analytics.is_active ? 'bg-green-500' : 'bg-gray-300'}`}
              >
                <div className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${analytics.is_active ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">ID de Medição (G-XXXXXXX)</label>
              <input 
                type="text" 
                value={analytics.measurement_id}
                onChange={e => setAnalytics({...analytics, measurement_id: e.target.value})}
                placeholder="Ex: G-S2L990924S"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50"
              />
            </div>
          </div>
          
          <p className="text-xs text-gray-500 leading-relaxed italic">
            Configurar o Google Analytics 4 permite que você acompanhe o número de visitantes, tempo médio no site e eficácia das suas campanhas.
          </p>
        </div>

        <div className="flex justify-end pt-4">
          <button 
            onClick={handleSaveGA}
            disabled={savingGA}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm ${savedGA ? 'bg-green-500 text-white' : 'bg-brand-navy text-white hover:bg-brand-navy/90'}`}
          >
            {savingGA ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : savedGA ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
            {savingGA ? 'Salvando...' : savedGA ? 'Salvo!' : 'Salvar GA'}
          </button>
        </div>
      </section>
    </div>
  );
}

function ColorField({ label, value, onChange }: { label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</label>
      <div className="flex gap-2">
        <input 
          type="color" 
          value={value} 
          onChange={e => onChange(e.target.value)}
          className="w-10 h-10 rounded-lg cursor-pointer border border-gray-200 overflow-hidden"
        />
        <input 
          type="text" 
          value={value}
          onChange={e => onChange(e.target.value)}
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 text-sm font-mono outline-none focus:ring-2 focus:ring-brand-gold/50uppercase"
        />
      </div>
    </div>
  );
}
