import { useState, useEffect } from 'react';
import { getSection, getPageContent, getTestimonials, type CmsSection, type CmsTestimonial } from '../lib/cms';

/**
 * Hook para carregar uma seção específica do CMS
 * Retorna o conteúdo do Supabase, fazendo fallback para os defaults fornecidos
 */
export function useCmsSection<T extends CmsSection>(
  pageSlug: string,
  sectionKey: string,
  defaultValue: T
): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getSection<T>(pageSlug, sectionKey).then((result) => {
      if (!cancelled && result) {
        setData({ ...defaultValue, ...result });
      }
      if (!cancelled) setLoading(false);
    });

    return () => { cancelled = true; };
  }, [pageSlug, sectionKey]);

  return { data, loading };
}

/**
 * Hook para carregar todas as seções de uma página de uma vez (mais eficiente)
 */
export function usePageContent(
  pageSlug: string,
  defaults: Record<string, CmsSection>
): { data: Record<string, CmsSection>; loading: boolean } {
  const [data, setData] = useState<Record<string, CmsSection>>(defaults);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getPageContent(pageSlug).then((result) => {
      if (!cancelled) {
        // Merge: defaults + dados do Supabase (Supabase tem prioridade)
        const merged = { ...defaults };
        for (const key of Object.keys(result)) {
          merged[key] = { ...defaults[key], ...result[key] };
        }
        setData(merged);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, [pageSlug]);

  return { data, loading };
}

/**
 * Hook para carregar depoimentos
 */
export function useCmsTestimonials(
  defaultTestimonials: CmsTestimonial[]
): { data: CmsTestimonial[]; loading: boolean } {
  const [data, setData] = useState<CmsTestimonial[]>(defaultTestimonials);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getTestimonials().then((result) => {
      if (!cancelled) {
        if (result.length > 0) setData(result);
        setLoading(false);
      }
    });

    return () => { cancelled = true; };
  }, []);

  return { data, loading };
}
