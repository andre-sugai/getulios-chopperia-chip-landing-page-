import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200', '400'],
  variable: '--font-manrope',
  display: 'swap',
})
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Getulios - Avalie Nossa Experi\u00eancia',
  description: 'Avalie sua experiência e ajude outros clientes a nos conhecer. Avalie, siga e acompanhe nosso wine bar.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/getulios.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/getulios.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d2d3d',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
