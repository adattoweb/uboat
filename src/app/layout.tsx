import type { Metadata } from "next"
import { Libre_Caslon_Text } from "next/font/google"
import "./globals.css"
import { Header } from "@/UI/Header/Header"

const LibreCaslon = Libre_Caslon_Text({
   variable: "--font-libre-caslon",
   subsets: ["latin"],
   weight: ["400", "700"],
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
      <html lang="en" className={` ${LibreCaslon.variable} h-full antialiased`}>
         <body className="min-h-full flex flex-col bg-linear-to-r from-[#06141C] to-[#06151D]">
            <Header />
            <main>{children}</main>
         </body>
      </html>
   )
}
