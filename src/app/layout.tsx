import AntdStyledComponentsRegistry from '@/utils/AntdStyledComponentsRegistry'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fusion Energy',
  description: 'Fusion Energy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdStyledComponentsRegistry>
          {children}
        </AntdStyledComponentsRegistry>
      </body>
    </html>
  )
}
