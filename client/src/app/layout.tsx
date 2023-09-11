import './globals.css'
import type { Metadata } from 'next'
import { Koulen, Inter } from 'next/font/google'

import StudioHeader from '@comp/Header/Header'
import StudioFooter from '@comp/Footer/Footer'

const koulen = Koulen({
  subsets: ['latin'],
  weight: ['400']
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="my">
      <body className={`${inter.className}`}>
        <StudioHeader />
        {children}
        <StudioFooter />
      </body>
    </html>
  )
}
