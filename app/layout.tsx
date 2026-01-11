import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Levv AI — External Workforce Management",
  description:
    "Levv AI is an AI-native external workforce management platform for intake, approvals, suppliers, work orders, and pay — built for Procurement and Finance.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased bg-white text-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>


    </html>
  )
}
