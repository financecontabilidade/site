import { useState, useEffect } from "react";
import { Plus, Trash2, GripVertical, Save, Check, AlertCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { EditorHeader, SaveButton, Field } from "./EditorShared";

interface Testimonial {
  id?: string;
  texto: string;
  autor: string;
  cargo: string;
  tema: string;
  ordem: number;
  ativo: boolean;
}

export default function EditTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  async function fetchTestimonials() {
    const { data, error } = await supabase
      .from('cms_testimonials')
      .select('*')
      .order('ordem', { ascending: true });
    
    if (error) setError("Erro ao carregar depoimentos.");
    else setTestimonials(data || []);
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    setError(null);

    // Delete all and re-insert for simplicity in reordering (or do a proper upsert)
    // Actually, let's do an upsert by mapping IDs
    const toSave = testimonials.map((t, idx) => ({
      ...t,
      ordem: idx
    }));

    const { error: saveError } = await supabase
      .from('cms_testimonials')
      .upsert(toSave);

    setSaving(false);
    if (saveError) {
      setError("Erro ao salvar depoimentos: " + saveError.message);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      fetchTestimonials(); // Refresh to get IDs for new items
    }
  }

  function addTestimonial() {
    setTestimonials([...testimonials, {
      texto: "",
      autor: "",
      cargo: "",
      tema: "white",
      ordem: testimonials.length,
      ativo: true
    }]);
  }

  function removeTestimonial(index: number) {
    const item = testimonials[index];
    if (item.id) {
       // If it has id, we should ideally delete from DB too, 
       // but for now let's just mark it for removal or handle on save.
       // For simplicity in this implementation, we'll just delete it now.
       supabase.from('cms_testimonials').delete().eq('id', item.id).then(() => {
         setTestimonials(testimonials.filter((_, i) => i !== index));
       });
    } else {
      setTestimonials(testimonials.filter((_, i) => i !== index));
    }
  }

  function updateItem(index: number, field: keyof Testimonial, value: any) {
    const newItems = [...testimonials];
    newItems[index] = { ...newItems[index], [field]: value };
    setTestimonials(newItems);
  }

  if (loading) return <div className="p-8">Carregando depoimentos...</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <EditorHeader 
          page="Depoimentos" 
          description="Gerencie os depoimentos dos clientes que aparecem na Home."
          error={error}
        />
        <SaveButton onSave={handleSave} saving={saving} saved={saved} />
      </div>

      <div className="space-y-4">
        {testimonials.map((item, idx) => (
          <div key={item.id || idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GripVertical className="h-4 w-4 text-gray-300" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Depoimento #{idx + 1}</span>
              </div>
              <button 
                onClick={() => removeTestimonial(idx)}
                className="text-xs text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
              >
                <Trash2 className="h-3.5 w-3.5" /> Remover
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <Field 
                  label="Texto do Depoimento" 
                  type="textarea" 
                  value={item.texto} 
                  onChange={(v) => updateItem(idx, 'texto', v)} 
                />
              </div>
              <Field 
                label="Autor" 
                value={item.autor} 
                onChange={(v) => updateItem(idx, 'autor', v)} 
              />
              <Field 
                label="Cargo / Empresa" 
                value={item.cargo} 
                onChange={(v) => updateItem(idx, 'cargo', v)} 
              />
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Tema Visual</label>
                <select 
                  value={item.tema} 
                  onChange={(e) => updateItem(idx, 'tema', e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-gold/50"
                >
                  <option value="white">Branco (Padrão)</option>
                  <option value="gold">Dourado</option>
                  <option value="navy">Azul Marinho</option>
                </select>
              </div>
              <div className="flex items-center gap-2 h-full pt-6">
                <input 
                  type="checkbox" 
                  checked={item.ativo} 
                  onChange={(e) => updateItem(idx, 'ativo', e.target.checked)}
                  id={`ativo-${idx}`}
                  className="w-4 h-4 text-brand-gold rounded border-gray-300 focus:ring-brand-gold"
                />
                <label htmlFor={`ativo-${idx}`} className="text-sm text-gray-700 font-medium">Exibir no site</label>
              </div>
            </div>
          </div>
        ))}

        <button 
          onClick={addTestimonial}
          className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center gap-2 font-medium"
        >
          <Plus className="h-5 w-5" /> Adicionar Novo Depoimento
        </button>
      </div>
    </div>
  );
}
