import { SectionCard, SaveButton, Field, EditorHeader, usePageEditor } from "./EditorShared";
import ImageUploader from "../../components/admin/ImageUploader";

const SERVICE_PAGES: Array<{ slug: string; label: string; emoji: string }> = [
  { slug: 'servico-escrituracao', label: 'Escrituração Fiscal & Contábil', emoji: '📒' },
  { slug: 'servico-planejamento', label: 'Planejamento Tributário', emoji: '📊' },
  { slug: 'servico-folha', label: 'Gestão de Folha & eSocial', emoji: '👥' },
  { slug: 'servico-abertura', label: 'Abertura & Legalização', emoji: '🏢' },
  { slug: 'servico-compliance', label: 'Compliance & Auditoria', emoji: '🛡️' },
  { slug: 'servico-consultiva', label: 'Contabilidade Consultiva', emoji: '💡' },
  { slug: 'servico-imobiliario', label: 'Mercado Imobiliário', emoji: '🏠' },
  { slug: 'servico-saude', label: 'Saúde & Terceiro Setor', emoji: '🏥' },
  { slug: 'servico-holdings', label: 'Holdings Patrimoniais', emoji: '💼' },
];

const DEFAULTS = {
  dados: { badge: '', titulo: '', subtitulo: '', hero_imagem: '' }
};

function ServiceEditor({ slug, label, emoji }: { slug: string; label: string; emoji: string }) {
  const { loading, saving, saved, error, update, saveSection, str } = usePageEditor(slug, DEFAULTS);
  if (loading) return <div className="text-xs text-gray-400 py-2">Carregando {label}...</div>;

  return (
    <SectionCard title={`${emoji} ${label}`}>
      {error && <p className="text-xs text-red-500">{error}</p>}
      <Field label="Badge (etiqueta acima do título)" value={str('dados','badge')} onChange={v => update('dados','badge',v)} />
      <Field label="Título Principal" value={str('dados','titulo')} onChange={v => update('dados','titulo',v)} />
      <Field label="Subtítulo" type="textarea" value={str('dados','subtitulo')} onChange={v => update('dados','subtitulo',v)} />
      <ImageUploader 
        label="Imagem Hero" 
        value={str('dados','hero_imagem')} 
        onChange={v => update('dados','hero_imagem',v)} 
        folder={`services/${slug}`}
      />
      <SaveButton onSave={() => saveSection('dados')} saving={saving['dados']} saved={saved['dados']} />
    </SectionCard>
  );
}

export default function EditServicosIndividuais() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-1">CMS</p>
        <h1 className="text-2xl font-bold text-gray-900">Editar Páginas de Serviço</h1>
        <p className="text-sm text-gray-500 mt-1">
          Edite o Hero (badge, título, subtítulo e imagem) de cada página de serviço individual.
          O conteúdo aprofundado (deliverables, FAQs, processo) continua sendo gerenciado diretamente no código.
        </p>
      </div>
      <div className="space-y-4">
        {SERVICE_PAGES.map(s => (
          <ServiceEditor key={s.slug} slug={s.slug} label={s.label} emoji={s.emoji} />
        ))}
      </div>
    </div>
  );
}
