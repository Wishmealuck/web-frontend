import { Header } from "@/components/header"

export default function SecuredLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header type='user' />
      {children}
    </>
  )
}
