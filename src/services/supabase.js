import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tpogigsjlcctirmyiykq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwb2dpZ3NqbGNjdGlybXlpeWtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MDY0MjQsImV4cCI6MjA3MDE4MjQyNH0.Y5mvCgC61fycMGt1e-PMUtl1uFb82Qg2kfF5RXB6AMc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);