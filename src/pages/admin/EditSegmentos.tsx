import { SectionCard, SaveButton, Field, EditorHeader, usePageEditor } from "./EditorShared";
import ImageUploader from "../../components/admin/ImageUploader";

const DEFAULTS = {
  hero: { label: "COMUNICAÇÃO SETORIAL", titulo_linha1: "Cada setor tem", titulo_linha2: "sua própria", titulo_linha3: "linguagem.", titulo_destaque: "Nós falamos a sua.", subtitulo: "", botao_texto: "Fale Conosco", botao_link: "/contato", imagem: "" },
  stats: { titulo: "", subtitulo: "", stat1_num: "17+", stat1_label: "", stat2_num: "100%", stat2_label: "", stat3_num: "3", stat3_label: "", stat4_num: "5,0 ★", stat4_label: "" },
  depoimento: { texto: "", autor: "", cargo: "" },
  beneficios: { card1_titulo: "", card1_desc: "", card2_titulo: "", card2_desc: "" },
  cta_final: { titulo: "", subtitulo: "", botao_texto: "Solicitar Orçamento", botao_link: "/contato" }
};

export default function EditSegmentos() {
  const { loading, saving, saved, error, update, saveSection, str } = usePageEditor('segmentos', DEFAULTS);
  if (loading) return <div className="p-6 text-gray-400 text-sm">Carregando...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <EditorHeader page="Segmentos" description="Edite conteúdo da página de segmentos de atuação." error={error} />
      <div className="space-y-4">

        <SectionCard title="🖼️ Hero — Segmentos" defaultOpen>
          <Field label="Label" value={str('hero','label')} onChange={v => update('hero','label',v)} />
          <div className="grid grid-cols-3 gap-3">
            <Field label="Linha 1" value={str('hero','titulo_linha1')} onChange={v => update('hero','titulo_linha1',v)} />
            <Field label="Linha 2" value={str('hero','titulo_linha2')} onChange={v => update('hero','titulo_linha2',v)} />
            <Field label="Linha 3" value={str('hero','titulo_linha3')} onChange={v => update('hero','titulo_linha3',v)} />
          </div>
          <Field label="Texto em Destaque (dourado)" value={str('hero','titulo_destaque')} onChange={v => update('hero','titulo_destaque',v)} />
          <Field label="Subtítulo" type="textarea" value={str('hero','subtitulo')} onChange={v => update('hero','subtitulo',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Texto do Botão" value={str('hero','botao_texto')} onChange={v => update('hero','botao_texto',v)} />
            <Field label="Link do Botão" value={str('hero','botao_link')} onChange={v => update('hero','botao_link',v)} />
          </div>
          <ImageUploader 
            label="Imagem Hero" 
            value={str('hero','imagem')} 
            onChange={v => update('hero','imagem',v)} 
            folder="segmentos/hero"
          />
          <SaveButton onSave={() => saveSection('hero')} saving={saving['hero']} saved={saved['hero']} />
        </SectionCard>

        <SectionCard title="📊 Stats — Especialização">
          <Field label="Título Principal" value={str('stats','titulo')} onChange={v => update('stats','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('stats','subtitulo')} onChange={v => update('stats','subtitulo',v)} />
          {[1,2,3,4].map(i => (
            <div key={i} className="grid grid-cols-2 gap-4">
              <Field label={`Stat ${i} — Número`} value={str('stats',`stat${i}_num`)} onChange={v => update('stats',`stat${i}_num`,v)} />
              <Field label={`Stat ${i} — Label`} value={str('stats',`stat${i}_label`)} onChange={v => update('stats',`stat${i}_label`,v)} />
            </div>
          ))}
          <SaveButton onSave={() => saveSection('stats')} saving={saving['stats']} saved={saved['stats']} />
        </SectionCard>

        <SectionCard title="💬 Depoimento">
          <Field label="Texto do Depoimento" type="textarea" value={str('depoimento','texto')} onChange={v => update('depoimento','texto',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Autor" value={str('depoimento','autor')} onChange={v => update('depoimento','autor',v)} />
            <Field label="Cargo" value={str('depoimento','cargo')} onChange={v => update('depoimento','cargo',v)} />
          </div>
          <SaveButton onSave={() => saveSection('depoimento')} saving={saving['depoimento']} saved={saved['depoimento']} />
        </SectionCard>

        <SectionCard title="✅ Benefícios — 2 Cards">
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-gray-500 uppercase">Card 1 — Migração</p>
            <Field label="Título" value={str('beneficios','card1_titulo')} onChange={v => update('beneficios','card1_titulo',v)} />
            <Field label="Descrição" type="textarea" value={str('beneficios','card1_desc')} onChange={v => update('beneficios','card1_desc',v)} />
          </div>
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-gray-500 uppercase">Card 2 — Segurança Digital</p>
            <Field label="Título" value={str('beneficios','card2_titulo')} onChange={v => update('beneficios','card2_titulo',v)} />
            <Field label="Descrição" type="textarea" value={str('beneficios','card2_desc')} onChange={v => update('beneficios','card2_desc',v)} />
          </div>
          <SaveButton onSave={() => saveSection('beneficios')} saving={saving['beneficios']} saved={saved['beneficios']} />
        </SectionCard>

        <SectionCard title="🚀 CTA Final">
          <Field label="Título" value={str('cta_final','titulo')} onChange={v => update('cta_final','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('cta_final','subtitulo')} onChange={v => update('cta_final','subtitulo',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Texto do Botão" value={str('cta_final','botao_texto')} onChange={v => update('cta_final','botao_texto',v)} />
            <Field label="Link do Botão" value={str('cta_final','botao_link')} onChange={v => update('cta_final','botao_link',v)} />
          </div>
          <SaveButton onSave={() => saveSection('cta_final')} saving={saving['cta_final']} saved={saved['cta_final']} />
        </SectionCard>

      </div>
    </div>
  );
}
