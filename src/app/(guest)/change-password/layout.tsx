import { type Metadata } from "next"

import { CenterContents } from "@/components/utils/center-content"

export const metadata: Metadata = {
  title: "Change Password",
  description: "Change Password | WishmeaLuck"
}

export default function ChangePasswordLayout({ children }: { children: React.ReactNode }) {
  return <CenterContents>{children}</CenterContents>
}
