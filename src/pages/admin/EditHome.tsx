import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Check, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import { getPageContent, updateSection } from "../../lib/cms";
import { supabase } from "../../lib/supabase";
import type { CmsSection } from "../../lib/cms";
import ImageUploader from "../../components/admin/ImageUploader";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Testimonial {
  id?: string;
  texto: string;
  autor: string;
  cargo: string;
  tema: 'white' | 'gold' | 'navy';
  ordem: number;
}

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

function SectionCard({ title, children, defaultOpen = false }: {
  title: string; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-800">{title}</span>
        {open ? <ChevronUp className="h-4 w-4 text-gray-400" /> : <ChevronDown className="h-4 w-4 text-gray-400" />}
      </button>
      {open && <div className="px-6 pb-6 space-y-4 border-t border-gray-100 pt-4">{children}</div>}
    </div>
  );
}

function SaveButton({ onSave, saving, saved }: { onSave: () => void; saving: boolean; saved: boolean }) {
  return (
    <button
      onClick={onSave}
      disabled={saving}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${saved ? 'bg-green-500 text-white' : 'bg-brand-gold text-brand-navy hover:bg-brand-gold/90'} disabled:opacity-50`}
    >
      {saving ? <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" /> : saved ? <Check className="h-4 w-4" /> : <Save className="h-4 w-4" />}
      {saving ? 'Salvando...' : saved ? 'Salvo!' : 'Salvar'}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HomeEditor() {
  const [cms, setCms] = useState<Record<string, CmsSection>>({});
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      getPageContent('home'),
      supabase.from('cms_testimonials').select('*').order('ordem')
    ]).then(([content, { data: tData }]) => {
      setCms(content);
      if (tData) setTestimonials(tData);
      setLoading(false);
    });
  }, []);

  const update = (section: string, field: string, value: unknown) => {
    setCms(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const updateNestedArray = <T,>(section: string, field: string, index: number, itemField: string, value: unknown) => {
    setCms(prev => {
      const arr = [...((prev[section]?.[field] as T[]) || [])] as Record<string, unknown>[];
      arr[index] = { ...arr[index], [itemField]: value };
      return { ...prev, [section]: { ...prev[section], [field]: arr } };
    });
  };

  const saveSection = async (sectionKey: string) => {
    setSaving(p => ({ ...p, [sectionKey]: true }));
    setError(null);
    const ok = await updateSection('home', sectionKey, cms[sectionKey] || {});
    setSaving(p => ({ ...p, [sectionKey]: false }));
    if (ok) {
      setSaved(p => ({ ...p, [sectionKey]: true }));
      setTimeout(() => setSaved(p => ({ ...p, [sectionKey]: false })), 2500);
    } else {
      setError(`Erro ao salvar "${sectionKey}". Verifique sua conexão.`);
    }
  };

  const saveTestimonials = async () => {
    setSaving(p => ({ ...p, testimonials: true }));
    for (const t of testimonials) {
      await supabase.from('cms_testimonials').upsert(t);
    }
    setSaving(p => ({ ...p, testimonials: false }));
    setSaved(p => ({ ...p, testimonials: true }));
    setTimeout(() => setSaved(p => ({ ...p, testimonials: false })), 2500);
  };

  const deleteTestimonial = async (id: string) => {
    await supabase.from('cms_testimonials').delete().eq('id', id);
    setTestimonials(prev => prev.filter(t => t.id !== id));
  };

  const addTestimonial = () => {
    setTestimonials(prev => [...prev, {
      texto: '', autor: '', cargo: '', tema: 'white', ordem: prev.length + 1
    }]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const s = (key: string) => cms[key] || {};

  return (
    <div className="p-6 md:p-8 max-w-4xl">
      <div className="mb-8">
        <p className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-1">CMS</p>
        <h1 className="text-2xl font-bold text-gray-900">Editar Home</h1>
        <p className="text-sm text-gray-500 mt-1">Edite cada seção da página inicial. Clique em Salvar para aplicar.</p>
      </div>

      {error && (
        <div className="mb-6 flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <div className="space-y-4">

        {/* ── HERO ── */}
        <SectionCard title="🖼️ Hero — Slide Principal" defaultOpen>
          <Field label="Título Completo" value={String(s('hero').titulo || '')} onChange={v => update('hero', 'titulo', v)} type="textarea" />
          <Field label="Palavra em Destaque (dourado)" value={String(s('hero').titulo_destaque || '')} onChange={v => update('hero', 'titulo_destaque', v)} placeholder="ex: protegida" />
          <Field label="Subtítulo" value={String(s('hero').subtitulo || '')} onChange={v => update('hero', 'subtitulo', v)} type="textarea" />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Texto do Botão" value={String(s('hero').botao_texto || '')} onChange={v => update('hero', 'botao_texto', v)} />
            <Field label="Link do Botão" value={String(s('hero').botao_link || '')} onChange={v => update('hero', 'botao_link', v)} placeholder="/contato" />
          </div>
          <ImageUploader 
            label="Imagem de Fundo" 
            value={String(s('hero').imagem_fundo || '')} 
            onChange={v => update('hero', 'imagem_fundo', v)} 
            folder="home/hero"
          />
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('hero')} saving={!!saving.hero} saved={!!saved.hero} />
          </div>
        </SectionCard>

        {/* ── HERO LINKS ── */}
        <SectionCard title="🔗 Hero — Barra de Links (3 serviços)">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-4 bg-gray-50 rounded-xl space-y-3">
              <p className="text-xs font-bold text-gray-500 uppercase">Link {i}</p>
              <Field label="Label (ex: 01. Estratégia)" value={String(s('hero_links')[`link${i}_label`] || '')} onChange={v => update('hero_links', `link${i}_label`, v)} />
              <Field label="Título" value={String(s('hero_links')[`link${i}_titulo`] || '')} onChange={v => update('hero_links', `link${i}_titulo`, v)} />
              <Field label="URL" value={String(s('hero_links')[`link${i}_url`] || '')} onChange={v => update('hero_links', `link${i}_url`, v)} placeholder="/servicos/..." />
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('hero_links')} saving={!!saving.hero_links} saved={!!saved.hero_links} />
          </div>
        </SectionCard>

        {/* ── CARDS ── */}
        <SectionCard title="🃏 Cards (3 Cards de Destaque)">
          {[1, 2, 3].map(i => (
            <div key={i} className={`p-4 rounded-xl space-y-3 ${i === 2 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'}`}>
              <p className="text-xs font-bold text-gray-500 uppercase">Card {i}{i === 2 ? ' (Dourado)' : ''}</p>
              <Field label="Tag" value={String(s('cards')[`card${i}_tag`] || '')} onChange={v => update('cards', `card${i}_tag`, v)} />
              <Field label="Título" value={String(s('cards')[`card${i}_titulo`] || '')} onChange={v => update('cards', `card${i}_titulo`, v)} type="textarea" />
              {i !== 2 && <Field label="Palavra em Destaque" value={String(s('cards')[`card${i}_titulo_destaque`] || '')} onChange={v => update('cards', `card${i}_titulo_destaque`, v)} />}
              {i === 2 && <Field label="Badge (ex: 100%)" value={String(s('cards').card2_badge || '')} onChange={v => update('cards', 'card2_badge', v)} />}
              <ImageUploader 
                label={`Imagem Card ${i}`} 
                value={String(s('cards')[`card${i}_imagem`] || '')} 
                onChange={v => update('cards', `card${i}_imagem`, v)} 
                folder="home/cards"
              />
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('cards')} saving={!!saving.cards} saved={!!saved.cards} />
          </div>
        </SectionCard>

        {/* ── ESPECIALIDADES ── */}
        <SectionCard title="🛠️ Especialidades (4 Cards de Serviço)">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Label da Seção" value={String(s('especialidades').label || '')} onChange={v => update('especialidades', 'label', v)} />
            <Field label="Palavra em Destaque" value={String(s('especialidades').titulo_destaque || '')} onChange={v => update('especialidades', 'titulo_destaque', v)} />
          </div>
          <Field label="Título da Seção" value={String(s('especialidades').titulo || '')} onChange={v => update('especialidades', 'titulo', v)} type="textarea" />

          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Cards de serviço:</p>
          {((s('especialidades').cards as Array<{ icone: string; titulo: string; descricao: string; link: string }>) || []).map((card, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl space-y-3">
              <p className="text-xs font-bold text-gray-500 uppercase">Card {idx + 1}</p>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Ícone (Lucide)" value={card.icone} onChange={v => updateNestedArray('especialidades', 'cards', idx, 'icone', v)} placeholder="FileText, PieChart..." />
                <Field label="Link" value={card.link} onChange={v => updateNestedArray('especialidades', 'cards', idx, 'link', v)} placeholder="/servicos/..." />
              </div>
              <Field label="Título" value={card.titulo} onChange={v => updateNestedArray('especialidades', 'cards', idx, 'titulo', v)} />
              <Field label="Descrição" value={card.descricao} onChange={v => updateNestedArray('especialidades', 'cards', idx, 'descricao', v)} type="textarea" />
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('especialidades')} saving={!!saving.especialidades} saved={!!saved.especialidades} />
          </div>
        </SectionCard>

        {/* ── FILOSOFIA / PILARES ── */}
        <SectionCard title="💡 Nossa Filosofia (4 Pilares)">
          <Field label="Label" value={String(s('filosofia').label || '')} onChange={v => update('filosofia', 'label', v)} />
          <Field label="Título (parte em negrito)" value={String(s('filosofia').titulo_bold || '')} onChange={v => update('filosofia', 'titulo_bold', v)} />
          <Field label="Título (continuação)" value={String(s('filosofia').titulo_rest || '')} onChange={v => update('filosofia', 'titulo_rest', v)} />

          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Pilares:</p>
          {((s('filosofia').pilares as Array<{ icone: string; titulo: string; descricao: string }>) || []).map((pilar, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl space-y-3">
              <p className="text-xs font-bold text-gray-500 uppercase">Pilar {idx + 1}</p>
              <Field label="Ícone (Lucide)" value={pilar.icone} onChange={v => updateNestedArray('filosofia', 'pilares', idx, 'icone', v)} placeholder="Target, Eye, TrendingUp..." />
              <Field label="Título" value={pilar.titulo} onChange={v => updateNestedArray('filosofia', 'pilares', idx, 'titulo', v)} />
              <Field label="Descrição" value={pilar.descricao} onChange={v => updateNestedArray('filosofia', 'pilares', idx, 'descricao', v)} type="textarea" />
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('filosofia')} saving={!!saving.filosofia} saved={!!saved.filosofia} />
          </div>
        </SectionCard>

        {/* ── STATS ── */}
        <SectionCard title="📊 Números (Stats)">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="p-4 bg-gray-50 rounded-xl space-y-3">
                <p className="text-xs font-bold text-gray-500 uppercase">Stat {i}</p>
                <Field label="Número" value={String(s('stats')[`stat${i}_numero`] || '')} onChange={v => update('stats', `stat${i}_numero`, v)} placeholder="17+" />
                <Field label="Label" value={String(s('stats')[`stat${i}_label`] || '')} onChange={v => update('stats', `stat${i}_label`, v)} placeholder="ANOS DE MERCADO" />
              </div>
            ))}
          </div>
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('stats')} saving={!!saving.stats} saved={!!saved.stats} />
          </div>
        </SectionCard>

        {/* ── CTA BANNER ── */}
        <SectionCard title="📣 Banner CTA">
          <Field label="Label" value={String(s('cta_banner').label || '')} onChange={v => update('cta_banner', 'label', v)} />
          <Field label="Título" value={String(s('cta_banner').titulo || '')} onChange={v => update('cta_banner', 'titulo', v)} type="textarea" />
          <Field label="Palavra em Destaque" value={String(s('cta_banner').titulo_destaque || '')} onChange={v => update('cta_banner', 'titulo_destaque', v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Texto do Botão" value={String(s('cta_banner').botao_texto || '')} onChange={v => update('cta_banner', 'botao_texto', v)} />
            <Field label="Link do Botão" value={String(s('cta_banner').botao_link || '')} onChange={v => update('cta_banner', 'botao_link', v)} />
          </div>
          <ImageUploader 
            label="Imagem de Fundo do Banner" 
            value={String(s('cta_banner').imagem_fundo || '')} 
            onChange={v => update('cta_banner', 'imagem_fundo', v)} 
            folder="home/cta"
          />
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('cta_banner')} saving={!!saving.cta_banner} saved={!!saved.cta_banner} />
          </div>
        </SectionCard>

        {/* ── SEGMENTOS ── */}
        <SectionCard title="🏢 Segmentos">
          <Field label="Título" value={String(s('segmentos').titulo || '')} onChange={v => update('segmentos', 'titulo', v)} type="textarea" />
          <Field label="Palavra em Destaque" value={String(s('segmentos').titulo_destaque || '')} onChange={v => update('segmentos', 'titulo_destaque', v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Texto do Botão" value={String(s('segmentos').botao_texto || '')} onChange={v => update('segmentos', 'botao_texto', v)} />
            <Field label="Link do Botão" value={String(s('segmentos').botao_link || '')} onChange={v => update('segmentos', 'botao_link', v)} />
          </div>
          <ImageUploader 
            label="Imagem Lateral" 
            value={String(s('segmentos').imagem_lateral || '')} 
            onChange={v => update('segmentos', 'imagem_lateral', v)} 
            folder="home/segmentos"
          />

          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-2">Lista de segmentos:</p>
          {((s('segmentos').segmentos as Array<{ nome: string; link: string }>) || []).map((seg, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-3">
              <Field label={`Segmento ${idx + 1}`} value={seg.nome} onChange={v => updateNestedArray('segmentos', 'segmentos', idx, 'nome', v)} />
              <Field label="Link" value={seg.link} onChange={v => updateNestedArray('segmentos', 'segmentos', idx, 'link', v)} />
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('segmentos')} saving={!!saving.segmentos} saved={!!saved.segmentos} />
          </div>
        </SectionCard>

        {/* ── DEPOIMENTOS ── */}
        <SectionCard title="💬 Depoimentos">
          <Field label="Título da Seção" value={String(s('depoimentos').titulo || '')} onChange={v => update('depoimentos', 'titulo', v)} />
          <Field label="Palavra em Destaque" value={String(s('depoimentos').titulo_destaque || '')} onChange={v => update('depoimentos', 'titulo_destaque', v)} />
          <div className="flex justify-end">
            <SaveButton onSave={() => saveSection('depoimentos')} saving={!!saving.depoimentos} saved={!!saved.depoimentos} />
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Depoimentos individuais:</p>
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id || idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl space-y-3 border-l-4 ${t.tema === 'gold' ? 'border-yellow-400 bg-yellow-50' : t.tema === 'navy' ? 'border-blue-900 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-gray-500 uppercase">Depoimento {idx + 1}</p>
                  <button onClick={() => t.id && deleteTestimonial(t.id)} className="text-xs text-red-500 hover:text-red-700">Remover</button>
                </div>
                <Field label="Texto" value={t.texto} onChange={v => setTestimonials(prev => prev.map((x, i) => i === idx ? { ...x, texto: v } : x))} type="textarea" />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Autor" value={t.autor} onChange={v => setTestimonials(prev => prev.map((x, i) => i === idx ? { ...x, autor: v } : x))} />
                  <Field label="Cargo" value={t.cargo} onChange={v => setTestimonials(prev => prev.map((x, i) => i === idx ? { ...x, cargo: v } : x))} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Tema</label>
                    <select value={t.tema} onChange={e => setTestimonials(prev => prev.map((x, i) => i === idx ? { ...x, tema: e.target.value as 'white' | 'gold' | 'navy' } : x))} className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50">
                      <option value="white">Branco</option>
                      <option value="gold">Dourado</option>
                      <option value="navy">Navy</option>
                    </select>
                  </div>
                  <Field label="Ordem" value={String(t.ordem)} onChange={v => setTestimonials(prev => prev.map((x, i) => i === idx ? { ...x, ordem: parseInt(v) || 0 } : x))} type="number" />
                </div>
              </motion.div>
            ))}
            <div className="flex items-center gap-3">
              <button onClick={addTestimonial} className="text-sm text-brand-gold font-bold hover:underline">+ Adicionar depoimento</button>
              <SaveButton onSave={saveTestimonials} saving={!!saving.testimonials} saved={!!saved.testimonials} />
            </div>
          </div>
        </SectionCard>

        {/* ── TRUST BAR ── */}
        <SectionCard title="🏅 Barra de Credenciais">
          {((s('trust_bar').itens as Array<{ icone: string; texto: string }>) || []).map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-3">
              <Field label={`Ícone ${idx + 1}`} value={item.icone} onChange={v => updateNestedArray('trust_bar', 'itens', idx, 'icone', v)} placeholder="ShieldCheck, MapPin..." />
              <Field label="Texto" value={item.texto} onChange={v => updateNestedArray('trust_bar', 'itens', idx, 'texto', v)} />
            </div>
          ))}
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('trust_bar')} saving={!!saving.trust_bar} saved={!!saved.trust_bar} />
          </div>
        </SectionCard>

        {/* ── CONTATO ── */}
        <SectionCard title="📞 Seção de Contato">
          <Field label="Título" value={String(s('contato').titulo || '')} onChange={v => update('contato', 'titulo', v)} />
          <Field label="Palavra em Destaque" value={String(s('contato').titulo_destaque || '')} onChange={v => update('contato', 'titulo_destaque', v)} />
          <Field label="Subtítulo" value={String(s('contato').subtitulo || '')} onChange={v => update('contato', 'subtitulo', v)} type="textarea" />
          <Field label="Localização" value={String(s('contato').localizacao || '')} onChange={v => update('contato', 'localizacao', v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Telefone" value={String(s('contato').telefone || '')} onChange={v => update('contato', 'telefone', v)} />
            <Field label="E-mail" value={String(s('contato').email || '')} onChange={v => update('contato', 'email', v)} />
          </div>
          <Field label="Horário" value={String(s('contato').horario || '')} onChange={v => update('contato', 'horario', v)} />
          <ImageUploader 
            label="Imagem de Fundo" 
            value={String(s('contato').imagem_fundo || '')} 
            onChange={v => update('contato', 'imagem_fundo', v)} 
            folder="home/contato"
          />
          <div className="flex justify-end pt-2">
            <SaveButton onSave={() => saveSection('contato')} saving={!!saving.contato} saved={!!saved.contato} />
          </div>
        </SectionCard>

      </div>
    </div>
  );
}
