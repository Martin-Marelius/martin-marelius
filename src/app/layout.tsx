"use client";

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Martin Marelius Johnsen - Personal Portfolio',
  description: 'Personal portfolio showcasing my skills and projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-gray-900 to-black text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
