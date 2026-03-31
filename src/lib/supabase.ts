import { createClient } from '@supabase/supabase-js';

// Supabase project: finance-contabilidade-studio
const SUPABASE_URL = 'https://hytvbztvegzeexggmell.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5dHZienR2ZWd6ZWV4Z2dtZWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3MzU4NTYsImV4cCI6MjA5MDMxMTg1Nn0.z0viUTU_50Ws4N_2nDxYZEJsCDGh4Eq44Stbo--68TE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;

