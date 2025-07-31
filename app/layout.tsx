import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "The Typed Media",
  description:
    "Premium web design agency crafting luxury websites for brands that want to stand out. Delivered in 1-3 days. Serving clients in USA, UK, UAE, Canada, France.",
  keywords: "luxury web design, premium websites, web development agency, fast delivery, responsive design",
  authors: [{ name: "The Typed Media" }],
  creator: "The Typed Media",
  publisher: "The Typed Media",
  openGraph: {
    title: "The Typed Media",
    description:
      "Premium web design agency crafting luxury websites for brands that want to stand out. Delivered in 1-3 days.",
    url: "https://thetypedmedia.com",
    siteName: "The Typed Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Typed Media",
    description:
      "Premium web design agency crafting luxury websites for brands that want to stand out. Delivered in 1-3 days.",
  },
  icons: {
    icon: "/placeholder.svg?height=32&width=32&text=TM&bg=000000&color=eab308",
    shortcut: "/placeholder.svg?height=32&width=32&text=TM&bg=000000&color=eab308",
    apple: "/placeholder.svg?height=180&width=180&text=TM&bg=000000&color=eab308",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style> */}
      </head>
      <body>{children}</body>
    </html>
  )
}
