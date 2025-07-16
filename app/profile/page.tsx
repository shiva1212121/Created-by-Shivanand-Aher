"use client"

import { useActionState } from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/client" // Use client-side Supabase for initial user fetch
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { updateProfile } from "@/app/auth/profile-actions"
import { useEffect, useState } from "react"
import type { User as SupabaseUser } from "@supabase/supabase-js"
import { Loader2 } from "lucide-react"

export default function ProfilePage() {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [initialFullName, setInitialFullName] = useState("")
  const [initialAvatarUrl, setInitialAvatarUrl] = useState("")
  const supabase = createClient()

  const [state, formAction, isPending] = useActionState(updateProfile, {
    success: false,
    message: "",
  })

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error || !user) {
        redirect("/") // Redirect if not authenticated
      }
      setUser(user)
      setInitialFullName(user.user_metadata?.full_name || "")
      setInitialAvatarUrl(user.user_metadata?.avatar_url || "")
    }
    getUser()
  }, [supabase])

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <p className="ml-2 text-gray-600">Loading profile...</p>
      </div>
    )
  }

  const getAvatarFallback = (user: SupabaseUser) => {
    if (user.user_metadata?.full_name) {
      return user.user_metadata.full_name[0].toUpperCase()
    }
    if (user.email) {
      return user.email[0].toUpperCase()
    }
    return "U"
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.user_metadata?.avatar_url || "/placeholder-avatar.jpg"} alt="User Avatar" />
              <AvatarFallback className="text-4xl font-semibold">{getAvatarFallback(user)}</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold">{user.user_metadata?.full_name || user.email || "Guest User"}</h2>
            {user.confirmed_at && <p className="text-sm text-green-600">Email Verified</p>}
          </div>

          <form action={formAction} className="grid gap-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" value={user.email || ""} disabled className="bg-gray-100" />
            </div>
            {user.phone && (
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={user.phone} disabled className="bg-gray-100" />
              </div>
            )}
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" type="text" defaultValue={initialFullName} />
            </div>
            <div>
              <Label htmlFor="avatarUrl">Avatar URL</Label>
              <Input
                id="avatarUrl"
                name="avatarUrl"
                type="url"
                defaultValue={initialAvatarUrl}
                placeholder="https://example.com/avatar.jpg"
              />
            </div>

            {state?.message && (
              <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
            )}

            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Updating...
                  </>
                ) : (
                  "Update Profile"
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
