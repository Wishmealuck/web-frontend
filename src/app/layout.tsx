import "../styles/globals.css"
import "../styles/globals.scss"

import React from "react"

import type { Metadata, Viewport } from "next"

import config from "_config"

import RootProvider from "@/providers/root"

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: "favicon.svg",
  manifest: "app.webmanifest"
}

export const viewport: Viewport = {
  themeColor: "#000"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <link
          href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap'
          rel='stylesheet'
        />

        <RootProvider>
          {/* <Navbar /> */}
          <main className='flex h-full w-full flex-col bg-[#f9f9f9]'>{children}</main>
          {/* <Footer /> */}
        </RootProvider>
      </body>
    </html>
  )
}
