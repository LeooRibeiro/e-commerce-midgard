import "./globals.css"
import { skranji } from "./fonts";
import Header from "./components/layouts/Header" 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="pt-BR" className={skranji.variable}>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
