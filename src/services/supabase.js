import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vdkgyppawdthgixyxaid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZka2d5cHBhd2R0aGdpeHl4YWlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMjA4NzAsImV4cCI6MjAxMDU5Njg3MH0.7eTgYSvEpdJOad48asGFOoUuZdGHiPOo0MUfG1SVDMI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
