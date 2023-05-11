import './globals.css'
import styles from './layout.module.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './ThemeProvider'
import ThemedBody from './ThemedBody'
import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })
const navLinks = [
  {slug: '/', text: 'Home'},
  {slug: '/thesis', text: 'Thesis'},
  {slug: '/skills', text: 'Skills'},
  {slug: '/default-cna', text: 'Defaults'},
]

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
        <ThemedBody className={[inter.className, styles.body].join(' ')}><NavBar navLinks={navLinks}/>{children}</ThemedBody>
      </ThemeProvider>
    </html>
  )
}
