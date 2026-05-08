import type { Metadata } from "next"
import { Source_Serif_4 } from "next/font/google"
import "./globals.css"
import { Header } from "@/UI/Header/Header"
import { Footer } from "@/UI/Footer/Footer"

const SourceSerif = Source_Serif_4({
   variable: "--font-source-serif",
   subsets: ["cyrillic", "latin"],
})

export const metadata: Metadata = {
   title: "U-Boats History",
   description: "Website About U-Boats History. Made By Adattoweb",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en" className={` ${SourceSerif.variable} h-full antialiased`}>
         <body className="min-h-full flex flex-col bg-linear-to-r from-[#06141C] to-[#06151D] overflow-hidden">
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
         </body>
      </html>
   )
}
