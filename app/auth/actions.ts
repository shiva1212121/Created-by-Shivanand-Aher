"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import type { Provider } from "@supabase/supabase-js"

export async function signIn(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const phone = formData.get("phone") as string
  const otp = formData.get("otp") as string
  const supabase = createClient()

  if (email && password) {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { success: false, message: error.message }
    }
  } else if (phone && !otp) {
    // Send OTP
    const { error } = await supabase.auth.signInWithOtp({
      phone,
    })
    if (error) {
      return { success: false, message: error.message }
    }
    return { success: true, message: "OTP sent successfully!" }
  } else if (phone && otp) {
    // Verify OTP
    const { error } = await supabase.auth.verifyOtp({
      phone,
      token: otp,
      type: "sms",
    })
    if (error) {
      return { success: false, message: error.message }
    }
  } else {
    return { success: false, message: "Please provide email/password or phone number." }
  }

  redirect("/dashboard")
}

export async function signUp(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const supabase = createClient()

  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return { success: false, message: error.message }
  }

  return { success: true, message: "Sign up successful! Please check your email for verification." }
}

export async function signOut() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect("/")
}

export async function signInWithOAuth(provider: Provider) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/auth/callback`,
    },
  })

  if (error) {
    return { success: false, message: error.message }
  }

  // Supabase redirects the user to the OAuth provider, so no direct redirect here.
  // The redirectTo URL will handle the final redirect after authentication.
  return { success: true, message: "Redirecting to social login..." }
}
