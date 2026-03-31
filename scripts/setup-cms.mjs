// Script para criar tabelas CMS no Supabase via REST API
// Execute: node scripts/setup-cms.mjs

const SUPABASE_URL = 'https://yedgxuvldvyyumdjreoo.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZGd4dXZsZHZ5eXVtZGpyZW9vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDczODI0MCwiZXhwIjoyMDkwMzE0MjQwfQ.ZTjoOE6F-4JJAWwVoRY2qUTnR1KrLfTGbx6dL0_PO90';

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${SERVICE_KEY}`,
  'apikey': SERVICE_KEY,
  'Prefer': 'return=minimal'
};

// Executa SQL via Supabase REST API (endpoint especial)
async function runSQL(label, sql) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/`, {
    method: 'GET',
    headers
  });
  console.log(`Conexão OK: ${res.status}`);
}

// Seed data da HOME
const homeSeeds = [
  {
    page_slug: 'home',
    section_key: 'hero',
    content: {
      titulo: 'Sua empresa organizada, protegida e preparada para crescer.',
      titulo_destaque: 'protegida',
      subtitulo: 'Contabilidade estratégica para o mercado imobiliário, saúde e terceiro setor. Performance financeira com rigor técnico em Macaé.',
      botao_texto: 'CONSULTA GRATUITA',
      botao_link: '/contato',
      imagem_fundo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    }
  },
  {
    page_slug: 'home',
    section_key: 'hero_links',
    content: {
      link1_label: '01. Estratégia',
      link1_titulo: 'Planejamento Tributário Avançado',
      link1_url: '/servicos/planejamento-tributario',
      link2_label: '02. Compliance',
      link2_titulo: 'Auditoria e Gestão de Riscos',
      link2_url: '/servicos/compliance-auditoria',
      link3_label: '03. Performance',
      link3_titulo: 'BPO Financeiro de Alta Precisão',
      link3_url: '/servicos/contabilidade-consultiva'
    }
  },
  {
    page_slug: 'home',
    section_key: 'cards',
    content: {
      card1_tag: 'QUEM SOMOS',
      card1_titulo: '17 anos de parceria contábil transformando números em decisões seguras.',
      card1_titulo_destaque: '17 anos',
      card1_imagem: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1632&auto=format&fit=crop',
      card2_tag: 'NOSSA EXPERIÊNCIA',
      card2_titulo: 'Compromisso total com o sucesso do seu negócio através de dados.',
      card2_badge: '100%',
      card2_imagem: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1736&auto=format&fit=crop',
      card3_tag: 'ATENDIMENTO ESPECIALIZADO',
      card3_titulo: 'Tecnologia de ponta aliada à experiência humana especializada.',
      card3_titulo_destaque: 'experiência humana',
      card3_imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    }
  },
  {
    page_slug: 'home',
    section_key: 'especialidades',
    content: {
      label: 'ESPECIALIDADES',
      titulo: 'Portfólio completo para a saúde financeira da sua operação.',
      titulo_destaque: 'saúde financeira',
      cards: [
        { icone: 'FileText', titulo: 'Escrituração Contábil e Fiscal', descricao: 'Otimização da carga tributária com total segurança jurídica.', link: '/servicos/escrituracao-contabil' },
        { icone: 'PieChart', titulo: 'Planejamento Estratégico', descricao: 'Terceirização estratégica do seu departamento financeiro.', link: '/servicos/planejamento-tributario' },
        { icone: 'ShieldCheck', titulo: 'Folha de Pagamento eSocial', descricao: 'Verificação minuciosa para garantir transparência e conformidade.', link: '/servicos/folha-de-pagamento' },
        { icone: 'Building2', titulo: 'Compliance e Auditoria Interna', descricao: 'Estruturação patrimonial e sucessória para famílias e empresas.', link: '/servicos/compliance-auditoria' }
      ]
    }
  },
  {
    page_slug: 'home',
    section_key: 'filosofia',
    content: {
      label: 'NOSSA FILOSOFIA',
      titulo_bold: 'Contabilidade não é sobre o passado.',
      titulo_rest: 'É sobre ter clareza para decidir o futuro.',
      pilares: [
        { icone: 'Target', titulo: 'Rigor Técnico', descricao: 'Análise profunda e fundamentada em legislação vigente e normas contábeis.' },
        { icone: 'Eye', titulo: 'Transparência', descricao: 'Relatórios claros e acesso direto aos dados que importam para você.' },
        { icone: 'TrendingUp', titulo: 'Proatividade', descricao: 'Antecipamos tendências e oportunidades tributárias antes dos problemas.' },
        { icone: 'CheckCircle2', titulo: 'Especialização', descricao: 'Equipe focada em nichos específicos de mercado para maior precisão.' }
      ]
    }
  },
  {
    page_slug: 'home',
    section_key: 'stats',
    content: {
      stat1_numero: '17+',
      stat1_label: 'ANOS DE MERCADO',
      stat2_numero: '100%',
      stat2_label: 'FOCO NO CLIENTE',
      stat3_numero: '5,0 ★',
      stat3_label: 'AVALIAÇÃO GOOGLE',
      stat4_numero: '3',
      stat4_label: 'UNIDADES MACAÉ'
    }
  },
  {
    page_slug: 'home',
    section_key: 'cta_banner',
    content: {
      label: '17 ANOS DE EXPERIÊNCIA',
      titulo: 'Pronto para elevar o nível da sua gestão contábil?',
      titulo_destaque: 'gestão contábil?',
      botao_texto: 'AGENDAR REUNIÃO',
      botao_link: '/contato',
      imagem_fundo: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
    }
  },
  {
    page_slug: 'home',
    section_key: 'segmentos',
    content: {
      titulo: 'Soluções desenhadas para o seu segmento.',
      titulo_destaque: 'segmento.',
      botao_texto: 'SAIBA MAIS',
      botao_link: '/segmentos',
      imagem_lateral: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
      segmentos: [
        { nome: 'Imobiliário & Construção Civil', link: '/servicos/mercado-imobiliario' },
        { nome: 'Saúde & Clínicas Médicas', link: '/servicos/saude-terceiro-setor' },
        { nome: 'Terceiro Setor & ONGs', link: '/servicos/saude-terceiro-setor' },
        { nome: 'Holdings Patrimoniais', link: '/servicos/holdings' },
        { nome: 'Serviços Especializados', link: '/segmentos' },
        { nome: 'Comércio & Varejo', link: '/segmentos' }
      ]
    }
  },
  {
    page_slug: 'home',
    section_key: 'depoimentos',
    content: {
      titulo: 'O que dizem nossos parceiros.',
      titulo_destaque: 'parceiros.'
    }
  },
  {
    page_slug: 'home',
    section_key: 'trust_bar',
    content: {
      itens: [
        { icone: 'ShieldCheck', texto: 'ISO 27001' },
        { icone: 'CheckCircle2', texto: '100% APROVADO MTE' },
        { icone: 'Scale', texto: 'RIGOR COMPLIANCE' },
        { icone: 'MapPin', texto: 'SEDE EM RJ' },
        { icone: 'Users', texto: 'ATEND. DIGITAL' }
      ]
    }
  },
  {
    page_slug: 'home',
    section_key: 'contato',
    content: {
      titulo: 'Fale com a Finance.',
      titulo_destaque: 'Finance.',
      subtitulo: 'Preencha o formulário e um especialista entrará em contato em até 2 horas.',
      localizacao: 'Av. Atlântica, 1788 - Cavaleiros, Macaé - RJ',
      telefone: '(22) 99245-8575',
      email: 'contato@financecontabil.com.br',
      horario: 'Segunda à Sexta: 08:00 às 18:00',
      imagem_fundo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
    }
  }
];

