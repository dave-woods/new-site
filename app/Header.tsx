import Link from 'next/link'
import styles from './page.module.css'
import hStyles from './Header.module.css'
import ThemeToggle from './ThemeToggle'

export default function Header() {
    return (
        <header className={[hStyles.header].join(' ')}>
            <div>Dave</div>
            <div><Link href="/">Home</Link></div>
            <div><Link href="/thesis">Thesis</Link></div>
            <div><Link href="/default-cna">Defaults</Link></div>
            <div><Link href="/">Skills</Link></div>
            <div><ThemeToggle /></div>
        </header>
    )
}