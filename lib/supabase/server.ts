import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

export function createClient() {
  const cookieStore = cookies()

  // IMPORTANT: For v0 preview, if environment variables are not set,
  // these placeholders allow the app to run without crashing.
  // In a real deployment, ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
  // are properly configured in your Vercel project environment variables.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project-ref.supabase.co" // Placeholder
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_ANON_KEY_HERE" // Placeholder

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (error) {
          // This error is expected if you're trying to set a cookie from a Client Component
          // that would render a Server Component with that cookie.
          // In a real application, ensure cookie setting happens in Server Components or Server Actions.
          console.warn("Could not set cookie from server client:", error)
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: "", ...options })
        } catch (error) {
          // Similar to set, this error is expected in certain client-side contexts.
          console.warn("Could not remove cookie from server client:", error)
        }
      },
    },
  })
}
