import { useState, useEffect, useCallback } from "react";
import { Save, Check, AlertCircle, ChevronDown, ChevronUp, Plus, Trash2, GripVertical } from "lucide-react";
import { getPageContent, updateSection } from "../../lib/cms";
import type { CmsSection } from "../../lib/cms";

// ─── Shared UI Primitives ─────────────────────────────────────────────────────
export function Field({ label, value, onChange, type = "text", placeholder = "" }: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</label>
      {type === "textarea" ? (
        <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50 resize-none" />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50" />
      )}
    </div>
  );
}

export function SectionCard({ title, children, defaultOpen = false, badge }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean; badge?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-800">{title}</span>
          {badge && <span className="text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full uppercase tracking-wider">{badge}</span>}
        </div>
        {open ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
      </button>
      {open && <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">{children}</div>}
    </div>
  );
}

export function SaveButton({ onSave, saving, saved }: { onSave: () => void; saving: boolean; saved: boolean }) {
  return (
    <button onClick={onSave} disabled={saving}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${saved ? 'bg-green-500 text-white' : 'bg-brand-gold text-brand-navy hover:bg-brand-gold/90'} disabled:opacity-50`}>
      {saving ? <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
      {saving ? 'Salvando...' : saved ? 'Salvo!' : 'Salvar'}
    </button>
  );
}

// ─── Generic Page Editor Hook ─────────────────────────────────────────────────
export function usePageEditor(pageSlug: string, defaults: Record<string, CmsSection>) {
  const [cms, setCms] = useState<Record<string, CmsSection>>(defaults);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPageContent(pageSlug).then(content => {
      setCms(prev => {
        const merged = { ...prev };
        for (const key of Object.keys(content)) {
          merged[key] = { ...prev[key], ...content[key] };
        }
        return merged;
      });
      setLoading(false);
    });
  }, [pageSlug]);

  const update = useCallback((section: string, field: string, value: unknown) => {
    setCms(prev => ({ ...prev, [section]: { ...prev[section], [field]: value } }));
  }, []);

  const updateArrayItem = useCallback((section: string, field: string, index: number, itemField: string, value: unknown) => {
    setCms(prev => {
      const arr = [...((prev[section]?.[field] as Record<string, unknown>[]) || [])];
      arr[index] = { ...arr[index], [itemField]: value };
      return { ...prev, [section]: { ...prev[section], [field]: arr } };
    });
  }, []);

  const addArrayItem = useCallback((section: string, field: string, template: Record<string, unknown>) => {
    setCms(prev => {
      const arr = [...((prev[section]?.[field] as Record<string, unknown>[]) || [])];
      arr.push(template);
      return { ...prev, [section]: { ...prev[section], [field]: arr } };
    });
  }, []);

  const removeArrayItem = useCallback((section: string, field: string, index: number) => {
    setCms(prev => {
      const arr = [...((prev[section]?.[field] as Record<string, unknown>[]) || [])];
      arr.splice(index, 1);
      return { ...prev, [section]: { ...prev[section], [field]: arr } };
    });
  }, []);

  const saveSection = useCallback(async (sectionKey: string) => {
    setSaving(p => ({ ...p, [sectionKey]: true }));
    setError(null);
    const ok = await updateSection(pageSlug, sectionKey, cms[sectionKey] || {});
    setSaving(p => ({ ...p, [sectionKey]: false }));
    if (ok) {
      setSaved(p => ({ ...p, [sectionKey]: true }));
      setTimeout(() => setSaved(p => ({ ...p, [sectionKey]: false })), 2500);
    } else {
      setError(`Erro ao salvar "${sectionKey}".`);
    }
  }, [pageSlug, cms]);

  const s = (key: string) => cms[key] || {};
  const str = (key: string, field: string) => String((cms[key]?.[field]) ?? '');

  return { cms, loading, saving, saved, error, update, updateArrayItem, addArrayItem, removeArrayItem, saveSection, s, str };
}

// ─── Generic Array Editor ─────────────────────────────────────────────────────
interface ArrayField { key: string; label: string; type?: string; }
export function ArrayEditor<T extends Record<string, unknown>>({
  items, onChange, onAdd, onRemove, fields, addLabel, addTemplate, sectionColor
}: {
  items: T[]; onChange: (index: number, key: string, value: unknown) => void;
  onAdd: () => void; onRemove: (i: number) => void;
  fields: ArrayField[]; addLabel: string; addTemplate?: T;
  sectionColor?: string;
}) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className={`p-4 rounded-xl border ${sectionColor || 'bg-gray-50 border-gray-200'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-gray-300" />
              <span className="text-xs font-bold text-gray-500 uppercase">Item {idx + 1}</span>
            </div>
            <button onClick={() => onRemove(idx)} className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1">
              <Trash2 className="h-3 w-3" /> Remover
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {fields.map(f => (
              <Field key={f.key} label={f.label} type={f.type || 'text'} value={String(item[f.key] ?? '')} onChange={v => onChange(idx, f.key, v)} />
            ))}
          </div>
        </div>
      ))}
      <button onClick={onAdd} className="flex items-center gap-2 text-sm text-brand-gold font-bold hover:text-brand-navy transition-colors py-2">
        <Plus className="h-4 w-4" /> {addLabel}
      </button>
    </div>
  );
}

// ─── Page Header ──────────────────────────────────────────────────────────────
export function EditorHeader({ page, description, error }: { page: string; description: string; error: string | null }) {
  return (
    <div className="mb-8">
      <p className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-1">CMS</p>
      <h1 className="text-2xl font-bold text-gray-900">Editar {page}</h1>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      {error && (
        <div className="mt-4 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />{error}
        </div>
      )}
    </div>
  );
}
