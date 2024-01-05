import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: '600',
  subsets: ['latin'],
})

import './globals.css'

export const metadata: Metadata = {
  title: 'lapaii',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
