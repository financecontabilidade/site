import { SectionCard, SaveButton, Field, EditorHeader, usePageEditor } from "./EditorShared";
import ImageUploader from "../../components/admin/ImageUploader";

const DEFAULTS = {
  hero: { label: "NOSSA ESSÊNCIA", titulo: "17 anos transformando contabilidade em estratégia.", subtitulo: "...", imagem_fundo: "" },
  sobre: { titulo: "Não somos apenas registradores de dados.", paragrafo1: "", paragrafo2: "", paragrafo3: "" },
  stats: { stat1_num: "17+", stat1_label: "ANOS DE MERCADO", stat2_num: "100%", stat2_label: "APROVAÇÃO MTE", stat3_num: "5,0 ★", stat3_label: "GOOGLE REVIEWS", stat4_num: "2008", stat4_label: "ANO DE FUNDAÇÃO" },
  timeline: { titulo: "Como tudo começou", subtitulo: "", imagem_fundo: "" },
  fundadora: { nome: "Lúcia Melo Messias", label: "DIRETORA & FUNDADORA", bio: "", linkedin: "", imagem: "", equipe1_titulo: "Equipe Contábil", equipe1_desc: "", equipe2_titulo: "Equipe Trabalhista", equipe2_desc: "" },
  missao: { titulo_missao: "", desc_missao: "", badge_excelencia: "TERCEIRO SETOR", numero_excelencia: "100%", titulo_excelencia: "", desc_excelencia: "" },
  cta: { titulo: "", subtitulo: "", botao_texto: "Fale com a Finance", botao_link: "/contato" },
  cta_final: { titulo: "", subtitulo: "", botao1_texto: "Solicitar Orçamento", botao1_link: "/contato", botao2_texto: "Ver Serviços", botao2_link: "/servicos" }
};

