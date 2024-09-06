import { createClient } from "npm:@supabase/supabase-js@2";

const supabaseUrl: string = Deno.env.get("URL")!;
const supabaseKey: string = Deno.env.get("KEY")!;

export const supabase = createClient(supabaseUrl, supabaseKey);
