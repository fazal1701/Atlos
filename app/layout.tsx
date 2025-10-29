import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Atlos Platform - Sports-Integrated Career Accelerator',
  description: 'Atlos Platform transforms student-athletes into career-ready professionals by teaching analytics, leadership, and business fundamentals through the sports they love.',
  keywords: ['atlos platform', 'sports analytics', 'student athletes', 'career development', 'sports education', 'athletic careers', 'sports technology'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
