import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConvexClientProvider from '@/Providers/ConvexClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GreenPulse',
  description: 'GreenPulse, an app made to look for environment safety',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
{/*         <ConvexClientProvider> */}
          {children}
{/*         </ConvexClientProvider> */}
      </body>
    </html>
  )
}
