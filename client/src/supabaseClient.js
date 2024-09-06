// deno-lint-ignore-file

import { createClient } from "@supabase/supabase-js";

// deno-lint-ignore no-node-globals
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
