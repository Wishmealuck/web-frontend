import { type Metadata } from "next"

import { CenterContents } from "@/components/utils/center-content"

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Forgot Password | WishmeaLuck"
}

export default function ForgotPassLayout({ children }: { children: React.ReactNode }) {
  return <CenterContents>{children}</CenterContents>
}
