import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { signOut } from "../auth/actions"

export default async function DashboardPage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">Welcome to your Dashboard, {data.user.email}!</h1>
      <p className="mb-8 text-lg text-gray-600">This is your personalized learning space.</p>
      <form action={signOut}>
        <Button type="submit" variant="destructive">
          Sign Out
        </Button>
      </form>
    </div>
  )
}
