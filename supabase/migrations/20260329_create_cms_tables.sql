-- Tabela principal de conteúdo CMS (por página e seção)
CREATE TABLE IF NOT EXISTS cms_content (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_slug text NOT NULL,
  section_key text NOT NULL,
  content jsonb NOT NULL DEFAULT '{}',
  updated_at timestamptz DEFAULT now(),
  updated_by text,
  UNIQUE(page_slug, section_key)
);

-- Tabela de depoimentos (array dinâmico)
CREATE TABLE IF NOT EXISTS cms_testimonials (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  texto text NOT NULL,
  autor text NOT NULL,
  cargo text NOT NULL,
  tema text DEFAULT 'white',
  ordem int DEFAULT 0,
  ativo boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Tabela de segmentos da home (array dinâmico)
CREATE TABLE IF NOT EXISTS cms_segments (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nome text NOT NULL,
  link text NOT NULL,
  ordem int DEFAULT 0,
  ativo boolean DEFAULT true
);

-- Trigger para updated_at automático
CREATE OR REPLACE FUNCTION update_cms_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS cms_content_updated_at ON cms_content;
CREATE TRIGGER cms_content_updated_at
  BEFORE UPDATE ON cms_content
  FOR EACH ROW EXECUTE FUNCTION update_cms_updated_at();

-- RLS
ALTER TABLE cms_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_segments ENABLE ROW LEVEL SECURITY;

-- Leitura pública
CREATE POLICY IF NOT EXISTS "cms_content_read_public" ON cms_content FOR SELECT USING (true);
CREATE POLICY IF NOT EXISTS "cms_testimonials_read_public" ON cms_testimonials FOR SELECT USING (ativo = true);
CREATE POLICY IF NOT EXISTS "cms_segments_read_public" ON cms_segments FOR SELECT USING (ativo = true);

-- Escrita apenas para autenticados
CREATE POLICY IF NOT EXISTS "cms_content_write_authenticated" ON cms_content FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY IF NOT EXISTS "cms_testimonials_write_authenticated" ON cms_testimonials FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY IF NOT EXISTS "cms_segments_write_authenticated" ON cms_segments FOR ALL USING (auth.role() = 'authenticated');
