import { useState, useEffect } from "react";
import { Save, Zap, MessageCircle, AlertCircle, CheckCircle2 } from "lucide-react";
import { getSection, updateSection } from "../../lib/cms";

interface WhatsAppConfig {
  is_active: boolean;
  phone: string;
  position: 'left' | 'right';
  message: string;
}

export default function EditPlugins() {
  const [config, setConfig] = useState<WhatsAppConfig>({
    is_active: false,
    phone: "",
    position: 'right',
    message: ""
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    async function loadConfig() {
      const data = await getSection<WhatsAppConfig>('globals', 'whatsapp_plugin');
      if (data) setConfig(data);
      setLoading(false);
    }
    loadConfig();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setStatus('idle');
    const success = await updateSection('globals', 'whatsapp_plugin', config as any);
    
    if (success) {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-gold"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Zap className="h-6 w-6 text-brand-gold" />
            Central de Plugins
          </h1>
          <p className="text-gray-500 mt-1">Gerencie extensões e ferramentas dinâmicas para o seu site.</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-navy/90 transition-all disabled:opacity-50 shadow-lg shadow-brand-navy/10"
        >
          {saving ? (
            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Save className="h-5 w-5" />
          )}
          {saving ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="h-5 w-5" />
          Configurações salvas com sucesso! O plugin já está atualizado no site.
        </div>
      )}

      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4">
          <AlertCircle className="h-5 w-5" />
          Erro ao salvar as configurações. Tente novamente mais tarde.
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">Botão de WhatsApp</h3>
                  <p className="text-xs text-gray-400 mt-0.5 font-medium uppercase tracking-wider">Plugin de Contato</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer"
                  checked={config.is_active}
                  onChange={(e) => setConfig({ ...config, is_active: e.target.checked })}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
              </label>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Número do WhatsApp</label>
                  <input
                    type="text"
                    placeholder="Ex: 5522998765432"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none transition-all font-medium"
                    value={config.phone}
                    onChange={(e) => setConfig({ ...config, phone: e.target.value })}
                  />
                  <p className="text-[10px] text-gray-400 mt-2 italic">* Inclua código do país (55) e DDD.</p>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Posição na Tela</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setConfig({ ...config, position: 'left' })}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all font-bold text-sm ${
                        config.position === 'left' 
                        ? 'border-brand-gold bg-brand-gold/5 text-brand-navy' 
                        : 'border-gray-100 text-gray-400 hover:border-gray-200'
                      }`}
                    >
                      Esquerda
                    </button>
                    <button
                      onClick={() => setConfig({ ...config, position: 'right' })}
                      className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all font-bold text-sm ${
                        config.position === 'right' 
                        ? 'border-brand-gold bg-brand-gold/5 text-brand-navy' 
                        : 'border-gray-100 text-gray-400 hover:border-gray-200'
                      }`}
                    >
                      Direita
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensagem Automática (opcional)</label>
                <textarea
                  placeholder="Ex: Olá! Vim pelo site e gostaria de mais informações."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none h-24 transition-all resize-none font-medium text-sm"
                  value={config.message}
                  onChange={(e) => setConfig({ ...config, message: e.target.value })}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Preview */}
        <div className="space-y-6">
          <div className="bg-brand-navy rounded-2xl p-6 text-white overflow-hidden relative min-h-[300px]">
            <div className="relative z-10">
              <h3 className="font-bold mb-1">Prévia do Site</h3>
              <p className="text-xs text-white/50 mb-8 uppercase tracking-widest font-bold">Visualização do Lado</p>
              
              <div className="border border-white/20 rounded-lg h-32 w-full mt-4 flex items-end p-2 justify-between bg-white/5 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-2 left-2 right-2 h-2 bg-white/10 rounded-full mx-auto w-2/3"></div>
                <div className="absolute top-6 left-2 h-2 w-1/4 bg-white/10 rounded-full"></div>
                <div className="absolute top-6 right-2 h-2 w-1/5 bg-white/10 rounded-full"></div>
                
                {config.is_active && (
                  <div className={`transition-all duration-500 absolute bottom-3 ${config.position === 'left' ? 'left-3' : 'right-3'}`}>
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                  </div>
                )}
              </div>
              <p className="text-center text-[10px] mt-2 text-white/40 italic">Interface ilustrativa da posição do botão</p>
            </div>
            {/* Abstract Background pattern */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
