import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Ahmad Munir Malak - Full Stack Developer",
  description:
    "Computer Engineering student with 2+ years of backend experience in ASP.NET Core and C#, and growing frontend expertise in React and Next.js. Passionate about building scalable web applications and AI-powered solutions.",
  keywords: [
    "Ahmad Munir Malak",
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "ASP.NET Core",
    "React",
    "Next.js",
    "C#",
    "Computer Engineering",
    "Software Engineer",
  ],
  authors: [{ name: "Ahmad Munir Malak" }],
  creator: "Ahmad Munir Malak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    title: "Ahmad Munir Malak - Full Stack Developer",
    description: "Computer Engineering student specializing in backend and frontend development",
    siteName: "Ahmad Munir Malak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Munir Malak - Full Stack Developer",
    description: "Computer Engineering student specializing in backend and frontend development",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
