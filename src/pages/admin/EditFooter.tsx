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
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50"
        />
      )}
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
      {saving ? 'Salvando...' : saved ? 'Salvo!' : 'Salvar Rodapé'}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function EditFooter() {
  const [content, setContent] = useState<CmsSection>({
    logo_url: "/logo-branca.png",
    company_name: "Finance Gestão e Negócios LTDA",
    cnpj: "10.379.943/0001-20",
    fundacao: "Fundada em Macaé · 29/09/2008",
    endereco_linha1: "R. Visc. de Quissamã, 98 · Centro",
    endereco_linha2: "CEP 27910-020 · Macaé, RJ",
    whatsapp_display: "(22) 99245-8575",
    horario_seg_qui: "Seg a Quinta: 08h às 17h30",
    horario_sex: "Sexta: 08h às 17h",
    copyright: "© 2026 Finance Gestão e Negócios LTDA",
    newsletter_title: "Receba conteúdos sobre tributação e gestão.",
    developed_by: "Grupo 1925"
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPageContent('globals').then(data => {
      if (data.footer) {
        setContent(data.footer);
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
    const ok = await updateSection('globals', 'footer', content);
    setSaving(false);
    if (ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } else {
      setError("Erro ao salvar o rodapé. Verifique sua conexão.");
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
    <div className="p-6 md:p-8 max-w-4xl space-y-8">
      <div>
        <p className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-1">Configurações Gerais</p>
        <h1 className="text-2xl font-bold text-gray-900">Editar Rodapé</h1>
        <p className="text-sm text-gray-500 mt-1">Gerencie as informações institucionais e de contato do rodapé.</p>
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Identidade e Newsletter */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-brand-navy border-b border-gray-100 pb-3">Identidade & Newsletter</h2>
          <ImageUploader 
            label="Logotipo do Rodapé (Versão Branca/Negativa)" 
            value={String(content.logo_url || '')} 
            onChange={v => updateField('logo_url', v)} 
            folder="globals/footer"
          />
          <Field 
            label="Título da Newsletter" 
            value={String(content.newsletter_title || '')} 
            onChange={v => updateField('newsletter_title', v)} 
            type="textarea"
          />
          <Field 
            label="Copyright (Texto do rodapé)" 
            value={String(content.copyright || '')} 
            onChange={v => updateField('copyright', v)} 
          />
        </div>

        {/* Informações da Empresa */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-brand-navy border-b border-gray-100 pb-3">Informações Institucionais</h2>
          <Field 
            label="Nome da Empresa" 
            value={String(content.company_name || '')} 
            onChange={v => updateField('company_name', v)} 
          />
          <div className="grid grid-cols-2 gap-4">
            <Field 
              label="CNPJ" 
              value={String(content.cnpj || '')} 
              onChange={v => updateField('cnpj', v)} 
            />
            <Field 
              label="Data de Fundação" 
              value={String(content.fundacao || '')} 
              onChange={v => updateField('fundacao', v)} 
            />
          </div>
          <Field 
            label="Endereço Linha 1" 
            value={String(content.endereco_linha1 || '')} 
            onChange={v => updateField('endereco_linha1', v)} 
          />
          <Field 
            label="Endereço Linha 2 (CEP/Cidade)" 
            value={String(content.endereco_linha2 || '')} 
            onChange={v => updateField('endereco_linha2', v)} 
          />
        </div>

        {/* Atendimento e Horários */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-6">
          <h2 className="text-sm font-bold text-brand-navy border-b border-gray-100 pb-3">Contatos & Horários</h2>
          <Field 
            label="WhatsApp Exibição" 
            value={String(content.whatsapp_display || '')} 
            onChange={v => updateField('whatsapp_display', v)} 
          />
          <Field 
            label="Horário (Seg a Qui)" 
            value={String(content.horario_seg_qui || '')} 
            onChange={v => updateField('horario_seg_qui', v)} 
          />
          <Field 
            label="Horário (Sexta)" 
            value={String(content.horario_sex || '')} 
            onChange={v => updateField('horario_sex', v)} 
          />
          <Field 
            label="Desenvolvido por" 
            value={String(content.developed_by || '')} 
            onChange={v => updateField('developed_by', v)} 
          />
        </div>

        <div className="flex items-center justify-between col-span-1 lg:col-span-2 pt-4 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-inner">
          <p className="text-xs text-gray-500">As alterações no rodapé serão refletidas em todas as páginas do site.</p>
          <SaveButton onSave={handleSave} saving={saving} saved={saved} />
        </div>
      </div>
    </div>
  );
}
