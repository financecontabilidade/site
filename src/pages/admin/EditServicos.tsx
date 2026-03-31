import { SectionCard, SaveButton, Field, EditorHeader, usePageEditor } from "./EditorShared";
import ImageUploader from "../../components/admin/ImageUploader";

const DEFAULTS = {
  hero: { label: "EXCELÊNCIA CONTÁBIL", titulo: "", subtitulo: "", botao1_texto: "Começar Agora", botao1_link: "/contato", botao2_texto: "Ver Portfólio", botao2_link: "/segmentos", imagem: "", frase_destaque: "" },
  intro: { titulo: "", paragrafo1: "", paragrafo2: "" },
  stats: { stat1_num: "17+", stat1_label: "", stat2_num: "100%", stat2_label: "", stat3_num: "0", stat3_label: "", stat4_num: "SPED", stat4_label: "" },
  ecossistema: { label_eco: "ECOSSISTEMA", titulo_eco: "", desc_eco: "", botao_eco: "Conhecer Integrações", label_garantia: "GARANTIA MTE", titulo_garantia: "", desc_garantia: "", badge_garantia: "" },
  cta_final: { titulo: "", subtitulo: "", botao_texto: "Solicitar Proposta", botao_link: "/contato", imagem_fundo: "" }
};

export default function EditServicos() {
  const { loading, saving, saved, error, update, saveSection, str } = usePageEditor('servicos', DEFAULTS);
  if (loading) return <div className="p-6 text-gray-400 text-sm">Carregando...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <EditorHeader page="Serviços" description="Edite o conteúdo da página de serviços. O catálogo de cards é editado diretamente em cada página de serviço individual." error={error} />
      <div className="space-y-4">

        <SectionCard title="🖼️ Hero — Serviços" defaultOpen>
          <Field label="Label" value={str('hero','label')} onChange={v => update('hero','label',v)} />
          <Field label="Título" value={str('hero','titulo')} onChange={v => update('hero','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('hero','subtitulo')} onChange={v => update('hero','subtitulo',v)} />
          <Field label="Frase Destaque (itálico na imagem)" type="textarea" value={str('hero','frase_destaque')} onChange={v => update('hero','frase_destaque',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Botão 1 — Texto" value={str('hero','botao1_texto')} onChange={v => update('hero','botao1_texto',v)} />
            <Field label="Botão 1 — Link" value={str('hero','botao1_link')} onChange={v => update('hero','botao1_link',v)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Botão 2 — Texto" value={str('hero','botao2_texto')} onChange={v => update('hero','botao2_texto',v)} />
            <Field label="Botão 2 — Link" value={str('hero','botao2_link')} onChange={v => update('hero','botao2_link',v)} />
          </div>
          <ImageUploader 
            label="Imagem Hero" 
            value={str('hero','imagem')} 
            onChange={v => update('hero','imagem',v)} 
            folder="servicos/hero"
          />
          <SaveButton onSave={() => saveSection('hero')} saving={saving['hero']} saved={saved['hero']} />
        </SectionCard>

        <SectionCard title="📝 Intro — Texto Central">
          <Field label="Título" value={str('intro','titulo')} onChange={v => update('intro','titulo',v)} />
          <Field label="Parágrafo 1" type="textarea" value={str('intro','paragrafo1')} onChange={v => update('intro','paragrafo1',v)} />
          <Field label="Parágrafo 2" type="textarea" value={str('intro','paragrafo2')} onChange={v => update('intro','paragrafo2',v)} />
          <SaveButton onSave={() => saveSection('intro')} saving={saving['intro']} saved={saved['intro']} />
        </SectionCard>

        <SectionCard title="📊 Números — Stats">
          {[1,2,3,4].map(i => (
            <div key={i} className="grid grid-cols-2 gap-4">
              <Field label={`Stat ${i} — Número`} value={str('stats',`stat${i}_num`)} onChange={v => update('stats',`stat${i}_num`,v)} />
              <Field label={`Stat ${i} — Label`} value={str('stats',`stat${i}_label`)} onChange={v => update('stats',`stat${i}_label`,v)} />
            </div>
          ))}
          <SaveButton onSave={() => saveSection('stats')} saving={saving['stats']} saved={saved['stats']} />
        </SectionCard>

        <SectionCard title="🔗 Ecossistema & Garantia">
          <div className="bg-blue-50 rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-widest">Card Ecossistema</p>
            <Field label="Label" value={str('ecossistema','label_eco')} onChange={v => update('ecossistema','label_eco',v)} />
            <Field label="Título" value={str('ecossistema','titulo_eco')} onChange={v => update('ecossistema','titulo_eco',v)} />
            <Field label="Descrição" type="textarea" value={str('ecossistema','desc_eco')} onChange={v => update('ecossistema','desc_eco',v)} />
            <Field label="Texto do Botão" value={str('ecossistema','botao_eco')} onChange={v => update('ecossistema','botao_eco',v)} />
          </div>
          <div className="bg-amber-50 rounded-xl p-4 space-y-3">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-widest">Card Garantia</p>
            <Field label="Label" value={str('ecossistema','label_garantia')} onChange={v => update('ecossistema','label_garantia',v)} />
            <Field label="Título" value={str('ecossistema','titulo_garantia')} onChange={v => update('ecossistema','titulo_garantia',v)} />
            <Field label="Descrição" type="textarea" value={str('ecossistema','desc_garantia')} onChange={v => update('ecossistema','desc_garantia',v)} />
            <Field label="Badge" value={str('ecossistema','badge_garantia')} onChange={v => update('ecossistema','badge_garantia',v)} />
          </div>
          <SaveButton onSave={() => saveSection('ecossistema')} saving={saving['ecossistema']} saved={saved['ecossistema']} />
        </SectionCard>

        <SectionCard title="🚀 CTA Final">
          <Field label="Título" value={str('cta_final','titulo')} onChange={v => update('cta_final','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('cta_final','subtitulo')} onChange={v => update('cta_final','subtitulo',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Texto do Botão" value={str('cta_final','botao_texto')} onChange={v => update('cta_final','botao_texto',v)} />
            <Field label="Link do Botão" value={str('cta_final','botao_link')} onChange={v => update('cta_final','botao_link',v)} />
          </div>
          <ImageUploader 
            label="Imagem de Fundo" 
            value={str('cta_final','imagem_fundo')} 
            onChange={v => update('cta_final','imagem_fundo',v)} 
            folder="servicos/cta"
          />
          <SaveButton onSave={() => saveSection('cta_final')} saving={saving['cta_final']} saved={saved['cta_final']} />
        </SectionCard>

      </div>
    </div>
  );
}