const testimonialsSeed = [
  { texto: 'A Finance Contabilidade foi fundamental para a estruturação do nosso grupo. Rigor técnico e proximidade são os grandes diferenciais.', autor: 'Jucemar Oliveira', cargo: 'CEO • Grupo Imobiliário', tema: 'white', ordem: 1 },
  { texto: 'O BPO Financeiro deles nos permitiu focar 100% no atendimento aos pacientes. Segurança que não tem preço.', autor: 'Dra. Dilma Alva', cargo: 'Diretora Clínica', tema: 'gold', ordem: 2 },
  { texto: 'Desde que começamos a consultoria estratégica, reduzimos nossa carga tributária de forma completamente legal e segura.', autor: 'Marcelo Cunha', cargo: 'Diretor Comercial', tema: 'white', ordem: 3 },
  { texto: 'Equipe sempre disponível e atualizada. A auditoria interna foi um divisor de águas para nossa governança corporativa.', autor: 'Fernanda Lima', cargo: 'CEO • Tech Solutions', tema: 'navy', ordem: 4 },
  { texto: 'Ter clareza dos números muda o jogo. A Finance nos deu visão de futuro com relatórios que realmente entendemos.', autor: 'Roberto Silva', cargo: 'Sócio Fundador', tema: 'white', ordem: 5 },
  { texto: 'O processo de abertura da nossa filial foi extremamente ágil. Profissionalismo evidente em cada etapa.', autor: 'Camila Barros', cargo: 'Gerente de Expansão', tema: 'gold', ordem: 6 }
];

