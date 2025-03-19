import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.SUPABASE_URI;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_K;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
