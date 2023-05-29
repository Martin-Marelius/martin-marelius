"use client";

import './globals.css'
import { Inter } from 'next/font/google'
import { TerminalContextProvider } from "react-terminal";
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Martin Marelius Johnsen',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
        </body>
    </html>
  )
}
