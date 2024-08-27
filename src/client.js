import { createClient } from '@supabase/supabase-js';
const URL = 'https://omqrqnqjmllbbrpzsarq.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcXJxbnFqbWxsYmJycHpzYXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MTQzNTYsImV4cCI6MjA0MDE5MDM1Nn0._zK5xYWAikKC_W5dPvmp8Bfn1gF1rhK0nBEJlJc5gfg';
//const supabase = createClient(URL, API_KEY);
export const supabase = createClient(URL, API_KEY);
