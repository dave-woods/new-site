import './globals.css'
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './ThemeProvider'
import ThemedBody from './ThemedBody'
import Header from './Header'

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
        <ThemedBody className={[inter.className, styles.body].join(' ')}><Header />{children}</ThemedBody>
      </ThemeProvider>
    </html>
  )
}
