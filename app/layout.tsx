import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './ThemeProvider'
import ThemedBody from './ThemedBody'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David Woods',
  description: 'David Woods',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <ThemedBody className={inter.className}>{children}</ThemedBody>
      </ThemeProvider>
    </html>
  )
}
