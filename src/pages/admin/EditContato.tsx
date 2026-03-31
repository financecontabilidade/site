import { SectionCard, SaveButton, Field, EditorHeader, usePageEditor } from "./EditorShared";
import ImageUploader from "../../components/admin/ImageUploader";

const DEFAULTS = {
  hero: { label: "Atendimento Personalizado", titulo: "Vamos conversar sobre o seu negócio?", subtitulo: "" },
  info_cards: { card1_titulo: "Visite-nos", card1_texto: "R. Visc. de Quissamã, 98 - Centro\nMacaé, RJ - CEP 27910-020", card2_titulo: "WhatsApp", card2_texto: "(22) 99245-8575", card3_titulo: "Horários", card3_texto: "Segunda a Sexta\n08:00 às 18:00" },
  formulario: { titulo: "Envie uma mensagem", subtitulo: "", whatsapp_numero: "5522992458575", botao_texto: "Enviar Mensagem" },
  mapa: { endereco_maps: "R. Visc. de Quissamã, 98, Centro, Macaé, RJ", zoom: "16", whatsapp_texto: "Resposta em minutos", whatsapp_botao: "Chamar no WhatsApp Agora" }
};

export default function EditContato() {
  const { loading, saving, saved, error, update, saveSection, str } = usePageEditor('contato', DEFAULTS);
  if (loading) return <div className="p-6 text-gray-400 text-sm">Carregando...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <EditorHeader page="Contato" description="Edite o conteúdo da página de contato." error={error} />
      <div className="space-y-4">

        <SectionCard title="🌟 Hero — Cabeçalho" defaultOpen>
          <Field label="Label" value={str('hero','label')} onChange={v => update('hero','label',v)} />
          <Field label="Título" value={str('hero','titulo')} onChange={v => update('hero','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('hero','subtitulo')} onChange={v => update('hero','subtitulo',v)} />
          <SaveButton onSave={() => saveSection('hero')} saving={saving['hero']} saved={saved['hero']} />
        </SectionCard>

        <SectionCard title="📌 Cards de Informações">
          {[1,2,3].map(i => (
            <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-3">
              <p className="text-xs font-bold text-gray-500 uppercase">Card {i}</p>
              <Field label="Título" value={str('info_cards',`card${i}_titulo`)} onChange={v => update('info_cards',`card${i}_titulo`,v)} />
              <Field label="Texto (use \\n para quebra de linha)" type="textarea" value={str('info_cards',`card${i}_texto`)} onChange={v => update('info_cards',`card${i}_texto`,v)} />
            </div>
          ))}
          <SaveButton onSave={() => saveSection('info_cards')} saving={saving['info_cards']} saved={saved['info_cards']} />
        </SectionCard>

        <SectionCard title="📬 Formulário de Contato">
          <Field label="Título do Formulário" value={str('formulario','titulo')} onChange={v => update('formulario','titulo',v)} />
          <Field label="Subtítulo" type="textarea" value={str('formulario','subtitulo')} onChange={v => update('formulario','subtitulo',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Número WhatsApp (completo)" value={str('formulario','whatsapp_numero')} onChange={v => update('formulario','whatsapp_numero',v)} />
            <Field label="Texto do Botão" value={str('formulario','botao_texto')} onChange={v => update('formulario','botao_texto',v)} />
          </div>
          <SaveButton onSave={() => saveSection('formulario')} saving={saving['formulario']} saved={saved['formulario']} />
        </SectionCard>

        <SectionCard title="🗺️ Mapa & WhatsApp CTA">
          <Field label="Endereço (para Google Maps)" value={str('mapa','endereco_maps')} onChange={v => update('mapa','endereco_maps',v)} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="Zoom do Mapa" value={str('mapa','zoom')} onChange={v => update('mapa','zoom',v)} />
            <Field label="Texto WhatsApp (linha 1)" value={str('mapa','whatsapp_texto')} onChange={v => update('mapa','whatsapp_texto',v)} />
          </div>
          <Field label="Botão WhatsApp (linha 2)" value={str('mapa','whatsapp_botao')} onChange={v => update('mapa','whatsapp_botao',v)} />
          <SaveButton onSave={() => saveSection('mapa')} saving={saving['mapa']} saved={saved['mapa']} />
        </SectionCard>

      </div>
    </div>
  );
}
