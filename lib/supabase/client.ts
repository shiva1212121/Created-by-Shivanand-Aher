import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  // IMPORTANT: For v0 preview, if environment variables are not set,
  // these placeholders allow the app to run without crashing.
  // In a real deployment, ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
  // are properly configured in your Vercel project environment variables.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project-ref.supabase.co" // Placeholder
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_ANON_KEY_HERE" // Placeholder

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
