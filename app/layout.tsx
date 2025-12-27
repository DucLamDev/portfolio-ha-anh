import type { Metadata } from 'next'
import './globals.css'
// import CrawlingSpider from '@/components/CrawlingSpider'

export const metadata: Metadata = {
  title: 'Ha Anh - Portfolio',
  description: 'Ha Anh Portfolio - Y2K Grunge Style',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
