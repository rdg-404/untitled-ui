import { Sidebar } from '@/components/Sidebar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UI | TailwindCSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app dark:bg-zinc-950 dark:text-slate-100">
          <Sidebar />
          <main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-4 lg:pt-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
