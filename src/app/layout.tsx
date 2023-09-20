import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Modal from "@/components/Modal"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Communist AI Love',
  description: 'mpetry',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="absolute top-0 left-0 h-96 w-full bg-gradient-to-br from-pink-400 via-slate-[#0055D1] to-[#ff0000] rounded-b-md -z-50 opacity-50 blur-xl" />
        {children}
        <Modal />
      </body>
    </html>
  )
}