export default function EditQuemSomos() {
  const { loading, saving, saved, error, update, saveSection, str } = usePageEditor('quem-somos', DEFAULTS);
  if (loading) return <div className="p-6 text-gray-400 text-sm">Carregando...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <EditorHeader page="Quem Somos" description="Edite cada seção da página Quem Somos." error={error} />
      <div className="space-y-4">

        <SectionCard title="👤 Hero — Quem Somos" defaultOpen>
          <Field label="Label" value={str('hero','label')} onChange={v => update('hero','label',v)} />
          <Field label="Título" value={str('hero','titulo')} onChange={v => update('hero','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('hero','subtitulo')} onChange={v => update('hero','subtitulo',v)} />
          <ImageUploader 
            label="Imagem de Fundo" 
            value={str('hero','imagem_fundo')} 
            onChange={v => update('hero','imagem_fundo',v)} 
            folder="quem-somos/hero"
          />
          <SaveButton onSave={() => saveSection('hero')} saving={saving['hero']} saved={saved['hero']} />
        </SectionCard>

        <SectionCard title="📝 Sobre — Não somos apenas registradores">
          <Field label="Título" value={str('sobre','titulo')} onChange={v => update('sobre','titulo',v)} />
          <Field label="Parágrafo 1" type="textarea" value={str('sobre','paragrafo1')} onChange={v => update('sobre','paragrafo1',v)} />
          <Field label="Parágrafo 2" type="textarea" value={str('sobre','paragrafo2')} onChange={v => update('sobre','paragrafo2',v)} />
          <Field label="Parágrafo 3" type="textarea" value={str('sobre','paragrafo3')} onChange={v => update('sobre','paragrafo3',v)} />
          <SaveButton onSave={() => saveSection('sobre')} saving={saving['sobre']} saved={saved['sobre']} />
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

        <SectionCard title="🕐 Timeline — História">
          <Field label="Título" value={str('timeline','titulo')} onChange={v => update('timeline','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('timeline','subtitulo')} onChange={v => update('timeline','subtitulo',v)} />
          <ImageUploader 
            label="Imagem de Fundo" 
            value={str('timeline','imagem_fundo')} 
            onChange={v => update('timeline','imagem_fundo',v)} 
            folder="quem-somos/timeline"
          />
          <p className="text-xs text-gray-500 italic">* Os eventos da timeline são editados diretamente no banco de dados (campo eventos JSONB).</p>
          <SaveButton onSave={() => saveSection('timeline')} saving={saving['timeline']} saved={saved['timeline']} />
        </SectionCard>

        <SectionCard title="👩‍💼 Fundadora — Lúcia Melo">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Label" value={str('fundadora','label')} onChange={v => update('fundadora','label',v)} />
            <Field label="Nome" value={str('fundadora','nome')} onChange={v => update('fundadora','nome',v)} />
          </div>
          <Field label="Bio" type="textarea" value={str('fundadora','bio')} onChange={v => update('fundadora','bio',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="URL LinkedIn" value={str('fundadora','linkedin')} onChange={v => update('fundadora','linkedin',v)} />
            <ImageUploader 
              label="Foto da Fundadora" 
              value={str('fundadora','imagem')} 
              onChange={v => update('fundadora','imagem',v)} 
              folder="quem-somos/fundadora"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Equipe 1 — Título" value={str('fundadora','equipe1_titulo')} onChange={v => update('fundadora','equipe1_titulo',v)} />
            <Field label="Equipe 1 — Descrição" value={str('fundadora','equipe1_desc')} onChange={v => update('fundadora','equipe1_desc',v)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Equipe 2 — Título" value={str('fundadora','equipe2_titulo')} onChange={v => update('fundadora','equipe2_titulo',v)} />
            <Field label="Equipe 2 — Descrição" value={str('fundadora','equipe2_desc')} onChange={v => update('fundadora','equipe2_desc',v)} />
          </div>
          <SaveButton onSave={() => saveSection('fundadora')} saving={saving['fundadora']} saved={saved['fundadora']} />
        </SectionCard>

        <SectionCard title="🎯 Missão & Excelência">
          <Field label="Título da Missão" value={str('missao','titulo_missao')} onChange={v => update('missao','titulo_missao',v)} />
          <Field label="Descrição da Missão" type="textarea" value={str('missao','desc_missao')} onChange={v => update('missao','desc_missao',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Badge Excelência" value={str('missao','badge_excelencia')} onChange={v => update('missao','badge_excelencia',v)} />
            <Field label="Número Excelência" value={str('missao','numero_excelencia')} onChange={v => update('missao','numero_excelencia',v)} />
          </div>
          <Field label="Título Excelência" value={str('missao','titulo_excelencia')} onChange={v => update('missao','titulo_excelencia',v)} />
          <Field label="Descrição Excelência" type="textarea" value={str('missao','desc_excelencia')} onChange={v => update('missao','desc_excelencia',v)} />
          <SaveButton onSave={() => saveSection('missao')} saving={saving['missao']} saved={saved['missao']} />
        </SectionCard>

        <SectionCard title="📣 CTA do Meio">
          <Field label="Título" value={str('cta','titulo')} onChange={v => update('cta','titulo',v)} />
          <Field label="Subtítulo" value={str('cta','subtitulo')} onChange={v => update('cta','subtitulo',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Texto do Botão" value={str('cta','botao_texto')} onChange={v => update('cta','botao_texto',v)} />
            <Field label="Link do Botão" value={str('cta','botao_link')} onChange={v => update('cta','botao_link',v)} />
          </div>
          <SaveButton onSave={() => saveSection('cta')} saving={saving['cta']} saved={saved['cta']} />
        </SectionCard>

        <SectionCard title="🚀 CTA Final">
          <Field label="Título" value={str('cta_final','titulo')} onChange={v => update('cta_final','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('cta_final','subtitulo')} onChange={v => update('cta_final','subtitulo',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Botão 1 — Texto" value={str('cta_final','botao1_texto')} onChange={v => update('cta_final','botao1_texto',v)} />
            <Field label="Botão 1 — Link" value={str('cta_final','botao1_link')} onChange={v => update('cta_final','botao1_link',v)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Botão 2 — Texto" value={str('cta_final','botao2_texto')} onChange={v => update('cta_final','botao2_texto',v)} />
            <Field label="Botão 2 — Link" value={str('cta_final','botao2_link')} onChange={v => update('cta_final','botao2_link',v)} />
          </div>
          <SaveButton onSave={() => saveSection('cta_final')} saving={saving['cta_final']} saved={saved['cta_final']} />
        </SectionCard>

      </div>
    </div>
  );
}
