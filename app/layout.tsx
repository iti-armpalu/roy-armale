import type React from "react"
import type { Metadata } from "next"
import { Roboto_Mono, Poppins, Libre_Caslon_Text } from "next/font/google"
import "./globals.css"

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "400",
  display: "swap",
})

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  variable: "--font-libre-caslon-text",
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${poppins.variable} ${libreCaslonText.variable} antialiased`}>{children}</body>
    </html>
  )
}
