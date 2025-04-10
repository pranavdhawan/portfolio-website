import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from '@/components/theme-provider'
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })
import { Analytics } from "@vercel/analytics/react"


export const metadata: Metadata = {
  title: "Pranav's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={montserrat.className}>
          <ThemeProvider attribute="class" disableTransitionOnChange>
            <Nav />
            <div className="text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28">
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  )
}
