import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

import gitHubIcon from "@/assets/github-icon.svg"
import Image from "next/image"

export default function SignInPage() {
  return (
    <form action="" className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input name="email" type="email" id="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input name="password" type="password" id="password" />

        <Link
          className="text-xs font-medium text-foreground hover:underline"
          href="/auth/forgot-password"
        >
          Forgot your password
        </Link>
      </div>

      <Button className="w-full " type="submit">
        Sign in with e-mail
      </Button>

      <Separator />

      <Button className="w-full " type="submit" variant="outline">
        <Image className="size-4 mr-2 dark:invert" src={gitHubIcon} alt="" />
        Sign in with GitHub
      </Button>
    </form>
  )
}