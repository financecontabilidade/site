import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yedgxuvldvyyumdjreoo.supabase.co';
const serviceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZGd4dXZsZHZ5eXVtZGpyZW9vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDczODI0MCwiZXhwIjoyMDkwMzE0MjQwfQ.ZTjoOE6F-4JJAWwVoRY2qUTnR1KrLfTGbx6dL0_PO90';

const supabase = createClient(supabaseUrl, serviceKey);

async function runMigration() {
  console.log('🚀 Iniciando migração CMS...\n');

  // 1. Criar tabela cms_content
  const { error: e1 } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS cms_content (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        page_slug text NOT NULL,
        section_key text NOT NULL,
        content jsonb NOT NULL DEFAULT '{}',
        updated_at timestamptz DEFAULT now(),
        updated_by text,
        UNIQUE(page_slug, section_key)
      );
    `
  });
  if (e1) console.log('cms_content:', e1.message);
  else console.log('✅ Tabela cms_content criada');

  // Usar fetch direto para SQL via REST
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${serviceKey}`,
    'apikey': serviceKey
  };

  const queries = [
    {
      name: 'cms_content',
      sql: `CREATE TABLE IF NOT EXISTS cms_content (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        page_slug text NOT NULL,
        section_key text NOT NULL,
        content jsonb NOT NULL DEFAULT '{}',
        updated_at timestamptz DEFAULT now(),
        updated_by text,
        CONSTRAINT cms_content_page_section_unique UNIQUE(page_slug, section_key)
      );`
    },
    {
      name: 'cms_testimonials',
      sql: `CREATE TABLE IF NOT EXISTS cms_testimonials (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        texto text NOT NULL,
        autor text NOT NULL,
        cargo text NOT NULL,
        tema text DEFAULT 'white',
        ordem int DEFAULT 0,
        ativo boolean DEFAULT true,
        created_at timestamptz DEFAULT now()
      );`
    },
    {
      name: 'cms_segments',
      sql: `CREATE TABLE IF NOT EXISTS cms_segments (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        nome text NOT NULL,
        link text NOT NULL,
        ordem int DEFAULT 0,
        ativo boolean DEFAULT true
      );`
    },
    {
      name: 'rls_cms_content',
      sql: `
        ALTER TABLE cms_content ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "cms_content_read_public" ON cms_content;
        CREATE POLICY "cms_content_read_public" ON cms_content FOR SELECT USING (true);
        DROP POLICY IF EXISTS "cms_content_write_authenticated" ON cms_content;
        CREATE POLICY "cms_content_write_authenticated" ON cms_content FOR ALL USING (auth.role() = 'authenticated');
      `
    },
    {
      name: 'rls_cms_testimonials',
      sql: `
        ALTER TABLE cms_testimonials ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "cms_testimonials_read_public" ON cms_testimonials;
        CREATE POLICY "cms_testimonials_read_public" ON cms_testimonials FOR SELECT USING (ativo = true);
        DROP POLICY IF EXISTS "cms_testimonials_write_authenticated" ON cms_testimonials;
        CREATE POLICY "cms_testimonials_write_authenticated" ON cms_testimonials FOR ALL USING (auth.role() = 'authenticated');
      `
    },
    {
      name: 'rls_cms_segments',
      sql: `
        ALTER TABLE cms_segments ENABLE ROW LEVEL SECURITY;
        DROP POLICY IF EXISTS "cms_segments_read_public" ON cms_segments;
        CREATE POLICY "cms_segments_read_public" ON cms_segments FOR SELECT USING (ativo = true);
        DROP POLICY IF EXISTS "cms_segments_write_authenticated" ON cms_segments;
        CREATE POLICY "cms_segments_write_authenticated" ON cms_segments FOR ALL USING (auth.role() = 'authenticated');
      `
    }
  ];

  for (const q of queries) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ sql: q.sql })
      });
      const data = await res.json();
      if (res.ok) {
        console.log(`✅ ${q.name} OK`);
      } else {
        console.log(`⚠️  ${q.name}:`, JSON.stringify(data));
      }
    } catch (err) {
      console.log(`❌ ${q.name}:`, err.message);
    }
  }

  console.log('\n✅ Migração concluída!');
}

runMigration().catch(console.error);
