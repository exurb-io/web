import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Exurb - Network Monitoring Platform',
  description: 'Real-time network monitoring and endpoint health checks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-void text-white font-mono">{children}</body>
    </html>
  )
}
