import { useState, useEffect } from "react";
import { Plus, Trash2, GripVertical, Save, Check, AlertCircle } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { EditorHeader, SaveButton, Field } from "./EditorShared";

interface Segment {
  id?: string;
  nome: string;
  link: string;
  ordem: number;
  ativo: boolean;
}

export default function EditSegments() {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSegments();
  }, []);

  async function fetchSegments() {
    const { data, error } = await supabase
      .from('cms_segments')
      .select('*')
      .order('ordem', { ascending: true });
    
    if (error) setError("Erro ao carregar segmentos.");
    else setSegments(data || []);
    setLoading(false);
  }

  async function handleSave() {
    setSaving(true);
    setError(null);

    const toSave = segments.map((s, idx) => ({
      ...s,
      ordem: idx
    }));

    const { error: saveError } = await supabase
      .from('cms_segments')
      .upsert(toSave);

    setSaving(false);
    if (saveError) {
      setError("Erro ao salvar segmentos: " + saveError.message);
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
      fetchSegments();
    }
  }

  function addSegment() {
    setSegments([...segments, {
      nome: "",
      link: "",
      ordem: segments.length,
      ativo: true
    }]);
  }

  function removeSegment(index: number) {
    const item = segments[index];
    if (item.id) {
       supabase.from('cms_segments').delete().eq('id', item.id).then(() => {
         setSegments(segments.filter((_, i) => i !== index));
       });
    } else {
      setSegments(segments.filter((_, i) => i !== index));
    }
  }

  function updateItem(index: number, field: keyof Segment, value: any) {
    const newItems = [...segments];
    newItems[index] = { ...newItems[index], [field]: value };
    setSegments(newItems);
  }

  if (loading) return <div className="p-8">Carregando segmentos...</div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-end">
        <EditorHeader 
          page="Segmentos" 
          description="Gerencie os setores de atuação que aparecem na Home e na página de Segmentos."
          error={error}
        />
        <SaveButton onSave={handleSave} saving={saving} saved={saved} />
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Ordem</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Nome do Segmento</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Link</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {segments.map((item, idx) => (
              <tr key={item.id || idx} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <GripVertical className="h-4 w-4 text-gray-300" />
                    <span className="text-sm text-gray-500 font-medium">#{idx + 1}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <input 
                    type="text" 
                    value={item.nome} 
                    onChange={(e) => updateItem(idx, 'nome', e.target.value)}
                    placeholder="Ex: Mercado Imobiliário"
                    className="w-full bg-transparent border-none text-sm font-medium text-gray-800 focus:ring-0 p-0"
                  />
                </td>
                <td className="px-6 py-4">
                   <input 
                    type="text" 
                    value={item.link} 
                    onChange={(e) => updateItem(idx, 'link', e.target.value)}
                    placeholder="/servicos/..."
                    className="w-full bg-transparent border-none text-sm text-gray-500 focus:ring-0 p-0"
                  />
                </td>
                <td className="px-6 py-4">
                   <button 
                    onClick={() => updateItem(idx, 'ativo', !item.ativo)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${item.ativo ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}
                  >
                    {item.ativo ? 'Ativo' : 'Inativo'}
                  </button>
                </td>
                <td className="px-6 py-4 text-right">
                  <button 
                    onClick={() => removeSegment(idx)}
                    className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {segments.length === 0 && (
          <div className="p-12 text-center text-gray-400 text-sm">Nenhum segmento cadastrado.</div>
        )}

        <div className="p-4 bg-gray-50/50 border-t border-gray-100">
          <button 
            onClick={addSegment}
            className="w-full py-3 flex items-center justify-center gap-2 text-sm text-brand-gold font-bold hover:text-brand-navy transition-colors"
          >
            <Plus className="h-4 w-4" /> Adicionar Novo Segmento
          </button>
        </div>
      </div>
    </div>
  );
}
