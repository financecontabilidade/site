import { useState, useEffect } from "react";
import { Save, Check, AlertCircle } from "lucide-react";
import { getPageContent, updateSection } from "../../lib/cms";
import type { CmsSection } from "../../lib/cms";
import ImageUploader from "../../components/admin/ImageUploader";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Field({ label, value, onChange, type = "text", placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50"
      />
    </div>
  );
}

function SaveButton({ onSave, saving, saved }: { onSave: () => void; saving: boolean; saved: boolean }) {
  return (
    <button
      onClick={onSave}
      disabled={saving}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold transition-all ${
        saved ? 'bg-green-500 text-white' : 'bg-brand-gold text-brand-navy hover:bg-brand-gold/90'
      } disabled:opacity-50 shadow-sm`}
    >
      {saving ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : saved ? (
        <Check className="h-4 w-4" />
      ) : (
        <Save className="h-4 w-4" />
      )}
      {saving ? 'Salvando...' : saved ? 'Salvo!' : 'Salvar Alterações'}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function EditHeader() {
  const [content, setContent] = useState<CmsSection>({
    logo_url: "/logo.png",
    whatsapp_phone: "(22) 99245-8575",
    whatsapp_link: "https://wa.me/5522992458575",
    cta_text: "Fale Conosco"
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPageContent('globals').then(data => {
      if (data.header) {
        setContent(data.header);
      }
      setLoading(false);
    });
  }, []);

  const updateField = (field: string, value: string) => {
    setContent(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    const ok = await updateSection('globals', 'header', content);
    setSaving(false);
    if (ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } else {
      setError("Erro ao salvar o cabeçalho. Verifique sua conexão.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 max-w-2xl">
      <div className="mb-8">
        <p className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-1">Configurações Gerais</p>
        <h1 className="text-2xl font-bold text-gray-900">Editar Cabeçalho</h1>
        <p className="text-sm text-gray-500 mt-1">Gerencie o logotipo e os contatos do topo do site.</p>
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
        <ImageUploader 
          label="Logotipo Principal" 
          value={String(content.logo_url || '')} 
          onChange={v => updateField('logo_url', v)} 
          folder="globals/header"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field 
            label="Telefone WhatsApp (Exibição)" 
            value={String(content.whatsapp_phone || '')} 
            onChange={v => updateField('whatsapp_phone', v)} 
            placeholder="(22) 99245-8575"
          />
          <Field 
            label="Texto do Botão (CTA)" 
            value={String(content.cta_text || '')} 
            onChange={v => updateField('cta_text', v)} 
            placeholder="Fale Conosco"
          />
        </div>

        <Field 
          label="Link direto do WhatsApp" 
          value={String(content.whatsapp_link || '')} 
          onChange={v => updateField('whatsapp_link', v)} 
          placeholder="https://wa.me/..."
        />

        <div className="flex justify-end pt-4 border-t border-gray-100">
          <SaveButton onSave={handleSave} saving={saving} saved={saved} />
        </div>
      </div>
    </div>
  );
}
