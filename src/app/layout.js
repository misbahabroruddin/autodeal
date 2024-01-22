import { Inter, Quicksand } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ["latin"], variable: "--inter" })
const quickSand = Quicksand({ subsets: ["latin"], variable: "--quicksand" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quickSand.variable}`}>
        <Navbar />
        <main className="relative w-screen max-w-[1280px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
