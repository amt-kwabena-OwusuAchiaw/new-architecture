import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Component Architecture Challenge',
  description: 'A welcom to Armalitect project',
}

export default function RootLayout({
  children,

}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
