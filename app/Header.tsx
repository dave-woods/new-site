import Link from 'next/link'
import styles from './page.module.css'

export default function Header() {
    return (
        <header className={styles.grid}>
            <div><Link href="/">Home</Link></div>
            <div><Link href="/thesis">Thesis</Link></div>
            <div><Link href="/default-cna">Defaults</Link></div>

        </header>
    )
}