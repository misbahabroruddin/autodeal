import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });
const quickSand = Quicksand({ subsets: ["latin"], variable: "--quicksand" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${quickSand.variable} flex w-screen justify-center`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
