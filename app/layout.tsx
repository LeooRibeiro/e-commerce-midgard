import "./globals.css"
import { Cinzel } from "next/font/google"
import { skranji } from "./fonts";
import Header from "./components/layouts/Header" 


const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel", // opcional se quiser usar como variável CSS
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="pt-BR" className={skranji.variable}>
      <body className={cinzel.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
