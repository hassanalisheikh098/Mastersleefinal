import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jnubzvcfddgkudxrwrnx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpudWJ6dmNmZGRna3VkeHJ3cm54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0MTg4MTgsImV4cCI6MjA1NTk5NDgxOH0.HHurG7Z0XQ4i12edj9rBEJrXsYtzIwiGNi3pbHPRXCo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
