import Link from 'next/link'
import styles from './page.module.css'
import hStyles from './Header.module.css'
import ThemeToggle from './ThemeToggle'

export default function Header() {
    return (
        <header className={[styles.grid, hStyles.header].join(' ')}>
            <div><Link href="/">Home</Link></div>
            <div><Link href="/thesis">Thesis</Link></div>
            <div><Link href="/default-cna">Defaults</Link></div>
            <div><ThemeToggle /></div>
        </header>
    )
}