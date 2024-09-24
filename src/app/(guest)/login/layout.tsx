import { type Metadata } from "next"

import { CenterContents } from "@/components/utils/center-content"

export const metadata: Metadata = {
  title: "Login",
  description: "Login | WishmeaLuck"
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <CenterContents>{children}</CenterContents>
}
