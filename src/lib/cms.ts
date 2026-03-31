import { supabase } from './supabase';

// ─── Types ────────────────────────────────────────────────────────────────────

export type CmsSection = Record<string, unknown>;

export interface CmsTestimonial {
  id: string;
  texto: string;
  autor: string;
  cargo: string;
  tema: 'white' | 'gold' | 'navy';
  ordem: number;
  ativo: boolean;
}

export interface CmsSegment {
  id: string;
  nome: string;
  link: string;
  ordem: number;
  ativo: boolean;
}

// ─── Read Functions ───────────────────────────────────────────────────────────

/**
 * Busca o conteúdo de uma seção específica de uma página
 */
export async function getSection<T = CmsSection>(
  pageSlug: string,
  sectionKey: string
): Promise<T | null> {
  const { data, error } = await supabase
    .from('cms_content')
    .select('content')
    .eq('page_slug', pageSlug)
    .eq('section_key', sectionKey)
    .single();

  if (error || !data) return null;
  return data.content as T;
}

/**
 * Busca todas as seções de uma página de uma vez
 */
export async function getPageContent(pageSlug: string): Promise<Record<string, CmsSection>> {
  const { data, error } = await supabase
    .from('cms_content')
    .select('section_key, content')
    .eq('page_slug', pageSlug);

  if (error || !data) return {};

  return data.reduce((acc, row) => {
    acc[row.section_key] = row.content;
    return acc;
  }, {} as Record<string, CmsSection>);
}

/**
 * Busca todos os depoimentos ativos ordenados
 */
export async function getTestimonials(): Promise<CmsTestimonial[]> {
  const { data, error } = await supabase
    .from('cms_testimonials')
    .select('*')
    .eq('ativo', true)
    .order('ordem');

  if (error || !data) return [];
  return data as CmsTestimonial[];
}

/**
 * Busca todos os segmentos ativos ordenados
 */
export async function getSegments(): Promise<CmsSegment[]> {
  const { data, error } = await supabase
    .from('cms_segments')
    .select('*')
    .eq('ativo', true)
    .order('ordem');

  if (error || !data) return [];
  return data as CmsSegment[];
}

// ─── Write Functions ──────────────────────────────────────────────────────────

/**
 * Salva (upsert) o conteúdo de uma seção
 */
export async function updateSection(
  pageSlug: string,
  sectionKey: string,
  content: CmsSection
): Promise<boolean> {
  const { error } = await supabase
    .from('cms_content')
    .upsert(
      { page_slug: pageSlug, section_key: sectionKey, content },
      { onConflict: 'page_slug,section_key' }
    );

  return !error;
}

/**
 * Salva um depoimento (insert ou update)
 */
export async function upsertTestimonial(
  testimonial: Partial<CmsTestimonial> & { id?: string }
): Promise<boolean> {
  const { error } = await supabase
    .from('cms_testimonials')
    .upsert(testimonial);

  return !error;
}

/**
 * Remove um depoimento
 */
export async function deleteTestimonial(id: string): Promise<boolean> {
  const { error } = await supabase
    .from('cms_testimonials')
    .delete()
    .eq('id', id);

  return !error;
}
