import { type Metadata } from "next"

import { CenterContents } from "@/components/utils/center-content"

export const metadata: Metadata = {
  title: "Register",
  description: "Register | WishmeaLuck"
}

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <CenterContents>{children}</CenterContents>
}
