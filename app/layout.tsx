import { Analytics } from '@vercel/analytics/next'
import { Noto_Sans_Arabic } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '../components/theme-provider'
import './globals.css'

const arabicFont = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic' })

export const metadata: Metadata = {
  title: 'Mostafa Tolba — Cybersecurity Engineer',
  description: 'Portfolio of Mostafa Tolba, a cybersecurity and cloud security engineer.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f7f5',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className="bg-background" suppressHydrationWarning>
      <head>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const storedTheme = localStorage.getItem('portfolio-theme')
                const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark'
                const root = document.documentElement
                root.dataset.theme = theme
                root.style.colorScheme = theme
                if (!storedTheme) {
                  localStorage.setItem('portfolio-theme', 'dark')
                }
              } catch (error) {
                document.documentElement.dataset.theme = 'dark'
                document.documentElement.style.colorScheme = 'dark'
              }
            })();
          `}
        </Script>
      </head>
      <body className={`${arabicFont.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
