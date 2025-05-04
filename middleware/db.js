const { createClient } = require('@supabase/supabase-js');

// Replace with your actual Supabase URL and Key
const supabase = createClient('https://your-supabase-url.supabase.co', 'your-supabase-anon-key');

module.exports = supabase;