async function upsertContent(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/cms_content`, {
    method: 'POST',
    headers: {
      ...headers,
      'Prefer': 'resolution=merge-duplicates,return=minimal'
    },
    body: JSON.stringify(data)
  });
  
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${res.status}: ${err}`);
  }
  return true;
}

async function insertTestimonials(data) {
  // Primeiro limpa
  await fetch(`${SUPABASE_URL}/rest/v1/cms_testimonials?id=neq.00000000-0000-0000-0000-000000000000`, {
    method: 'DELETE',
    headers
  });
  
  const res = await fetch(`${SUPABASE_URL}/rest/v1/cms_testimonials`, {
    method: 'POST',
    headers: {
      ...headers,
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify(data)
  });
  
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${res.status}: ${err}`);
  }
  return true;
}

async function main() {
  console.log('🚀 Iniciando seed do CMS...\n');

  // Testar conexão
  try {
    const test = await fetch(`${SUPABASE_URL}/rest/v1/cms_content?limit=1`, { headers });
    if (test.status === 200) {
      console.log('✅ Conexão com Supabase OK!');
    } else if (test.status === 404) {
      console.log('❌ Tabela cms_content não existe ainda. Por favor, crie as tabelas primeiro no SQL Editor do Supabase.');
      console.log('\nSQL para executar no dashboard:');
      console.log('https://supabase.com/dashboard/project/yedgxuvldvyyumdjreoo/sql/new');
      return;
    } else {
      const body = await test.text();
      console.log(`⚠️  Status: ${test.status}`, body);
      return;
    }
  } catch (e) {
    console.log('❌ Erro de conexão:', e.message);
    return;
  }

  // Seed HOME
  console.log('\n📄 Populando HOME...');
  for (const item of homeSeeds) {
    try {
      await upsertContent(item);
      console.log(`  ✅ home/${item.section_key}`);
    } catch (e) {
      console.log(`  ❌ home/${item.section_key}:`, e.message);
    }
  }

  // Seed Testimonials  
  console.log('\n💬 Populando depoimentos...');
  try {
    await insertTestimonials(testimonialsSeed);
    console.log(`  ✅ ${testimonialsSeed.length} depoimentos inseridos`);
  } catch (e) {
    console.log('  ❌ Depoimentos:', e.message);
  }

  console.log('\n🎉 Seed concluído!');
}

main().catch(console.error);
