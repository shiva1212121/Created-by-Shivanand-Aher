"use client"

import type React from "react"

import { useState, useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signIn, signUp } from "@/app/auth/actions"
import { Loader2 } from "lucide-react"
import { Github, ChromeIcon as Google } from "lucide-react"
import { signInWithOAuth } from "@/app/auth/actions"

export function AuthForm() {
  const [signInState, signInAction, isSignInPending] = useActionState(signIn, null)
  const [signUpState, signUpAction, isSignUpPending] = useActionState(signUp, null)
  const [activeTab, setActiveTab] = useState("email")
  const [otpSent, setOtpSent] = useState(false)

  const handleSignInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    signInAction(formData)
  }

  const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    signUpAction(formData)
  }

  const handlePhoneAuthSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (!otpSent) {
      // If OTP hasn't been sent, send OTP
      const phone = formData.get("phone") as string
      if (!phone) {
        // Handle error: phone number is required
        return
      }
      const result = await signIn(formData) // Call signIn to send OTP
      if (result?.success) {
        setOtpSent(true)
      } else {
        // Handle OTP send failure
        console.error("Failed to send OTP:", result?.message)
      }
    } else {
      // For OTP verification
      signInAction(formData)
    }
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="phone">Phone (OTP)</TabsTrigger>
      </TabsList>
      <TabsContent value="email">
        <form onSubmit={handleSignInSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={isSignInPending}>
            {isSignInPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              "Sign In with Email"
            )}
          </Button>
          {signInState?.message && <p className="text-sm text-red-500">{signInState.message}</p>}
        </form>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or</span>
          </div>
        </div>
        <form onSubmit={handleSignUpSubmit} className="space-y-4">
          <Button type="submit" variant="outline" className="w-full bg-transparent" disabled={isSignUpPending}>
            {isSignUpPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing Up...
              </>
            ) : (
              "Sign Up with Email"
            )}
          </Button>
          {signUpState?.message && <p className="text-sm text-green-500">{signUpState.message}</p>}
        </form>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="space-y-2">
          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => signInWithOAuth("google")}
            disabled={isSignInPending || isSignUpPending}
          >
            <Google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-transparent"
            onClick={() => signInWithOAuth("github")}
            disabled={isSignInPending || isSignUpPending}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </div>
      </TabsContent>
      <TabsContent value="phone">
        <form onSubmit={handlePhoneAuthSubmit} className="space-y-4">
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+1234567890" required />
          </div>
          {otpSent && (
            <div>
              <Label htmlFor="otp">OTP</Label>
              <Input id="otp" name="otp" type="text" placeholder="Enter OTP" required />
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isSignInPending}>
            {isSignInPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {otpSent ? "Verifying OTP..." : "Sending OTP..."}
              </>
            ) : otpSent ? (
              "Verify OTP"
            ) : (
              "Send OTP"
            )}
          </Button>
          {signInState?.message && <p className="text-sm text-red-500">{signInState.message}</p>}
        </form>
      </TabsContent>
    </Tabs>
  )
}
